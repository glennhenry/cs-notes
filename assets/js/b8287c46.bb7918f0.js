"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[666],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(a),g=n,u=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return a?r.createElement(u,o(o({ref:t},h),{},{components:a})):r.createElement(u,o({ref:t},h))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={slug:"/computer-graphics/ray-tracing",id:"ray-tracing",title:"Ray Tracing",description:"Ray Tracing"},o="Ray Tracing",s={unversionedId:"computer-graphics/ray-tracing/ray-tracing",id:"computer-graphics/ray-tracing/ray-tracing",title:"Ray Tracing",description:"Ray Tracing",source:"@site/docs/computer-graphics/14-ray-tracing/ray-tracing.md",sourceDirName:"computer-graphics/14-ray-tracing",slug:"/computer-graphics/ray-tracing",permalink:"/cs-notes/computer-graphics/ray-tracing",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-graphics/14-ray-tracing/ray-tracing.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1690117842,formattedLastUpdatedAt:"Jul 23, 2023",frontMatter:{slug:"/computer-graphics/ray-tracing",id:"ray-tracing",title:"Ray Tracing",description:"Ray Tracing"},sidebar:"sidebar",previous:{title:"Rendering (Part 2)",permalink:"/cs-notes/computer-graphics/rendering-part-2"},next:{title:"Shadows",permalink:"/cs-notes/computer-graphics/shadows"}},c={},l=[{value:"Ray",id:"ray",level:3},{value:"Ray-Sphere Intersection",id:"ray-sphere-intersection",level:3},{value:"Ray Tracing Accelaration",id:"ray-tracing-accelaration",level:3},{value:"Ray Casting",id:"ray-casting",level:3}],h={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ray-tracing"},"Ray Tracing"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Main Source :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://youtu.be/0WrzyD8nBlk"},"Intro to Graphics 18 - Rendering Algorithms"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://youtu.be/gGKup9tUSrU"},"Intro to Graphics 19 - Ray Tracing")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ray Tracing")," is a technique used in computer graphics to produce highly realistic images by simulating the behavior of light as it interacts with objects in a 3D scene. Ray tracing works by tracing the path of light rays from the camera through each pixel in the image plane and into the scene, where they interact with objects and produce reflections, shadows, and other lighting effects."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Ray comes from camera and bounces between object",src:a(7365).Z,width:"304",height:"169"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://math.hws.edu/graphicsbook/c8/s1.html"},"https://math.hws.edu/graphicsbook/c8/s1.html")),(0,n.kt)("p",null,"Ray tracing ",(0,n.kt)("strong",{parentName:"p"},"simulates the physical behavior of light"),", this means that light is traced everywhere and calculated through each reflection making a very realistic display. Compared to Phong lightning model which is based on simplified mathematical models of how light interacts with surfaces, ray tracing is much more computationally expensive and can require significant processing power to achieve real-time performance."),(0,n.kt)("p",null,"The reason why light is traced from the camera is to reduce computation. If all light source were to be calculated, then this would be much more computationally expensive than just a light from camera, it could also be overkill because some reflected light may not be seen by the camera."),(0,n.kt)("p",null,"Ray tracing also consider for ",(0,n.kt)("strong",{parentName:"p"},"different pixel samples at different positions that will result in different calculations for the rays that are traced"),"."),(0,n.kt)("p",null,"Consider a scenario where a reflective surface is struck by a light source. In this case, it is possible for a single light source to give rise to multiple new light sources, and each of these may, in turn, generate further new light sources."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An example of complex ray tracing bouncing to many object creating more sources",src:a(9786).Z,width:"483",height:"276"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://cs184.eecs.berkeley.edu/sp19/lecture/9-14/raytracing"},"https://cs184.eecs.berkeley.edu/sp19/lecture/9-14/raytracing")),(0,n.kt)("p",null,"In ray tracing, there may be additional rays that are cast from a surface point on an object into the scene to compute the lighting or other effects that result from interactions with other objects or light sources, this is called ",(0,n.kt)("strong",{parentName:"p"},"Secondary Rays"),". It typically include reflection rays, refraction rays, and shadow rays."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reflection Rays")," : The rays that are traced from a point on a surface in the scene and directed towards a reflective object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Refraction Rays")," : Traced from a point on a surface and directed towards a transparent or translucent object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Shadow Rays")," : The rays that will be traced to light source to determine if that particular point should be shadowed or not.")),(0,n.kt)("p",null,"For example, in the image below the red arrow bounced into the light source to check if that point is visible to light. The red arrow at bottom actually doesn\u2019t hit light, so it is shadowed."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Two rays fall on top of object creating color while the other ray fall onto bottom of object creating shadows",src:a(8820).Z,width:"383",height:"243"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/discover/ray-tracing"},"https://developer.nvidia.com/discover/ray-tracing")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A comparison of reflection, refraction and shadow ray",src:a(468).Z,width:"424",height:"306"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://www.slideshare.net/dieulinh299/ray-tracing"},"https://www.slideshare.net/dieulinh299/ray-tracing")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Secondary ray is reflected into plane creating perfect reflection",src:a(1638).Z,width:"420",height:"164"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/0WrzyD8nBlk?t=2823"},"https://youtu.be/0WrzyD8nBlk?t=2823")),(0,n.kt)("p",null,"Ray tracing can be thought as the opposite of rasterization. In rasterization, we iterate through each object and color the pixel to show it to the camera, this result in linear complexity and will burden if many objects exist in the scene."),(0,n.kt)("p",null,"While in ray tracing, light comes from the camera and we iterate through the pixel light hit making it a random accessing memory. Ray tracing is a logarithmic algorithm and able to catch up with rasterization at some point."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The loop algorithm comparison between rasterization and ray tracing",src:a(8162).Z,width:"522",height:"281"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/0WrzyD8nBlk?t=3265"},"https://youtu.be/0WrzyD8nBlk?t=3265")),(0,n.kt)("h3",{id:"ray"},"Ray"),(0,n.kt)("p",null,"Rays are typically represented as a ",(0,n.kt)("strong",{parentName:"p"},"line segment")," or a vector that originates from a point on the camera or light source and travels through a pixel in the image plane and into the scene."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The equation of modeling a ray",src:a(2886).Z,width:"230",height:"164"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/gGKup9tUSrU?t=304"},"https://youtu.be/gGKup9tUSrU?t=304")),(0,n.kt)("h3",{id:"ray-sphere-intersection"},"Ray-Sphere Intersection"),(0,n.kt)("p",null,"This technique is used to model the behavior of light as it interacts with spherical objects in a scene. The sphere formula is used in this model, to solve for the equation we can use quadratic formula."),(0,n.kt)("p",null,"The possible outcomes of the quadratic roots are :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"discriminant is negative"),", there are no real solutions for t, and the ",(0,n.kt)("strong",{parentName:"li"},"ray does not intersect the sphere"),"."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"discriminant is zero"),", there is one real solution for t, and the ray ",(0,n.kt)("strong",{parentName:"li"},"intersects the sphere at a single point"),"."),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("strong",{parentName:"li"},"discriminant is positive"),", there are two real solutions for t, and the r",(0,n.kt)("strong",{parentName:"li"},"ay intersects the sphere at two points"),". In this case, the intersection point closest to the ray origin is typically chosen as the point of intersection.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A ray intersect with 2 point resulting only the first closest point",src:a(9766).Z,width:"414",height:"243"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/gGKup9tUSrU?t=969"},"https://youtu.be/gGKup9tUSrU?t=969")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In summary, ray tracing process involves iterating every ray, the ray is tracked until it finds an object, if we found an object, we will check if it intersect and also the closest intersection from the camera. If all of that is true, we start shading the object")),(0,n.kt)("h3",{id:"ray-tracing-accelaration"},"Ray Tracing Accelaration"),(0,n.kt)("p",null,"Ray Tracing Accelaration is a techniques that is used to optimize the ray tracing process and reduce the computational cost of rendering complex scenes with many objects."),(0,n.kt)("p",null,"One of the common technique is ",(0,n.kt)("strong",{parentName:"p"},"Axis-aligned bounding boxes (AABB)"),", which partition the scene into a hierarchy of bounding volumes. The bounding volume hierarchy (BVH) is constructed by recursively dividing the space containing the scene's objects into two halves, with an AABB enclosing each half."),(0,n.kt)("p",null,"The improvement come from intersection testing, if the ray does not intersect the box, then it cannot intersect any of the objects inside it, and the ray tracing can be terminated."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Several sphere are bounded into two rectangles",src:a(4687).Z,width:"416",height:"234"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/gGKup9tUSrU?t=2883"},"https://youtu.be/gGKup9tUSrU?t=2883")),(0,n.kt)("h3",{id:"ray-casting"},"Ray Casting"),(0,n.kt)("p",null,"There is also a much more lighter version of ray tracing, this is called ",(0,n.kt)("strong",{parentName:"p"},"Ray Casting"),", as it does not account for reflections, shadows, or other complex lighting effects. The only thing ray casting do is just tracing the light from the camera and check if it intersect with an object to determine which objects are visible. Ray casting can also create an illusion of depth or distance, for example a closer wall might be more bright than the further wall."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Ray casting creates an illusion of depth in a 2D wall",src:a(167).Z,width:"375",height:"134"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://id.wikipedia.org/wiki/Raycasting"},"https://id.wikipedia.org/wiki/Raycasting")))}d.isMDXComponent=!0},4687:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bvh-algorithm-7c02c62938e56e0fd6ecde68e96257ce.png"},9786:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/complex-ray-tracing-fa2d0a15715c4836b76cce45604e5f0f.png"},167:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},2886:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ray-modeling-4d08ed3d01a49be0fe26d54a7c730fad.png"},9766:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ray-sphere-intersection-16df04d910d13b3217c528cf8c147abc.png"},7365:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ray-tracing-example-4289d6801fdc1ab1d6c648b921f4cb00.png"},8162:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ray-tracing-vs-rasterization-4edcee320168df07e48ffd686ad1df02.png"},468:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/secondary-ray-1-0e6c179bb30d5513dff53c51beba4672.png"},1638:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/secondary-ray-2-d69210625c8d66a558c4df403dd52041.png"},8820:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shadow-ray-d798b28dd9f9dde8a1fdb7ad6f24896d.png"}}]);