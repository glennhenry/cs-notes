"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4260],{95915:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(85893),n=s(11151);const i={slug:"/data-structures-and-algorithms/cycle-detection",id:"cycle-detection",title:"Cycle Detection",description:"Cycle Detection"},a=void 0,c={id:"data-structures-and-algorithms/cycle-detection/cycle-detection",title:"Cycle Detection",description:"Cycle Detection",source:"@site/docs/data-structures-and-algorithms/23-cycle-detection/cycle-detection.md",sourceDirName:"data-structures-and-algorithms/23-cycle-detection",slug:"/data-structures-and-algorithms/cycle-detection",permalink:"/cs-notes/data-structures-and-algorithms/cycle-detection",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/data-structures-and-algorithms/23-cycle-detection/cycle-detection.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1706857828,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{slug:"/data-structures-and-algorithms/cycle-detection",id:"cycle-detection",title:"Cycle Detection",description:"Cycle Detection"},sidebar:"sidebar",previous:{title:"Prefix Sum",permalink:"/cs-notes/data-structures-and-algorithms/prefix-sum"},next:{title:"Shortest Path",permalink:"/cs-notes/data-structures-and-algorithms/shortest-path"}},o={},l=[{value:"Floyd&#39;s Tortoise &amp; Hare Algorithm",id:"floyds-tortoise--hare-algorithm",level:3}];function d(e){const t={a:"a",br:"br",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cycle_detection",children:"Cycle detection - Wikipedia"})})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Cycle Detection"})," is an algorithm that is used to determine if a sequence of elements or data structures contains a cycle. A cycle refers to a path or sequence of vertices or elements that starts and ends at the same vertex or element, while visiting at least one other vertex or element in between. In other word, a cycle is a situation where you end up back where you started after following a series of steps or connections."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Cycle in graph",src:s(78021).Z+"",width:"452",height:"247"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://workat.tech/problem-solving/practice/detect-cycle-in-directed-graph",children:"https://workat.tech/problem-solving/practice/detect-cycle-in-directed-graph"})]}),"\n",(0,r.jsxs)(t.p,{children:["The data structures include ",(0,r.jsx)(t.a,{href:"/data-structures-and-algorithms/graph",children:"directed or undirected graph"}),", ",(0,r.jsx)(t.a,{href:"/data-structures-and-algorithms/linked-list",children:"linked list"}),", and ",(0,r.jsx)(t.a,{href:"/data-structures-and-algorithms/array",children:"array"})," with cyclic sequence."]}),"\n",(0,r.jsxs)(t.p,{children:["An example of cycle detection in graph would be a simple ",(0,r.jsx)(t.a,{href:"/data-structures-and-algorithms/traversal#depth-first-search-dfs",children:"DFS traversal"})," included with a ",(0,r.jsx)(t.a,{href:"/data-structures-and-algorithms/set",children:"set data structure"})," that stores the visited vertex. DFS traverse the graph as far as possible before going to another branch. Along the traversal, we will check if the vertex is already present in the set, if yes, then there is a cycle in the graph."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Cycle detect using DFS",src:s(51367).Z+"",width:"695",height:"487"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://takeuforward.org/data-structure/detect-cycle-in-a-directed-graph-using-dfs-g-19/",children:"https://takeuforward.org/data-structure/detect-cycle-in-a-directed-graph-using-dfs-g-19/"})]}),"\n",(0,r.jsx)(t.h3,{id:"floyds-tortoise--hare-algorithm",children:"Floyd's Tortoise & Hare Algorithm"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Floyd's Tortoise and Hare Algorithm"})," is a popular algorithm to detect cycle, it can be applied to sequences and linked structures such as linked list and graph. This algorithm make us the ",(0,r.jsx)(t.a,{href:"/data-structures-and-algorithms/two-pointer",children:"two pointer technique"})," to traverse the data structure and detect the cycle."]}),"\n",(0,r.jsx)(t.p,{children:'We will use two pointers, one pointer is referred as "slow" (or tortoise) pointer, which is used for traversing the data structure gradually, visiting each element one by one, and the "fast" (or hare) pointer for traversing the data structure at a faster pace, advancing two elements at a time.'}),"\n",(0,r.jsx)(t.p,{children:"The idea of this algorithm is that if a cycle exist in a sequence, both pointer will eventually meet at some point. The fast pointer, will eventually catch up with the slow pointer. If there are no sequence, then the fast pointer will finish first before even meeting slow pointer."}),"\n",(0,r.jsx)(t.p,{children:"Here is the pseudocode for the algorithm to detect linked list :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function hasCycle(head):\n    slow = head\n    fast = head\n\n    while fast is not null and fast.next is not null:\n        slow = slow.next\n        fast = fast.next.next\n\n        if slow == fast:\n            return true\n\n    return false\n"})}),"\n",(0,r.jsx)(t.p,{children:"When the pointer becomes null, it indicates the end of the list. If the loop completes, which mean the fast pointer reach the end of the linked list, then there is no cycle."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Floyd algorithm illustration",src:s(78465).Z+"",width:"723",height:"417"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://turboyourcode.com/algorithm/floyd-s-cycle-finding",children:"https://turboyourcode.com/algorithm/floyd-s-cycle-finding"})]}),"\n",(0,r.jsxs)(t.p,{children:["This algorithm can also be modified to find the start of the cycle. The start of the cycle can be found by resetting the slow pointer to the head and keep the fast pointer as it is. Both pointer will traverse again normally, ",(0,r.jsx)(t.strong,{children:"in addition with the same pace, one step at a time"}),". When they meet again, that meeting point is the starting point of the cycle."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},51367:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/cycle-detect-dfs-6916994c31acf2773fb0dac0ed81650a.webp"},78021:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/cycle-fa91b2678572e60988bddda85e0296d4.png"},78465:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/floyd-algorithm-8da541e5c68f84667d9a48aee1114248.gif"},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>a});var r=s(67294);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);