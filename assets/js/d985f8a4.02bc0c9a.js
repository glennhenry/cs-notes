"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6831],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>k});var n=t(67294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var p=n.createContext({}),o=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,m=a.originalType,p=a.parentName,l=i(a,["components","mdxType","originalType","parentName"]),c=o(t),h=r,k=c["".concat(p,".").concat(h)]||c[h]||u[h]||m;return t?n.createElement(k,s(s({ref:e},l),{},{components:t})):n.createElement(k,s({ref:e},l))}));function k(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var m=t.length,s=new Array(m);s[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i[c]="string"==typeof a?a:r,s[1]=i;for(var o=2;o<m;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},83413:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>m,metadata:()=>i,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const m={slug:"/computer-and-programming-fundamentals/declarative-functional-programming",id:"declarative-functional-programming",title:"Declarative & Functional Programming",description:"Declarative & Functional Programming"},s=void 0,i={unversionedId:"computer-and-programming-fundamentals/declarative-functional-programming/declarative-functional-programming",id:"computer-and-programming-fundamentals/declarative-functional-programming/declarative-functional-programming",title:"Declarative & Functional Programming",description:"Declarative & Functional Programming",source:"@site/docs/computer-and-programming-fundamentals/12-declarative-functional-programming/declarative-functional-programming.md",sourceDirName:"computer-and-programming-fundamentals/12-declarative-functional-programming",slug:"/computer-and-programming-fundamentals/declarative-functional-programming",permalink:"/cs-notes/computer-and-programming-fundamentals/declarative-functional-programming",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-and-programming-fundamentals/12-declarative-functional-programming/declarative-functional-programming.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1699957463,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{slug:"/computer-and-programming-fundamentals/declarative-functional-programming",id:"declarative-functional-programming",title:"Declarative & Functional Programming",description:"Declarative & Functional Programming"},sidebar:"sidebar",previous:{title:"Object-Oriented Programming",permalink:"/cs-notes/computer-and-programming-fundamentals/object-oriented-programming"},next:{title:"Query Language",permalink:"/cs-notes/computer-and-programming-fundamentals/query-language"}},p={},o=[{value:"Declarative Programming",id:"declarative-programming",level:3},{value:"Functional Programming",id:"functional-programming",level:3},{value:"First-Class Citizen",id:"first-class-citizen",level:4},{value:"Recursion",id:"recursion",level:4},{value:"Lambda Calculus",id:"lambda-calculus",level:4},{value:"Example",id:"example",level:5},{value:"Functional Programming Application",id:"functional-programming-application",level:4}],l={toc:o},c="wrapper";function u(a){let{components:e,...m}=a;return(0,r.kt)(c,(0,n.Z)({},l,m,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Main Source :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Declarative_programming"},"Declarative programming - Wikipedia"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Functional_programming"},"Functional programming - Wikipedia")))),(0,r.kt)("h3",{id:"declarative-programming"},"Declarative Programming"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Declarative Programming")," is a programming paradigm that focuses on describing what the program should accomplish, rather than specifying how to achieve it. It is the opposite paradigm with the ",(0,r.kt)("a",{parentName:"p",href:"/computer-and-programming-fundamentals/imperative-procedural-programming#imperative-programming"},"imperative programming"),"."),(0,r.kt)("p",null,'The main characteristic of declarative programming is that it emphasizes the "what" rather than the "how" of a computation. This means that instead of writing step-by-step instructions for the computer to follow, we specify the desired outcome or the relationship between inputs and outputs.'),(0,r.kt)("p",null,"Declarative programming works at higher level, it hides the implementation detail, making the code more readable and concise. On the other hand, imperative programming require explicit control flow. The system will decide how to execute the code based on the declaration, it doesn't have to be executed sequentially."),(0,r.kt)("p",null,"The abstraction of declarative programming makes it seem like magic, this can make it harder to predict how changes in the code will affect performance or behavior, especially if we are not familiar how the system works."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Imperative vs declarative programming",src:t(3309).Z,width:"638",height:"491"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://steemit.com/programming/@nv-vn/getting-started-with-functional-programming"},"https://steemit.com/programming/@nv-vn/getting-started-with-functional-programming")),(0,r.kt)("h3",{id:"functional-programming"},"Functional Programming"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Functional Programming (FP)")," is a programming paradigm (type of declarative programming) which treats computation as the evaluation of mathematical functions. Mathematical function is the framework of FP. In mathematics, a function is defined as a relation between a set of inputs (called ",(0,r.kt)("strong",{parentName:"p"},"arguments"),") and a set of possible outputs (called ",(0,r.kt)("strong",{parentName:"p"},"results"),"), where each input is related to exactly one output."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Function relation in math",src:t(61909).Z,width:"520",height:"207"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://web.cecs.pdx.edu/~antoy/Courses/CS250/slides/2b/Functions_2.html"},"https://web.cecs.pdx.edu/~antoy/Courses/CS250/slides/2b/Functions_2.html"),", ",(0,r.kt)("a",{parentName:"p",href:"https://danielpecos.com/2014/06/24/function-composition/"},"https://danielpecos.com/2014/06/24/function-composition/")," (function relation in math)"),(0,r.kt)("p",null,"Some characteristics of mathematical functions :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deterministic Mapping")," : For a given input, a mathematical function must produce a unique and deterministic output (same input should produce same output). The output is solely determined by the input.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"No Side Effects")," : A mathematical function should be pure, meaning it shouldn't have side effects, which mean it doesn't modify external state. For example, producing an output from an input shouldn't change the function output for other input.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Referential Transparency")," : Referential transparency means that a function's output should be replaceable by its equivalent output."),(0,r.kt)("p",{parentName:"li"},"Here's an example of referential transparency in Python programming language :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# define function that takes two number and return the sum\ndef add(x, y):\n    return x + y\n\nresult1 = add(3, 4)\nresult2 = 3 + 4\n\n# Because the 'add' function is referentially transparent,\n# 'result1' and 'result2' will always be equal.\n")))),(0,r.kt)("p",null,"In order to adhere with the principles of mathematical functions, functional programming has some characteristics :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Immutability")," : Immutability is a concept where once a variable (or data structure) is assigned a value, that value cannot be changed. In mathematics, a function maps inputs to outputs, the mapping should be deterministic. Immutability provides consistency and reduce side effects to align with the purity of mathematical function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Minimizing Global State")," : Mathematical functions are independent of external factors, their behavior is determined solely by their inputs. Functional programming minimize global state to make functions more self-contained and modular.")),(0,r.kt)("h4",{id:"first-class-citizen"},"First-Class Citizen"),(0,r.kt)("p",null,"In programming, an entity is called as a ",(0,r.kt)("strong",{parentName:"p"},"first-class citizen")," if it can be treated like other basic data types or values in the programming language. In functional programming, a function is treated as first-class citizen, it has several key characteristics :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assigned to Variables")," : You can assign a function to a variable, just like you would with a primitive data type or any other value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stored in Data Structures")," : Functions can be stored in data structures such as arrays."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Passed as an Argument")," : A function can be passed as an argument to another function, in other word, a function can accept other functions as parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returned from a Function")," : Functions can produce other functions as output.")),(0,r.kt)("p",null,"The concept of treating a function as an argument or as an output from another function is also known as a ",(0,r.kt)("strong",{parentName:"p"},"higher-order function"),"."),(0,r.kt)("h4",{id:"recursion"},"Recursion"),(0,r.kt)("p",null,"Because functional languages depend on function, iterating is based on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/data-structures-and-algorithms/recursion"},"recursion")),". Quick concept, recursion is where a function call itself until some condition is achieved. For example, we could make an illusion of loop in a function like :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def loop_for(n):\n    if (n == 0):\n        print("loop end")\n    print("still looping...")\n    loop_for(n - 1)\n\nloop_for(3)\n')),(0,r.kt)("p",null,"When we call the function with ",(0,r.kt)("inlineCode",{parentName:"p"},"n = 3"),', the function will check if the input has reached zero or not. If not, it will print the "still looping..." and will call itself with its own input decremented by 1. This will be done until the ',(0,r.kt)("inlineCode",{parentName:"p"},"n"),' reached zero and the "loop end" will be printed.'),(0,r.kt)("p",null,"So, even though there's no explicit loop, recursion provides a way to achieve iteration-like behavior in functional programming languages."),(0,r.kt)("h4",{id:"lambda-calculus"},"Lambda Calculus"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Lambda Calculus")," is a concept of expressing computation in mathematical logic and computer science that represents computation based on the concept of ",(0,r.kt)("strong",{parentName:"p"},"anonymous functions")," (functions without names)."),(0,r.kt)("p",null,"A function doesn't have name, it is denoted using the lambda symbol : ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"\u03bb")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lambda")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"))))),". A function can take a parameter, it is placed in front of the lambda symbol. A function with parameter ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," is denoted as ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"\u03bb"),(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lambda x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),"."),(0,r.kt)("p",null,"After constructing a function, the next step is to apply an expression to the parameter, an expression or the function body is denoted as ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"M")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"))))),". Putting all together, a function that takes a parameter ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and apply expression ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"M")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M")))))," is denoted as ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"\u03bb"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"M")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lambda x.M")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},".")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},".")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.1056em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},".")))))," is just a symbol to separate the parameter from the body of the function."),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("p",null,"A function that takes some variable and return the variable incremented by 1, the lambda calculus notation for this is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"\u03bb"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lambda x.x + 1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"))))),". When we apply this function with the argument of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"3")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"))))),", it would be written as ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"\u03bb"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,r.kt)("mn",{parentName:"mrow"},"3")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(\\lambda x.x + 1) \\space 3")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"))))),", which is equal to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"4")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"))))),". The variable ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," is ",(0,r.kt)("strong",{parentName:"p"},"bound")," to the argument ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"3")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3")))))," during the function application."),(0,r.kt)("p",null,"That was just the basic concept of lambda calculus, there are many more concepts."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Overall, lambda calculus serves as the theoretical foundation for many concepts in functional programming languages. It provides a formal and mathematical framework for understanding functions, function application, and the manipulation of functions.")),(0,r.kt)("h4",{id:"functional-programming-application"},"Functional Programming Application"),(0,r.kt)("p",null,"In the JavaScript programming language, a lambda expression (or arrow function) can be written as ",(0,r.kt)("inlineCode",{parentName:"p"},"const addOne = (x) => x + 1"),". For example, calling ",(0,r.kt)("inlineCode",{parentName:"p"},"addOne(5)")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),"."),(0,r.kt)("p",null,"As we can see, the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"(x) => x + 1")," looks similar to the lambda calculus notation. It takes an argument ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"x + 1"),". The function is also assigned to the ",(0,r.kt)("inlineCode",{parentName:"p"},"addOne")," variable (function as first-class citizen)."),(0,r.kt)("p",null,"Another example of functional programming is the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [1, 2, 3, 4, 5];\nnumbers.map((x) => x * 2);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," function is a commonly used function in functional programming that is used to transform each element in a collection with the provided function. Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers.map()")," means we are going to transform each element in the ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers")," with the function given to the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," function."),(0,r.kt)("p",null,"The function we provided to the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," function is defined as a lambda expression, which takes ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," as parameter and return the ",(0,r.kt)("inlineCode",{parentName:"p"},"x * 2"),". The result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," function applied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers")," array will be ",(0,r.kt)("inlineCode",{parentName:"p"},"[2, 4, 6, 8, 10]")),(0,r.kt)("p",null,"Here is another example from Wikipedia that compares imperative and functional programming approach to perform some operation to an array of numbers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Comparison of imperative and functional programming approach",src:t(28291).Z,width:"420",height:"358"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Functional_programming#Imperative_vs._functional_programming"},"https://en.wikipedia.org/wiki/Functional_programming#Imperative_vs._functional_programming")))}u.isMDXComponent=!0},61909:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/function-relation-7f85c79bc9bed0987760eefd14d5daad.png"},3309:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/imperative-vs-declarative-ffb2464fcdf34cf1b4a2d2a1b781f3af.png"},28291:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/imperative-vs-functional-d8708916655112ac28b1f19d7b7f18a4.png"}}]);