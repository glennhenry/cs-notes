"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6163],{19950:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(85893),n=s(11151);const r={slug:"/operating-system/device-management",id:"device-management",title:"Device Management",description:"Device Management"},a=void 0,o={id:"operating-system/device-management/device-management",title:"Device Management",description:"Device Management",source:"@site/docs/operating-system/12-device-management/device-management.md",sourceDirName:"operating-system/12-device-management",slug:"/operating-system/device-management",permalink:"/cs-notes/operating-system/device-management",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/operating-system/12-device-management/device-management.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1711965459,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{slug:"/operating-system/device-management",id:"device-management",title:"Device Management",description:"Device Management"},sidebar:"sidebar",previous:{title:"File System",permalink:"/cs-notes/operating-system/file-system"},next:{title:"Booting",permalink:"/cs-notes/operating-system/booting"}},c={},d=[{value:"Device Driver",id:"device-driver",level:3},{value:"I/O Technique",id:"io-technique",level:3},{value:"I/O Devices Characteristics",id:"io-devices-characteristics",level:3},{value:"I/O Scheduling",id:"io-scheduling",level:3},{value:"Other Concepts",id:"other-concepts",level:3},{value:"Buffer",id:"buffer",level:4},{value:"Cache",id:"cache",level:4},{value:"Spool",id:"spool",level:4},{value:"I/O Requests",id:"io-requests",level:3}];function h(e){const t={a:"a",br:"br",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture",children:"Previous notes in COA"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"[Chapter 13 I/O Systems - Abraham Silberschatz-Operating System Concepts (9th,2012_12)]"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Device_driver",children:"Device driver - Wikipedia"})})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Device Management"})," is the activities of managing and controlling hardware devices connected to a computer system. It encompasses tasks such as device identification, configuration, allocation, and monitoring. The OS incorporates a ",(0,i.jsx)(t.strong,{children:"device driver"}),", they are software components that enable the OS to interact with hardware devices."]}),"\n",(0,i.jsxs)(t.p,{children:["I/O devices such as keyboard, mice, hard disk, or network card are connected to the computer physically using ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/input-output#interfaces",children:(0,i.jsx)(t.strong,{children:"I/O interfaces"})}),". They will be connected to the ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/von-neumann#system-buses",children:(0,i.jsx)(t.strong,{children:"system buses"})}),", which is the communication pathway that allows data transfer between the CPU, memory, and I/O devices."]}),"\n",(0,i.jsxs)(t.p,{children:["Between the buses and physical I/O connector, there exist a component called ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/input-output#io-controller",children:(0,i.jsx)(t.strong,{children:"I/O controller"})}),", it is an intermediate hardware component that handles communication between the devices and the computer, protocol conversions, and device-specific operations."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"I/O connection to a computer system",src:s(12671).Z+"",width:"507",height:"387"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/13_IOSystems.html",children:"https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/13_IOSystems.html"})]}),"\n",(0,i.jsx)(t.h3,{id:"device-driver",children:"Device Driver"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Device driver"})," is a software component that acts as an intermediary between an operating system and a specific hardware device. Different type of hardware has different requirements, purpose of device driver is to create a standardized way to communicate between the higher-level applications and the hardware, abstracting away the complexities of the device."]}),"\n",(0,i.jsx)(t.p,{children:"Device drivers work by implementing the necessary software routines and algorithms to interact with the hardware device. The driver communicates with the device through the device's specific interface or protocol, which could be a bus interface (e.g., PCI, USB) or a network protocol (e.g., Ethernet). It uses device-specific registers, commands, and protocols to send and receive data to/from the device."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"I/O structure",src:s(37670).Z+"",width:"499",height:"369"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/13_IOSystems.html",children:"https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/13_IOSystems.html"})]}),"\n",(0,i.jsx)(t.p,{children:"The driver exposes a standardized interface or API to the operating system and applications. This interface encapsulates the device's functionality and provides a set of functions or commands that the operating system and applications can use to interact with the device."}),"\n",(0,i.jsx)(t.h3,{id:"io-technique",children:"I/O Technique"}),"\n",(0,i.jsxs)(t.p,{children:["There are ",(0,i.jsx)(t.a,{href:"/computer-organization-and-architecture/input-output#io-technique",children:"methods and approaches"})," used to handle input and output operations between I/O devices and computer system."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Programmed I/O"})," : In this technique, the CPU directly controls the data transfer between the I/O device and memory. The CPU actively polls or checks the status of the I/O device to initiate or complete data transfers. Programmed I/O is simple to implement but can be inefficient as it ties up the CPU."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Interrupt-Driven I/O"})," : I/O device initiates an ",(0,i.jsx)(t.a,{href:"/operating-system/interrupt-handling",children:"interrupt signal"})," to the CPU when it is ready to transfer data. The CPU then suspends its current execution, saves its state, and transfers control to an interrupt handler routine. The handler reads or writes data between the I/O device and memory. Interrupt-driven I/O allows the CPU to perform other tasks while waiting for I/O operations to complete, the CPU doesn't need to check periodically."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Direct Memory Access (DMA)"})," : This technique enable data transfers between memory and I/O devices without CPU intervention. Data between I/O devices and CPU are sent to a DMA controller. The controller is responsible for coordinating the data transfer directly between the device and memory."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Memory-mapped I/O"})," : Memory-mapped I/O treats I/O devices as if they were memory locations. The I/O device is assigned a range of memory addresses, and the CPU can read from or write to these addresses to communicate with the device. Memory-mapped I/O simplifies the programming interface, as the CPU can use standard load and store instructions to access the device."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"io-devices-characteristics",children:"I/O Devices Characteristics"}),"\n",(0,i.jsx)(t.p,{children:"To create a unified interface for I/O devices, each device is differentiated based on their characteristics, functionality, and purpose."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Data-transfer Mode"})," : Specific data formats in which they send or receive data, it could be a character, or a block of bytes as a unit."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Access Method"})," : How the device access and transfer data, it could be sequential access or random access. Sequential access reads or writes data sequentially, while random access allows for direct access to specific locations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Transfer Schedule"})," : Determines when and how data transfers occur between the I/O device and the computer system, such as whether transfers are synchronous or asynchronous, whether they occur in real-time or in bursts, and how data is buffered during the transfer process."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Sharing"})," : Some devices support sharing, allowing multiple processes to access them simultaneously, while others may have exclusive access, allowing only one process to use the device at a time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Device Speed"})," : Rate at which an I/O device can process and handle data, such as the latency, seek time, transfer rate, and delays."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"I/O Direction"})," : Whether an I/O device is primarily used for input (receiving data into the computer system) or output (sending data from the computer system). Some devices, such as storage devices, support both input and output operations."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"io-scheduling",children:"I/O Scheduling"}),"\n",(0,i.jsxs)(t.p,{children:["When there are multiple I/O requests, the I/O scheduler decides the sequence in which these requests are processed by the storage devices to optimize performance and fairness. ",(0,i.jsx)(t.a,{href:"/operating-system/process-management#scheduling-algorithms",children:"Some scheduling algorithm for CPU"})," such as FIFO, priority-based, SJF, RR, can also be used in I/O scheduling."]}),"\n",(0,i.jsxs)(t.p,{children:["For scheduling, the OS keep track device status, it maintains a ",(0,i.jsx)(t.strong,{children:"device status table"}),". It is a data structure that contains essential details about I/O devices, such as whether it is available, busy, or in an error state, a queue that holds pending I/O requests for the device."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Device status table",src:s(96499).Z+"",width:"467",height:"263"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/13_IOSystems.html",children:"https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/13_IOSystems.html"})]}),"\n",(0,i.jsx)(t.h3,{id:"other-concepts",children:"Other Concepts"}),"\n",(0,i.jsxs)(t.p,{children:["I/O requests from application can be made through ",(0,i.jsx)(t.a,{href:"/operating-system/system-call",children:"system calls"}),". System call allows user-level processes to request services from the kernel, which operates at a privileged level, can then perform the requested I/O operations on behalf of the user-level process. Not only for abstraction, this also introduce isolation to prevent user-level processes from directly manipulating or interfering with critical system resources and devices."]}),"\n",(0,i.jsx)(t.h4,{id:"buffer",children:"Buffer"}),"\n",(0,i.jsx)(t.p,{children:"When transferring data between I/O devices, they potentially different speeds or data formats. When data is read from an I/O device, it is first stored in a buffer, which is a temporary storage area in memory, before being processed by the CPU or transferred to the application. Similarly, when data is written to an I/O device, it is first placed in a buffer before being transmitted."}),"\n",(0,i.jsx)(t.p,{children:"Buffers help optimize I/O operations by allowing for asynchronous data transfer. They can reduce the impact of data rate mismatches between devices and provide a more efficient way to handle data transfers in chunks or blocks rather than individual bytes."}),"\n",(0,i.jsx)(t.h4,{id:"cache",children:"Cache"}),"\n",(0,i.jsx)(t.p,{children:"Caches are typically used in conjunction with storage devices, such as hard disk drives or solid-state drives, to reduce the latency associated with accessing data from slower storage media."}),"\n",(0,i.jsx)(t.p,{children:"In I/O operations, a cache can be used to temporarily store recently accessed data or frequently used instructions. By keeping this data closer to the CPU, the cache reduces the need to access the slower storage media, resulting in faster data retrieval."}),"\n",(0,i.jsx)(t.h4,{id:"spool",children:"Spool"}),"\n",(0,i.jsx)(t.p,{children:"Spool is a temporary storage to hold output of a device, that cannot accept interleaved or concurrent data streams. Device such as printer can only handle one print job at a time. Spooling is a technique that incorporate spool by capturing the print jobs as they are submitted and stores them in the spool file. Each job is added to the queue in the order it was received."}),"\n",(0,i.jsx)(t.p,{children:"The printer processes the print jobs one at a time, in the order they are stored in the spool file. It retrieves the next job from the spool file after completing the previous one. While the printer is working on one job, other jobs can continue to be spooled and added to the queue. The spooling system ensures that the printer receives the jobs sequentially, allowing it to print continuously without interruptions."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Spooling",src:s(99617).Z+"",width:"650",height:"369"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://www.javatpoint.com/what-is-a-print-spooler",children:"https://www.javatpoint.com/what-is-a-print-spooler"})]}),"\n",(0,i.jsx)(t.h3,{id:"io-requests",children:"I/O Requests"}),"\n",(0,i.jsx)(t.p,{children:"There are several steps involve when I/O request is issued :"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"I/O request issue"})," : The life cycle begins when a process initiates an I/O request by issuing a system call, such as a blocking ",(0,i.jsx)(t.code,{children:"read()"})," or ",(0,i.jsx)(t.code,{children:"write()"}),". The process specifies the file descriptor of the file to be accessed."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Parameter Checking"})," : The system-call code in the kernel verifies the parameters of the I/O request for correctness. If the requested data is already available in the cache, the data are returned to the process, and the I/O request is completed."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Device-Driver Buffering"})," : If the requested data is not available in the buffer cache, the kernel's device driver receives the I/O request. The device driver then stores the data in its buffer and schedules the I/O."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"I/O Processing"})," : The device driver sends command to the specific device controller. The controller receives the command and perform the requested operation. In this step, the driver may monitor the device's status or progress."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Interrupt Handling"})," : When the I/O operation is completed, an interrupt is generated. The interrupt signals the completion of the I/O operation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Signal Completion"})," : After processing the completed I/O request, the device driver signals the completion of the I/O operation to the process that initiated the request. This signal indicates that the requested data is now available for the process to use."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"I/O request process",src:s(61265).Z+"",width:"648",height:"507"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://techlarry.github.io/OS/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%A6%82%E5%BF%B5/12%20IO%20Systems/",children:"https://techlarry.github.io/OS/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%A6%82%E5%BF%B5/12%20IO%20Systems/"})]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},96499:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/device-status-table-47067534a0f78d0a2233e15348ca100e.png"},12671:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/io-connection-04af6a526313562599987c68fedcac0a.png"},61265:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/io-request-process-ef001cebe4813d6171fbc76bdd6fad0b.png"},37670:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/io-structure-16c7aac140f080f6054ba2fcf0f6781e.png"},99617:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/spooling-f1e966170be8ab9a69f5c312cbd8e28e.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var i=s(67294);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);