---
slug: /programming-language-theory/parsing
id: parsing
title: Parsing
description: Parsing
---

**Main Source :**

- **Book chapter 2**

The parser takes sequence of tokens produced in the [previous step](/programming-language-theory/syntax#scanning). The objective of parser is to analyze whether source code (now in tokens) is correct syntactically. Parser does this by finding if it is possible to create a parse tree with given the input and the language grammar.

![Grammar example](./grammar-example.png)  
 Source : Book page 62

This is a grammar for a programming language to create a list (or array). Typically, a list is created by including the elements and then separating each of them with a comma, along with a semicolon if the language requires it.

The grammar starts from `id_list`, it needs to be replaced with some identifier `id`, and a non-terminal `id_list_tail`. `id_list_tail` is used if we want to include extra element for the list. To do that, we replace it with a `, id id_list_tail`. If we want to end the list, we can replace the `id_list_tail` with a semicolon.

For example, starting from `id_list` :

1. `id_list` → `A id_list_tail` (by `id_list -> id id_list_tail`)
2. `A id_list_tail` → `A, B id_list_tail` (by `id_list_tail -> , id id_list_tail`)
3. `A, B id_list_tail` → `A, B;` (by `id_list_tail -> ;`)

We used two identifiers, `A` and `B`, resulting in the final list `A, B;`. The identifier is the tokens received from user.

The technique we just used to derive `A, B;` is called **top-down parsing**.

### Top-down Parsing

The top-down parsing generates parse tree starting from the language grammar. In the list example, we started from `id_list`, then see how can we replace it according to the production rule of the grammar. Remember, for a string to be valid in the language, all non-terminals must be replaced by terminals according to the grammar production rules.

It turns out that `id_list` can only be replaced with `id id_list_tail`. So, we will replace `id_list` with `id id_list_tail`. This production rule asks for an identifier. The identifier will be taken from the input tokens.

The next step, we see that there are two choices to replace `id_list_tail`. The first choice replaces it with another `id id_list_tail`. This will only be chosen if there's still token available. If not, then we should replace it to semicolon, ending the parse tree generation.

![Top-down parsing](./top-down-parsing.png)  
Source : Book page 63

This image illustrates the parse tree generation of input `A, B, C;`. Starting from the `id_list`, it is replaced with an identifier and `id_list_tail`. The `A`, being the first token in the stream will be the assigned as the identifier. Then, we see there is a comma and `B`, so `id_list_tail` must not end yet. This is continued until we see there are no identifiers, only a semicolon.

The top-down approach generates a parse tree by predicting which particular non-terminal will be replaced next. It does this by examining the available tokens in the token stream. If the prediction made by the top-down parser is incorrect—perhaps the production rule does not match the current input token—then the parser may raise a **syntax error**.

### Bottom-up Parsing 1

In contrast, bottom-up parser starts from the input instead of the grammar.

![Bottom-up parsing](./bottom-up-parsing.png)  
Source : Book page 63

It realizes that `A` is an identifier, then it encounters a comma, then another identifier `B`, and so on. This continues until the point it encounters a semicolon, where the only possible production rule is from `id_list_tail`. So, it began replacing the semicolon to `id_list_tail` from that point.

Afterwards, there are `C` and a comma on the previously encountered tokens. The possible production rule for this is the rule of `id_list_tail -> , id id_list_tail`, where `C` is the identifier here. So, it continues making the tree from bottom to up. The generation ends until the parser doesn't encounter comma anymore, when the only possible production rule is `id_list -> id id_list_tail`.

The bottom-up parsing is also known as **shift-reduce parser**. It consists of two main actions, shifting and reducing.

- In shifting, the parser reads the next input token and shifts it onto the parsing stack. The parser maintains a [stack](/data-structures-and-algorithms/stack) to keep track of the symbols it has seen and their corresponding states.
- When a specific pattern of symbols on the top of the parsing stack matches the right-hand side of a production rule, the parser reduces (replaces) those symbols with the corresponding non-terminal symbol on the left-hand side of the production rule.

#### Choice

Depending on the grammar, top-down or bottom-up parsing may or may not be efficient. In a large program of this list grammar, bottom-up parsing can take up many spaces. This is because it needs to expand keep track tokens until semicolon is reached.

![Changed grammar](./changed-grammar.png)  
Source : Book page 64

This grammar allows for bottom-up parser to reduce the space of stack if needed. It doesn't need to encounter a semicolon in order to reduce them, we may choose to reduce it in the middle of parsing. However, this grammar can't be parsed top-down, because we can't really predict whether to replace `id_list_prefix` with the first rule or the second one.

![Improved bottom-up parsing](./improved-bottom-up.png)  
Source : Book page 65

### Type of Parser

There are many types of parser. One way to categorize them is based on where it starts to derive.

- **LL (Left-to-right, Leftmost derivation)** : LL parsers are typically class of top-down parsers. It reads the input from left-to-right and derive starting from the leftmost non-terminals.
- **LR (Left-to-right, Rightmost derivation)** : Similar to LL, it reads the input from left-to-right, but instead derives the rightmost non-terminal, resulting in the construction of the parse tree bottom-up.

Some parser uses something called **lookahead token**. It is an information about the next token or input symbol in the input stream used for parser to make better parsing decisions.

The number of lookahead token is denoted with number and parenthesis after the parser type. For example, LL(0), LL(1), LL(k) refers to LL parser with 0, 1, and k many lookahead tokens. As the value of lookahead token increases, the complexity of the parsing algorithm also increases exponentially. Even the single lookahead token in LR(1) makes it significantly larger than LR(0). The additional lookahead token introduces more possibilities for state transitions in the parsing automaton. For each state in the LR(1) parser, the parser needs to consider all possible lookahead tokens and create distinct states based on their combinations.

### More Detail

#### Recursive Descent Parser

Recursive descent is the implementation of top-down parsing technique that works by recursively applying production rules of a grammar to parse an input string. Recursive descent parsers can be handwritten for a relatively simple language.

This technique works by associating each non-terminal in the grammar with a function that handles them individually based on every possible production rule.

![Calculator grammar](./calculator-grammar.png)  
Source : Book page 66

:::note
"$$" is an end symbol.
:::

This is LL(1) grammar for a calculator language, below are the pseudocode for each of the function.

![Calculator pseudocode](./calculator-pseudocode.png)  
Source : Book page 67, 68

And the input program as well as its top-down parse tree. The $\epsilon$ denotes an empty string.

![Calculator program and parse tree](./calculator-example.png)  
Source : Book page 66, 69

Similar to the [list example in top-down parsing](#top-down-parsing), it predicts which production rule used to replace certain non-terminal based on the input stream. At the first, it chose to replace `stmt_list` with `stmt stmt_list` rather than empty string because there are available input. Then, `stmt` is replaced with `read id`, because it encounters `read` and an id `A`.

After parse tree is constructed, the parser will save it for the next compilation step. The parse tree can be represented as node-link data structure such as [graph](/data-structures-and-algorithms/graph), [linked list](/data-structures-and-algorithms/linked-list), or [tree](/data-structures-and-algorithms/tree).

:::info
Sometimes parser doesn't create full parse tree explicitly, it may create an abstract syntax tree, which is the simpler version of parse tree that omits certain nodes and details that are not relevant to the syntax analysis.
:::

#### Table-Driven Top-Down Parsing

Table-driven top-down parsing uses a **parsing table** to guide the parsing process. It is a top-down parsing approach where the parser predicts the next production rule to apply based on the current input symbol and the top of the parsing stack.

The parser maintains a stack to keep track of the non-terminals and terminals encountered so far. The stack initially contains the start symbol of the grammar. The parser reads the input symbols one by one and uses the parsing table to guide its actions.

The parser will generate three sets that provide information about the grammar. These will be used for prediction and error recovery. The three sets are :

- **First** : First set of a non-terminal contains the possible first (starting) symbols that can appear when we use a particular non-terminal in a production rule.
- **Follow** : Follow set of a non-terminal contains the possible terminals that can appear immediately after occurrences of that non-terminal in the grammar.
- **Predict** : Union or combination of first and follow set.

![First, follow, and predict set of calculator language](./first-follow-predict.png)  
Source : Book page 75

For example, the first, follow, and predict set of the previous calculator language is above.

- The first set of `stmt`, typically denoted as `FIRST(stmt)` contains `id`, `read`, and `write`. This is because they are the first symbol that appears in every production rule of `stmt`.
- The follow set of `stmt`, `FOLLOW(stmt)` contains `id`, `read`, `write`, and `$$`. This is because `id`, `read`, `write` appear first, and they are also terminals. When there are no terminals in the production rule, `$$` or end marker is included in the set.

Afterwards, parsing table will be constructed. Typically, it is represented as a two-dimensional table (or data structure) with rows corresponding to non-terminals and columns corresponding to terminals.

![Parse table](./parse-table.png)  
Source : Book page 72

Parsing table help to decide parser what action to takes depending on the non-terminal on the top of stack and the current input symbol. Each entry in the table specifies the production rule in the predict sets the to be applied.

The action can be one of the following:

- **Predict** : If the table entry specifies the number of production rule, the parser applies the rule by replacing the non-terminal on top of the stack with the right-hand side of the production rule. For example, if `program` is on top of the non-terminal stack, and current input token is `id`, then the rule `program → stmt_list $$ {id, read, write, $$}` is applied (for constructing the parse tree).
- **Error** : If the table entry is empty or undefined, the parser detects an error and takes appropriate error recovery actions, such as error reporting or error synchronization. We don't say the parser simply halts and returns an error to the user, because it is possible that the parser catches more errors that need to be reported as well.

:::tip
The parser that uses parsing table and top-down parsing is an LL(1) parser.
:::

#### Bottom-up Parsing 2

Bottom-up parser adds tokens to the stack until it recognizes a production rule, and then constructs the tree. The parser incrementally constructs the tree and joins them together.

![Review of bottom-up parsing](./bottom-up-parsing-review.png)  
Source : Book page 81

Mostly, bottom-up parser uses a parsing table for parsing. Below are the modified calculator grammar for LR(1) parser, as well as the input program.

![Calculator grammar for LR(1)](./calculator-grammar-lr-1.png)  
Source : Book page 82

If top-down parsing creates a table and consults it to decide what to do based on the non-terminal on top of the stack and input token, a bottom-up parser instead consults the table based on the current input token and a **parser state**. The parser state is actually determined by the configuration of the stack.

There are two actions : **shift and reduce**. Shift places current input token on the stack, while reduce applies a production rule by popping the corresponding number of symbols from the stack and replacing them with the non-terminal symbol on the left-hand side of the rule. After shifting or reducing happens, the state may also be updated accordingly.

This process continues until the entire input sentence is recognized, that is when "accept" action is encountered on the table. Error that indicates a parsing error or a syntactical mistake in the input string may also occur.

##### LR Parsing Table

The steps to make parsing table is below. We will make the table from the given grammar above and a concrete example.

![Visualization part 1](./visualization-part-1.png)  
Source : Book page 83

The parsing process starts from an empty stack, we will start from the `program`. The `program` rule is `program → stmt_list $$`. We typically denote the position of the stack with a dot `.` on the right-hand side of the production rule. We call anything that is indicated with dot, or currently being processed as **LR item**.

Currently, we only have a single LR item in our **list**. If we encounter a non-terminal in the right-hand side of the production rule, we will add that rule to the list, as well as "dotting" them. We will keep adding LR item to the list until a terminal is encountered.

In the example, we encountered the non-terminal `stmt_list` from the `program`. The `stmt_list` has two rules that replaces to `stmt_list stmt` or `stmt`. So, we will at both of the rule to the list. Our list now :

![Visualization part 2](./visualization-part-2.png)  
Source : Book page 83

Then, the `stmt_list` has another non-terminal `stmt`, it can be replaced to `id := expr`, `read id`, and `write expr`. Once again, add that to our list.

![Visualization part 3](./visualization-part-3.png)  
Source : Book page 83, 84

Now that we don't encounter non-terminal anymore, we can stop adding item to the list. There are three rule that starts with terminals from the `stmt`. Based on the program on [top](#bottom-up-parsing-2), we encountered `read`.

When we encounter a terminal, we have to shift a symbol and similarly, move the dot. Now that we encountered `read`, we will shift this to the stack. By the way, when we move the dot or shift a symbol, this will change the parser state.

With the `stmt → read id` production rule, there must be `id`. Turns out the identifier is `A` on the input program. So, shift it again to the stack and move the dot.

![Visualization part 4](./visualization-part-4.png)  
Source : Book page 84

When dot reaches the end of the production rule, this indicates that the entire right-hand side of the production rule has been successfully matched, thus we have to reduce it. This will involve popping the two symbol (`read` and `id`), and then replacing them with the left-hand side symbol `stmt`.

Since we have reduced the `stmt`, we need to advance the dot on `stmt_list`.

![Visualization part 5](./visualization-part-5.png)  
Source : Book page 84

We are at the end again, so we will pop the left part of the dot (`stmt`), and replace it by pushing the left-hand side of the rule, `stmt_list`.

![Visualization part 6](./visualization-part-6.png)  
Source : Book page 84

All of this will change the state of `program` earlier, the dot is now after the `stmt_list`. Since it's not at the end yet, we will shift another token from the input (the next is `read B`). This will be repeated until we have reached the end of the input.

Notice that sometimes we will encounter the similar state. In other word, if we encounter `read` again, we will be at the place where the dot in `stmt → read id` goes from the start to the end again. Then, we will reduce again similar to the previous state.

The state behavioral of bottom-up parsing makes it depict a finite automaton, it's called **Characteristics Finite State Machine (CSFM)**. This is same for any LR parser, such as SLR and LALR.

![CSFM of LR parser](./cfsm.png)  
Source : Book page 89

For each different state encountered (i.e., the position of the dot on the stack), we can assign them numbers.

![Visualization part 7](./visualization-part-7.png)  
Source : Book page 83

For example, when all the dot position are like above, it is considered as state 0. We can then map all the state transition into a table :

![Bottom-up parsing table](./bottom-up-table.png)  
Source : Book page 89

##### Bottom-up Algorithm

With the constructed table, we can now look at it every time we parse a program. The general process of bottom-up parsing of LR parser :

1. The parser starts with an empty stack and the input sentence to be parsed. The initial state of the parser, usually denoted as state 0, is pushed onto the stack.
2. The parser reads the next input symbol/token from the input sentence. Based on the current state of the parser and the input symbol, the parser consults the parsing table. If the parsing table entry indicates a "shift" action, the input symbol is pushed onto the stack, and the parser transitions to the state indicated in the entry. The process of shifting continues as long as there are input symbols remaining.
3. When the parser encounters a point where a reduction is possible, it checks the parsing table entry for the current state and input symbol. If the parsing table entry indicates a "reduce" action, the parser applies the corresponding production rule. The parser pops the symbols on the right-hand side of the production rule from the stack and replaces them with the non-terminal symbol on the left-hand side of the rule. After the reduction, the parser consults the parsing table again, using the non-terminal symbol on top of the stack and the current state to determine the next action.
4. If, after applying a reduction, the parsing table entry indicates an "accept" action, the parsing process is complete.

##### Conflict

When consulting the table, two conflict situations may happen. In the visualization of automaton, conflict occur when there are two transition arrows, making the automaton nondeterministic.

1. **Shift-Reduce conflict** : It is when a cell in the table has both shift and reduce action. The parser could either shift the current input symbol onto the stack or reduce a portion of the stack using a production rule. We can resolve this conflict by modifying the table based on some precedence or associativity rule defined for the conflicting grammar symbols.
2. **Reduce-Reduce conflict** : This is when multiple reduce are encountered on the table cell. It is when there are multiple production rule to be applied for the same non-terminal at a particular point of the parsing process. This will occur when the grammar is ambiguous. So, one way to resolve this conflict is by applying a grammar modification to eliminate the ambiguity.

##### Types of LR

After seeing the bottom-up parsing implementation, we can now cover several types of LR parsers :

- **LR (Canonical LR)** : LR itself is the most powerful variant of LR parsing. It uses the full LR(1) items, which include lookahead symbols, and constructs a parsing table with the most states compared to SLR and LALR. LR parsing can handle a wide range of grammars, including those that SLR and LALR cannot handle. However, constructing LR parsing tables can be more complex and time-consuming compared to SLR and LALR. LR(1) grammars are the class of grammars suitable for LR parsing.
- **SLR (Simple LR)** : SLR parsing is a simple and less powerful variant of LR parsing. It uses a simplified version of LR(0) items and constructs a parsing table with a smaller number of states compared to other variants. SLR parsing tables are relatively easy to construct but may suffer from conflicts, such as shift-reduce or reduce-reduce conflicts, in certain situations. SLR parsing is suitable for a subset of grammars called SLR(1) grammars.
- **LALR (Look-Ahead LR)** : LALR parsing is a more powerful variant that addresses the limitations of SLR parsing. It uses a more compact representation of item sets by merging similar sets while preserving the same parsing power. LALR parsing tables are larger than SLR tables but smaller than LR(1) tables. LALR parsing can handle a larger class of grammars than SLR parsing, and it resolves many of the conflicts that arise in SLR parsing. LALR(1) grammars are the class of grammars suitable for LALR parsing.
