"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/computer-and-programming-fundamentals/operating-system",id:"operating-system",title:"Operating System",description:"Operating System"},o=void 0,s={unversionedId:"computer-and-programming-fundamentals/operating-system/operating-system",id:"computer-and-programming-fundamentals/operating-system/operating-system",title:"Operating System",description:"Operating System",source:"@site/docs/computer-and-programming-fundamentals/06-operating-system/operating-system.md",sourceDirName:"computer-and-programming-fundamentals/06-operating-system",slug:"/computer-and-programming-fundamentals/operating-system",permalink:"/cs-notes/computer-and-programming-fundamentals/operating-system",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-and-programming-fundamentals/06-operating-system/operating-system.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1699354982,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{slug:"/computer-and-programming-fundamentals/operating-system",id:"operating-system",title:"Operating System",description:"Operating System"},sidebar:"sidebar",previous:{title:"Data Representation",permalink:"/cs-notes/computer-and-programming-fundamentals/data-representation"},next:{title:"Memory",permalink:"/cs-notes/computer-and-programming-fundamentals/memory"}},p={},l=[{value:"Primary Function",id:"primary-function",level:3},{value:"Kernel",id:"kernel",level:3},{value:"Program Execution",id:"program-execution",level:3},{value:"UNIX",id:"unix",level:3}],m={toc:l},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Main Source :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Operating_system"},"Operating system - Wikipedia")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Operating System (OS)")," is a software system that act as a bridge between hardware and user that uses application. It provides a platform and set of services that enable the execution of software programs and the management of computer resources."),(0,a.kt)("h3",{id:"primary-function"},"Primary Function"),(0,a.kt)("p",null,"In theory, it is possible for a computer to function without an operating system (OS) when it's used by a user to run an application. However, it would be highly complex, time-consuming, and impractical for general-purpose computing. Operating systems provide a crucial layer of abstraction and functionality that simplifies the development and usage of computer systems."),(0,a.kt)("p",null,"The primary function of OS includes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Process Management")," : The operating system manages the execution of software programs, known as ",(0,a.kt)("strong",{parentName:"p"},"processes"),". The OS will schedule when should a program be executed, considering factors like priority, fairness, and resource availability.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Resource Management")," : An OS allocates system resources, such as CPU time and memory, to different processes, setting up data structures, and initializing the process's execution context.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"File System Management")," : Provide an abstraction layer to handle file in computer including organizing, storing, and retrieving data on storage devices, such as hard drives, solid-state drives.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Device Management")," : OS provides ",(0,a.kt)("strong",{parentName:"p"},"device driver"),", which is a software that act as an intermediaries between the computer's hardware devices and the higher-level software or applications running on the system.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"User Interface")," : Provides a user interface through which users can interact with the computer system. This can be a simple command-line interface (CLI) or a graphical user interface (GUI).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Security and Protection")," : The OS implements security and protection to protect the system and user data from unauthorized access. It provides user authentication and isolation between processes to maintain system integrity.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Networking")," : Provide network protocols, drivers, and network stack implementations for data transmission and network services."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OS function in computer",src:r(68932).Z,width:"800",height:"455"}),(0,a.kt)("br",{parentName:"p"}),"\n","Source : ",(0,a.kt)("a",{parentName:"p",href:"https://ipwithease.com/what-is-operating-system-and-its-functions/"},"https://ipwithease.com/what-is-operating-system-and-its-functions/")),(0,a.kt)("h3",{id:"kernel"},"Kernel"),(0,a.kt)("p",null,"The core component of an OS is the kernel. A kernel is lower-level component in OS that directly interacts with the computer's hardware, managing system resources and providing an interface for software applications to access those resources. It handles low-level tasks such as process and thread management, memory management, device drivers, interrupt handling, and security mechanisms."),(0,a.kt)("p",null,"While an OS is a broader concept that encompasses the entire software package that manages and controls a computer system."),(0,a.kt)("h3",{id:"program-execution"},"Program Execution"),(0,a.kt)("p",null,"A program can be run by computer is called an ",(0,a.kt)("strong",{parentName:"p"},"executable")," (EXE file on Windows OS). An executable file contains machine code, which is a set of instructions that can be directly executed by the computer's CPU."),(0,a.kt)("p",null,"The OS will allocates memory and initializes system resources for the program that wants to be executed. The program will have some entry point, indicating the initial state of the program (e.g., the main function in C/C++ programs)."),(0,a.kt)("p",null,"The OS creates a process to represent the executing program, the process will have important information, such as its memory allocation, execution state, open files, and other relevant details. The OS then executes the program's instructions sequentially, following the logic and flow defined by the programmer."),(0,a.kt)("p",null,"When the program involves system calls such as writing data to a file, the OS will handle the requested operations on behalf of the program, and returns the results back to the program. When an error occurs in the program, the OS play a role in handling and managing the error. The OS will have some default exception handler to handle the errors, and it may generate error messages for the users to provide information about the error."),(0,a.kt)("h3",{id:"unix"},"UNIX"),(0,a.kt)("p",null,"UNIX is a portable, multitasking, and multi-user operating system."),(0,a.kt)("p",null,"Some characteristics of Unix :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multitasking & Multi-user")," : Unix is able to run multiple processes concurrently, it also provides a multi-user environment, multiple users can log in and use the system simultaneously, with each user having their own account and privileges."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Portability")," : Unix separates the kernel or the core of the operating system from the hardware, making it easier to adapt Unix to different computer architectures."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hierarchical File System"),' : Unix organizes files and directories in a tree-like structure. At the top of the hierarchy is the root directory ("/"), which serves as the starting point for the entire file system. All other directories and files are located within the root directory or its subdirectories. For example, "/home/user/Documents" represents the path to the "Documents" directory located within the "user" directory, which is in turn located within the "home" directory.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Interface")," : Unix systems provides a command-line interface, an interface for users to interact with the operating system by typing commands.")),(0,a.kt)("p",null,"Popular operating system such as Linux and macOS are considered as Unix-like, meaning they have similarities with the original Unix operating system."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/operating-system"},"operating system")," for more detailed explanation")))}u.isMDXComponent=!0},68932:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/os-function-17b446cf36ca691ad159dfe8092eae7b.png"}}]);