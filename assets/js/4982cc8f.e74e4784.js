"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[634],{87083:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=n(85893),r=n(11151);const t={slug:"/operating-system/linux-kernel",id:"linux-kernel",title:"Linux Kernel",description:"Linux Kernel"},a=void 0,o={id:"operating-system/linux-kernel/linux-kernel",title:"Linux Kernel",description:"Linux Kernel",source:"@site/docs/operating-system/21-linux-kernel/linux-kernel.md",sourceDirName:"operating-system/21-linux-kernel",slug:"/operating-system/linux-kernel",permalink:"/cs-notes/operating-system/linux-kernel",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/operating-system/21-linux-kernel/linux-kernel.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1723455088e3,frontMatter:{slug:"/operating-system/linux-kernel",id:"linux-kernel",title:"Linux Kernel",description:"Linux Kernel"},sidebar:"sidebar",previous:{title:"BSD",permalink:"/cs-notes/operating-system/bsd"},next:{title:"Windows",permalink:"/cs-notes/operating-system/windows"}},l={},c=[{value:"Architecture &amp; Structure",id:"architecture--structure",level:3},{value:"Features",id:"features",level:3},{value:"Process Management",id:"process-management",level:4},{value:"Memory Management",id:"memory-management",level:4},{value:"File Systems",id:"file-systems",level:4},{value:"Device Management",id:"device-management",level:4},{value:"Inter-process Communication",id:"inter-process-communication",level:4},{value:"Networking",id:"networking",level:4},{value:"Security",id:"security",level:4}];function d(e){const s={a:"a",br:"br",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Main Source:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"[Chapter 18 The Linux System - Abraham Silberschatz-Operating System Concepts (9th,2012_12)]"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Linux_kernel",children:"Linux kernel \u2014 Wikipedia"})})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Linux"})," is a free and open-source, multitasking, Unix-like ",(0,i.jsx)(s.a,{href:"/operating-system/kernel",children:"operating system kernel"}),". It was created by Linus Torvalds in 1991, Linux was developed as a free and open alternative to proprietary operating systems."]}),"\n",(0,i.jsx)(s.p,{children:"Linux is a kernel rather than a complete operating system. The complete operating system, commonly referred as Linux's distributions or distros, combine the Linux kernel with additional software components, such as user interfaces, system utilities, libraries, and application software. Some popular Linux distributions include Ubuntu, Fedora, Debian, CentOS, and Arch Linux."}),"\n",(0,i.jsx)(s.h3,{id:"architecture--structure",children:"Architecture & Structure"}),"\n",(0,i.jsxs)(s.p,{children:["Linux is a modular ",(0,i.jsx)(s.a,{href:"/operating-system/kernel#monolithic-kernels",children:"monolithic kernel"}),", each kernel component is called ",(0,i.jsx)(s.strong,{children:"kernel modules"}),". Linux supports loadable kernel modules, which are dynamically loaded and unloaded at runtime. Modules allow for the addition or removal of kernel functionalities without the need to rebuild or reboot the entire kernel."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Linux kernel architecture",src:n(12431).Z+"",width:"620",height:"658"}),(0,i.jsx)(s.br,{}),"\n","Source: ",(0,i.jsx)(s.a,{href:"https://linux-kernel-labs.github.io/refs/heads/master/lectures/intro.html",children:"https://linux-kernel-labs.github.io/refs/heads/master/lectures/intro.html"})]}),"\n",(0,i.jsx)(s.p,{children:"Linux is built upon the GNU project, which is a compilation of freely available and open-source software. Linux kernel is developed using the C programming language, along with its standard library known as the libc or GNU C library. The C programming language is compiled using one of the compilers provided by the GNU Compiler Collection (GCC), which encompasses a collection of compilers offered by the GNU project."}),"\n",(0,i.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(s.p,{children:["The Linux kernel is based on ",(0,i.jsx)(s.a,{href:"/operating-system/unix",children:"Unix"}),", they have similar features. For system calls, take a look at ",(0,i.jsx)(s.a,{href:"/operating-system/system-call#type-of-system-calls--example",children:"type of system calls & example"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"process-management",children:"Process Management"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creation of new processes through a system call called ",(0,i.jsx)(s.code,{children:"fork()"})," and ",(0,i.jsx)(s.code,{children:"exec()"}),". The ",(0,i.jsx)(s.code,{children:"exit()"})," system call is used to terminate the execution of a process, while the ",(0,i.jsx)(s.code,{children:"wait()"})," system call is used by a parent process to wait for its child process before terminate."]}),"\n",(0,i.jsx)(s.li,{children:"Process has some information associated with it, such as process ID (PID), file descriptors, which is information about the files opened by the process, and virtual memory info, which contains the information about process' memory layout, including the code segment, data segment, heap, and stack."}),"\n",(0,i.jsxs)(s.li,{children:["Linux supports preemptive multitasking, the scheduling of process is done using the ",(0,i.jsx)(s.strong,{children:"Completely Fair Scheduler (CFS)"})," algorithm. In short, it is a priority-based scheduling that uses a ",(0,i.jsx)(s.a,{href:"/data-structures-and-algorithms/tree#red-black-tree",children:"red-black tree"})," data structures to order tasks based on the amount of time they spend running on the CPU, known as ",(0,i.jsx)(s.strong,{children:"vruntime"}),", to ensure fairness."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"memory-management",children:"Memory Management"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Linux manages physical memory by classifying memory into several zones, where their boundaries depend on the system architecture."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Normal Zone"}),": This zone is the largest regions that contains regular application memory, which is typically used for user-space processes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"DMA Zone"}),": This zone is dedicated to ",(0,i.jsx)(s.a,{href:"/computer-organization-and-architecture/input-output#dma",children:"direct memory access (DMA)"})," operations, where devices can access memory directly without CPU intervention."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"High Memory Zone"}),": This is a memory zone that contains pages with high-memory addresses. This zone is used to allocate and manage physical memory that is not permanently mapped into the kernel address space. The purpose of this zone is to address the limitations of older hardware that cannot fully map all physical memory into the kernel's virtual address space."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Linux kernel manages physical memory in the form of pages. When a process requests memory, the kernel allocates pages from the available pool."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Linux implements a ",(0,i.jsx)(s.a,{href:"/operating-system/memory-management#virtual-memory",children:"virtual memory"})," system that allows processes to have their own virtual address spaces. It provides memory protection, demand paging, and memory sharing mechanisms."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Linux kernel uses the ",(0,i.jsx)(s.a,{href:"/operating-system/memory-management#slab-allocation",children:"slab"})," and the ",(0,i.jsx)(s.a,{href:"/operating-system/memory-management#buddy-allocation",children:"buddy allocation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"file-systems",children:"File Systems"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Linux supports various file systems, including ",(0,i.jsx)(s.a,{href:"/operating-system/file-system#ext4",children:"ext4"}),", XFS, Btrfs, ",(0,i.jsx)(s.a,{href:"/operating-system/file-system#fat",children:"FAT"}),", ",(0,i.jsx)(s.a,{href:"/operating-system/file-system#ntfs",children:"NTFS"}),", and more."]}),"\n",(0,i.jsx)(s.li,{children:"ext file systems utilize journaling mechanism, which is a mechanism to logs changes to the file system before committing them to the main file system structures. This ensures file system can be recovered after system crashes or power failures."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"device-management",children:"Device Management"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Devices are categorized into three classes, depending on their access method: ",(0,i.jsx)(s.strong,{children:"block devices"}),", ",(0,i.jsx)(s.strong,{children:"character devices"}),", and ",(0,i.jsx)(s.strong,{children:"network devices"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Block devices include devices that allow random access to independent, fixed-sized blocks of data, such as hard disks, floppy disks, CD-ROMs, Blu-ray discs, and flash memory."}),"\n",(0,i.jsx)(s.li,{children:"Character devices include devices like mice and keyboards that are accessed serially, meaning data is read or written sequentially, one character at a time."}),"\n",(0,i.jsx)(s.li,{children:"Network devices represent devices used for networking purposes. Although technically considered character devices, they are handled differently from other character devices due to their unique nature."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"In addition to Linux that supports dynamically loadable kernel modules, this also allows device drivers to be loaded and unloaded at runtime without rebooting the system."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"inter-process-communication",children:"Inter-process Communication"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Linux primarily uses ",(0,i.jsx)(s.strong,{children:"wait queues"})," to coordinate processes and communicate about incoming asynchronous events, rather than signals. When a process wants to wait for a particular event to complete, it places itself on a wait queue associated with that event. Multiple processes will wait for a single event and they will be awakened once the event has completed."]}),"\n",(0,i.jsxs)(s.li,{children:["For alternative of wait queues in asynchronous events communication, Linux also implement ",(0,i.jsx)(s.a,{href:"/operating-system/multithreading#semaphores",children:"semaphore"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["For passing message among processes, Linux provide ",(0,i.jsx)(s.a,{href:"/operating-system/inter-process-communication#shared-memory",children:"shared memory"})," and ",(0,i.jsx)(s.a,{href:"/operating-system/inter-process-communication#message-passing",children:"pipe message passing"})," mechanism."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"networking",children:"Networking"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Networking is implemented through three layers of software: the ",(0,i.jsx)(s.strong,{children:"socket interface"}),", ",(0,i.jsx)(s.strong,{children:"protocol drivers"}),", and ",(0,i.jsx)(s.strong,{children:"network-device drivers"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The socket interface is the entry point for user applications to perform networking requests. It is designed to resemble the 4.3 BSD socket layer, this make it compatible with programs that utilize Berkeley sockets."}),"\n",(0,i.jsx)(s.li,{children:"The protocol drivers process packet, such as modifying, splitting, or reassembling. When data arrives at this layer, either from an application's socket or a network-device driver, it is expected to be tagged with an identifier specifying the network protocol it contains."}),"\n",(0,i.jsx)(s.li,{children:"Network-device drivers are responsible for interacting with the physical network devices. These drivers manage the communication between the kernel and the network hardware, handling tasks such as sending and receiving data packets."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Linux kernel supports a wide range of network protocols, including ",(0,i.jsx)(s.a,{href:"/computer-networking/tcp-protocol",children:"TCP/IP"}),", ",(0,i.jsx)(s.a,{href:"/computer-networking/udp",children:"UDP"}),", ICMP, ",(0,i.jsx)(s.a,{href:"/computer-networking/ip-address#ipv4",children:"IPv4"}),", and ",(0,i.jsx)(s.a,{href:"/computer-networking/ip-address#ipv6",children:"IPv6"}),". It also provides support for network services like ",(0,i.jsx)(s.a,{href:"/computer-networking/dns",children:"DNS"}),", ",(0,i.jsx)(s.a,{href:"/computer-networking/dhcp",children:"DHCP"}),", and ",(0,i.jsx)(s.a,{href:"/computer-networking/nat",children:"NAT"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"security",children:"Security"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["To ensure security of user accounts, Linux implements authentication mechanism. The authentication process in Linux is primarily based on the use of login names and passwords. When a user attempts to log in, the login program prompts for a login name and a password. The password is then encrypted and compared against the encrypted password stored in the password file, usually located at ",(0,i.jsx)(s.code,{children:"/etc/passwd"}),". If the encrypted passwords match, the login is allowed; otherwise, it is rejected."]}),"\n",(0,i.jsxs)(s.li,{children:["Linux implements a file and directory access permissions. The kernel supports ",(0,i.jsx)(s.a,{href:"/operating-system/protection-and-security#access-control",children:"Access Control Lists (ACLs)"})," and Security-Enhanced Linux (SELinux), which provide additional layers of access control and security policies."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},12431:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/linux-kernel-architecture-5cabde6a1b4ae0567d325c1a7f13cca0.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var i=n(67294);const r={},t=i.createContext(r);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);