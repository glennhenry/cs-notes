"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[8116],{11838:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var t=a(85893),n=a(11151);const i={slug:"/data-structures-and-algorithms/hash-table",id:"hash-table",title:"Hash Table",description:"Hash Table"},r=void 0,h={id:"data-structures-and-algorithms/hash-table/hash-table",title:"Hash Table",description:"Hash Table",source:"@site/docs/data-structures-and-algorithms/06-hash-table/hash-table.md",sourceDirName:"data-structures-and-algorithms/06-hash-table",slug:"/data-structures-and-algorithms/hash-table",permalink:"/cs-notes/data-structures-and-algorithms/hash-table",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/data-structures-and-algorithms/06-hash-table/hash-table.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1723542193e3,frontMatter:{slug:"/data-structures-and-algorithms/hash-table",id:"hash-table",title:"Hash Table",description:"Hash Table"},sidebar:"sidebar",previous:{title:"Queue",permalink:"/cs-notes/data-structures-and-algorithms/queue"},next:{title:"Set",permalink:"/cs-notes/data-structures-and-algorithms/set"}},l={},c=[{value:"Implementation",id:"implementation",level:3},{value:"Hash Function",id:"hash-function",level:4},{value:"Collision Mitigation",id:"collision-mitigation",level:4},{value:"Example",id:"example",level:3}];function d(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mtext:"mtext",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Main Source:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Hash_table",children:"Hash table \u2014 Wikipedia"})})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Hash table"}),", also known as ",(0,t.jsx)(s.strong,{children:"hash map"}),", is a data structure where accessing an element is done by providing a unique identifier called ",(0,t.jsx)(s.strong,{children:"key"}),". Key is provided along with a ",(0,t.jsx)(s.strong,{children:"value"}),", which is the actual value of the element during the insertion process."]}),"\n",(0,t.jsx)(s.h3,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsxs)(s.p,{children:["Hash table is a very efficient data structure in terms of insertion and retrieval, similar to ",(0,t.jsx)(s.a,{href:"/data-structures-and-algorithms/array",children:"array"}),". They provide efficient retrieval of an element in a constant ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time."]}),"\n",(0,t.jsx)(s.p,{children:"In array, we use an index to retrieve a specific element. The index of an element may change when we modify the array (e.g., inserting an element at the first index may shift the following elements). A hash table differs in its access method by using a unique identifier that never changes and always maps to the same value."}),"\n",(0,t.jsx)(s.p,{children:"Under the hood, a hash table is implemented using an array. An array with a predetermined size is allocated in memory, and each value associated with a key is stored in that array. The key determines the position in the array where the value should be stored. This is why the key must be unique, to ensure that the hash table doesn't store different values in the same position in the array."}),"\n",(0,t.jsxs)(s.p,{children:["The position of value in the array is decided with a ",(0,t.jsx)(s.strong,{children:"hash function"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"hash-function",children:"Hash Function"}),"\n",(0,t.jsxs)(s.p,{children:["Hash function is a mathematical function that takes input and output an integer value called ",(0,t.jsx)(s.strong,{children:"hash code"}),". In this case, that hash code can be used as the index of the element in the array."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"/computer-security/hash-function",children:"hash function"}),"."]})}),"\n",(0,t.jsx)(s.h4,{id:"collision-mitigation",children:"Collision Mitigation"}),"\n",(0,t.jsx)(s.p,{children:"Hash function doesn't always produce a unique value for different inputs. In other words, it's possible for two different inputs to generate the same hash code, which would result in the same index in the array."}),"\n",(0,t.jsxs)(s.p,{children:["This is called a ",(0,t.jsx)(s.a,{href:"/computer-security/hash-function#collision",children:"collision"}),", and one technique to mitigate it is ",(0,t.jsx)(s.strong,{children:"chaining"}),". Chaining places a ",(0,t.jsx)(s.a,{href:"/data-structures-and-algorithms/linked-list",children:"linked list"})," at each position in the array, where collided elements are stored. When a collision occurs, the element is appended to the end of the list."]}),"\n",(0,t.jsx)(s.p,{children:"Another technique to mitigate collision, which is a trivial one is just increasing the array size. This may work for hash function that consider the size of array, such as the example below."}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["One of a simple hash function for hash table is the ",(0,t.jsx)(s.strong,{children:"division hash function"}),". The formula is: ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mtext,{children:"hash\xa0code"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsx)(s.mtext,{children:"key\xa0"}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"%"}),(0,t.jsx)(s.mtext,{children:"\xa0array\xa0size"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\text{hash code} = \\text{key } \\% \\text{ array size}"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord text",children:(0,t.jsx)(s.span,{className:"mord",children:"hash\xa0code"})}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.9444em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord text",children:(0,t.jsx)(s.span,{className:"mord",children:"key\xa0"})}),(0,t.jsx)(s.span,{className:"mord",children:"%"}),(0,t.jsx)(s.span,{className:"mord text",children:(0,t.jsx)(s.span,{className:"mord",children:"\xa0array\xa0size"})})]})]})]}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The hash code for some key will be obtained by calculating the remainder (% modulo) of the key by the array size."}),"\n",(0,t.jsxs)(s.p,{children:["For example, when we have ",(0,t.jsx)(s.code,{children:"key = 10"})," and the ",(0,t.jsx)(s.code,{children:"array size = 1000"}),", the hash code will be ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mn,{children:"10"}),(0,t.jsx)(s.mtext,{children:"\xa0"}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"%"}),(0,t.jsx)(s.mtext,{children:"\xa0"}),(0,t.jsx)(s.mn,{children:"1000"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsx)(s.mn,{children:"3"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"10 \\space \\% \\space 1000 = 3"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,t.jsx)(s.span,{className:"mord",children:"10"}),(0,t.jsx)(s.span,{className:"mspace",children:"\xa0"}),(0,t.jsx)(s.span,{className:"mord",children:"%"}),(0,t.jsx)(s.span,{className:"mspace",children:"\xa0"}),(0,t.jsx)(s.span,{className:"mord",children:"1000"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord",children:"3"})]})]})]}),", which mean the value associated with the key will be stored in the index 3 of the array."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Hash table illustration",src:a(2938).Z+"",width:"1283",height:"679"})}),"\n",(0,t.jsx)(s.p,{children:"Lastly, we also need to put the key inside the node of the list in the array, so that we can identify which key does a value belong to."})]})}function o(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2938:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/hash-table-illustration-3ef88b6bf5dcde303df2f608fdcaef83.png"},11151:(e,s,a)=>{a.d(s,{Z:()=>h,a:()=>r});var t=a(67294);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);