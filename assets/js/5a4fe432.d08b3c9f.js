"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7488],{35674:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(85893),a=i(11151);const s={slug:"/cloud-computing-and-distributed-systems/containerization",id:"containerization",title:"Containerization",description:"Containerization"},o=void 0,r={id:"cloud-computing-and-distributed-systems/containerization/containerization",title:"Containerization",description:"Containerization",source:"@site/docs/cloud-computing-and-distributed-systems/14-containerization/containerization.md",sourceDirName:"cloud-computing-and-distributed-systems/14-containerization",slug:"/cloud-computing-and-distributed-systems/containerization",permalink:"/cs-notes/cloud-computing-and-distributed-systems/containerization",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/cloud-computing-and-distributed-systems/14-containerization/containerization.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1709895580,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{slug:"/cloud-computing-and-distributed-systems/containerization",id:"containerization",title:"Containerization",description:"Containerization"},sidebar:"sidebar",previous:{title:"Virtualization",permalink:"/cs-notes/cloud-computing-and-distributed-systems/virtualization"},next:{title:"Docker & Kubernetes",permalink:"/cs-notes/cloud-computing-and-distributed-systems/docker-and-kubernetes"}},c={},d=[];function l(e){const n={a:"a",br:"br",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/pR-cGS6IGvI?si=LOqZkrsmbzDJE7l9",children:"Containers - Explained in 4 Minutes - Accelerate Rediscover In 4 Minutes"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://aws.amazon.com/what-is/containerization/",children:"What Is Containerization? - AWS"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["During application development, developers often use various libraries and modules, each with its own dependencies, this can create a complex ",(0,t.jsx)(n.a,{href:"/software-engineering/build-and-package-management#dependency",children:"dependency management"})," as the app gets larger. The server running the app will need all the required dependencies, including libraries, frameworks, runtime environments, packages, and operating system requirements in order to run the application."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Containerization"})," is a technique used to bundle an application along with all its required packages into a single unit known as a ",(0,t.jsx)(n.strong,{children:"container"}),". A container is isolated and self-contained, which helps prevent dependency conflicts in the case of single computer with different version of library installed run different application. All the necessary dependencies are specified within a ",(0,t.jsx)(n.strong,{children:"container image"})," (not an actual image file)."]}),"\n",(0,t.jsxs)(n.p,{children:["These containers are already fully-functional and can be executed directly in isolated instances using a ",(0,t.jsx)(n.strong,{children:"container engine"})," (e.g., ",(0,t.jsx)(n.a,{href:"/cloud-computing-and-distributed-systems/docker-and-kubernetes#docker",children:"Docker"}),"). The container engine is responsible for managing and running containers on a system. It achieves this by leveraging ",(0,t.jsx)(n.a,{href:"/cloud-computing-and-distributed-systems/virtualization",children:"virtualization"})," techniques, where the container engine sits on top of the operating system (OS) and provides ",(0,t.jsx)(n.a,{href:"/cloud-computing-and-distributed-systems/virtualization#level-implementation",children:"OS-level virtualization"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Containerization 1",src:i(36509).Z+"",width:"541",height:"410"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://bito.ai/blog/containerization-a-beginners-guide-to-its-impact-on-software-development/",children:"https://bito.ai/blog/containerization-a-beginners-guide-to-its-impact-on-software-development/"})]}),"\n",(0,t.jsx)(n.p,{children:"The computer runs virtualization, providing multiple virtual machines (VMs) with different OSes or configuration. These VMs are isolated, meaning each VM has its own file system, networking, and storage. The container engine will then interact with the OS to execute the libraries and application in the container."}),"\n",(0,t.jsx)(n.p,{children:"Multiple VM is actually not necessary to run the container, as another advantage of container is, we are capable of running multiple of it in single VM."}),"\n",(0,t.jsx)(n.p,{children:"Inside the VM, the required dependencies are installed based on the specifications in the container image. The container engine interacts with the OS to facilitate the execution of libraries and applications within the container."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Containerization 2",src:i(75208).Z+"",width:"648",height:"446"}),(0,t.jsx)(n.br,{}),"\n","Source : ",(0,t.jsx)(n.a,{href:"https://medium.com/hackernoon/what-is-containerization-83ae53a709a6",children:"https://medium.com/hackernoon/what-is-containerization-83ae53a709a6"})]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75208:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/container-2-80241dc366ef7da8f38d49a7080a3536.png"},36509:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/container-dcdf0829c55b0289590417afa8b0ddc0.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);