"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7505],{32869:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(85893),n=t(11151);const o={slug:"/computer-graphics/simulation",id:"simulation",title:"Simulation",description:"Simulation"},a="Simulation",r={id:"computer-graphics/simulation/simulation",title:"Simulation",description:"Simulation",source:"@site/docs/computer-graphics/23-simulation/simulation.md",sourceDirName:"computer-graphics/23-simulation",slug:"/computer-graphics/simulation",permalink:"/cs-notes/computer-graphics/simulation",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-graphics/23-simulation/simulation.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1707298369,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{slug:"/computer-graphics/simulation",id:"simulation",title:"Simulation",description:"Simulation"},sidebar:"sidebar",previous:{title:"Physics-Based Animation",permalink:"/cs-notes/computer-graphics/physics-based-animation"},next:{title:"Frontend Web Development",permalink:"/cs-notes/frontend-web-development"}},c={},l=[{value:"Rigid Body Simulation",id:"rigid-body-simulation",level:3},{value:"Cloth Simulation",id:"cloth-simulation",level:3},{value:"Particle-Based Fluid Simulation",id:"particle-based-fluid-simulation",level:3}];function h(i){const e={a:"a",br:"br",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"simulation",children:"Simulation"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["Main Source : ",(0,s.jsx)(e.a,{href:"https://youtu.be/iZ1e_1tnLgI",children:"Intro to Graphics 25 - Simulation in Graphics"})]})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Simulation"})," refers to the use of mathematical models and algorithms to mimic the behavior of physical phenomena or systems, such as the motion of objects, the behavior of fluids, or the interaction of light and materials."]}),"\n",(0,s.jsx)(e.h3,{id:"rigid-body-simulation",children:"Rigid Body Simulation"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Rigid Body Simulation"})," is a type of physics simulation that model the motion and interaction of solid objects that do not deform or change shape during their motion. Examples of rigid bodies include objects such as balls, boxes, or cars."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"A ball thrown at some box wall",src:t(12260).Z+"",width:"463",height:"291"}),(0,s.jsx)(e.br,{}),"\n","Source : ",(0,s.jsx)(e.a,{href:"https://3dtotal.com/tutorials/t/how-to-master-rigid-body-simulation-in-blender-filippo-veniero-object-animation-rigid",children:"https://3dtotal.com/tutorials/t/how-to-master-rigid-body-simulation-in-blender-filippo-veniero-object-animation-rigid"})]}),"\n",(0,s.jsx)(e.p,{children:"The motion of a rigid body is governed by Newton's laws of motion, which relate the forces acting on an object to its acceleration. In a rigid body simulation, the forces acting on each rigid body are typically gravity, which pulls the object downwards, and any external forces such as friction or collisions with other objects."}),"\n",(0,s.jsxs)(e.p,{children:["There are also type of rigid body called ",(0,s.jsx)(e.strong,{children:"Articulated Rigid Body."})," In an articulated rigid body simulation, each object is represented as a collection of rigid bodies connected by joints. The joints allow the rigid bodies to move and rotate relative to each other, while maintaining their rigid shape."]}),"\n",(0,s.jsxs)(e.p,{children:["Articulated Rigid Body has ",(0,s.jsx)(e.strong,{children:"degree of freedom"})," which refers to the number of independent ways in which a joint or rigid body can move."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"A cylinder is connected with each other",src:t(41766).Z+"",width:"302",height:"169"}),(0,s.jsx)(e.br,{}),"\n","Source : ",(0,s.jsx)(e.a,{href:"https://link.springer.com/chapter/10.1007/978-1-4471-4417-5_5",children:"https://link.springer.com/chapter/10.1007/978-1-4471-4417-5_5"})]}),"\n",(0,s.jsx)(e.h3,{id:"cloth-simulation",children:"Cloth Simulation"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Cloth Simulation"})," is a type of physics simulation that model the behavior of flexible materials, such as cloth, fabric, or soft bodies. Cloth simulation is a complex process which includes :"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Mesh Modelling"})," : The cloth is first modeled as a mesh of triangles. Each triangle is made up of three vertices, which are points in space."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Properties Modelling"})," : Physical properties of the cloth are then defined, such as its mass, elasticity, and friction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Calculation"})," : The cloth is then simulated over time using a physics engine. The\nphysics engine calculates the forces acting on each vertex of the mesh, such as gravity, wind, and friction. After that the position and velocity of each vertex of the mesh will be updated."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"Complex cloth shape worn by human mannequin model",src:t(97004).Z+"",width:"841",height:"282"}),(0,s.jsx)(e.br,{}),"\n","Source : ",(0,s.jsx)(e.a,{href:"https://min-tang.github.io/home/PCloth/",children:"https://min-tang.github.io/home/PCloth/"})]}),"\n",(0,s.jsx)(e.h3,{id:"particle-based-fluid-simulation",children:"Particle-Based Fluid Simulation"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Particle Simulation"})," involves modeling the motion and interaction of individual particles, such as dust, smoke, or sparks."]}),"\n",(0,s.jsx)(e.p,{children:"The motion of particle is governed Newton's laws of motion and the conservation of momentum. The simulation calculates the new position and velocity of each particle based on the forces acting on it, which include gravity, external forces applied by the user or other objects in the scene, and internal forces such as friction and cohesion."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"Particle inside a sphere",src:t(13594).Z+"",width:"315",height:"162"}),(0,s.jsx)(e.br,{}),"\n","Source : ",(0,s.jsx)(e.a,{href:"https://rocky.esss.co/library/presentation-investigate-a-wider-range-of-possibilities-with-particle-dynamics-simulation/",children:"https://rocky.esss.co/library/presentation-investigate-a-wider-range-of-possibilities-with-particle-dynamics-simulation/"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Fluid simulation"}),", on the other hand, involves modeling the behavior of fluids such as water, air, or gases."]}),"\n",(0,s.jsx)(e.p,{children:"The motion of the fluid is governed by the Navier-Stokes equations, which describe the conservation of mass, momentum, and energy in a fluid. The simulation calculates the new velocity and pressure of the fluid at each point in space, based on the forces acting on it, which include gravity, external forces applied by the user or other objects in the scene, and internal forces such as viscosity and surface tension."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"A ball bouncing in a box filled with water",src:t(98072).Z+"",width:"285",height:"180"}),(0,s.jsx)(e.br,{}),"\n","Source : ",(0,s.jsx)(e.a,{href:"https://www.semanticscholar.org/paper/Fluid-Simulation-For-Computer-Graphics%3A-A-Tutorial-Braley-Sandu/0b521fdd0b92e00b221012374cbaa70fe163feea",children:"https://www.semanticscholar.org/paper/Fluid-Simulation-For-Computer-Graphics%3A-A-Tutorial-Braley-Sandu/0b521fdd0b92e00b221012374cbaa70fe163feea"})]}),"\n",(0,s.jsxs)(e.p,{children:["One of the technique used to simulate fluid is ",(0,s.jsx)(e.strong,{children:"Smoothed particle hydrodynamics (SPH)."})," This technique uses a grid of particles to represent the fluid. The particles interact with each other and with the boundaries of the fluid domain."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"The equation and image of how SPH is modeled",src:t(75329).Z+"",width:"388",height:"356"}),(0,s.jsx)(e.br,{}),"\n","Source : ",(0,s.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics",children:"https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"The results of SPH technique throwing a blue into water",src:t(6539).Z+"",width:"316",height:"162"}),(0,s.jsx)(e.br,{}),"\n","Source : ",(0,s.jsx)(e.a,{href:"https://www.kitware.com/sph-fluid-simulation-in-imstk/",children:"https://www.kitware.com/sph-fluid-simulation-in-imstk/"})]})]})}function d(i={}){const{wrapper:e}={...(0,n.a)(),...i.components};return e?(0,s.jsx)(e,{...i,children:(0,s.jsx)(h,{...i})}):h(i)}},41766:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/articulated-rigid-body-dfb7a0128be2fbb6e25bf02d8ee688e1.png"},97004:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/cloth-simulation-55b70118270cd0cccc92c9a511e97b51.png"},98072:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/fluid-simulation-64066a66a97d5a7a561a12078fa8f251.png"},13594:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/particle-simulation-9dbf62f6d97fe6b66a8b4476549b50a4.png"},12260:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/rigid-body-simulation-947aa764e5b6133dae3351a55d0c3392.png"},75329:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/sph-technique-1-1d2a3bc42b40b84fda69c3c5ba6b2bb8.png"},6539:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/sph-technique-2-a10e2c4ab2c072c19baaf9dfdfe1a7b6.png"},11151:(i,e,t)=>{t.d(e,{Z:()=>r,a:()=>a});var s=t(67294);const n={},o=s.createContext(n);function a(i){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function r(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(n):i.components||n:a(i.components),s.createElement(o.Provider,{value:e},i.children)}}}]);