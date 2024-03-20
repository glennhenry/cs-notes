---
slug: /theory-of-computation-and-automata/context-free-grammar
id: context-free-grammar
title: Context-Free Grammar
description: Context-Free Grammar
---

Context-free grammar is the grammar that generates context-free language, which is recognized by [pushdown automata](/theory-of-computation-and-automata/pda-and-cfg). The production rule is :

$A \rightarrow \alpha$, where $\alpha = \{V \cup \Sigma^*\}$ and $A \in V$.

Similar to the [general](/theory-of-computation-and-automata/formal-grammar#grammar) and [regular grammar](/theory-of-computation-and-automata/formal-grammar#regular-grammar), a non-terminal symbol can produce $\alpha$ which can be any symbol from the set of all possible strings of symbols that can be generated using both the non-terminal symbols and the terminal symbols of the grammar, including the empty string.

:::info
From different sources, $T$ is sometimes used as $\Sigma$. This implies that ($\{V \cup \Sigma^*\}$ is equivalent with $\{V \cup T\}$).
:::

The difference between regular grammar and context-free grammar lies in the production rules. Regular grammar is more restrictive, as the production rule must place non-terminal symbols either on the right or left side (i.e., non-terminals cannot be placed in the middle of the string). In contrast, context-free grammar allows the placement of non-terminals anywhere.

For example, the grammar $G = \{(S, A), (a, b), (S \rightarrow aAb, A \rightarrow aAb/ \epsilon)\}$ is considered as a context-free grammar.

We can generate : $S \rightarrow aAb$  
$\rightarrow aaAbb$ (by $A \rightarrow aAb$)  
$\rightarrow aaaAbbb$ (by $A \rightarrow aAb$)  
$\rightarrow aaabbb$ (by $A \rightarrow \epsilon$)

The language of this grammar will be in the form of $a^n b^n$.

### Derivation Trees

#### Left & Right Derivation

### Parsing

#### Ambiguity

### Simplification

CFG simplification

### Normal Forms

#### Chomsky Normal Form

#### Greibach Normal Form

#### Conversion
