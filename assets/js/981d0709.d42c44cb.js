"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[948],{82187:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(85893),a=i(11151);const r={slug:"/programming-language-theory/logic-languages",id:"logic-languages",title:"Logic Languages",description:"Logic Languages"},t=void 0,l={id:"programming-language-theory/logic-languages/logic-languages",title:"Logic Languages",description:"Logic Languages",source:"@site/docs/programming-language-theory/12-logic-languages/logic-languages.md",sourceDirName:"programming-language-theory/12-logic-languages",slug:"/programming-language-theory/logic-languages",permalink:"/cs-notes/programming-language-theory/logic-languages",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/programming-language-theory/12-logic-languages/logic-languages.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1713435831,formattedLastUpdatedAt:"Apr 18, 2024",frontMatter:{slug:"/programming-language-theory/logic-languages",id:"logic-languages",title:"Logic Languages",description:"Logic Languages"},sidebar:"sidebar",previous:{title:"Functional Languages",permalink:"/cs-notes/programming-language-theory/functional-languages"},next:{title:"Concurrency",permalink:"/cs-notes/programming-language-theory/concurrency"}},o={},c=[{value:"Prolog",id:"prolog",level:3},{value:"Basic Concepts",id:"basic-concepts",level:4},{value:"Resolution &amp; Unification",id:"resolution--unification",level:4},{value:"Lists",id:"lists",level:4},{value:"Arithmetic",id:"arithmetic",level:4},{value:"Search",id:"search",level:4},{value:"Control Flow",id:"control-flow",level:4},{value:"Database",id:"database",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[]"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Logic programming is programming based on formal logic, providing a declarative way to solve problem. Logic languages are ",(0,s.jsx)(n.a,{href:"/computer-and-programming-fundamentals/declarative-functional-programming#declarative-programming",children:"declarative"}),", meaning that we specify what we want to achieve rather than how to achieve it. This is achieved by specifying logical relationship, then the language inference engine derive a solution. One major logic language is Prolog, most of them are used for AI and database."]}),"\n",(0,s.jsx)(n.p,{children:"The basic idea is :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Basic building blocks are logical statements. These statements are expressed in terms of ",(0,s.jsx)(n.strong,{children:"facts"})," and ",(0,s.jsx)(n.strong,{children:"rules"}),". Facts represent simple assertions about the world, while rules define relationships and dependencies between facts."]}),"\n",(0,s.jsx)(n.li,{children:"The logic language store all the facts and rules in a knowledge base."}),"\n",(0,s.jsx)(n.li,{children:"To actually find a solution, we will need to query to the knowledge base."}),"\n",(0,s.jsxs)(n.li,{children:["The language engine typically uses ",(0,s.jsx)(n.a,{href:"/data-structures-and-algorithms/backtracking",children:"backtracking"})," to explore different possibilities and find multiple solutions to a query. Then, it uses logical reasoning and deduction techniques to manipulate the statements in the knowledge base as well as applying rule to derive new facts or make conclusions."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"prolog",children:"Prolog"}),"\n",(0,s.jsx)(n.h4,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Facts"})," : Written using predicates, which consist of a predicate name followed by a list of arguments enclosed in parentheses."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"A(B1, B2, B3, ..., Bn)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"likes(john, pizza)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This means John likes pizza. For a computer, which doesn't understand human language, it simply interprets that ",(0,s.jsx)(n.code,{children:"john"})," has the predicate of ",(0,s.jsx)(n.code,{children:"likes"})," associated with ",(0,s.jsx)(n.code,{children:"pizza"}),". We call things like ",(0,s.jsx)(n.code,{children:"john"})," or ",(0,s.jsx)(n.code,{children:"pizza"})," as ",(0,s.jsx)(n.strong,{children:"constants"}),", they are typically written in lowercase."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Rules"})," : Written in form of clauses, in the form of head and body, separated by ",(0,s.jsx)(n.code,{children:":-"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"A :- B1, B2, B3, ..., Bn\n"})}),"\n",(0,s.jsx)(n.p,{children:'Bi are called literals or conditions. It is read as "A if B1 and B2 and B3 and ... and Bn".'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"loves(john, X) :- likes(john, X), vegetarian(X)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For example, means that ",(0,s.jsx)(n.code,{children:"john"})," has the predicate ",(0,s.jsx)(n.code,{children:"loves"})," for ",(0,s.jsx)(n.code,{children:"X"})," if ",(0,s.jsx)(n.code,{children:"john"})," has the predicate ",(0,s.jsx)(n.code,{children:"likes"})," for ",(0,s.jsx)(n.code,{children:"X"})," and ",(0,s.jsx)(n.code,{children:"X"})," is the predicate ",(0,s.jsx)(n.code,{children:"vegetarian"}),'. In human language, "john loves X if he likes X and X is a vegetarian." We consider ',(0,s.jsx)(n.code,{children:"X"})," here as a ",(0,s.jsx)(n.strong,{children:"variable"})," (typically written in uppercase), which can hold a value (in this case as a placeholder for an unknown value)."]}),"\n",(0,s.jsxs)(n.p,{children:["Rules with one or more head and zero or more body is also called ",(0,s.jsx)(n.strong,{children:"Horn clauses"}),". Sometimes it is written as ",(0,s.jsx)(n.code,{children:"H \u2190 B1, B2, B3, ..., Bn"}),", which means if all the ",(0,s.jsx)(n.code,{children:"B"}),"'s are all true, then we can deduce ",(0,s.jsx)(n.code,{children:"H"})," is true as well."]}),"\n",(0,s.jsx)(n.p,{children:"Example of deduction is :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"B \u2190 A\nC \u2190 B\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Remember that we assume statements are true. By the given statement, if ",(0,s.jsx)(n.code,{children:"A"})," is true, we can deduce ",(0,s.jsx)(n.code,{children:"C"})," is true. This is because we know that ",(0,s.jsx)(n.code,{children:"A"})," implies ",(0,s.jsx)(n.code,{children:"B"}),", which in turns also implies ",(0,s.jsx)(n.code,{children:"C"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Queries"})," : Queries or goals is the body of rules with the ",(0,s.jsx)(n.code,{children:"?-"})," symbol."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?- B1, B2, B3, ..., Bn\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?- likes(X, pizza)\n?- likes(john, pizza)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first query ask what is the entity that has ",(0,s.jsx)(n.code,{children:"likes"})," predicate to ",(0,s.jsx)(n.code,{children:"pizza"}),". The answer of the query should be something like ",(0,s.jsx)(n.code,{children:"X = entity_that_like_pizza"}),", such as ",(0,s.jsx)(n.code,{children:"X = john"}),". The second query ask if entity 'john' has predicate ",(0,s.jsx)(n.code,{children:"likes"})," to ",(0,s.jsx)(n.code,{children:"pizza"}),', which will return "no" or "yes".']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"resolution--unification",children:"Resolution & Unification"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Unification"})," is when one or more terms identical (logic programming way to check for equality). It is done by creating a variable, then substituting it with some value and comparing it with the other term. If we have the query ",(0,s.jsx)(n.code,{children:"likes(john, X)"})," and the fact ",(0,s.jsx)(n.code,{children:"likes(john, pizza)"}),", we can substitute variable ",(0,s.jsx)(n.code,{children:"X"})," with ",(0,s.jsx)(n.code,{children:"pizza"}),", which will make the two terms identical or unified."]}),"\n",(0,s.jsxs)(n.p,{children:["We can check for equality with query, such as ",(0,s.jsx)(n.code,{children:"?- A = B"}),", which return yes or no."]}),"\n",(0,s.jsx)(n.p,{children:"The rules of unification :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A constant unifies only with itself (i.e., ",(0,s.jsx)(n.code,{children:"?- a = a"})," returns yes)."]}),"\n",(0,s.jsx)(n.li,{children:"Two terms can be unified if and only if they have the same functor (e.g., predicate) and the number of arguments are same, as well as their argument unify recursively."}),"\n",(0,s.jsxs)(n.li,{children:["Variable unifies with anything. Variable are said to be ",(0,s.jsx)(n.strong,{children:"instantiated"})," if they hold a value (i.e., substituted)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"lists",children:"Lists"}),"\n",(0,s.jsxs)(n.p,{children:["List can be constructed by using a sequence of elements followed by ",(0,s.jsx)(n.code,{children:"."})," (dot), comma, and enclosing it within parentheses. For example, a list of ",(0,s.jsx)(n.code,{children:"a"}),", ",(0,s.jsx)(n.code,{children:"b"}),", and ",(0,s.jsx)(n.code,{children:"c"})," : ",(0,s.jsx)(n.code,{children:".(a, .(b, .(c, [])))"}),", where ",(0,s.jsx)(n.code,{children:"[]"})," is the tail of the list."]}),"\n",(0,s.jsxs)(n.p,{children:["Prolog adds a syntactic sugar to construct a list, the same list can be constructed with just ",(0,s.jsx)(n.code,{children:"[a, b, c]"}),". Furthermore, Prolog allows us to add a vertical bar ",(0,s.jsx)(n.code,{children:"|"})," in the middle of the list to decompose a list into its head and tail parts. It will be useful in the case of the tail is a variable."]}),"\n",(0,s.jsxs)(n.p,{children:["A list with elements ",(0,s.jsx)(n.code,{children:"a"}),", ",(0,s.jsx)(n.code,{children:"b"}),", ",(0,s.jsx)(n.code,{children:"c"})," : ",(0,s.jsx)(n.code,{children:"[a | [b, c]]"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Some operation we can do with list are ",(0,s.jsx)(n.code,{children:"append"}),", ",(0,s.jsx)(n.code,{children:"reverse"}),", ",(0,s.jsx)(n.code,{children:"sorted"}),", etc."]}),"\n",(0,s.jsx)(n.h4,{id:"arithmetic",children:"Arithmetic"}),"\n",(0,s.jsx)(n.h4,{id:"search",children:"Search"}),"\n",(0,s.jsx)(n.h4,{id:"control-flow",children:"Control Flow"}),"\n",(0,s.jsx)(n.h4,{id:"database",children:"Database"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var s=i(67294);const a={},r=s.createContext(a);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);