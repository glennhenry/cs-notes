"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[774],{65501:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const r={slug:"/computer-organization-and-architecture/gpu",id:"gpu",title:"GPU",description:"GPU"},a=void 0,o={id:"computer-organization-and-architecture/gpu/gpu",title:"GPU",description:"GPU",source:"@site/docs/computer-organization-and-architecture/12-gpu/gpu.md",sourceDirName:"computer-organization-and-architecture/12-gpu",slug:"/computer-organization-and-architecture/gpu",permalink:"/cs-notes/computer-organization-and-architecture/gpu",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-organization-and-architecture/12-gpu/gpu.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1703411896,formattedLastUpdatedAt:"Dec 24, 2023",frontMatter:{slug:"/computer-organization-and-architecture/gpu",id:"gpu",title:"GPU",description:"GPU"},sidebar:"sidebar",previous:{title:"ISA",permalink:"/cs-notes/computer-organization-and-architecture/isa"},next:{title:"Vector Processors & TPU",permalink:"/cs-notes/computer-organization-and-architecture/vector-processors-and-tpu"}},c={},l=[{value:"GPU Components",id:"gpu-components",level:3},{value:"GPU Programming",id:"gpu-programming",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Graphics_processing_unit",children:"Graphics processing unit - Wikipedia"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://teachcomputerscience.com/graphics-processor-unit/",children:"Graphics Processor Unit (GPU) - Teach Computer Science"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/45734138/why-an-if-else-statement-in-gpus-code-will-cut-the-performance-in-half",children:"Why an \u201cif-else\u201d statement (in GPUs code) will cut the performance in half - stackoverflow"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Graphics Processing Unit (GPU)"})," is a specialized processor designed to handle and accelerate the rendering, creation, and manipulation of images, videos, and graphics data."]}),"\n",(0,s.jsx)(n.p,{children:"Some aspects of GPU that makes it specialized :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Parallel Processing"})," : GPU are designed with many cores that can execute multiple tasks simultaneously. In contrast, CPU has less core, but each is more powerful. The parallel architecture enables GPUs to process data in parallel, making them highly efficient for tasks that can be broken down into smaller computational units."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dedicated Memory"})," : Some GPU have their own dedicated memory called ",(0,s.jsx)(n.strong,{children:"VRAM (Video RAM)"})," or ",(0,s.jsx)(n.strong,{children:"GDDR (Graphics Double Data Rate)"})," memory. This memory is optimized for high-speed data access and is used to store textures, frame buffers, and other graphics-related data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Graphics Rendering Optimization"})," : GPUs are specifically optimized for graphics rendering tasks. They have dedicated hardware components, such as texture mapping units, rasterizers, and shader cores, that accelerate the ",(0,s.jsx)(n.a,{href:"/computer-graphics/gpu-pipeline",children:"rendering pipeline"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"GPU vs CPU",src:t(55001).Z+"",width:"630",height:"311"}),(0,s.jsx)(n.br,{}),"\n","Source : ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html",children:"https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html"})]}),"\n",(0,s.jsxs)(n.p,{children:["Other than graphics processing, GPU is also used for other tasks that involves a lot of computation that can be done on parallel such as ",(0,s.jsx)(n.a,{href:"/deep-learning/neural-network",children:"neural networks"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"gpu-components",children:"GPU Components"}),"\n",(0,s.jsx)(n.p,{children:"GPU consists of several components :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Graphics and Compute Array (GCA)"})," : GCA contains the core processing unit of a GPU. It consists of multiple streaming multiprocessors (SM) or compute units that perform parallel computations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compression Unit"})," : Some GPUs incorporate compression units that can compress and decompress data to reduce memory bandwidth requirements. This can help improve performance by reducing memory bottlenecks and improving memory access efficiency."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Graphics Memory Controller (GMC)"})," : GMC manages the interaction between the GPU and its dedicated graphics memory. It handles tasks such as memory allocation, data transfer, and memory bandwidth management."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"VGA BIOS"})," : VGA BIOS is a firmware component stored on the GPU. It provides low-level initialization and configuration routines for the GPU during system boot-up. It is responsible for setting up the GPU's initial state and ensuring compatibility with the system's display capabilities."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bus Interface"})," : Bus Interface is the component that connects the GPU to the computer's system bus. It enables data transfer between the GPU and other system components, such as the CPU and system memory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Power Management Unit (PMU)"})," : The Power Management Unit is responsible for managing and regulating the power consumption of the GPU. It monitors power usage, adjusts clock frequencies, controls voltage levels, and implements power-saving features to optimize performance while minimizing power consumption."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Video Processing Unit (VPU)"})," : VPU is a specialized component within some GPUs that handles video-related tasks. It includes functions such as video decoding, encoding, and post-processing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Display Interface"})," : GPUs include display interfaces, such as HDMI, DisplayPort, or DVI. These interfaces provide the necessary signals and protocols for connecting monitors or other display devices to the GPU. They transmit video and audio data from the GPU to the display."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"GPU components",src:t(98208).Z+"",width:"872",height:"819"}),(0,s.jsx)(n.br,{}),"\n","Source : ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Graphics_processing_unit",children:"https://en.wikipedia.org/wiki/Graphics_processing_unit"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Memory Hierarchy"})," : GPUs have multiple levels of memory hierarchy :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Global Memory"})," : Global memory is the largest memory space in a GPU and is accessible by all threads. It is used to store data that needs to be shared across different threads."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Shared Memory"})," : Shared memory is a fast, low-latency memory space, but smaller than global memory, that is shared among threads within a thread block. It enables efficient data sharing and inter-thread communication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Texture Memory"})," : Texture memory is a specialized read-only memory used for efficient texture mapping operations in graphics applications. It provides fast access to texture data for texture sampling."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Constant Memory"})," : Constant memory is a read-only memory space used for storing data that remains constant during kernel execution. It provides fast access to frequently used constants or configuration data."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Rasterizer"})," : The rasterizer is a component responsible for converting geometric primitives (such as triangles) into pixels for display. It performs operations like clipping, culling, and interpolation of vertex attributes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Texture Units"})," : Texture units handle texture-related operations such as filtering, sampling, and interpolation. They are specialized hardware components designed for efficient texture mapping in graphics applications."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Frame & Pixel Buffer"})," : These are temporary memory to store graphical data. The frame buffer represent the complete image on the screen, which is displayed currently, while the pixel buffer store pixel data temporarily during graphics processing tasks. The GPU continuously updates the buffer with new pixel data as it performs calculations and renders the scene."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["More about ",(0,s.jsx)(n.a,{href:"/computer-graphics",children:"computer graphics"})]})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Not all GPU has all those specialized features. There are two types of GPU, ",(0,s.jsx)(n.strong,{children:"integrated"})," and ",(0,s.jsx)(n.strong,{children:"dedicated"}),". Integrated GPU is integrated with the CPU, they typically share the system memory. They are mostly used for basic graphics tasks. On the other hand, a dedicated GPU has its own dedicated memory called Video RAM (VRAM)."]})}),"\n",(0,s.jsx)(n.h3,{id:"gpu-programming",children:"GPU Programming"}),"\n",(0,s.jsx)(n.p,{children:"Traditional programming often rely on sequential processing, which utilizes a single processor core or a few cores. It focuses on optimizing the execution of instructions on a single thread or a limited number of threads."}),"\n",(0,s.jsx)(n.p,{children:"The nature of parallelism in GPU architecture opens up a new field, GPU programming. Programmers can take advantage of the parallel architecture of GPU by breaking down tasks into smaller, independent units that can be executed in parallel, instead of sequential processing."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compute Unified Device Architecture (CUDA)"}),", which is provided by NVIDIA, is an API that allow programmers to write code specifically for GPUs, these frameworks provide additional functionality and optimization techniques tailored for GPU architectures."]}),"\n",(0,s.jsxs)(n.p,{children:['GPU programming typically uses less control flow construct like "if-else" statement. If-else statement is used to make a conditional branch based on some condition. GPU executes threads parallelly in a group called ',(0,s.jsx)(n.strong,{children:"warps"}),". When the processing encounter a branch, the threads may take different paths based on the condition. This leads to divergent execution, where threads within the same warp follow different code paths. Divergence can impact performance because threads that are not executing the same path are effectively serialized, leading to decreased parallelism."]}),"\n",(0,s.jsx)(n.p,{children:"Some branch may also take longer than the other branch, this will lead some thread idling to wait the other thread to finish, due to the parallelism of GPU."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},98208:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/gpu-components-71ae3a74e966f0ece35dff7ca91cffb7.png"},55001:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/gpu-vs-cpu-0fed608f39df08103a8debf7bd72c49d.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);