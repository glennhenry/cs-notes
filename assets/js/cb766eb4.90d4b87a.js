"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4457],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=n.createContext({}),l=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(h.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,h=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),g=r,u=p["".concat(h,".").concat(g)]||p[g]||d[g]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={slug:"/computer-graphics/shading-part-2",id:"shading-part-2",title:"Shading (Part 2)",description:"Shading (Part 2)"},i="Shading (Part 2)",s={unversionedId:"computer-graphics/shading-part-2/shading-part-2",id:"computer-graphics/shading-part-2/shading-part-2",title:"Shading (Part 2)",description:"Shading (Part 2)",source:"@site/docs/computer-graphics/11-shading-part-2/shading-part-2.md",sourceDirName:"computer-graphics/11-shading-part-2",slug:"/computer-graphics/shading-part-2",permalink:"/cs-notes/computer-graphics/shading-part-2",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-graphics/11-shading-part-2/shading-part-2.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1689861825,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{slug:"/computer-graphics/shading-part-2",id:"shading-part-2",title:"Shading (Part 2)",description:"Shading (Part 2)"},sidebar:"sidebar",previous:{title:"Shading (Part 1)",permalink:"/cs-notes/computer-graphics/shading-part-1"},next:{title:"Rendering (Part 1)",permalink:"/cs-notes/computer-graphics/rendering-part-1"}},h={},l=[{value:"Smooth Shading",id:"smooth-shading",level:3},{value:"Flat Shading",id:"flat-shading",level:3},{value:"Gouraud Shading",id:"gouraud-shading",level:3},{value:"Phong Shading",id:"phong-shading",level:3},{value:"Shading Transformation",id:"shading-transformation",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shading-part-2"},"Shading (Part 2)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Main Source : ",(0,r.kt)("a",{parentName:"strong",href:"https://youtu.be/Q_TYQvZS6WE"},"Intro to Graphics 16 - Shading Transformations"))),(0,r.kt)("h3",{id:"smooth-shading"},"Smooth Shading"),(0,r.kt)("p",null,"There are some technique to create a smooth appearance on curved surfaces, by interpolating the surface normals across the surface of the object :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flat Shading"),(0,r.kt)("li",{parentName:"ul"},"Gouraud Shading"),(0,r.kt)("li",{parentName:"ul"},"Phong Shading")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A sphere is shaded using these three different technique",src:a(7875).Z,width:"374",height:"136"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://opengl-notes.readthedocs.io/en/latest/topics/lighting/shading.html"},"https://opengl-notes.readthedocs.io/en/latest/topics/lighting/shading.html")),(0,r.kt)("p",null,"Smooth Shading is important for objects with curved surfaces, such as spheres or cylinders, where the faceted appearance of flat shading can be particularly noticeable."),(0,r.kt)("h3",{id:"flat-shading"},"Flat Shading"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flat Shading")," is a simple and efficient shading technique where each polygon or triangle of the object is assigned a single color, based on the lighting and material properties of the object. After color is calculated, it applies the material properties such as diffuse and specular reflectivity."),(0,r.kt)("p",null,"Flat shading does not take into account the direction of the surface normals on the object, which can result in a faceted appearance on curved surfaces. This is because ",(0,r.kt)("strong",{parentName:"p"},"each polygon of the object is treated as a separate flat surface"),", and the ",(0,r.kt)("strong",{parentName:"p"},"shading of each polygon is not blended with the shading of adjacent polygons"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A triangle with a normals line in the middle",src:a(4353).Z,width:"234",height:"196"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Q_TYQvZS6WE?t=250"},"https://youtu.be/Q_TYQvZS6WE?t=250")),(0,r.kt)("h3",{id:"gouraud-shading"},"Gouraud Shading"),(0,r.kt)("p",null,"In Gouraud Shading, the surface color of ",(0,r.kt)("strong",{parentName:"p"},"each polygon or triangle of the object is determined at its vertices"),", and then interpolated across the surface of the polygon using linear interpolation."),(0,r.kt)("p",null,"The color at each vertex is calculated based on the lighting and material properties of the object, such as the direction of the light and the surface normal, and can also take into account any textures or material maps that are applied to the surface of the object."),(0,r.kt)("p",null,"The interpolation of the color across the surface of the polygon creates the illusion of a smooth surface, by ",(0,r.kt)("strong",{parentName:"p"},"blending the shading of adjacent polygons together"),". This technique is more computationally expensive than flat shading, but produces much smoother and more natural results."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A point inside triangle is interpolated using barycentric coordinates method",src:a(2913).Z,width:"263",height:"219"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Q_TYQvZS6WE?t=384"},"https://youtu.be/Q_TYQvZS6WE?t=384")),(0,r.kt)("h3",{id:"phong-shading"},"Phong Shading"),(0,r.kt)("p",null,"In Phong shading, the surface color of each pixel of the object is determined using an interpolation of the ",(0,r.kt)("strong",{parentName:"p"},"vertex normals line"),", rather than the surface normals used in Gouraud shading."),(0,r.kt)("p",null,"The vertex normals are calculated by averaging the surface normals at each vertex of the polygon or triangle, and then interpolated across the surface of the polygon using linear interpolation."),(0,r.kt)("p",null,"Phong shading may be more computationally expensive than Gouraud shading because it calculates the surface color at each pixel of the object. This results a better lightning than Gouraud shading, especially for objects with high specular highlights or sharp edges."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A line is connected between surface normals",src:a(3767).Z,width:"312",height:"157"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Q_TYQvZS6WE?t=1118"},"https://youtu.be/Q_TYQvZS6WE?t=1118")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In summary, Flat shading assigns a single color to each polygon or triangle of the object while Gouraud calculates the surface color at each vertex of the object using interpolation, this mean Gouraud takes account neighbor polygon."),(0,r.kt)("p",{parentName:"admonition"},"On the other hand, phong shading uses vertex normals instead of surface normals in Gouraud shading.")),(0,r.kt)("h3",{id:"shading-transformation"},"Shading Transformation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shading Transformation")," is the process of transforming the surface normals of an object from its local coordinate system to a global coordinate system, in order to apply lighting and shading effects correctly."),(0,r.kt)("p",null,"Some of the coordinate system are :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Model Space,")," refers to the local coordinate system of the object being rendered. This allows the object to be easily manipulated and transformed, and enables the use of local lighting and shading effects that are based on the object's surface normals."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"World Space"),", refers to a global coordinate system that is fixed in 3D space which also include the other object in the scene. This allows global lighting and shading effects to be applied to the object, such as environmental lighting or reflections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"View Space"),", camera space or eye space, is a coordinate system that is defined relative to the position and orientation of the camera that is viewing the scene being rendered. View space is used to perform perspective projection, which is the process of projecting a 3D object onto a 2D screen.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Model space showing individual object, world space showing the actual word with various object, and view space showing canonical volume from the camera",src:a(5285).Z,width:"408",height:"374"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Q_TYQvZS6WE?t=2011"},"https://youtu.be/Q_TYQvZS6WE?t=2011")),(0,r.kt)("p",null,"Shading transformation works by applying a special matrix tranformation which is called ",(0,r.kt)("strong",{parentName:"p"},"inverse transpose matrix")," and is used to account for any non-uniform scaling or shearing transformations that may be present in the model-view matrix."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The inverse transpose matrix",src:a(5669).Z,width:"513",height:"293"}),(0,r.kt)("br",{parentName:"p"}),"\n","Source : ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Q_TYQvZS6WE?t=3214"},"https://youtu.be/Q_TYQvZS6WE?t=3214")))}d.isMDXComponent=!0},4353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flat-shading-f829475fdea0bd6ce4f254837fdb0a2e.png"},2913:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gouraud-shading-66b60ed28eeec76dc5b8a13a132ec2bc.png"},5669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/inverse-transpose-matrix-3ec2daf7193b6c2320845a084d0627e4.png"},5285:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/model-view-space-7591ea9123897798ee904518dc0cf270.png"},3767:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/phong-shading-07c2513c8214fd5bf447d732ba060be5.png"},7875:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/smooth-shading-comparison-67fb70fd30908fdee209686657569ade.png"}}]);