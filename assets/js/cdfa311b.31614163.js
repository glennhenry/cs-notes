"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[8812],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(i),u=n,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return i?r.createElement(g,o(o({ref:t},d),{},{components:i})):r.createElement(g,o({ref:t},d))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},37196:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=i(87462),n=(i(67294),i(3905));const a={slug:"/digital-media-processing/video-representation",id:"video-representation",title:"Video Representation",description:"Video Representation"},o=void 0,s={unversionedId:"digital-media-processing/video-representation/video-representation",id:"digital-media-processing/video-representation/video-representation",title:"Video Representation",description:"Video Representation",source:"@site/docs/digital-media-processing/12-video-representation/video-representation.md",sourceDirName:"digital-media-processing/12-video-representation",slug:"/digital-media-processing/video-representation",permalink:"/cs-notes/digital-media-processing/video-representation",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/digital-media-processing/12-video-representation/video-representation.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1692011076,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{slug:"/digital-media-processing/video-representation",id:"video-representation",title:"Video Representation",description:"Video Representation"},sidebar:"sidebar",previous:{title:"Speech Processing",permalink:"/cs-notes/digital-media-processing/speech-processing"},next:{title:"Video Recording",permalink:"/cs-notes/digital-media-processing/video-recording"}},p={},l=[{value:"Resolution",id:"resolution",level:4}],d={toc:l},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Main Source : ",(0,n.kt)("a",{parentName:"strong",href:"/computer-graphics/computer-display"},"Computer Graphics : Computer Display"))),(0,n.kt)("p",null,"Video is basically a sequence of image. An image is stationary, however, if we keep changing the image with a small change in the detail of image, we will be able to create illusion of animation."),(0,n.kt)("p",null,"The image is called ",(0,n.kt)("strong",{parentName:"p"},"frame")," and the measurement of how many frame is usually measured per second as FPS (frame per second). The more FPS will result in smoother and better animation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Comparison of different FPS in animation",src:i(15206).Z,width:"500",height:"288"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://gfycat.com/discover/fps-comparison-gifs"},"https://gfycat.com/discover/fps-comparison-gifs")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"More about FPS and some standard for display ",(0,n.kt)("a",{parentName:"p",href:"/computer-graphics/computer-display#display-measurement"},"here"))),(0,n.kt)("h4",{id:"resolution"},"Resolution"),(0,n.kt)("p",null,"Because video is an image, it also has resolution which is the number of how many pixel exist in an image. Resolution is measured in width x height of the image, the higher resolution would result in a higher quality image but also takes more space in memory."),(0,n.kt)("p",null,"Common video resolution include :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Standard Definition (SD)")," : 720x480 pixels (NTSC) or 720x576 pixels (PAL)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High Definition (HD)")," : 1280x720 pixels (720p) or 1920x1080 pixels (1080p)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ultra High Definition (UHD)")," : 3840x2160 pixels (4K UHD) or 7680x4320 pixels (8K UHD)")),(0,n.kt)("p",null,"The resolution also affected by the display size. For example, a small monitor that displays 720p image may looks fine, but a bigger monitor that displays the same image may appear blurry or less sharp and much loss of detail. This is because in a bigger monitor, individual pixels are spread out over a larger physical area."),(0,n.kt)("p",null,"The measurement of how many pixel are spread out is PPI (pixels per inch), a bigger monitor will have more PPI."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Comparison between 1080p and 4K monitor PPI",src:i(50544).Z,width:"1024",height:"470"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://www.displayninja.com/what-is-pixel-density/"},"https://www.displayninja.com/what-is-pixel-density/")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Find more about video related to computer display ",(0,n.kt)("a",{parentName:"p",href:"/computer-graphics/computer-display"},"here")," and about computer animation ",(0,n.kt)("a",{parentName:"p",href:"/computer-graphics/computer-animation"},"here"))))}m.isMDXComponent=!0},15206:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/fps-comparison-0bf9ccd72996e9264d14c58fd39aed40.gif"},50544:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/pixel-density-1704407e703e13eccba38b207785bdbe.png"}}]);