---
slug: /theory-of-computation-and-automata/context-free-grammar
id: context-free-grammar
title: Context-Free Grammar
description: Context-Free Grammar
---

**Main Source :**

- **Book chapter 2.1, 2.2, 2.3**
- **Neso Academy playlist 65**
- **Neso Academy playlist 73-75**

Context-free grammar is the grammar that generates context-free language, which is recognized by [pushdown automata](/theory-of-computation-and-automata/pda-and-cfg). The production rule is :

$A \rightarrow \alpha$, where $\alpha = \{V \cup \Sigma^*\}$ and $A \in V$.

Similar to the [general](/theory-of-computation-and-automata/formal-grammar#grammar) and [regular grammar](/theory-of-computation-and-automata/formal-grammar#regular-grammar), a non-terminal symbol can produce $\alpha$ which can be any symbol from the set of all possible strings of symbols that can be generated using both the non-terminal symbols and the terminal symbols of the grammar, including the empty string.

:::info
From different sources, $T$ is sometimes used as $\Sigma$. This implies that ($\{V \cup \Sigma^*\}$ is equivalent with $\{V \cup T\}$).
:::

The difference between regular grammar and context-free grammar lies in the production rules. Regular grammar is more restrictive, as the production rule must place non-terminal symbols either on the right or left side (i.e., non-terminals cannot be placed in the middle of the string). In contrast, context-free grammar allows the placement of non-terminals anywhere.

For example, the grammar $G = \{(S, A), (a, b), (S \rightarrow aAb, A \rightarrow aAb| \epsilon)\}$ is considered as a context-free grammar.

We can generate : $S \rightarrow aAb$  
$\rightarrow aaAbb$ (by $A \rightarrow aAb$)  
$\rightarrow aaaAbbb$ (by $A \rightarrow aAb$)  
$\rightarrow aaabbb$ (by $A \rightarrow \epsilon$)

The language of this grammar will be in the form of $a^n b^n$.

### Derivation Trees

Also known as **parse tree**, it is an ordered rooted tree that graphically represent the derivation process of a context-free grammar. The five properties of derivation tree :

1. The root of a derivation tree is $S$.
2. Every leaf node is a terminal symbol $T \cup \{\lambda\}$.
3. Every vertex node is a non-terminal symbol in $V$.
4. When a vertex $A \in V$ has a set of children labeled from $a_1, a_2, ..., a_n$, then vertex $A$ will have production rule in the form of $A \rightarrow a_1, a_2, ..., a_n$.
5. A leaf labeled with $\lambda$ has no siblings, that is, a vertex with a child labeled $\lambda$ can have no other children.

In other word, each level of the tree represents a step in the derivation process. Starting from the root, each level corresponds to the application of a production rule. The nodes at a particular level are derived from the nodes at the previous level.

![Derivation tree](./derivation-tree.png)  
Source : https://youtu.be/u4-rpIlV9NI?si=mAYV4hyYXS9j7sfh&t=244

We see in the example that starting from $S$, it produces terminal $0$ and non-terminal $B$. We will make it as the child of $S$, and continue the derivation process of $B$. This is done for all production rule. If there exist multiple production rule for one non-terminal symbol, then we will have to use both of them in distinct node. When the production rule is recursive (i.e., $A \rightarrow 1AA$), we may stop the derivation and fill the leaf nodes with $\epsilon$.

We also call any step of the derivation as a **sentential form**. A derivation tree in which the leaves contain a label from $V \cup T \cup \{\lambda\}$, or in other words, if any of the leaf still contains a non-terminal symbol, then the tree is said to be a **partial derivation tree**.

:::info
See also [tree data structure](/data-structures-and-algorithms/tree).  
$\epsilon$ is same as $\lambda$.
:::

#### Left & Right Derivation

When deriving a string with a grammar, there are two approaches, **leftmost derivation** and **rightmost derivation**. In leftmost derivation, the leftmost non-terminal in the current sentential form is always selected for expansion. While in the rightmost derivation, we select the rightmost non-terminal symbols. There is also **mixed derivation**, in which the two approaches is combined.

For example, a simple grammar with production rule $S \rightarrow AB$, $A \rightarrow a$, $B \rightarrow a$.

Using this grammar, the string "ab" can be derived in the following ways :

- Leftmost Derivation : $S \Rightarrow AB \Rightarrow aB \Rightarrow ab$
- Rightmost Derivation : $S \Rightarrow AB \Rightarrow Ab \Rightarrow ab$

Another example with the graphical derivation tree :

![Left and right derivation tree](./left-right-derivation.png)  
Source : https://youtu.be/u4-rpIlV9NI?si=mWlwEeGp_w5Ky123&t=740

In the left derivation process, we chose to apply the production rule $S \rightarrow aSS$, because applying the other rule $S \rightarrow aAS$ would require us to replace $A$. The production rule of $A$ involve occurrence of $b$, if we use the $A \rightarrow ba$ production rule, we will have $b$ as the second character of the string (which is invalid). The process of derivation continues like this until we successfully create a parse tree with the correct characters combined from all the leaf nodes.

### Parsing

Parsing is the process of finding a derivation for a string from a given grammar. It is a way to recognize a string and to determine if a string belong to the grammar.

The basic idea of parsing is, finding (or making) a parse tree. The manual way is to analyze a given string and the grammar, then carefully construct a parse tree (like what we did in the previous example above).

A brute force way of parsing, also called **exhaustive search parsing** involve generating all possible strings of the same length as the input and checking if any of them matches the input. This approach is obviously inefficient. A practical parsing algorithms would be designed to avoid exhaustive search by employing various optimization techniques.

#### Ambiguity

In parsing, ambiguity refers to a situation where a given grammar can produce more than one valid parse tree for a particular input string. Depending on which production rule is applied on each step, a different but valid parse tree could be generated.

The grammar $G = (\{S\}, \{a, b\}, S, S \rightarrow aSb | bSa | SS | \lambda)$ generates strings having an equal number of "a"'s and "b"'s. The string "abab" can be generated in two distinct ways as shown in the following.

![Ambiguity in parsing](./ambiguity.png)  
Source : Book page 129

Furthermore, the string "abab" has two distinct leftmost derivations :

- $S \Rightarrow aSb \Rightarrow abSab \Rightarrow abab$
- $S \Rightarrow SS \Rightarrow aSbS \Rightarrow abS \Rightarrow abaSb \Rightarrow abab$

And two distinct rightmost derivations :

- $S \Rightarrow aSb \Rightarrow abSab \Rightarrow abab$
- $S \Rightarrow SS \Rightarrow SaSb \Rightarrow Sab \Rightarrow aSbab \Rightarrow abab$

Ambiguity can happen even in our daily lives, such as when encountering this ambiguous math expression "2 + 3 × 4". Without parenthesis, it wouldn't be clear in which order do we process this expression. We can interpret "2 + 3 × 4" as either "(2 + 3) × 4" or "2 + (3 × 4)".

We will say a string that leads to this situation "ambiguously derivable". A grammar $G$ is said to be ambiguous if there exists at least one string in $L(G)$ which is ambiguously derivable. Ambiguity is a property of grammar, it is not always possible to find equivalent unambiguous grammar.

### Simplification

The simplification of context-free grammar involves transforming or modifying the grammar to make it simpler or more manageable while preserving its language. This includes removing useless symbols, unreachable symbols, and simplifying the production rules.

For example, if we have production rule $A \rightarrow aBa$ and $B \rightarrow y$, we can simplify this by directly substituting $B$ in the $A$ production rule. So, the simplified production rule is $A \rightarrow aya$. This technique is also called **substitution rule**.

There are three steps in CFG simplification, reduction of CFG, removal of unit production, and removal of null production.

#### Reduction of CFG

The reduction involve eliminating useless symbols in the grammar, including non-terminals and terminals that do not contribute to generating any valid string in the language. It is divided into two phases.

1. Removal of useless symbols, non-terminals and terminals that do not contribute to generating any valid string in the language.
2. Removal of unreachable symbols, symbols that do not participate in the derivation of any sentential form.

A helpful procedure from the video :

![The reduction of CFG](./reduction-cfg.png)  
Source : https://youtu.be/EF09zxzpVbk?si=qtn-ff6Wb-TJ2Zxv&t=323

With example grammar $G$ with production rules $P$: $S \rightarrow AC|B$, $A \rightarrow a$, $C \rightarrow c|BC$, $E \rightarrow aA|e$.

![Reduction phase 1](./reduction-phase-1.png)  
Source : https://youtu.be/EF09zxzpVbk?si=gc_WXN5N0yI5d6et&t=604

1. Create a set $w_1$ that includes non-terminals that derives to some terminals.
2. Create another set $w_2$ that includes non-terminals that derives to all symbol in the previous step.
3. It is repeated until we obtained the same set in two consecutive steps (end at $w_3$).
4. The new grammar $G'$ will contain non-terminal symbols from the last set $w_3$, and terminal symbols that are derived by those non-terminal symbols.
5. A new production rule is created in which the symbol that doesn't appear in the non-terminal of $G'$ won't be included. In the example, we see that we removed production rule $S \rightarrow B$, because $B$ itself doesn't generate any terminal symbol (i.e., $B$ is a useless symbol).

![Reduction phase 2](./reduction-phase-2.png)  
Source : https://youtu.be/EF09zxzpVbk?si=ra95MHcYogTYxDC9&t=779

1. Create a set $y_1$ starting from the start symbol $S$.
2. Create another set $y_2$ that includes all the symbol (including non-terminals and terminals) that can be derived from the previous set.
3. It is repeated until we obtained the same set in two consecutive steps (end in $y_4$).
4. A new grammar $G''$ we include the non-terminals and terminals from the last set $y_4$.
5. We will alter the production rule by only including those that are in the non-terminals of $G''$. In the example, we removed symbol $E$ entirely, because in fact no other symbol can reach it (i.e., $E$ is an unreachable symbol).

#### Removal of Unit Productions

#### Removal of Null Productions

### Normal Forms

#### Chomsky Normal Form

#### Greibach Normal Form

#### Conversion
