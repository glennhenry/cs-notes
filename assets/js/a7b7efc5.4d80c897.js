"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6960],{86418:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(85893),s=n(11151);const i={slug:"/data-structures-and-algorithms/stack",id:"stack",title:"Stack",description:"Stack"},o=void 0,r={id:"data-structures-and-algorithms/stack/stack",title:"Stack",description:"Stack",source:"@site/docs/data-structures-and-algorithms/04-stack/stack.md",sourceDirName:"data-structures-and-algorithms/04-stack",slug:"/data-structures-and-algorithms/stack",permalink:"/cs-notes/data-structures-and-algorithms/stack",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/data-structures-and-algorithms/04-stack/stack.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1706857828,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{slug:"/data-structures-and-algorithms/stack",id:"stack",title:"Stack",description:"Stack"},sidebar:"sidebar",previous:{title:"Linked List",permalink:"/cs-notes/data-structures-and-algorithms/linked-list"},next:{title:"Queue",permalink:"/cs-notes/data-structures-and-algorithms/queue"}},c={},d=[{value:"Stack Operation",id:"stack-operation",level:3},{value:"Monotonic Stack",id:"monotonic-stack",level:3}];function h(t){const e={a:"a",br:"br",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Main Source :"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",children:"Stack (abstract data type) - Wikipedia"})})}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Stack"})," is a data structure where the elements are stacked on top of each other. In stack data structure, we can add and remove element, the behavior of adding and removing element follows the ",(0,a.jsx)(e.strong,{children:"Last-In-First-Out (LIFO)"})," principle. This principle says that the last element added to the stack is the first one to be removed."]}),"\n",(0,a.jsx)(e.p,{children:"A book stacked on top of each other can be a good analogy to understand stack data structure. Just like placing books on top of each other, when elements are added to a stack, each new element is stacked on top of the previous ones. In order to take book that is lower in the stack, we will remove the top of the book first, this is because removing the topmost element requires the least amount of effort (imagine if the book is heavy). Similar to stack data structure, accessing an element in stack, we will need to remove the top element first."}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.img,{alt:"Stack of book analogy",src:n(43990).Z+"",width:"544",height:"268"}),(0,a.jsx)(e.br,{}),"\n","Source : ",(0,a.jsx)(e.a,{href:"https://www.freepik.com/free-photos-vectors/book-png",children:"https://www.freepik.com/free-photos-vectors/book-png"})," (with modification)"]}),"\n",(0,a.jsx)(e.p,{children:"The behavior of stack data structure can be beneficial in some applications. For instance, in undo functionality, a stack can be used to store each action performed by the user. When the user wants to undo an action, the most recent action is retrieved from the stack and the action will be reverted. The LIFO properties of stack data structure align perfectly with the goal of undo functionality, this because the last element is the first one to be removed, similar to undoing an action, we expect to revert the most recent action we have done."}),"\n",(0,a.jsx)(e.h3,{id:"stack-operation",children:"Stack Operation"}),"\n",(0,a.jsx)(e.p,{children:"Stack is a fairly simple data structure, the general implementation typically only includes adding and removing element."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Push"})," : Push is when we add an element to the stack, which is to the top."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Pop"})," : Pop is when we remove an element from the stack, which is the topmost element."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Stack data structure can be implemented using an ",(0,a.jsx)(e.a,{href:"/data-structures-and-algorithms/array",children:"array"})," or ",(0,a.jsx)(e.a,{href:"/data-structures-and-algorithms/linked-list",children:"linked list"}),", the important thing is we need to follow the LIFO principle. Even if array allow random access and linked list allow insertion in the middle, we can't use these."]}),"\n",(0,a.jsx)(e.p,{children:"Stack operation is done in O(1) or constant time, no matter what the element is, no matter how large the stack is, removing or adding element always performs the same."}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.img,{alt:"Stack data structure operations",src:n(19016).Z+"",width:"292",height:"173"}),(0,a.jsx)(e.br,{}),"\n","Source : ",(0,a.jsx)(e.a,{href:"https://www.programiz.com/dsa/stack",children:"https://www.programiz.com/dsa/stack"})]}),"\n",(0,a.jsx)(e.h3,{id:"monotonic-stack",children:"Monotonic Stack"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Monotonic Stack"})," is a variant of stack data structure that maintains a specific order of elements while still adhering to LIFO principles. Monotonic stack enforce a particular order of element, either non-decreasing or non-increasing, from the bottom to the top of the stack."]}),"\n",(0,a.jsx)(e.p,{children:"When we have a non-decreasing or an increasing monotonic stack, this mean from bottom to the top, we must store element in increasing order. When an element doesn't satisfy this condition, we will need to remove them. The process of adding or removing an element is the same as traditional stack."}),"\n",(0,a.jsx)(e.p,{children:"Here is an example of monotonic stack :"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.img,{alt:"Monotonic stack",src:n(66469).Z+"",width:"742",height:"349"}),(0,a.jsx)(e.br,{}),"\n","Source : ",(0,a.jsx)(e.a,{href:"https://itnext.io/monotonic-stack-identify-pattern-3da2d491a61e",children:"https://itnext.io/monotonic-stack-identify-pattern-3da2d491a61e"})," (with modification)"]}),"\n",(0,a.jsx)(e.p,{children:"We have an array of numbers, we want to turn it into a non-decreasing monotonic stack. We will push the element from the array to the stack as long as the element we encounter keep increasing. When we encounter an element smaller than the topmost element in the stack, we will remove every element in the stack that is larger than it."})]})}function l(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(h,{...t})}):h(t)}},66469:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/monotonic-stack-6d7103b8535f97f72c2ede61d925c36a.png"},19016:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},43990:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/stack-of-book-585d8f617de1d88ce5e60d776c26e32e.png"},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);