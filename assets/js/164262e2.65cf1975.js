"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[2264],{93748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(11151);const s={slug:"/computer-organization-and-architecture/input-output",id:"input-output",title:"Input/Output",description:"Input/Output"},o=void 0,a={id:"computer-organization-and-architecture/input-output/input-output",title:"Input/Output",description:"Input/Output",source:"@site/docs/computer-organization-and-architecture/07-input-output/input-output.md",sourceDirName:"computer-organization-and-architecture/07-input-output",slug:"/computer-organization-and-architecture/input-output",permalink:"/cs-notes/computer-organization-and-architecture/input-output",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-organization-and-architecture/07-input-output/input-output.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1706857828,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{slug:"/computer-organization-and-architecture/input-output",id:"input-output",title:"Input/Output",description:"Input/Output"},sidebar:"sidebar",previous:{title:"CPU Design",permalink:"/cs-notes/computer-organization-and-architecture/cpu-design"},next:{title:"Assembly Language",permalink:"/cs-notes/computer-organization-and-architecture/assembly-language"}},c={},d=[{value:"I/O Modules",id:"io-modules",level:3},{value:"Interfaces",id:"interfaces",level:4},{value:"I/O Controller",id:"io-controller",level:4},{value:"I/O Technique",id:"io-technique",level:3},{value:"Interrupt-Driven I/O",id:"interrupt-driven-io",level:4},{value:"Programmed I/O",id:"programmed-io",level:4},{value:"DMA",id:"dma",level:4},{value:"Memory-mapped I/O",id:"memory-mapped-io",level:4}];function l(e){const t={a:"a",br:"br",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://repository.unikom.ac.id/50439/1/pertemuan6.pptx",children:"UNIKOM powerpoint"})})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"CPU receives data and instructions from higher-level programs, which typically depend on external input devices like mice and microphones. Additionally, the programs may require the use of external output devices, such as speakers, to produce sound output."}),"\n",(0,r.jsx)(t.p,{children:"These various I/O devices needs to communicate to the CPU. I/O devices will first capture the input and there will be a hardware component that is responsible for converting the captured input to instruction for CPU to execute. Similarly, we will also need hardware component for converting the processed data to output devices."}),"\n",(0,r.jsxs)(t.p,{children:["These hardwares are called ",(0,r.jsx)(t.strong,{children:"I/O modules"}),", they facilitate the communication between I/O devices and the CPU or memory in a computer system. These modules provide the necessary interfaces and protocols for connecting various types of I/O devices to the system and enable the exchange of data between the devices and the CPU."]}),"\n",(0,r.jsx)(t.h3,{id:"io-modules",children:"I/O Modules"}),"\n",(0,r.jsxs)(t.p,{children:["An I/O modules typically consist of ",(0,r.jsx)(t.strong,{children:"interface"})," and ",(0,r.jsx)(t.strong,{children:"controller"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Interfaces"})," are the electrical or physical connectors, such as USB ports for variety of I/O devices, Ethernet ports for networking, or audio jacks for I/O related to audio. The component in CPU talks to each other using ",(0,r.jsx)(t.strong,{children:"system buses"}),", specifically I/O bus for I/O interaction. It serves as a shared link that allows data to be exchanged between the CPU, memory, and I/O devices. I/O interfaces makes it possible for I/O devices to connect with the buses."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"I/O interface",src:n(38403).Z+"",width:"377",height:"190"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://edurev.in/t/97679/Input-Output-interface-Computer-Organization-and-A",children:"https://edurev.in/t/97679/Input-Output-interface-Computer-Organization-and-A"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Ethernet connection interface",src:n(12874).Z+"",width:"362",height:"221"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://study.com/learn/lesson/nic-network-interface-card-types-function.html",children:"https://study.com/learn/lesson/nic-network-interface-card-types-function.html"})]}),"\n",(0,r.jsx)(t.h4,{id:"io-controller",children:"I/O Controller"}),"\n",(0,r.jsx)(t.p,{children:"I/O controller is the hardware component which will handle the necessary protocols and logic for data transfer. It acts as an intermediary between the CPU, memory, and the I/O devices, that handles data transfer and communication."}),"\n",(0,r.jsx)(t.p,{children:"Function of I/O controller :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data Buffering"})," : I/O controller may use data buffers or temporary storage areas to handle the flow of data between the CPU/memory and the I/O devices systematically."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Error Detection & Interrupt Handling"})," : Notify the CPU about interrupt events, data availability, or any error that happens in the I/O devices."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"I/O controller",src:n(36948).Z+"",width:"653",height:"476"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://witscad.com/course/computer-architecture/chapter/io-communication-io-controller",children:"https://witscad.com/course/computer-architecture/chapter/io-communication-io-controller"})]}),"\n",(0,r.jsxs)(t.p,{children:["While I/O controller is the hardware level for handling communication, ",(0,r.jsx)(t.strong,{children:"device driver"}),", specifically ",(0,r.jsx)(t.strong,{children:"I/O driver"}),", is the component which enables communication in the software level between the operating system (OS) with the I/O controller."]}),"\n",(0,r.jsx)(t.p,{children:"Device driver provides a standardized interface to the operating system, allowing it to send commands, requests, status, or data to the I/O controller or device."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"I/O device drivers",src:n(97297).Z+"",width:"635",height:"142"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://repository.unikom.ac.id/50439/1/pertemuan6.pptx",children:"https://repository.unikom.ac.id/50439/1/pertemuan6.pptx"})]}),"\n",(0,r.jsx)(t.h3,{id:"io-technique",children:"I/O Technique"}),"\n",(0,r.jsx)(t.p,{children:"There are various approaches and strategies to manage input and output operations between a computer system and its peripheral devices."}),"\n",(0,r.jsx)(t.h4,{id:"interrupt-driven-io",children:"Interrupt-Driven I/O"}),"\n",(0,r.jsx)(t.p,{children:"Interrupt is a signal that is used to indicate that the normal execution of the CPU should be diverted to handle a specific event or condition. It is a hardware or software-generated signal that notifies the CPU to suspend its current task and execute an interrupt handler routine, which will handles the event or condition that triggered the interrupt."}),"\n",(0,r.jsx)(t.p,{children:"In interrupt-driven IO, the CPU initiates an I/O operation and then continues with other tasks. Once the I/O operation is completed, the I/O device sends an interrupt signal to the CPU, indicating that the data transfer is finished. The CPU then suspends its current task, services the interrupt, and transfers the data between the I/O device and memory. Interrupt-driven IO reduces CPU involvement in data transfers, allowing for multitasking and improved system performance."}),"\n",(0,r.jsx)(t.h4,{id:"programmed-io",children:"Programmed I/O"}),"\n",(0,r.jsx)(t.p,{children:"In this technique, the CPU directly controls the data transfer between the I/O device and the main memory. The CPU issues specific I/O instructions to transfer data between the device and memory and will wait for the operation to complete. Everything is done by CPU, I/O devices will not be able to interrupt. Programmed IO is simple to implement but can be inefficient since the CPU is involved in each data transfer, leading to slower overall system performance."}),"\n",(0,r.jsx)(t.h4,{id:"dma",children:"DMA"}),"\n",(0,r.jsx)(t.p,{children:"DMA is a technique that allows data transfer between an I/O device and memory without direct CPU involvement. CPU will not be involved during the data transfer, the I/O device, which is managed by a DMA controller will transfer the data directly from the I/O device to the memory. This techinque can significantly reduces CPU overhead and improves I/O performance, especially for large data transfers."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"DMA",src:n(82169).Z+"",width:"300",height:"168"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://www.boardinfinity.com/blog/direct-memory-access/",children:"https://www.boardinfinity.com/blog/direct-memory-access/"})]}),"\n",(0,r.jsx)(t.h4,{id:"memory-mapped-io",children:"Memory-mapped I/O"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Memory-mapped I/O"})," is a technique where the CPU assign a specific range of memory addresses that it can use to send and receive data. The CPU can access the I/O device by reading from or writing to these memory addresses just like it would for regular memory operations."]}),"\n",(0,r.jsx)(t.p,{children:"When the CPU issues a read/write operation to a memory address, there will be an address decoder, which will routes the request to the appropriate I/O device instead of main memory."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Memory mapped I/O",src:n(8587).Z+"",width:"619",height:"383"}),(0,r.jsx)(t.br,{}),"\n","Source : ",(0,r.jsx)(t.a,{href:"https://embeddedsystemvn.wordpress.com/2021/08/07/memory-mapped-i-o/",children:"https://embeddedsystemvn.wordpress.com/2021/08/07/memory-mapped-i-o/"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},82169:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},12874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ethernet-connection-b0013e8c694bb9b981c49ec8b368b487.png"},36948:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/io-controller-8052ef3ab17254433e78a007ae9d0813.png"},97297:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/io-driver-1676052ab3da7e910764d4120b7d4460.png"},38403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/io-interface-244ab8abb566d9b5bee805aab958e009.png"},8587:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/memory-mapped-io-6e133a04d09453577e74d46e865cb9e0.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);