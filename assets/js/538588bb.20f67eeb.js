"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4319],{88498:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var t=n(85893),r=n(11151);const a={slug:"/computer-organization-and-architecture/alu",id:"alu",title:"ALU",description:"ALU"},o=void 0,s={id:"computer-organization-and-architecture/alu/alu",title:"ALU",description:"ALU",source:"@site/docs/computer-organization-and-architecture/03-alu/alu.md",sourceDirName:"computer-organization-and-architecture/03-alu",slug:"/computer-organization-and-architecture/alu",permalink:"/cs-notes/computer-organization-and-architecture/alu",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-organization-and-architecture/03-alu/alu.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1708081935,formattedLastUpdatedAt:"Feb 16, 2024",frontMatter:{slug:"/computer-organization-and-architecture/alu",id:"alu",title:"ALU",description:"ALU"},sidebar:"sidebar",previous:{title:"Boolean Logic",permalink:"/cs-notes/computer-organization-and-architecture/boolean-logic"},next:{title:"Registers & RAM",permalink:"/cs-notes/computer-organization-and-architecture/registers-and-ram"}},l={},h=[{value:"ALU",id:"alu",level:3},{value:"Overview",id:"overview",level:4},{value:"Arithmetic",id:"arithmetic",level:4},{value:"Half Adder",id:"half-adder",level:5},{value:"Full Adder",id:"full-adder",level:5},{value:"Ripple Carry Adder",id:"ripple-carry-adder",level:5},{value:"Other Operation",id:"other-operation",level:5},{value:"Logic Unit",id:"logic-unit",level:4}];function d(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Main Source :"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://youtu.be/1I5ZMmrOfnA?si=jFZSZjsoJQI8VMHc",children:"How Computers Calculate - the ALU: - Crash Course Computer Science #5"})})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arithmetic Logic Unit (ALU)"})," is the component of CPU that handles basic arithmetic operations such as addition, subtraction, multiplication, and division."]}),"\n",(0,t.jsxs)(i.p,{children:["Computers, as we know, only understand binary data, represented by electrical signals in the form of 1s and 0s. When performing calculations, computers rely on ",(0,t.jsx)(i.a,{href:"/computer-and-programming-fundamentals/binary-representation#binary-operation",children:"binary operations"})," to manipulate this binary data. Computer will leverage ",(0,t.jsx)(i.a,{href:"/computer-organization-and-architecture/boolean-logic#logic-gates",children:"various logic gates"}),", which is based on ",(0,t.jsx)(i.a,{href:"/computer-organization-and-architecture/boolean-logic",children:"boolean logic"})," in order to carry out binary operations."]}),"\n",(0,t.jsxs)(i.p,{children:["For example, consider an input electrical signal 1 followed by 0, and another input is 0 followed by 1. The first input, namely 1 and 0, will go through an ",(0,t.jsx)(i.a,{href:"/computer-organization-and-architecture/boolean-logic#logic-gates",children:"OR logic gate"}),', producing 1. The second input, 0 and 1, will go through another OR logic gate, producing 1 as well. The two result, which is 1 followed another 1, or "11", will represent 3 in binary number system.']}),"\n",(0,t.jsxs)(i.p,{children:["What we have just done is doing an ",(0,t.jsx)(i.a,{href:"/computer-and-programming-fundamentals/binary-representation#addition",children:"addition operation on binary"}),'. The first input "10", which represent the number 2 in decimal, and the second input "01", which represent number 1, is added together by using the OR logic gate, producing 3.']}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["This process essentially illustrate the ",(0,t.jsx)(i.a,{href:"/computer-and-programming-fundamentals/bitwise-operation#or",children:"bitwise OR operation"})]})}),"\n",(0,t.jsxs)(i.p,{children:["All of this process takes place in the ALU. The ALU takes input from the registers, which hold data temporarily, and performs operation based on the instruction from the ",(0,t.jsx)(i.a,{href:"/computer-organization-and-architecture/control-unit",children:"control unit"}),". The ALU operates on binary data in the form of bits or bytes, it produces output based on the operation performed."]}),"\n",(0,t.jsx)(i.h3,{id:"alu",children:"ALU"}),"\n",(0,t.jsx)(i.h4,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"ALU components",src:n(34135).Z+"",width:"582",height:"353"})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"The V-shape of ALU is just for illustration purposes."})}),"\n",(0,t.jsx)(i.p,{children:"Input of ALU :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Operand"})," : ALU takes two input called ",(0,t.jsx)(i.a,{href:"/computer-organization-and-architecture/coa-fundamentals#opcode--operand",children:"operand"}),", which represent the input binaries for operation to be performed."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/computer-organization-and-architecture/coa-fundamentals#opcode--operand",children:"Opcode"})})," : It is the instruction on what should ALU do based on the two operand."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Status"})," : Status provide information about the current status of ALU or the contextual information from the previous operations. The status is called a ",(0,t.jsx)(i.strong,{children:"flag"}),", it is obtained from a special registers called ",(0,t.jsx)(i.a,{href:"/computer-organization-and-architecture/registers-and-ram#type-of-registers",children:"status registers"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Some common flags are :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Zero Flag (Z)"})," : This flag is set when the result of an operation is zero. It is cleared when the result is nonzero."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Carry Flag (C)"})," : This flag is set when there is a carry or borrow in arithmetic operations such as addition or subtraction."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Carry in addition",src:n(81).Z+"",width:"348",height:"187"}),(0,t.jsx)(i.br,{}),"\n","Source : ",(0,t.jsx)(i.a,{href:"https://knowthecode.io/labs/basics-of-digitizing-data/episode-8",children:"https://knowthecode.io/labs/basics-of-digitizing-data/episode-8"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Overflow Flag (V)"})," : This flag is set when there is a signed overflow in arithmetic operations, meaning the result is too large or too small to be accurately represented with the available number of bits."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Sign Flag (S)"})," : This flag reflects the sign of the result. It is set when the result is negative and cleared when the result is positive or zero."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Output of ALU :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Result"})," : Represents the result of the arithmetic or logical operation performed based on the input."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Status"})," : The status flag that may be generated from the current operation."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"arithmetic",children:"Arithmetic"}),"\n",(0,t.jsx)(i.h5,{id:"half-adder",children:"Half Adder"}),"\n",(0,t.jsx)(i.p,{children:'The example we have done earlier, which is adding two binary using an OR logic gates will not work for all binary inputs. For example, when we have input of "01" (1 in decimal) and "11" (3 in decimal), if we use OR gates, we will produce "11", which still correspond to 3 in decimal. Notice that we didn\'t consider the carry that might have produced during the addition.'}),"\n",(0,t.jsxs)(i.p,{children:['We will need to modify the behavior of the addition system. We will also consider the carry by using the carry status flag. So, performing addition on "1" with "1" should produce "0". The logic gate that will produce result of "0" when given input "1" and "1", is the ',(0,t.jsx)(i.a,{href:"/computer-organization-and-architecture/boolean-logic#logic-gates",children:"XOR gate"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Here is the table of XOR gate possible input and output :"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"A   B   S   C-out\n-----------------\n0   0   0     0\n0   1   1     0\n1   0   1     0\n1   1   0     1\n"})}),"\n",(0,t.jsx)(i.p,{children:"Where A and B is the input, S is the result, C-out is the carry output. Now, how can we implement this? To produce S, we can easily use XOR gate, but how would we produce the C-out? One way is to perform AND operation using AND gate on input A and B, it will produce 1 for carry only if both input are 1."}),"\n",(0,t.jsxs)(i.p,{children:["So, we will combine the XOR gate with AND gate, this is called ",(0,t.jsx)(i.strong,{children:"half adder"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Half adder",src:n(81181).Z+"",width:"276",height:"177"}),(0,t.jsx)(i.br,{}),"\n","Source : ",(0,t.jsx)(i.a,{href:"https://id.m.wikipedia.org/wiki/Berkas:Half-adder.svg",children:"https://id.m.wikipedia.org/wiki/Berkas:Half-adder.svg"})," (with modification)"]}),"\n",(0,t.jsx)(i.h5,{id:"full-adder",children:"Full Adder"}),"\n",(0,t.jsxs)(i.p,{children:["Notice that half adder doesn't consider the carry from the previous operation. To account for input carry, another circuit called ",(0,t.jsx)(i.strong,{children:"full adder"})," will be used. The full adder will be constructed by combining multiple half adder with additional OR gate."]}),"\n",(0,t.jsx)(i.p,{children:"The first half adder produces the sum S and carry C. The sum S will be inputted again to the next half adder, which takes a carry input C-in. It will produce another sum S, which is the actual sum produced. The C from first half adder will be combined with the C from the second half adder with an OR gate, producing the actual carry C-out."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Full adder",src:n(47646).Z+"",width:"634",height:"510"}),(0,t.jsx)(i.br,{}),"\n","Source : ",(0,t.jsx)(i.a,{href:"https://id.m.wikipedia.org/wiki/Berkas:Full-adder.svg",children:"top"}),", ",(0,t.jsx)(i.a,{href:"https://youtu.be/1I5ZMmrOfnA?si=1Y2BGY9L7TvSwRFL&t=265",children:"bottom"})]}),"\n",(0,t.jsx)(i.p,{children:"Summarizing the full adder, it will take 3 input, which is A, B, C-in, and produces output S and C-out :"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"A   B   C-in    S   C-out\n---------------------------\n0   0    0      0     0\n0   0    1      1     0\n0   1    0      1     0\n0   1    1      0     1\n1   0    0      1     0\n1   0    1      0     1\n1   1    0      0     1\n1   1    1      1     1\n"})}),"\n",(0,t.jsx)(i.h5,{id:"ripple-carry-adder",children:"Ripple Carry Adder"}),"\n",(0,t.jsx)(i.p,{children:"That full adder operates on a single bit binary numbers. To extend the concept to process a larger number of bits, we can combine multiple full adder."}),"\n",(0,t.jsx)(i.p,{children:"For example, to create an 8-bit adder, we would need to combine eight full adders together."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"8-bit adder",src:n(51145).Z+"",width:"877",height:"213"}),(0,t.jsx)(i.br,{}),"\n","Source : ",(0,t.jsx)(i.a,{href:"https://www.engineersgarage.com/vhdl-tutorial-21-designing-an-8-bit-full-adder-circuit-using-vhdl/",children:"https://www.engineersgarage.com/vhdl-tutorial-21-designing-an-8-bit-full-adder-circuit-using-vhdl/"})]}),"\n",(0,t.jsxs)(i.p,{children:["Each full adder still takes three input, which are A, B, and C-in, which can be the carry from the previous adder. The sum S from sum0 up to sum7 will be concatenated together at the end, producing the 8-bit binary number. The sum0 output represents the ",(0,t.jsx)(i.a,{href:"/computer-and-programming-fundamentals/binary-representation#least--most-significant-bit",children:"least significant bit (LSB)"})," of the sum, while the sum7 output represents the ",(0,t.jsx)(i.a,{href:"/computer-and-programming-fundamentals/binary-representation#least--most-significant-bit",children:"most significant bit (MSB)"})," of the sum."]}),"\n",(0,t.jsxs)(i.p,{children:["This 8-bit adder is called ",(0,t.jsx)(i.strong,{children:"ripple carry adder"}),". The problem for this adder is, it is possible that the last adder produces a carry, which mean we will need to add that carry to the next column. However, we are using a limited 8-bit adder, we don't have that 9-bit column place. This problem is called ",(0,t.jsx)(i.strong,{children:"overflow"}),", which occur when we add or subtract number that are too large within our binary representation."]}),"\n",(0,t.jsx)(i.h5,{id:"other-operation",children:"Other Operation"}),"\n",(0,t.jsx)(i.p,{children:"In fact, other operation such as subtraction, multiplication, and division can be performed with only addition operation."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Subtraction"})," : Subtraction, for example, (2 - 5), can be rewritten as (2 + (-5)), which is an addition operation. To represent the number (-5) in binary, we can use the ",(0,t.jsx)(i.a,{href:"/computer-and-programming-fundamentals/binary-representation#two-complement",children:"two complement representation"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Multiplication"})," : Multiplication can be performed using iterative addition, 2 \xd7 3 is essentially just 2 + 2 + 2."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Division"})," : Division can also be implemented using iterative subtraction, 4 / 2 is 4 - 2. We will repeatedly subtract the divisor from the dividend until the remainder is less than the divisor."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"logic-unit",children:"Logic Unit"}),"\n",(0,t.jsx)(i.p,{children:"The logic unit in ALU performs various logical operations such as AND, OR, XOR, NOT on binary data."}),"\n",(0,t.jsxs)(i.p,{children:["For example, the logic unit is responsible for making logical decisions based on the results of the logical operations. We may use conditional statement (e.g., if input number is negative, then do A, else do B). We can use the logic unit to determine if input number is negative or not. To determine the sign of a number, we can check the ",(0,t.jsx)(i.a,{href:"/computer-and-programming-fundamentals/binary-representation#signed-magnitude",children:"sign bit"})," if it represents 1 or 0, using the AND gate."]}),"\n",(0,t.jsxs)(i.p,{children:["We will assume that we are using the ",(0,t.jsx)(i.a,{href:"/computer-and-programming-fundamentals/binary-representation#two-complement",children:"two complement representation"}),'. The leftmost bit will be the sign bit, we will check the sign by doing the logical AND operation with some arbitrary binary number that has "1" as its leftmost bit, and "0" for the remaining bit. When the input is negative number "1___" (the latter bit can be anything), doing the logical AND with binary "1000" will result in "1000", because the result is not 0, we can conclude that the sign bit is 1, indicating a negative number.']}),"\n",(0,t.jsx)(i.p,{children:'On the other hand, when the input is positive number "0___", doing logical AND with binary "1000" will result in 0, which indicates a positive number.'})]})}function c(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},51145:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/8-bit-adder-a0b5b2ae4d169634bf57f423ccf21d25.png"},34135:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/alu-6114284af626538ab0b21f443585b4bd.png"},81:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/carry-in-addition-ce68261d7b5f796784fb27f6f25859e6.png"},47646:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/full-adder-ff2608b157a23900f85a26de883c4b54.png"},81181:(e,i,n)=>{n.d(i,{Z:()=>t});const t="data:image/png;base64,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"},11151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>o});var t=n(67294);const r={},a=t.createContext(r);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);