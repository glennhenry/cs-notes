"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6179],{67661:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=i(85893),o=i(11151);const r={slug:"/compilers-and-programming-languages/compiler-optimization",id:"compiler-optimization",title:"Compiler Optimization",description:"Compiler Optimization"},a=void 0,s={id:"compilers-and-programming-languages/compiler-optimization/compiler-optimization",title:"Compiler Optimization",description:"Compiler Optimization",source:"@site/docs/compilers-and-programming-languages/15-compiler-optimization/compiler-optimization.md",sourceDirName:"compilers-and-programming-languages/15-compiler-optimization",slug:"/compilers-and-programming-languages/compiler-optimization",permalink:"/cs-notes/compilers-and-programming-languages/compiler-optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/compilers-and-programming-languages/15-compiler-optimization/compiler-optimization.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1723455088e3,frontMatter:{slug:"/compilers-and-programming-languages/compiler-optimization",id:"compiler-optimization",title:"Compiler Optimization",description:"Compiler Optimization"},sidebar:"sidebar",previous:{title:"Code Generation",permalink:"/cs-notes/compilers-and-programming-languages/code-generation"},next:{title:"Functional Languages",permalink:"/cs-notes/compilers-and-programming-languages/functional-languages"}},c={},l=[{value:"Constant Folding",id:"constant-folding",level:3},{value:"Strength Reduction",id:"strength-reduction",level:3},{value:"Loop Unrolling",id:"loop-unrolling",level:3},{value:"Code Hoisting",id:"code-hoisting",level:3},{value:"Function Inlining",id:"function-inlining",level:3},{value:"Math Optimization",id:"math-optimization",level:3},{value:"Dead Code Elimination",id:"dead-code-elimination",level:3},{value:"Low-Level Optimization",id:"low-level-optimization",level:3},{value:"Peephole Optimization",id:"peephole-optimization",level:4},{value:"Instruction Selection",id:"instruction-selection",level:4},{value:"Register Allocation",id:"register-allocation",level:3},{value:"Conflict",id:"conflict",level:4}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Main Source:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Book 1 chapter 12."})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Many optimization techniques can be applied to assembly code or intermediate representation (e.g., ",(0,t.jsx)(n.a,{href:"/compilers-and-programming-languages/semantic-analysis#abstract-syntax-tree",children:"AST"}),"). Some optimizations occur within local blocks, globally, or even across the entire program. It's worth noting that not all optimizations work in every scenario. Therefore, the compiler should analyze the program to determine whether to apply certain optimizations. This means that optimization can increase compilation time due to additional analysis."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The point of optimization is to improve the code while also ensuring that the overall program result remains the same. One thing that can prevent optimization is the presence of side effects. For example, a compiler may choose to evaluate one expression before another. However, it turns out that the second expression modifies the result of the first expression, which may change the overall result."})}),"\n",(0,t.jsx)(n.p,{children:"As much as optimization benefits us, it can make debugging and decompilation challenging, since the original code is gone. For example, result, breakpoints, line numbers, and variable values observed during debugging may not directly correspond to the original source code."}),"\n",(0,t.jsx)(n.p,{children:"Some type of optimization:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplification"}),": This includes removing redundancy and removing unnecessary computations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Control flow"}),": Targets control flow structure (e.g., loops and conditionals), such as reducing the number of branching to reduce ",(0,t.jsx)(n.a,{href:"/computer-organization-and-architecture/cpu-design#pipelining",children:"pipelining stall"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Memory and registers"}),": Efficient and correct allocation of registers and memory to reduce their usage and improve speed. For example, we can store frequently used variables in registers instead of the memory to increase access speed."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"constant-folding",children:"Constant Folding"}),"\n",(0,t.jsxs)(n.p,{children:["Constant folding simplify expressions (or part of them) that involve constants, which is known during compile-time. For example, the ",(0,t.jsx)(n.a,{href:"/compilers-and-programming-languages/intermediate-representation#optimization",children:"second calculation in a day"})," effectively demonstrate this concept."]}),"\n",(0,t.jsx)(n.p,{children:"During compilation, expressions are checked to determine whether they contain constants or not. Only if all the operands of the expression are known are they calculated. For example, arithmetic operation typically takes two operands."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"int result = 10 * 10 + 100 - 10\n\n// is optimized to:\nint result = 190\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"int result = 10 * 10 + x\n\n// is optimized to:\nint result = 100 + x\n"})}),"\n",(0,t.jsx)(n.h3,{id:"strength-reduction",children:"Strength Reduction"}),"\n",(0,t.jsx)(n.p,{children:"Strength reduction replaces an expression to equivalent but less expensive operation."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x * 8"})," is optimized to ",(0,t.jsx)(n.code,{children:"x << 3"}),", as ",(0,t.jsx)(n.a,{href:"/computer-and-programming-fundamentals/bitwise-operation#bit-shifting",children:"bit shifting"})," can be faster than multiplication. This is similar to division."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x ^ 2"})," (exponentiation) is optimized to ",(0,t.jsx)(n.code,{children:"x * x"}),", as exponentiation may use techniques like Taylor series, which may be more expensive than simple multiplication."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"loop-unrolling",children:"Loop Unrolling"}),"\n",(0,t.jsxs)(n.p,{children:["In branching, CPU can try to make an educated guess about the outcome of a branch instruction before it is actually executed. This will avoid ",(0,t.jsx)(n.a,{href:"/computer-organization-and-architecture/cpu-design#pipelining",children:"pipeline stalls"}),", which further improves performance."]}),"\n",(0,t.jsx)(n.p,{children:"Loop typically involve branch and jump instruction. These instructions introduce control flow changes, which may result in branch mispredictions. This happens when the CPU fails to make a correct guess. It would need to discard the speculatively executed instructions and fetch the correct instructions at the cost of extra time."}),"\n",(0,t.jsxs)(n.p,{children:["Loop unrolling modifies the structure of a loop by replicating loop iterations and combining them into a larger loop. This will make the loop repeat less, but does more work on each iteration. This will reduce the number of branching, which can increase ",(0,t.jsx)(n.a,{href:"/computer-organization-and-architecture/cpu-design#superscalar",children:"instruction-level parallelism"}),", the ability to execute multiple instruction simultaneously."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// Original loop\nfor (int i = 0; i < 4; i++) {\n    print(arr[i])\n}\n\n// Unrolled loop\nfor (int i = 0; i < 4; i += 2) {\n    print(arr[i])\n    print(arr[i + 1])\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The first loop will call ",(0,t.jsx)(n.code,{children:"arr[0]"}),", ",(0,t.jsx)(n.code,{children:"arr[1]"}),", ",(0,t.jsx)(n.code,{children:"arr[2]"}),", and ",(0,t.jsx)(n.code,{children:"arr[3]"}),", with each being called in a different iteration. Notice that the second loop increments ",(0,t.jsx)(n.code,{children:"i"})," by 2 instead. This change causes the second loop to call ",(0,t.jsx)(n.code,{children:"arr[0]"})," and ",(0,t.jsx)(n.code,{children:"arr[1]"}),", and then ",(0,t.jsx)(n.code,{children:"arr[2]"})," and ",(0,t.jsx)(n.code,{children:"arr[3]"})," in just two iterations. It's worth noting that loop unrolling may result in a different kind of loop structure, depending on the loop."]}),"\n",(0,t.jsxs)(n.p,{children:["The number of iterations within the unrolled loop is called the ",(0,t.jsx)(n.strong,{children:"unrolling factor"}),". It should be adjusted based on the scenario, as too much unrolling can also increase code size."]}),"\n",(0,t.jsx)(n.h3,{id:"code-hoisting",children:"Code Hoisting"}),"\n",(0,t.jsx)(n.p,{children:"Code hoisting is optimizing loop by moving constant expression out of the loop. By definition, a constant doesn't change. By doing this, we can reduce the redundancy of executing the same instructions repeatedly within the loop. This can be done by moving out the expression to be calculated beforehand."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"for (i = 0; i < 10; i++) {\n    a[x * y] = i\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, we calculate ",(0,t.jsx)(n.code,{children:"x * y"})," in every iteration. While it isn't known at compile-time, it always the same expression which never change every iteration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"t = x * y\nfor (i = 0; i < 10; i++) {\n    a[t] = i\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["However, this optimization requires an extra memory or register to store the result of the constant expression. Also, we need to be aware if computing the expression cause a side effect, which further cause the iteration to behave differently each time. The compiler must analyze whether the loop is safe to hoist or not. We call the loop that affects subsequent instruction, which mean it can't be hoisted as ",(0,t.jsx)(n.strong,{children:"loop-carried dependency"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"function-inlining",children:"Function Inlining"}),"\n",(0,t.jsx)(n.p,{children:"Function inlining is the process of substituting the body of function to the call site. It replaces a function call with the actual body of the called function. The purpose is to reduce the overhead associated with function calls, such as the cost of pushing and popping the stack, saving and restoring registers, and transferring control between functions."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"int quadratic(int a, int b, int c, int x) {\n    return a * x * x + b * x + c;\n}\n\nint a = 1;\nint b = 5;\nint c = 6;\nint x = 1;\n\nint result = quadratic(a, b, c, x);\n"})}),"\n",(0,t.jsx)(n.p,{children:"This simple calculation can be optimized to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"int quadratic(int a, int b, int c, int x) {\n    return a * x * x + b * x + c;\n}\n\nint a = 1;\nint b = 5;\nint c = 6;\nint x = 1;\n\nint result = a * x * x + b * x + c;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"math-optimization",children:"Math Optimization"}),"\n",(0,t.jsx)(n.p,{children:"In relation to math, compiler can apply mathematical-based optimization. This leverage mathematical properties and identities to simplify expressions and reducing redundant computation. For example, using the distributive property to factor out common terms or applying the associative and commutative properties to reorder operations."}),"\n",(0,t.jsx)(n.h3,{id:"dead-code-elimination",children:"Dead Code Elimination"}),"\n",(0,t.jsx)(n.p,{children:"Dead code refers code that will never be executed or code that has no impact on the program's behavior or output. This can be:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The unreachable piece of code after a return statement in a function."}),"\n",(0,t.jsx)(n.li,{children:"Conditional that rely on constant which is known at compile-time, this mean we can calculate the result of the branch beforehand, further removing the conditional code."}),"\n",(0,t.jsx)(n.li,{children:"Unused functions or variables."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The detection of dead code is typically performed on ",(0,t.jsx)(n.a,{href:"/compilers-and-programming-languages/intermediate-representation#control-flow-graph",children:"control flow graph"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Dead code in control flow graph",src:i(47924).Z+"",width:"495",height:"309"}),(0,t.jsx)(n.br,{}),"\n","Source: Book 1 page 203"]}),"\n",(0,t.jsxs)(n.p,{children:["In the top control flow graph, a true evaluation would return 10 immediately, without executing the other code. On the other hand, a false evaluation of ",(0,t.jsx)(n.code,{children:"x < y"})," would print hello, print goodbye, then finally return 30. With this code, we can't eliminate any piece of code because all of them is possible to be executed (unless ",(0,t.jsx)(n.code,{children:"x < y"})," is a known constant)."]}),"\n",(0,t.jsx)(n.p,{children:"In the bottom control flow graph, both true and false evaluations return immediately. This makes the print goodbye and return 30 statement not possible to be executed. From the perspective of the control flow graph, the nodes are not connected to each other. It can be thought as a graph reachability problem, asking if it is possible to reach some node from another."}),"\n",(0,t.jsx)(n.p,{children:"In the implementation, the compiler traverse the graph and mark each node as visited. Unmarked nodes are considered unreachable, thus safe to remove."}),"\n",(0,t.jsx)(n.h3,{id:"low-level-optimization",children:"Low-Level Optimization"}),"\n",(0,t.jsx)(n.p,{children:"These optimizations include those that takes account of target machine. It targets to utilize feature of underlying machine."}),"\n",(0,t.jsx)(n.h4,{id:"peephole-optimization",children:"Peephole Optimization"}),"\n",(0,t.jsx)(n.p,{children:'Peephole optimizations are applied on short sequences of instructions, typically within a fixed-size window or "peephole." It is to reduce redundancy and simplify code, while also making safe improvement.'}),"\n",(0,t.jsx)(n.p,{children:"For example, removing unnecessary load to register:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"MOVQ %R8, x\nMOVQ x, %R8\n\noptimized to:\nMOVQ %R8 x\n"})}),"\n",(0,t.jsx)(n.p,{children:"This instruction moves value of register 8 to x, but moves it back to register 8."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"MOVQ %R8, x\nMOVQ x, %R9\n\noptimized to:\nMOVQ %R8, x\nMOVQ %R8, %R9\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A direct move between register can be faster than loading value of ",(0,t.jsx)(n.code,{children:"x"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"instruction-selection",children:"Instruction Selection"}),"\n",(0,t.jsx)(n.p,{children:"Some machine has optimized unit to perform certain operation or able to execute common pattern or sequence of instruction in a single instruction. This optimization involves considering these features."}),"\n",(0,t.jsxs)(n.p,{children:["It uses a technique called ",(0,t.jsx)(n.strong,{children:"tree coverage"}),", where we keep track the patterns of tree (also called ",(0,t.jsx)(n.strong,{children:"tree templates"}),"), and match them during traversal of AST. The visited nodes are compared to the templates (which may be tons)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"X86 tree templates",src:i(85174).Z+"",width:"435",height:"432"}),(0,t.jsx)(n.br,{}),"\n","Source: Book 1 page 206"]}),"\n",(0,t.jsxs)(n.p,{children:["The above is an image of tree templates of some instructions in ",(0,t.jsx)(n.a,{href:"/computer-organization-and-architecture/isa#x86",children:"x86"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Then we can perform ",(0,t.jsx)(n.strong,{children:"tree rewriting"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Tree rewriting",src:i(76706).Z+"",width:"645",height:"701"}),(0,t.jsx)(n.br,{}),"\n","Source: Book 1 page 207 (included with steps)"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if we see a tree of ",(0,t.jsx)(n.code,{children:"IADD"})," with two operands, we should place the first operand in some register ",(0,t.jsx)(n.code,{children:"Ri"}),", the second operand in register ",(0,t.jsx)(n.code,{children:"Cj"}),", then make the instruction as ",(0,t.jsx)(n.code,{children:"ADDQ Cj, Ri"}),", so that the subtree can be omitted and ",(0,t.jsx)(n.code,{children:"Ri"})," can be used directly as the replacement (step 1 to 3)."]}),"\n",(0,t.jsx)(n.h3,{id:"register-allocation",children:"Register Allocation"}),"\n",(0,t.jsx)(n.p,{children:"Register allocation decides which register to use to store which variables. The goal is to minimize the number of memory accesses and maximize the usage of fast, low-latency registers, which can significantly improve performance. One problem is that the amount of register is limited, so we have to prioritize one value over another. The objective is to identify which variable is the best candidate to reside in the register."}),"\n",(0,t.jsx)(n.p,{children:"Some variables shouldn't be placed on the register, because they may be used by other functions. It is possible that these functions modify the variable that is stored in the memory, but we still keep its old value on the register. These could be I/O related variables, or one that is used by multiple modules and functions."}),"\n",(0,t.jsx)(n.p,{children:"There are many approaches to register allocation. The idea is, a frequently accessed variable may be better to be in the register than a rarely accessed one. As the program executes, we could gather information about the access frequency and select the some top variables to be in the register. This can also be performed during compile-time, by analyzing the code structure."}),"\n",(0,t.jsx)(n.p,{children:"Also, keep in mind that variable within loop likely to be accessed more, they are even better to be placed in the register to utilize cache. So, iteration of loop could be another factor of frequency (i.e., frequency can be weighted with iteration)."}),"\n",(0,t.jsx)(n.h4,{id:"conflict",children:"Conflict"}),"\n",(0,t.jsx)(n.p,{children:"Conflicts between variables refer to situations where two or more variables cannot be assigned to the same register simultaneously due to their overlapping live ranges. Live range is the span of the program where a variable is being actively used, typically between the first and last occurrence."}),"\n",(0,t.jsx)(n.p,{children:"Overlapping live ranges of variables mean they cannot be assigned to the same register simultaneously. Conversely, non-overlapping live ranges means that these variables are not simultaneously live at any point in the program execution, and therefore, they can reuse the same register without any conflicts."}),"\n",(0,t.jsxs)(n.p,{children:["We can draw a ",(0,t.jsx)(n.strong,{children:"conflict graph"})," to describe this."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Conflict graph",src:i(8476).Z+"",width:"481",height:"199"}),(0,t.jsx)(n.br,{}),"\n","Source: Book 1 page 210"]}),"\n",(0,t.jsxs)(n.p,{children:["This conflict graph describes a ",(0,t.jsx)(n.a,{href:"/data-structures-and-algorithms/graph",children:"graph coloring problem"}),", where the nodes represent variables and the edges represent interference between variables. The goal is to assign each node a different color (registers), such that no two adjacent nodes has the same color (avoiding interference)."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If register allocation were to be performed in global or multiple local block, then we just need to take account more piece of code. We can follow the control flow and construct the conflict graph based on it."})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8476:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/conflict-graph-1da77f73792f3bea4422ceec8e88c034.png"},47924:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/deadcode-98c375015ad5b1404fd9cc9a1d2e4467.png"},76706:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/tree-rewriting-dd6e844d94dd7ae8111ccd036caffced.png"},85174:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/x86-instruction-patterns-b5d0d75b4f9d3b1f182f654fac2aafd0.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var t=i(67294);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);