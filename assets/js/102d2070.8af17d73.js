"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(r),h=a,m=l["".concat(o,".").concat(h)]||l[h]||d[h]||s;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},19097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/computer-graphics/textures-part-2",id:"textures-part-2",title:"Textures (Part 2)",description:"Textures (Part 2)"},i="Textures (Part 2)",p={unversionedId:"computer-graphics/textures-part-2/textures-part-2",id:"computer-graphics/textures-part-2/textures-part-2",title:"Textures (Part 2)",description:"Textures (Part 2)",source:"@site/docs/computer-graphics/10-textures-part-2/textures-part-2.md",sourceDirName:"computer-graphics/10-textures-part-2",slug:"/computer-graphics/textures-part-2",permalink:"/cs-notes/computer-graphics/textures-part-2",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-graphics/10-textures-part-2/textures-part-2.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1691924519,formattedLastUpdatedAt:"Aug 13, 2023",frontMatter:{slug:"/computer-graphics/textures-part-2",id:"textures-part-2",title:"Textures (Part 2)",description:"Textures (Part 2)"},sidebar:"sidebar",previous:{title:"Textures (Part 1)",permalink:"/cs-notes/computer-graphics/textures-part-1"},next:{title:"Shading (Part 1)",permalink:"/cs-notes/computer-graphics/shading-part-1"}},o={},u=[{value:"Texture On GPU",id:"texture-on-gpu",level:3},{value:"Texture Setup",id:"texture-setup",level:3},{value:"Shader Access",id:"shader-access",level:3}],c={toc:u},l="wrapper";function d(e){let{components:t,...s}=e;return(0,a.kt)(l,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"textures-part-2"},"Textures (Part 2)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Main Source : ",(0,a.kt)("a",{parentName:"strong",href:"https://youtu.be/WULOKMqEGA0"},"Intro to Graphics 14 - Textures on the GPU"))),(0,a.kt)("h3",{id:"texture-on-gpu"},"Texture On GPU"),(0,a.kt)("p",null,"Texture fall into the fragment shader process in the gpu pipeline. In fragment shader, texture are sampled and mapped into the object pixel at particular point. This can be done using barycentric coordinate which interpolate 3 vertices to find the specific point. Fragment shader also calculate other shading information, such as lighting, material properties, and any additional effects or algorithms applied to the scene."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A triangle with 3 vertices is mapped onto texture",src:r(82265).Z,width:"279",height:"207"}),(0,a.kt)("br",{parentName:"p"}),"\n","Source : ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/Yjv6hc4Zqjk?t=1233"},"https://youtu.be/Yjv6hc4Zqjk?t=1233")),(0,a.kt)("h3",{id:"texture-setup"},"Texture Setup"),(0,a.kt)("p",null,"Texture setup is the process by which a texture is loaded into memory on a graphics processing unit (GPU) and prepared for use in rendering. The texture setup process involves several steps, including loading the texture data into memory, setting up the texture parameters, and configuring the texture unit to apply the texture to 3D objects during rendering."),(0,a.kt)("p",null,"The component responsible for handling texture are called ",(0,a.kt)("strong",{parentName:"p"},"Texture Unit.")," Texture need to be set up and binded into the texture unit. Texture binding process include providing data and parameter to textures."),(0,a.kt)("p",null,"The data and parameter includes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Texture size"),(0,a.kt)("li",{parentName:"ul"},"Texture format, such as RGB or RGBA"),(0,a.kt)("li",{parentName:"ul"},"Texture filtering mode, what filtering method are used"),(0,a.kt)("li",{parentName:"ul"},"Mipmap level"),(0,a.kt)("li",{parentName:"ul"},"Texture tiling mode, including repeat, clamp to edge, etc")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Process of texture setup",src:r(71901).Z,width:"568",height:"361"}),(0,a.kt)("br",{parentName:"p"}),"\n","Source : ",(0,a.kt)("a",{parentName:"p",href:"https://math.hws.edu/graphicsbook/c6/s4.html"},"https://math.hws.edu/graphicsbook/c6/s4.html")),(0,a.kt)("h3",{id:"shader-access"},"Shader Access"),(0,a.kt)("p",null,"After binding the texture, ",(0,a.kt)("strong",{parentName:"p"},"shaders")," which are small programs that run on the GPU and are used to perform various tasks during rendering, such as lighting, shading, and texturing ",(0,a.kt)("strong",{parentName:"p"},"need to access the texture"),"."),(0,a.kt)("p",null,"Texture mapping involves calculating the texture coordinates that are used to look up the corresponding texel in the texture map. This mean texture unit need to access vertex shader which provide information about the coordinates."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Showing GPU pipeline consisting vertex shader, rasterizer, and fragment shader. Texture unit is in fragment shader but it points to vertex shader",src:r(97069).Z,width:"522",height:"355"}),(0,a.kt)("br",{parentName:"p"}),"\n","Source : ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/WULOKMqEGA0?t=2543"},"https://youtu.be/WULOKMqEGA0?t=2543")))}d.isMDXComponent=!0},82265:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/texture-on-gpu-a9ef0c843430c10221c26cdcd7425fb3.png"},71901:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/texture-setup-8343160d8939838bc29eea75d5d0102d.png"},97069:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/texture-unit-access-997061cea78cdbda32b2acbece615725.png"}}]);