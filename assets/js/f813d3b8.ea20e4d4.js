"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[992],{48200:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=r(85893),t=r(11151);const s={slug:"/computer-security/reverse-engineering",id:"reverse-engineering",title:"Reverse Engineering",description:"Reverse Engineering"},o=void 0,a={id:"computer-security/reverse-engineering/reverse-engineering",title:"Reverse Engineering",description:"Reverse Engineering",source:"@site/docs/computer-security/17-reverse-engineering/reverse-engineering.md",sourceDirName:"computer-security/17-reverse-engineering",slug:"/computer-security/reverse-engineering",permalink:"/cs-notes/computer-security/reverse-engineering",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-security/17-reverse-engineering/reverse-engineering.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1705573686,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{slug:"/computer-security/reverse-engineering",id:"reverse-engineering",title:"Reverse Engineering",description:"Reverse Engineering"},sidebar:"sidebar",previous:{title:"Antivirus & Antimalware",permalink:"/cs-notes/computer-security/antivirus-antimalware"},next:{title:"Network Security",permalink:"/cs-notes/computer-security/network-security"}},c={},l=[{value:"Reverse Engineering Technique",id:"reverse-engineering-technique",level:3},{value:"Trial &amp; Error",id:"trial--error",level:4},{value:"Decompilation",id:"decompilation",level:4},{value:"Disassembly",id:"disassembly",level:4}];function g(e){const n={a:"a",br:"br",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Reverse_engineering",children:"Reverse engineering - Wikipedia"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Other Google search"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reverse Engineering"})," is the process of analyzing software or computer system to understand their inner workings, design, or functionality. It is a broad term that encompasses various techniques and approaches."]}),"\n",(0,i.jsx)(n.h3,{id:"reverse-engineering-technique",children:"Reverse Engineering Technique"}),"\n",(0,i.jsx)(n.h4,{id:"trial--error",children:"Trial & Error"}),"\n",(0,i.jsx)(n.p,{children:"Trial and error involves systematically experimenting with different inputs, configurations, or parameters of a software or system to understand its behavior. Reverse engineers observe the outcomes of these experiments, after many experiments, they will come up in conclusion of how it works."}),"\n",(0,i.jsx)(n.p,{children:"For example, we may have a program that connect to server, suppose we want to know how the server works. We can try each setting and input to see how will the server respond, including the invalid request. Seeing the response, we will get the idea of how it works a little by little."}),"\n",(0,i.jsx)(n.h4,{id:"decompilation",children:"Decompilation"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Decompilation"})," is a technique to translate compiled binary code back into a higher-level programming language. When we program in higher-level language, the source code will be converted down into machine language (e.g., ",(0,i.jsx)(n.a,{href:"/computer-organization-and-architecture/assembly-language",children:"assembly language"}),"), which will be executed by computers. These codes are hard to understand by human, by decompiling it back to higher-level language, we can understand it easier."]}),"\n",(0,i.jsx)(n.p,{children:"Decompiling can recreate (or at least approximate) the original source code from executable code to higher-level language. This will help reverse engineering process a lot, because we are able to see the readable code. However, decompilation tools are not perfect. The resulting decompiled code may not be an exact replica of the original source code. Decompilers can face challenge when reconstructing the code due to compilers optimizations that results in loss of information during the compilation process, and other factors."}),"\n",(0,i.jsx)(n.h4,{id:"disassembly",children:"Disassembly"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Disassembly"})," is a technique to convert machine code or binary instructions back into ",(0,i.jsx)(n.a,{href:"/computer-organization-and-architecture/assembly-language",children:"assembly language"}),". It doesn't convert back to higher-level language, but it converts it into readable machine code."]}),"\n",(0,i.jsx)(n.p,{children:"Disassembly provides more detail about the low-level instruction, it doesn't need to approximate high-level abstraction. It can reveal specific instructions executed by the processor, including memory accesses, register operations, and control flow."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Disassembling a code",src:r(86156).Z+"",width:"644",height:"335"}),(0,i.jsx)(n.br,{}),"\n","Source : ",(0,i.jsx)(n.a,{href:"https://blog.ret2.io/2017/11/16/dangers-of-the-decompiler/",children:"https://blog.ret2.io/2017/11/16/dangers-of-the-decompiler/"})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},86156:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/disassembly-b0d138cd7acc8ceabb6873fcf526e531.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var i=r(67294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);