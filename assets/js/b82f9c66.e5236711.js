"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[555],{90235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(85893),n=r(11151);const a={slug:"/programming-language-theory/target-architecture",id:"target-architecture",title:"Target Architecture",description:"Target Architecture"},o=void 0,s={id:"programming-language-theory/target-architecture/target-architecture",title:"Target Architecture",description:"Target Architecture",source:"@site/docs/programming-language-theory/06-target-architecture/target-architecture.md",sourceDirName:"programming-language-theory/06-target-architecture",slug:"/programming-language-theory/target-architecture",permalink:"/cs-notes/programming-language-theory/target-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/programming-language-theory/06-target-architecture/target-architecture.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1712576228,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{slug:"/programming-language-theory/target-architecture",id:"target-architecture",title:"Target Architecture",description:"Target Architecture"},sidebar:"sidebar",previous:{title:"Semantic Analysis",permalink:"/cs-notes/programming-language-theory/semantic-analysis"},next:{title:"Control Flow",permalink:"/cs-notes/programming-language-theory/control-flow"}},c={},l=[{value:"Memory",id:"memory",level:3},{value:"Instruction Set Architecture",id:"instruction-set-architecture",level:3},{value:"Optimization",id:"optimization",level:3},{value:"Pipeline",id:"pipeline",level:4},{value:"Register Allocation",id:"register-allocation",level:4}];function h(e){const t={a:"a",admonition:"admonition",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Book chapter 5"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Compiler translate source code into machine code. In order to translate, it will need to know the source language (the programming language) and the target language. The target language differs depending on the processor's architecture. Every computer system has its own unique architecture, i.e., they have their own way to execute instruction, organize memory, and utilizing other hardware features."}),"\n",(0,i.jsx)(t.p,{children:"The compiler needs to be aware of the target architecture for which it intends to generate code. It needs to know the available instructions, the way memory is organized, and other details of the architecture. This knowledge enables compiler to perform tasks like register allocation, instruction selection, and optimization."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["The two popular architecture are ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/isa#cisc",children:"CISC (e.g., x86)"})," and ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/isa#risc",children:"RISC (e.g., ARM)"}),", see also ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/isa",children:"ISA"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"memory",children:"Memory"}),"\n",(0,i.jsx)(t.p,{children:"There are three types of memory : registers, main memory or RAM, and external device like hard drives. These three are ordered based on their hierarchy, with the higher being faster to access but lower capacity."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Registers hold the smallest amount of data including intermediate result of the execution of an instruction. Some registers are also used to keep track important information about instruction, such as memory address, stack pointer, bit as flags for ALU operation."}),"\n",(0,i.jsx)(t.li,{children:"Main memory hold the program data and codes."}),"\n",(0,i.jsx)(t.li,{children:"External devices like hard drive typically used for storing large amounts of data, such as system or files, databases, or multimedia content."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["See also ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/registers-and-ram",children:"registers & ram"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["There is another type of memory faster than main memory, though slower than registers, known as ",(0,i.jsx)(t.strong,{children:"cache memory"}),". However, compilers do not directly manage cache memory as it is handled by the CPU itself. Nevertheless, compilers can optimize code generation to indirectly improve cache performance. Cache memory relies on frequent data access, so one improvement the compiler can make is rearranging the code to access data stored close together in memory."]}),"\n",(0,i.jsxs)(t.p,{children:["Compiler needs to know the characteristics of memory, such as the ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/coa-fundamentals#word-size",children:"minimum memory to address"}),", ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/coa-fundamentals#padding",children:"padding"}),", ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/coa-fundamentals#endianness",children:"endianness"}),", ",(0,i.jsx)(t.a,{href:"/computer-and-programming-fundamentals/floating-number#floating-number-representation",children:"floating-point representation"}),", ",(0,i.jsx)(t.a,{href:"/computer-and-programming-fundamentals/binary-representation#binary-representation",children:"binary representation"})," or the size of data types."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Due to architectural and requirements differences, some computers may store data types, such as integers differently. While the usual integer size is 4 bytes, others may use 2 bytes or even 8 bytes. The compiler needs to be aware of these variations to generate machine code capable of handling different size representations correctly, ensuring the appropriate number of bytes are read or written."})}),"\n",(0,i.jsx)(t.h3,{id:"instruction-set-architecture",children:"Instruction Set Architecture"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/isa",children:"Instruction set architecture (ISA)"})," is the set of instruction offered by the machine that the running program must follow in order to control the CPU."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Available instructions"})," : To generate correct code and possibly optimize it, compilers need to know the complete set of instructions supported by the target architecture. This includes arithmetic instructions, logical instructions, data transfer instructions, control flow instructions, etc."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Instruction formats"})," : Compilers need to know how the target architecture specify its instruction."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Register set"})," : ISA specifies the available registers and their purposes. Compilers need to know this to determine the appropriate machine code instructions and register usage during code generation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Operand types and sizes"})," : ISA defines the types and sizes of operands that can be used with each instruction. The compiler needs to know these operand types and sizes to ensure proper type checking, generate correct instructions, and handle implicit type conversions, if necessary."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Addressing modes"})," : This describes how memory operands are specified. It determines whether the CPU requires a memory address, register, immediate value, or any other form of data to perform computations."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"optimization",children:"Optimization"}),"\n",(0,i.jsx)(t.h4,{id:"pipeline",children:"Pipeline"}),"\n",(0,i.jsxs)(t.p,{children:["CPU uses technique like ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/cpu-design#pipelining",children:"pipelining"}),", in which instruction are executed in parallel. Sometimes, pipeline doesn't always work and may not work optimally, these problems are often called as hazards."]}),"\n",(0,i.jsxs)(t.p,{children:["It is possible that parallel instruction access same register, this is called ",(0,i.jsx)(t.strong,{children:"structural (or resource) hazard"}),". When an instruction depends on the result that is not available yet, this is called ",(0,i.jsx)(t.strong,{children:"data hazard"}),". The CPU also make a prediction of conditional branch to execute instruction more efficiently. A ",(0,i.jsx)(t.strong,{children:"control hazard"})," happens when the branch prediction is wrong, making the specific pipeline process unnecessary."]}),"\n",(0,i.jsx)(t.p,{children:"One optimization that could be made by compiler to reduce hazard is, making optimization to loops. Loop optimizations like loop unrolling and loop fusion increase the number of instructions available. While it increases the number of instructions, these can potentially be better for parallel execution. As iterations get more independent, pipeline throughput can be improved."}),"\n",(0,i.jsxs)(t.p,{children:["Another thing is, the compiler itself can rearrange the instruction. Compiler analyzes the dependencies between instructions and rearrange them to maximize parallelism as well as avoiding data hazard. We don't need to strictly follow the sequential order of the program, instead, we can execute instructions based on the availability of operands, this technique is called ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/cpu-design#out-of-order-execution",children:"out-of-order execution"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"register-allocation",children:"Register Allocation"}),"\n",(0,i.jsx)(t.p,{children:"Register allocation is the process of assigning variables and values to physical registers in a computer program during compilation. The goal is to efficiently use registers to keep frequently used data with a constraint of limited number of physical registers."}),"\n",(0,i.jsx)(t.p,{children:"Compilers use virtual registers during compilation process to represent variables and intermediate values in a program. Register allocation is when a compiler maps virtual registers to physical registers, considering factors such as data dependencies, register availability, variable lifetimes, and interference between variables."}),"\n",(0,i.jsx)(t.p,{children:"Depending on the architecture, they have the different number of physical registers, size, and types. The arrangement of instruction also affect the availability of registers, a thoughtful scheduling can further optimize register allocation and utilization."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"More about compiler optimization."})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var i=r(67294);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);