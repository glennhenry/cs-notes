"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[5742],{9804:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=n(85893),r=n(11151);const t={slug:"/operating-system/process-synchronization",id:"process-synchronization",title:"Process Synchronization",description:"Process Synchronization"},o=void 0,a={id:"operating-system/process-synchronization/process-synchronization",title:"Process Synchronization",description:"Process Synchronization",source:"@site/docs/operating-system/05-process-synchronization/process-synchronization.md",sourceDirName:"operating-system/05-process-synchronization",slug:"/operating-system/process-synchronization",permalink:"/cs-notes/operating-system/process-synchronization",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/operating-system/05-process-synchronization/process-synchronization.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1705573686,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{slug:"/operating-system/process-synchronization",id:"process-synchronization",title:"Process Synchronization",description:"Process Synchronization"},sidebar:"sidebar",previous:{title:"Multithreading",permalink:"/cs-notes/operating-system/multithreading"},next:{title:"Interrupt Handling",permalink:"/cs-notes/operating-system/interrupt-handling"}},c={},l=[{value:"Synchronization Techniques",id:"synchronization-techniques",level:3},{value:"Peterson\u2019s Solution",id:"petersons-solution",level:4},{value:"Synchronization Problems",id:"synchronization-problems",level:3},{value:"Readers-Writers",id:"readers-writers",level:4},{value:"Dining Philosophers",id:"dining-philosophers",level:4},{value:"Deadlock",id:"deadlock",level:4},{value:"Resource Allocation Graph",id:"resource-allocation-graph",level:5},{value:"Banker&#39;s Algorithm",id:"bankers-algorithm",level:5},{value:"Recovery",id:"recovery",level:5}];function h(e){const s={a:"a",br:"br",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"[Chapter 5 Process Synchronization - Abraham Silberschatz-Operating System Concepts (9th,2012_12)]"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"[Chapter 7 Deadlocks - Abraham Silberschatz-Operating System Concepts (9th,2012_12)]"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Process synchronization is concerned with the coordination and control of concurrent processes or threads in a system. The goal is to ensure that processes can safely access shared resources, communicate with each other, and avoid other ",(0,i.jsx)(s.a,{href:"/operating-system/multithreading#multithreading-problems",children:"concurrency-related issues"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"synchronization-techniques",children:"Synchronization Techniques"}),"\n",(0,i.jsxs)(s.p,{children:["Some concept of synchronization for process is similar to ",(0,i.jsx)(s.a,{href:"/operating-system/multithreading#thread-synchronization",children:"thread synchronization"}),", that is using synchronization tools such as mutexes, condition variables, semaphores, etc."]}),"\n",(0,i.jsx)(s.h4,{id:"petersons-solution",children:"Peterson\u2019s Solution"}),"\n",(0,i.jsxs)(s.p,{children:["In a concurrent program, the specific section of code where shared resources are accessed or modified is called ",(0,i.jsx)(s.strong,{children:"critical section"}),". We could implement mutex to ensure only one process accesses the resource at a time."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Peterson's solution"})," is an algorithm for mutex (mutual exclusion), it is a software-based solution which ensure that only one process or thread can enter its critical section at a time."]}),"\n",(0,i.jsx)(s.p,{children:"Peterson's solution requires the shared variables :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"turn"})," : A variable that indicates whose turn it is to enter the critical section."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"flag"})," : An array of boolean flags, with each element representing the intention of a process to enter the critical section."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The algorithm works as follows :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Each process sets its ",(0,i.jsx)(s.code,{children:"flag"})," to indicate its intention to enter the critical section."]}),"\n",(0,i.jsxs)(s.li,{children:["The process sets ",(0,i.jsx)(s.code,{children:"turn"})," to indicate that it is the other process's ",(0,i.jsx)(s.code,{children:"turn"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The process enters a loop and checks if the other process's ",(0,i.jsx)(s.code,{children:"flag"})," is set and if it is the other process's ",(0,i.jsx)(s.code,{children:"turn"}),". If both conditions are true, the process waits until the other process completes its critical section."]}),"\n",(0,i.jsx)(s.li,{children:"If the conditions are false, the process enters its critical section and executes the desired code."}),"\n",(0,i.jsx)(s.li,{children:"After the process completes its critical section, it resets its flag to indicate that it is no longer interested in entering the critical section. Also, exist a remainder section where we can perform any necessary cleanup or non-critical tasks."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Peterson&#39;s solution code",src:n(53846).Z+"",width:"424",height:"420"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.geeksforgeeks.org/introduction-of-process-synchronization/",children:"https://www.geeksforgeeks.org/introduction-of-process-synchronization/"})]}),"\n",(0,i.jsx)(s.h3,{id:"synchronization-problems",children:"Synchronization Problems"}),"\n",(0,i.jsx)(s.h4,{id:"readers-writers",children:"Readers-Writers"}),"\n",(0,i.jsx)(s.p,{children:"Readers-Writers problem is a scenario where there exist multiple processes, one is reader (process that access data), and another is writer (process that writes data), which are trying to access a shared resource simultaneously."}),"\n",(0,i.jsxs)(s.p,{children:["Having multiple process that reads at the same time is not a problem, because every reader will always read the same data. However, in a case where a reader and a writer access the data at a time, this will obviously be a problem, it may result in ",(0,i.jsx)(s.a,{href:"/operating-system/multithreading#multithreading-problems",children:"race condition"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"There are two variants of readers-writers problem :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The first problem assumes that readers have priority over writers.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Multiple reader is allowed to read simultaneously, reader shouldn't wait if the resource is currently opened for reading."}),"\n",(0,i.jsx)(s.li,{children:"Writers must wait until all active readers have finished accessing the shared resource. Only a single writer is granted exclusive access to the resource at a time."}),"\n",(0,i.jsx)(s.li,{children:"This problem may starve writers."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["The second problem assumes that writers have priority over readers.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"When a writer is ready to write, it needs to write as soon as possible."}),"\n",(0,i.jsx)(s.li,{children:"Reader shouldn't write when the writer is going to write."}),"\n",(0,i.jsx)(s.li,{children:"This problem may starve readers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The criteria for solution :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Readers can access the shared resource simultaneously if no writers are currently accessing it."}),"\n",(0,i.jsx)(s.li,{children:"Writers should access the shared resource exclusively, meaning that no other readers or writers can access it while a writer is writing."}),"\n",(0,i.jsx)(s.li,{children:"The solution should avoid starvation and ensure fairness, neither readers nor writers should be indefinitely blocked from accessing the resource."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The general solution :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Shared variables:\nreaders_count = 0\nread_lock = Semaphore(1)\nwrite_lock = Semaphore(1)\n\nReader process:\nwhile true:\n    wait(read_lock)\n    readers_count = readers_count + 1\n    if readers_count == 1:\n        wait(write_lock)\n    signal(write_lock)\n\n    // Perform reading...\n\n    wait(read_lock)\n    readers_count = readers_count - 1\n    if (read count == 0):\n        signal(write_lock)\n    signal(read_lock)\n\nWriter process:\nwhile true:\n    wait(write_lock)\n\n    // Perform writing...\n\n    signal(write_lock)\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"read_lock"})," and ",(0,i.jsx)(s.code,{children:"write_lock"})," variable indicates the mutex for reader and writer, respectively."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"wait()"})," and ",(0,i.jsx)(s.code,{children:"signal()"})," function is the implementation of semaphores, it will enable/disable the access. ",(0,i.jsx)(s.a,{href:"/operating-system/multithreading#semaphores",children:"Semaphore"})," keeps a count, it will only allow access if the count is greater than 0. Passing a lock to the ",(0,i.jsx)(s.code,{children:"wait()"})," function will decrement the lock's count, which effectively block any other reader/writer for accessing. On the other hand, ",(0,i.jsx)(s.code,{children:"signal()"})," is the opposite of ",(0,i.jsx)(s.code,{children:"wait()"}),", which will increment the count, effectively notifies other reader/writer."]}),"\n",(0,i.jsx)(s.li,{children:"The process of incrementing and decrementing reader count is synchronized with lock, when reading, we will not use the lock, we will allow multiple reader to read simultaneously."}),"\n",(0,i.jsxs)(s.li,{children:["When ",(0,i.jsx)(s.code,{children:"readers_count"})," reaches 0, we will allow the writer to write by signaling the lock."]}),"\n",(0,i.jsxs)(s.li,{children:["When writing, we will also use ",(0,i.jsx)(s.code,{children:"wait()"})," and ",(0,i.jsx)(s.code,{children:"signal()"})," before and after the writing is done, to ensure only one writer writes."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"dining-philosophers",children:"Dining Philosophers"}),"\n",(0,i.jsxs)(s.p,{children:["The dining philosophers problem illustrate the ",(0,i.jsx)(s.a,{href:"/operating-system/multithreading#multithreading-problem",children:"deadlock"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Dining philosophers problem",src:n(22863).Z+"",width:"361",height:"299"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.scaler.com/topics/operating-system/dining-philosophers-problem-in-os/",children:"https://www.scaler.com/topics/operating-system/dining-philosophers-problem-in-os/"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The problem involves a group of philosophers sitting around a table, alternating between thinking and eating."}),"\n",(0,i.jsx)(s.li,{children:"There exist 5 single chopsticks on the left and right each philosopher."}),"\n",(0,i.jsx)(s.li,{children:"Each philosopher requires two chopsticks to eat but can only pick up adjacent chopsticks, which are in the left or right."}),"\n",(0,i.jsx)(s.li,{children:"The philosopher can't pick chopsticks which are used, they need to wait."}),"\n",(0,i.jsx)(s.li,{children:"Once they are done eating, they put the chopsticks back."}),"\n",(0,i.jsx)(s.li,{children:"The problem demonstrates the challenges of allocating resources to multiple processes, with the primary goal of enabling all philosophers to eat while avoiding deadlock and starvation."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The solution for this problem uses ",(0,i.jsx)(s.a,{href:"/operating-system/multithreading#monitor--condition-variables",children:"monitors"})," :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"monitor DiningPhilosophers {\n    enum: THINKING, EATING, HUNGRY\n    philosophers_state = [THINKING, THINKING, THINKING, THINKING, THINKING]\n    condition = initialize 5 condition variable\n\n    function pick_chopstick(i: int) {\n        philosophers_state[i] = HUNGRY\n        is_possible_to_eat(i)\n        if philosophers_state[i] != EATING:\n            condition[i].wait()\n    }\n\n    function is_possible_to_eat(i: int) {\n        if left_and_right_chopstick_available(i):\n            philosophers_state[i] = EATING\n            condition[i].signal()\n    }\n\n    function left_and_right_chopstick_available(i: int) -> boolean {\n        return philosophers_state[(i + 4) % 5] != EATING &&  // left is not eating\n               philosophers_state[i] == HUNGRY &&  // is hungry right now\n               philosophers_state[(i + 1) % 5] != EATING  // right is not eating\n    }\n\n    function done_eating(i: int) {\n        philosophers_state[i] = THINKING\n        is_possible_to_eat((i + 4) % 5)\n        is_possible_to_eat((i + 1) % 5)\n    }\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["We represent the state of philosopher in enum, which are either ",(0,i.jsx)(s.code,{children:"THINKING"}),", ",(0,i.jsx)(s.code,{children:"EATING"}),", ",(0,i.jsx)(s.code,{children:"HUNGRY"}),". Initially, all philosophers are set to the ",(0,i.jsx)(s.code,{children:"THINKING"})," state. The specific order in which philosophers start their actions depends on the specific problem at hand."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"condition"})," is the condition variable associated with each philosopher, it will change whenever other philosopher uses ",(0,i.jsx)(s.code,{children:"wait()"})," or ",(0,i.jsx)(s.code,{children:"signal()"}),". Calling ",(0,i.jsx)(s.code,{children:"wait()"})," on the condition effectively block the philosopher from eating. When ",(0,i.jsx)(s.code,{children:"signal()"})," is called, it notifies other philosophers about the current state of the philosopher on which the signal is invoked."]}),"\n",(0,i.jsxs)(s.li,{children:["Starting from the ",(0,i.jsx)(s.code,{children:"pick_chopstick"}),", when we call this function given some index ",(0,i.jsx)(s.code,{children:"i"}),", the philosopher at index ",(0,i.jsx)(s.code,{children:"i"})," will start eating."]}),"\n",(0,i.jsx)(s.li,{children:"Before actually eating, it will first confirm if it's possible to eat by checking the left and right chopstick. If possible, it will eat and notify other philosopher, else it will wait."}),"\n",(0,i.jsxs)(s.li,{children:["When eating is done, the ",(0,i.jsx)(s.code,{children:"done_eating"})," function will be called. It will set the philosopher state back to ",(0,i.jsx)(s.code,{children:"THINKING"}),", and also decide if the philosopher on the left and right can eat."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The dining philosophers problem is just a theoretical problem. By solving and examining this problem, we can gain insights into various solutions and synchronization techniques that can be applied to more complex real-world scenarios."}),"\n",(0,i.jsx)(s.h4,{id:"deadlock",children:"Deadlock"}),"\n",(0,i.jsx)(s.p,{children:"Processes need resource, this mean the process has a dependency on a resource to perform certain operations or computations. For example, a process may need access to a printer resource to print a document, or it may need access to a database resource to retrieve or update data. Deadlock occurs when a set of processes is unable to proceed because each process is waiting for a resource that is held by another process in the set."}),"\n",(0,i.jsx)(s.p,{children:"Deadlock are typically characterized by :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Mutex"})," : It occurs when mutex is used, when at least one resource must be held in a non-sharable mode, meaning that only one process can use it at a time."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Hold and Wait"})," : When accessing resource, the processes will hold resources while waiting to acquire additional resources."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"No Preemption"})," : Resources cannot be forcibly taken away from processes that hold them, only the process itself can release it."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Circular Wait"})," : There exists a circular chain of processes, each waiting for a resource held by the next process in the chain."]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"resource-allocation-graph",children:"Resource Allocation Graph"}),"\n",(0,i.jsxs)(s.p,{children:["We can detect a deadlock by representing the circular chain of processes in a graph called ",(0,i.jsx)(s.strong,{children:"resource allocation graph (RAG)"}),". It consists of nodes representing processes and resources, and directed edges representing resource requests and allocations. If the graph contains a cycle, it indicates the possibility of a deadlock."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Resource allocation graph",src:n(81743).Z+"",width:"882",height:"333"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.geeksforgeeks.org/resource-allocation-graph-rag-in-operating-system/",children:"https://www.geeksforgeeks.org/resource-allocation-graph-rag-in-operating-system/"})," (box R is resource, circle P is process)"]}),"\n",(0,i.jsx)(s.p,{children:"A single resource type means only one instance of a resource can be accessed at a time. However, this method is not applicable when dealing with multi-instance resource types, which is the case when single instance of resource can be accessed by some number of processes."}),"\n",(0,i.jsx)(s.p,{children:"A deadlock happens when processes are stuck waiting for resources that are held by other processes, forming a cycle in the RAG. However, in multi-instance resource systems, processes can sometimes release some instances of a resource and continue running. So, even if there is a cycle in the RAG, it does not always mean there is a deadlock."}),"\n",(0,i.jsx)(s.h5,{id:"bankers-algorithm",children:"Banker's Algorithm"}),"\n",(0,i.jsx)(s.p,{children:"The Banker's algorithm can be used to detect deadlock in multi-instance resource systems."}),"\n",(0,i.jsxs)(s.p,{children:["The algorithm operates based on the concept of a ",(0,i.jsx)(s.strong,{children:"safe state"}),", which is a state in which a system can allocate resources to processes in a way that avoids deadlock. In multi-instance resource systems, the resource can be accessed by some number of process, safe state occurs when there are enough resources available to satisfy the resource requirements of all processes in the system."]}),"\n",(0,i.jsxs)(s.p,{children:["The opposite concept, ",(0,i.jsx)(s.strong,{children:"unsafe state"})," occurs when there is not enough available resources to satisfy the resource requirements of all processes, which can potentially lead to a deadlock."]}),"\n",(0,i.jsx)(s.p,{children:"The algorithm works by considering the maximum resource needs of each process, the currently allocated resources, and the available resources in the system."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Initialization"})," : The algorithm starts by gathering information about the maximum resource needs of each process, the currently allocated resources, and the available resources in the system."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Resource allocation table",src:n(56183).Z+"",width:"472",height:"220"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/",children:"https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/"})]}),"\n",(0,i.jsxs)(s.p,{children:["The resource allocation can be represented in a table (called ",(0,i.jsx)(s.strong,{children:"available matrix"}),"), for example, the resource A has a total of 10, where 2, 3, 2 of it is allocated by process 1, 2, 3, respectively. Resource A can only be accessed by max of 7, resulting in availability of 3."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Request Handling"})," : When a process requests additional resources, the algorithm checks if granting the request would result in an unsafe state or potential deadlock. It evaluates whether there are enough available resources to satisfy the request without violating the safety conditions."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Resource Allocation"})," : If the requested resources can be allocated without causing an unsafe state, the algorithm grants the resources to the requesting process. It updates the allocation and available resource matrices accordingly."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Safety Check"})," : After each resource allocation or request, the algorithm performs a safety check to determine if the system is in a safe state. It simulates the allocation of resources to all processes and checks if it can reach an end state where all processes can complete their execution without deadlock."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Deadlock Avoidance"})," : If the safety check determines that the system is in a safe state, the requested resources are allocated to the process, and the system continues its execution. Otherwise, the requested resources are not immediately granted, and the process must wait until sufficient resources become available."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"recovery",children:"Recovery"}),"\n",(0,i.jsx)(s.p,{children:"If a deadlock occurs after detection, there are some method to recover from it :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Process Termination"})," : One approach is to terminate one or more processes involved in the deadlock. By terminating a process, the resources held by that process are released and become available for other processes. The terminated process may need to restart or reattempt its task after the deadlock is resolved."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Resource Preemption"})," : In some cases, it may be possible to preempt or forcibly reclaim resources from one or more processes to break the deadlock. The preemption can be achieved by rolling back the process to a checkpoint or by freeing resources that are less critical to the process. Preempted resources can then be allocated to other processes to allow them to proceed."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},22863:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/dining-philosopher-69d4168bf2625067f113a32627ce9321.png"},53846:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/peterson-solution-a3c8175f603bba7e5dafacf0c9ee4021.png"},81743:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/resource-allocation-graph-8d400f8e678ebf4c912ad020ed7847e6.png"},56183:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/resource-allocation-table-498c7153b66178ef85f2b9be2135aa1f.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var i=n(67294);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);