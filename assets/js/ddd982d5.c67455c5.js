"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7981],{87249:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=o(85893),i=o(11151);const n={slug:"/operating-system/booting",id:"booting",title:"Booting",description:"Booting"},r=void 0,a={id:"operating-system/booting/booting",title:"Booting",description:"Booting",source:"@site/docs/operating-system/13-booting/booting.md",sourceDirName:"operating-system/13-booting",slug:"/operating-system/booting",permalink:"/cs-notes/operating-system/booting",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/operating-system/13-booting/booting.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1706857828,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{slug:"/operating-system/booting",id:"booting",title:"Booting",description:"Booting"},sidebar:"sidebar",previous:{title:"Device Management",permalink:"/cs-notes/operating-system/device-management"},next:{title:"Networking",permalink:"/cs-notes/operating-system/networking"}},c={},d=[{value:"Boot Process",id:"boot-process",level:3},{value:"Master Boot Record (MBR)",id:"master-boot-record-mbr",level:3}];function l(e){const t={a:"a",br:"br",em:"em",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"[Chapter 2.10, System Boot, Operating-System Structures - Abraham Silberschatz-Operating System Concepts (9th,2012_12)]"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Booting",children:"Booting - Wikipedia"})})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Booting"})," is the process by which a computer system is powered on and initializes its operating system. During booting, the computer goes through a series of steps to prepare itself for normal operation."]}),"\n",(0,s.jsx)(t.h3,{id:"boot-process",children:"Boot Process"}),"\n",(0,s.jsx)(t.p,{children:"When a computer is turned off, program can't run, this is because they are typically stored in RAM, which is a volatile memory that requires power. The goal of booting is to load the operating system into memory, including the kernel as its core component, which can execute user applications and provide various services."}),"\n",(0,s.jsx)(t.p,{children:"When computer is turned off, it may be switched on via button. After that, series of process will occur :"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Power-on self-test (POST)"})," : Immediately after the computer is powered on, the computer's hardware components perform a Power-On Self-Test to check their functionality. This test ensures that essential hardware, such as the processor, memory, and storage devices, are working properly."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"POST",src:o(24856).Z+"",width:"363",height:"409"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Power-on_self-test#/media/File:POST_P5KPL.jpg",children:"https://en.wikipedia.org/wiki/Power-on_self-test#/media/File:POST_P5KPL.jpg"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Bootstrap Program"})," : A small piece of code stored in a ",(0,s.jsx)(t.a,{href:"/computer-organization-and-architecture/coa-fundamentals#rom",children:"read-only memory (ROM)"}),", known as the ",(0,s.jsx)(t.strong,{children:"bootstrap program"}),", ",(0,s.jsx)(t.strong,{children:"bootstrap loader"}),", or ",(0,s.jsx)(t.strong,{children:"bootloader"})," is executed. This program is responsible for locating the operating system's kernel and loading it into main memory. In a larger OS, the bootstrap loader retrieves a more complex boot program from the disk. This boot program is stored in a reserved block sector known as the ",(0,s.jsx)(t.a,{href:"/operating-system/disk-management#boot-sector",children:"boot sector"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"First-stage Boot Loader (Hardware Initialization)"})," : This stage is responsible for initializing essential hardware components and preparing the system for the operating system to take control. The first-stage bootloader often resides in firmware, such as the system ",(0,s.jsx)(t.strong,{children:"BIOS (Basic Input/Output System)"})," or ",(0,s.jsx)(t.strong,{children:"UEFI (Unified Extensible Firmware Interface)"}),". They are computer software stored in a non-volatile memory embedded within the hardware. They have low-level control with the system's hardware components."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"BIOS and UEFI",src:o(47206).Z+"",width:"995",height:"411"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://sistem-komputer-s1.stekom.ac.id/informasi/baca/Perbedaan-UEFI-Dan-BIOS/a814197c359e9b098b07c33abcde7728e9b4f4c3",children:"BIOS"}),", ",(0,s.jsx)(t.a,{href:"https://www.freecodecamp.org/news/uefi-vs-bios/",children:"UEFI"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Second-stage Boot Loader (OS Initialization)"})," : The second-stage bootloader is responsible for loading the actual operating system into memory and initiating its execution. The second-stage bootloader is often specific to the operating system and may include additional functionalities such as device driver loading, system configuration, OS choice, dual boot, or other boot options."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Bootloader",src:o(9705).Z+"",width:"525",height:"409"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"GNU GRUB bootloader"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Bootloader#/media/File:Debian_Unstable_GRUB2_(2015).png",children:"https://en.wikipedia.org/wiki/Bootloader#/media/File:Debian_Unstable_GRUB2_(2015).png"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After the operating system is loaded, the boot is considered done, as the operating system can now handle system or application programs."}),"\n",(0,s.jsx)(t.h3,{id:"master-boot-record-mbr",children:"Master Boot Record (MBR)"}),"\n",(0,s.jsxs)(t.p,{children:["MBR is a data structure located in the first sector (or ",(0,s.jsx)(t.a,{href:"/operating-system/disk-management#boot-sector",children:"boot sector"}),") of a storage device. The MBR contains essential information for the system to start up."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Bootloader Code"})," : The bootloader's code is stored in the MBR."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Partition Table"})," : The MBR stores a ",(0,s.jsx)(t.strong,{children:"partition table"}),", which is a data structure that describes the layout of partitions on the storage device. The partition table defines the starting and ending sectors of each partition, as well as the partition type."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"MBR",src:o(42271).Z+"",width:"716",height:"250"}),(0,s.jsx)(t.br,{}),"\n","Source : ",(0,s.jsx)(t.a,{href:"https://www.ionos.ca/digitalguide/server/configuration/what-is-mbr/",children:"https://www.ionos.ca/digitalguide/server/configuration/what-is-mbr/"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},47206:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/bios-uefi-b096e82a052ffdde6dd43ce4eafac089.png"},9705:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/bootloader-0794adb253dc4bc30bf12cf6542b4d8b.png"},42271:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/mbr-4ed019fae5b0b9fce85d8c902b2e6dab.png"},24856:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/post-69aa977580bb31b618844cfee5f0fd91.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var s=o(67294);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);