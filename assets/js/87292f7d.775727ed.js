"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[817],{97e3:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(85893),r=s(11151);const t={slug:"/computer-organization-and-architecture/assembly-language",id:"assembly-language",title:"Assembly Language",description:"Assembly Language"},a=void 0,o={id:"computer-organization-and-architecture/assembly-language/assembly-language",title:"Assembly Language",description:"Assembly Language",source:"@site/docs/computer-organization-and-architecture/08-assembly-language/assembly-language.md",sourceDirName:"computer-organization-and-architecture/08-assembly-language",slug:"/computer-organization-and-architecture/assembly-language",permalink:"/cs-notes/computer-organization-and-architecture/assembly-language",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-organization-and-architecture/08-assembly-language/assembly-language.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:171525087e4,frontMatter:{slug:"/computer-organization-and-architecture/assembly-language",id:"assembly-language",title:"Assembly Language",description:"Assembly Language"},sidebar:"sidebar",previous:{title:"Input/Output",permalink:"/cs-notes/computer-organization-and-architecture/input-output"},next:{title:"Von Neumann",permalink:"/cs-notes/computer-organization-and-architecture/von-neumann"}},l={},c=[{value:"Translation to Machine Code",id:"translation-to-machine-code",level:3},{value:"Example",id:"example",level:4},{value:"Type of Instruction",id:"type-of-instruction",level:3},{value:"Syntax &amp; Instructions",id:"syntax--instructions",level:3},{value:"Example",id:"example-1",level:4},{value:"x86 Assembly Language",id:"x86-assembly-language",level:3},{value:"Registers",id:"registers",level:4},{value:"Addressing Modes",id:"addressing-modes",level:4},{value:"Arithmetic",id:"arithmetic",level:4},{value:"Comparisons &amp; Jumps",id:"comparisons--jumps",level:4},{value:"Stack",id:"stack",level:4},{value:"Calling Function",id:"calling-function",level:4},{value:"ARM Assembly Language",id:"arm-assembly-language",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Assembly_language",children:"Assembly language - Wikipedia"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/4gwYkEK0gOk?si=faihHjHQNrGx28NV",children:"Assembly Language in 100 Seconds - Fireship"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Assembly Language (asm)"})," is a low-level programming language that is between the machine code (binary instructions understood by the computer's hardware) and high-level programming languages (which is readable by humans). asm can be thought as a human-readable representation of machine code instructions. With asm, programmers can see the code that interacts directly with the computer's hardware."]}),"\n",(0,i.jsx)(n.p,{children:"Due to the direct interaction with the hardware, asm is specific to a particular computer architecture or processor family. Different processors have their own assembly languages, tailored to their instruction sets, registers, and addressing modes. Therefore, code written in assembly language is not portable across different hardware platforms without modification. Similarly, this what makes one program can't always be run in any platform, because it has to be compiled to different asm."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"ASM",src:s(14827).Z+"",width:"682",height:"387"}),(0,i.jsx)(n.br,{}),"\n","Source : ",(0,i.jsx)(n.a,{href:"https://www.investopedia.com/terms/a/assembly-language.asp",children:"https://www.investopedia.com/terms/a/assembly-language.asp"})]}),"\n",(0,i.jsx)(n.h3,{id:"translation-to-machine-code",children:"Translation to Machine Code"}),"\n",(0,i.jsx)(n.p,{children:"Assembly language uses mnemonic instructions, which are short and easy to remember symbol that represent a single instruction in the machine. The instructions are then combined with operands, which are values or addresses that the instructions operate on."}),"\n",(0,i.jsxs)(n.p,{children:["Once assembly language is written, it needs to be translated into machine code, this process is known as ",(0,i.jsx)(n.strong,{children:"assembly"}),". An assembler is used to convert the mnemonic instructions and symbolic names into the binary instructions understood by the target processor. The assembler looks up on the instruction table how the mnemonic instructions map to the binary codes. It will also perform other necessary steps, such as, calculating memory addresses, calculating constant expressions, combining the instruction with the operands, etc."]}),"\n",(0,i.jsxs)(n.p,{children:["Assembly language also provide a way for programmers to define instruction that are not executed by the processor but provide instructions to the assembler, they are called ",(0,i.jsx)(n.strong,{children:"directives"}),". They help programmer to organize and control the assembly code."]}),"\n",(0,i.jsxs)(n.p,{children:["Assembler translates assembly language into machine code called ",(0,i.jsx)(n.strong,{children:"object files"}),". An assembly program that depends on external source files or libraries needs to be linked together. After object file of each is produced, a linker will resolve all external references to them. It locates and loads various definition of function to create the final executable."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["For example, we can write instruction (or produced from compilation) like ",(0,i.jsx)(n.code,{children:"MOV AL, 61h"}),", which instructs the processor to move the immediate value ",(0,i.jsx)(n.code,{children:"61h"})," (number 61 hexadecimal or 97 in decimal) to the register ",(0,i.jsx)(n.code,{children:"AX"}),". The assembler will translate this particular instruction to binary code : ",(0,i.jsx)(n.code,{children:"10110000 01100001"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"10110"})," is the ",(0,i.jsx)(n.code,{children:"MOV"})," instruction in binary."]}),"\n",(0,i.jsxs)(n.li,{children:["Register ",(0,i.jsx)(n.code,{children:"AX"})," is identified by ",(0,i.jsx)(n.code,{children:"000"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The binary equivalent of hexadecimal ",(0,i.jsx)(n.code,{children:"61"})," is ",(0,i.jsx)(n.code,{children:"01100001"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Assembly process from compilation",src:s(80550).Z+"",width:"1200",height:"492"}),(0,i.jsx)(n.br,{}),"\n","Source : ",(0,i.jsx)(n.a,{href:"https://www.techtarget.com/searchdatacenter/definition/assembler",children:"https://www.techtarget.com/searchdatacenter/definition/assembler"})]}),"\n",(0,i.jsx)(n.h3,{id:"type-of-instruction",children:"Type of Instruction"}),"\n",(0,i.jsx)(n.p,{children:"Common type of instructions in assembly language :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Movement Instructions"})," : These instructions move or copy data between registers, memory, and I/O devices."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Arithmetic and Logic Instructions"})," : These instructions perform arithmetic operations such as addition, subtraction, and multiplication; and logical operations such as bitwise AND, OR, NOT, and XOR on data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Control Flow Instructions"})," : These instructions control the flow of execution within a program. Examples include changing program flow with or without a condition, or jumping to specific part of program after a function finishes its execution."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Input/Output Instructions"})," : These instructions facilitate communication between the processor and I/O devices."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stack and Memory Management Instructions"})," : These instructions manipulate the stack (pushing or popping values) and manage memory operations such as allocating and deallocating memory."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"syntax--instructions",children:"Syntax & Instructions"}),"\n",(0,i.jsx)(n.p,{children:"Three elements of assembly code :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Directives"})," : Directives start with a dot, which indicates starting position of a section. Assembly code is divided into several sections, there are sections for code, which contains the actual logic of the program, section to declare variable and constants, and defining linker."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Labels"})," : End with a colon, indicating a point of interest in the program, which can be used in the code section, such as the beginning of a subroutine, a loop, or a branch target."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Instructions"})," : The actual assembly code, which is typically written line by line, with each line representing a single instruction."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There are many instruction keywords in asm :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Instructions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MOV (Move)"})," : Copies the value from one location to another. It is used to transfer data between registers, memory locations, and immediate values."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ADD (Addition)"})," : Performs addition between two values and stores the result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SUB (Subtraction)"})," : Performs subtraction between two values and stores the result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MUL (Multiplication)"})," : Performs multiplication between two values and stores the result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DIV (Division)"})," : Performs division between two values and stores the quotient."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"INC (Increment)"})," : Increments the value of a register or memory location by 1."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DEC (Decrement)"})," : Decrements the value of a register or memory location by 1."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Bitwise Operations"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AND (Bitwise AND)"})," : Performs a bitwise AND operation between two values."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OR (Bitwise OR)"})," : Performs a bitwise OR operation between two values."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"XOR (Bitwise XOR)"})," : Performs a bitwise XOR operation between two values."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Registers"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"AX, BX, CX, DX, EBX (general-purpose registers)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"AL (accumulator low)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"EAX (extended accumulator)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"SP (stack pointer)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"BP (base pointer)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"SI (source index)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"DI (destination index)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"IP (instruction pointer)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"FLAGS (flags register)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Control Flow"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CMP (Compare)"})," : Compares two values and sets the flags based on the result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JMP (Jump)"})," : Transfers program control to a specified location in the code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JZ (Jump if Zero)"})," : Jumps to a specified location if the zero flag is set."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JNZ (Jump if Not Zero)"})," : Jumps to a specified location if the zero flag is not - set."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JE (Jump if Equal)"})," : Jumps to a specified location if the equal flag is set."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JNE (Jump if Not Equal)"})," : Jumps to a specified location if the equal flag is not - set."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CALL (Call)"})," : Calls a subroutine or function at a specified location. This instruction actually include jumping to the function address and leaving a return address for the stack pointer to return after the subroutine is finished."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RET (Return)"})," : Returns from a subroutine to the calling code."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Stack Operations"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PUSH (Push)"})," : Pushes a value onto the top of the stack."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"POP (Pop)"})," : Removes a value from the top of the stack."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Directives"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"DB (define byte)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"DW (define word)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"DD (define doubleword)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"DQ (define quadword)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Data Types"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"BYTE"})," : A single byte of data"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WORD"})," : 16-bit value or two bytes of data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DWORD"})," : 32-bit value or four bytes of data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"QWORD"})," : 64-bit value or eight bytes of data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Example of asm code for adding two number"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-assembly",children:"section .data\n    num1 db 5     ; Define a variable called num1, which is a byte and has the value of 5\n    num2 db 3     ; Define a variable called num2, which is a byte and has the value of 3\n\nsection .text\n    global _start\n_start:\n    ; Load num1 into al register\n    mov al, [num1]\n\n    ; Add num2 with num1 in al\n    add al, [num2]\n\n    ; Store the result in another variable\n    mov [result], al\n\n    ; Exit the program\n    mov eax, 1       ; System call number for exit\n    xor ebx, ebx     ; Exit status code (0 for success)\n    int 0x80         ; Perform the system call\n\nsection .data\n    result db 0      ; Variable to store the result\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"section .data"})," is a section directive to define and initialize data such as variables, constants, and strings. The ",(0,i.jsx)(n.code,{children:"section .text"})," is the section for program's executable instructions. ",(0,i.jsx)(n.code,{children:"_start"})," is a label that marks the entry point of the program."]}),"\n",(0,i.jsx)(n.h3,{id:"x86-assembly-language",children:"x86 Assembly Language"}),"\n",(0,i.jsxs)(n.p,{children:["They are assembly language that represent instructions for ",(0,i.jsx)(n.a,{href:"/computer-organization-and-architecture/isa#x86",children:"x86 architecture"}),", which originate from the original Intel 8086 processor."]}),"\n",(0,i.jsx)(n.h4,{id:"registers",children:"Registers"}),"\n",(0,i.jsx)(n.p,{children:"There are 16 general purpose register for the 64-bit x86 architecture."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"x86_64 registers",src:s(32021).Z+"",width:"422",height:"49"}),(0,i.jsx)(n.br,{}),"\n","Source : Book 1 page 152"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%rax"})," : Accumulator register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%rbx"})," : Base register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%rcx"})," : Counter register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%rdx"})," : Data register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%rsi"})," : Source index register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%rdi"})," : Destination index register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%rbp"})," : Base pointer register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%rsp"})," : Stack pointer register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"%r8"})," - ",(0,i.jsx)(n.code,{children:"%r15"})," : Additional general-purpose registers"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Each register has evolved sizing from 8 bits, 16 bits, 32 bits, and 64 bits. For example ",(0,i.jsx)(n.code,{children:"%rax"})," was known ax ",(0,i.jsx)(n.code,{children:"%eax"})," in 32 bits."]}),"\n",(0,i.jsx)(n.h4,{id:"addressing-modes",children:"Addressing Modes"}),"\n",(0,i.jsxs)(n.p,{children:["To specify the location of data operands or instructions (also known as ",(0,i.jsx)(n.strong,{children:"addressing modes"}),") :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Instruction is provided with the data types for its operand. The ",(0,i.jsx)(n.code,{children:"MOV"})," instruction moves data between registers and memory. ",(0,i.jsx)(n.code,{children:"MOVB"}),", ",(0,i.jsx)(n.code,{children:"MOVW"}),", ",(0,i.jsx)(n.code,{children:"MOVL"}),", ",(0,i.jsx)(n.code,{children:"MOVQ"}),", moves byte (8 bits), word (16 bits), long (32 bits), and quadword (64 bits), respectively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Global addressing"})," : Operand is global value, can be a defined label."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Immediate addressing"})," : The operand 42 is a constant value ",(0,i.jsx)(n.code,{children:"MOVQ %rax, 42"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Register addressing"})," : Operand ",(0,i.jsx)(n.code,{children:"rbx"})," originate from a register ",(0,i.jsx)(n.code,{children:"MOVQ %rax, %rbx"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Indirect addressing"})," : Operand is indirectly located in a register by memory address, such as the stack pointer ",(0,i.jsx)(n.code,{children:"%rsp"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Base-relative addressing"})," : Operand is specified from an address added with constant (e.g., ",(0,i.jsx)(n.code,{children:"-16(%rcx)"}),", 16 bytes before ",(0,i.jsx)(n.code,{children:"%rcx"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Complex addressing"})," : Used to address element in an array in the form of ",(0,i.jsx)(n.code,{children:"D(Ra, Rb, C)"}),", which refers to the value at address ",(0,i.jsx)(n.code,{children:"Ra + Rb * C + D"}),". ",(0,i.jsx)(n.code,{children:"Ra"})," and ",(0,i.jsx)(n.code,{children:"Rb"})," are general purpose registers, which gives size of the array and index of the array, respectively. ",(0,i.jsx)(n.code,{children:"C"})," gives the size of the items in the array and ",(0,i.jsx)(n.code,{children:"D"})," is offset relative to that item.\n",(0,i.jsx)(n.img,{alt:"x86 addressing modes",src:s(50391).Z+"",width:"407",height:"134"}),(0,i.jsx)(n.br,{}),"\n","Source : Book 1 page 155"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"arithmetic",children:"Arithmetic"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ADD"})," and ",(0,i.jsx)(n.code,{children:"SUB"})," adds and subtracts, respectively, both require two operands, which a source and target. For example, ",(0,i.jsx)(n.code,{children:"ADDQ %rbx, %rax"})," adds ",(0,i.jsx)(n.code,{children:"%rbx"})," to ",(0,i.jsx)(n.code,{children:"%rax"}),", overwriting previous content of ",(0,i.jsx)(n.code,{children:"%rax"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"More complex example can be translated into :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"c = a + b + b\n\nMOVQ a, %rax\nMOVQ b, %rbx\nADDQ %rbx, %rax\nADDQ %rbx, %rax\nMOVQ %rax, c\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"IMUL"})," (integer multiply) of two 64 bits integer can potentially result in 126 bits integer. To multiply, we must provide one operand in the ",(0,i.jsx)(n.code,{children:"IMUL"})," instruction and place one operand in ",(0,i.jsx)(n.code,{children:"%rax"}),". The lower 64 bits of the result is stored in ",(0,i.jsx)(n.code,{children:"%rax"}),", while the higher one is placed implicitly in ",(0,i.jsx)(n.code,{children:"%rdx"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"c = b * (b + a)\n\nMOVQ a, %rax\nMOVQ b, %rbx\nADDQ %rbx, %rax\nIMULQ %rbx\nMOVQ %rax, c\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"IDIV"})," instruction performs division by dividing a 128-bit dividend, by a specified divisor. The low 64 bits and high 64 bits are stored in ",(0,i.jsx)(n.code,{children:"%rax"})," and ",(0,i.jsx)(n.code,{children:"%rdx"}),", respectively. The quotient is then stored in ",(0,i.jsx)(n.code,{children:"%rax"}),", and the remainder is stored in ",(0,i.jsx)(n.code,{children:"%rdx"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"INC"})," and ",(0,i.jsx)(n.code,{children:"DEC"})," increment and decrement register destructively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"a = ++b\n\nMOVQ b, %rax\nINCQ %rax\nMOVQ %rax,b\nMOVQ %rax, a\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AND"}),", ",(0,i.jsx)(n.code,{children:"OR"}),", ",(0,i.jsx)(n.code,{children:"XOR"})," perform ",(0,i.jsx)(n.a,{href:"/computer-and-programming-fundamentals/bitwise-operation",children:"bitwise operations"})," on two values, while ",(0,i.jsx)(n.code,{children:"NOT"})," performs on one value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"c = (a & ~b)\n\nMOVQ a, %rax\nMOVQ b, %rbx\nNOTQ %rbx\nANDQ %rax, %rbx\nMOVQ %rbx, c\n"})}),"\n",(0,i.jsx)(n.h4,{id:"comparisons--jumps",children:"Comparisons & Jumps"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JMP"})," may be used to jump between part of program. It can be used with label to create a loop :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      MOVQ $0, %rax\nloop: INCQ %rax\n      CMPQ $5, %rax\n      JLE loop\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This initializes ",(0,i.jsx)(n.code,{children:"%rax"})," with the value 0. It is then incremented with ",(0,i.jsx)(n.code,{children:"INCQ"})," and compared with the value 5 using the ",(0,i.jsx)(n.code,{children:"CMPQ"})," instruction. If the comparison fails, it jumps back to the starting loop. Under the hood, the comparison should set internal registers (called ",(0,i.jsx)(n.code,{children:"EFLAGS"}),") to 0 or 1, indicating the result. We don't need to look at that register directly; it is done implicitly."]}),"\n",(0,i.jsxs)(n.p,{children:["If we were to remove comparison and use ",(0,i.jsx)(n.code,{children:"JMP"})," instead of ",(0,i.jsx)(n.code,{children:"JLE"}),", this would result in infinite loop."]}),"\n",(0,i.jsx)(n.h4,{id:"stack",children:"Stack"}),"\n",(0,i.jsxs)(n.p,{children:["Stack operation that pushes and pops element from the stack is done by manipulating the stack pointer (",(0,i.jsx)(n.code,{children:"%rsp"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SUBQ $8, %rsp\nMOVQ %rax, (%rsp)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is essentially pushing ",(0,i.jsx)(n.code,{children:"%rax"})," to the stack. Stack pointer, keeping track the bottom-most item on the stack (actually the top of stack because the stack grows to bottom), is subtracted by 8 (the size of ",(0,i.jsx)(n.code,{children:"%rax"})," in bytes), then we move content of ",(0,i.jsx)(n.code,{children:"%rax"})," to the location pointed by the stack pointer."]}),"\n",(0,i.jsx)(n.p,{children:"Popping a value is kind of the reverse process."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MOVQ (%rsp), %rax\nADDQ $8, %rsp\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Both operation is frequently used that they have their own instructions, namely ",(0,i.jsx)(n.code,{children:"PUSH"})," and ",(0,i.jsx)(n.code,{children:"POP"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"calling-function",children:"Calling Function"}),"\n",(0,i.jsxs)(n.p,{children:["A function can be called with the ",(0,i.jsx)(n.code,{children:"CALL"})," instruction. Under the hood, it pushes the current instruction pointer (return address) onto the stack, then jump to the code location of the function. Also, we need to place the function arguments (as well as evaluate them) in some specified registers, this is same for the return value."]}),"\n",(0,i.jsxs)(n.p,{children:["Registers need to be preserved and restored across function call. Depending on the language, it can either be the caller or the callee that saves the value. See ",(0,i.jsx)(n.a,{href:"/compilers-and-programming-languages/subroutines#calling-sequences",children:"calling sequences"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Example of function call in C translated into x86 assembly",src:s(71499).Z+"",width:"508",height:"696"}),(0,i.jsx)(n.br,{}),"\n","Source : Book 1 page 161"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"/compilers-and-programming-languages/subroutines#call-stack",children:"call stack"})]})}),"\n",(0,i.jsx)(n.h3,{id:"arm-assembly-language",children:"ARM Assembly Language"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},14827:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/asm-ad8702d820278bb34093ec5aeeb249b0.png"},80550:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/assembler-2cb059a1493597b8d3c9944c07233b46.png"},50391:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/x86-addressing-modes-f743ac3a28e7f1fe3252ccec39389c9d.png"},71499:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/x86-function-call-af5faadf341012a50e44bf912a56e098.png"},32021:(e,n,s)=>{s.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaYAAAAxCAYAAACRZQ1MAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABcKSURBVHhe7Z0JuFbDG8DHUqFURBTZk+y7KCEpa6KERCEqhLIUQolEEhWVIq2WlNJCWSqyJpGyVRQqyZLsovnP7+3Mdfr+3733W2a+++WZ3/Pce8+cc77vnjnvvDPvvO8sm2iDCgQCgUAgT9g0+hsIBAKBQF4QGqZAIBAI5BWhYQoEAoFAXhEapkAgEAjkFaFhCgQCgUBeERqmQCAQCOQVoWEKBAKBQF4RGqZAIBAI5BVZNUzMzf3tt9+i1L98/PHH6ocffohSGwd//fWXWrt2bZT6l9dffz06Khw+y3333HOP+vLLL6OzJcd/SS7kI9kc8FTkkozly5er8ePHq4ceeig6k1tc5yeRdevWRUd+yUZfkvH333+rt99+W/Xp00d98skn0dnc5OeXX36Jjv5l9erVasGCBVGqcL766is1ZswYNWTIkOhMyeNaNiVBxg3TU089pbp06aKeffZZdfHFF29QgPr27au22WabKJX/3HjjjWrUqFHq7rvvVv369YvOKvXjjz+qSZMmRanC+fXXX9Wnn36qOnfurL799tvobMnwX5HLmjVrVMuWLdWLL76oWrdurV577bXoilIvv/yyNDCZwOeGDRumRo8eHZ3JDb7yE6d9+/bq1FNPjVL+yFZfkvHHH3+oL774QnXs2FF9/fXX0VmlDjroIDH4fPDhhx+qyy67TE2fPl2dc8456ptvvomuKDFcKlSoEKUKh2d95JFHRN/yAR+yKRGM9ZY2xurTZcuW1cb6lvTRRx+tjRUqxy+99JJ++umn5XhjYObMmdoUfjkmX2XKlNHfffedpO+8805tLCI5Lo7ff/8dM1jPnj07OpN7/kty6datm77mmmvkeNq0aQUygrZt22rT4Eap9DFKq4855pgolRt85sdiLGI9YcKEKOUHV/pSGKVLl9am8Y5SWo8YMUKbBiRKueX4448v0I+bbrqpQD7ojzEy5TgVTGOgjUEQpUoO37LJJRn1mOgVbL755gXW93bbbae+//57OX7mmWdU06ZN5XhjACtt1113leMttthCfn766SexMOji77zzznJtY+C/JJfPP/9c7bbbbnIczwe9ixNPPFFtsskmkt5YyEV+TGOrGjVqFKX8kGt9adGihdp///2jlFviedl+++0LZEJv6corr5TjjYn/Ul2WUcO0yy67yA8xC7rg+IRxIRirPKmS4erCd3zKKaeoN954QxnLRBlrXq7hD33wwQflcwceeKAyLbuch5tvvlkdfvjh6qOPPorOKHXLLbcoY0VFqew54YQTJB/4uN977z217777qt13310K51VXXRXd9S8I/9Zbb5VKgIbgjDPOUFdffXV0dX1+eEZjuaiTTjpJvfPOO3L+gw8+UPXr15e8W3hvuNuWLVsWncmOdOUCTzzxhLrgggvUww8/rB577DF5btySwDNffvnl6tBDD1Wnn366xM9yIRPgvVJW4JVXXpFnBBrYJk2ayHEc/OfIi+flnR955JEF7jrcaL1791bNmzcXGeBOs6C0nG/YsKGUU+DdtWrVSr355puSdoGr/Pz555+qe/fu6vbbb1eXXnqpuu666/7vfp+kqy9F6T7g0rz22mvle3Gr/fPPP9GVDcumDyjTVsZWJpQH09tIWokXpStAjOzkk0+Wesz0wKQuQF640JE/evjAAw+o/fbbTx133HHidneJS9kglxtuuEFcgxdeeKFcx21pev7q2GOPlbqPslazZk115plnyv9zStRzSptVq1bpgQMH6iFDhuhFixbJucJcEkZA2iiXuLro8tKtNBWlXDONkriZgK7oZpttpufMmSNpPte4cWNtXrA2AtZjx46Vz7pm3rx5ko/BgwdrU4lpYzlJ1z4ZxgLRRtCSl9atW+sePXroNm3aFLjyzj//fD1r1ixtCog2AtMVKlTQRojyWSNcbXo0euTIkZI3ri9fvlyuuSIduYBRLG0URdeqVUubSk6bClovXrxY3nWHDh20KeTy7k0lKHLJlUxg0qRJ4soxFYI8Py4eU5FHVzdkxYoV2iiQNoooz2qMBf3oo4/qpUuX6gYNGuiVK1fKfbgzTCW/gSsP+ZjejHwOyLepqOTYJS7yY4wibRrZ6C6tjWEjf+39devWlbRP0tGXonT/tttu0/369ZNj3gffx33WlWfLJvf5YO3atfrxxx/Xw4YN09OnT5dzptHXpgKW40QK0xVceciJuoy0aXDEpW6MONGfuXPniovSNE56ypQp2vSe5d5NN91Ujxo1Kvp2N7iQDZ+rVq2aXIdXX31VDx06VP/888/y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"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(67294);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);