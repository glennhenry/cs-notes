"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[3401],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>h});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var u=r.createContext({}),o=function(t){var a=r.useContext(u),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},m=function(t){var a=o(t.components);return r.createElement(u.Provider,{value:a},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=o(e),p=n,h=c["".concat(u,".").concat(p)]||c[p]||d[p]||i;return e?r.createElement(h,l(l({ref:a},m),{},{components:e})):r.createElement(h,l({ref:a},m))}));function h(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,l=new Array(i);l[0]=p;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=t,s[c]="string"==typeof t?t:n,l[1]=s;for(var o=2;o<i;o++)l[o]=e[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}p.displayName="MDXCreateElement"},38317:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=e(87462),n=(e(67294),e(3905));const i={slug:"/data-structures-and-algorithms",id:"data-structures-and-algorithms",title:"Data Structures & Algorithms",description:"Data Structures & Algorithms Notes"},l=void 0,s={unversionedId:"data-structures-and-algorithms/data-structures-and-algorithms",id:"data-structures-and-algorithms/data-structures-and-algorithms",title:"Data Structures & Algorithms",description:"Data Structures & Algorithms Notes",source:"@site/docs/data-structures-and-algorithms/data-structures-and-algorithms-intro.md",sourceDirName:"data-structures-and-algorithms",slug:"/data-structures-and-algorithms",permalink:"/cs-notes/data-structures-and-algorithms",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/data-structures-and-algorithms/data-structures-and-algorithms-intro.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1700993986,formattedLastUpdatedAt:"Nov 26, 2023",frontMatter:{slug:"/data-structures-and-algorithms",id:"data-structures-and-algorithms",title:"Data Structures & Algorithms",description:"Data Structures & Algorithms Notes"},sidebar:"sidebar",previous:{title:"Networking Command",permalink:"/cs-notes/computer-networking/networking-command"},next:{title:"Analysis of Algorithms",permalink:"/cs-notes/data-structures-and-algorithms/analysis-of-algorithms"}},u={},o=[{value:"All topics",id:"all-topics",level:3}],m={toc:o},c="wrapper";function d(t){let{components:a,...e}=t;return(0,n.kt)(c,(0,r.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before this, you might see ",(0,n.kt)("a",{parentName:"p",href:"/computer-and-programming-fundamentals/data-structures-and-algorithms"},"an introduction to Data Structures and Algorithms"),". Some explanation here might"),(0,n.kt)("h3",{id:"all-topics"},"All topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/analysis-of-algorithms"},"Analysis of Algorithms")),(0,n.kt)("li",{parentName:"ul"},"Data Structures",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/array"},"Array")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/linked-list"},"Linked-List")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/stack"},"Stack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/queue"},"Queue")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/hash-table"},"Hash Table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/set"},"Set")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/tree"},"Tree")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/heap"},"Heap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/graph"},"Graph")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/trie"},"Trie")))),(0,n.kt)("li",{parentName:"ul"},"Algorithms",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Common Types",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/sorting"},"Sorting")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/search"},"Search")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/recursion"},"Recursion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/divide-and-conquer"},"Divide And Conquer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/traversal"},"Traversal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/backtracking"},"Backtracking")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/greedy"},"Greedy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/dynamic-programming"},"Dynamic Programming")))),(0,n.kt)("li",{parentName:"ul"},"Other Algorithms",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/two-pointer"},"Two Pointer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/sliding-window"},"Sliding Window")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/prefix-sum"},"Prefix Sum")),(0,n.kt)("li",{parentName:"ul"},"Graph Algorithms",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/cycle-detection"},"Cycle Detection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/shortest-path"},"Shortest Path")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/union-find"},"Union Find")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/topological-sort"},"Topological Sort")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/minimum-spanning-tree"},"Minimum Spanning Tree")))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-structures-and-algorithms/complexity-theory"},"Complexity Theory"))))}d.isMDXComponent=!0}}]);