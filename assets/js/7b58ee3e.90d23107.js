"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[5063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={slug:"/digital-media-processing/pdf",id:"pdf",title:"PDF",description:"PDF"},o=void 0,s={unversionedId:"digital-media-processing/pdf/pdf",id:"digital-media-processing/pdf/pdf",title:"PDF",description:"PDF",source:"@site/docs/digital-media-processing/31-pdf/pdf.md",sourceDirName:"digital-media-processing/31-pdf",slug:"/digital-media-processing/pdf",permalink:"/cs-notes/digital-media-processing/pdf",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/digital-media-processing/31-pdf/pdf.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1693740299,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{slug:"/digital-media-processing/pdf",id:"pdf",title:"PDF",description:"PDF"},sidebar:"sidebar",previous:{title:"Text File (txt)",permalink:"/cs-notes/digital-media-processing/text-file-txt"},next:{title:"Computer Networking",permalink:"/cs-notes/computer-networking"}},p={},c=[{value:"PDF Structure",id:"pdf-structure",level:3}],l={toc:c},d="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main Source : Various source from Google")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Portable Document Format (PDF)")," is a file format developed by Adobe in 1992 used to present documents, including text formatting, images, other interactive media such as, annotation, form-fields, video, and etc. PDF is designed to be cross-platform, meaning they can be viewed and accessed on different operating systems and devices with the appropriate PDF reader installed."),(0,i.kt)("p",null,"The content of PDF itself is in binary format, it encode all the content using ASCII."),(0,i.kt)("p",null,"PDF use variety of compression algorithm such as LZW (Lempel-Ziv-Welch), FLATE (ZIP, in PDF 1.2), JPEG. PDF also supports encryption with 256-bit ",(0,i.kt)("a",{parentName:"p",href:"/computer-security/aes"},"AES encryption")," in Cipher Block Chaining Encryption (CBC) mode for securing the content of the file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PDF icon and an example of PDF document",src:n(66393).Z,width:"599",height:"541"}),(0,i.kt)("br",{parentName:"p"}),"\n","Source : ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PDF"},"https://en.wikipedia.org/wiki/PDF")),(0,i.kt)("h3",{id:"pdf-structure"},"PDF Structure"),(0,i.kt)("p",null,"PDF has 4 main component, the body is the actual content of the document."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Header")," : The header is the starting point of a PDF file and contains information about the version of the PDF specification. The header format looks like ",(0,i.kt)("inlineCode",{parentName:"p"},"%PDF-1.x")," where x is the version.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Body")," : The content of PDF file is self-contained in a container called object. The object can be text, images, fonts, or other types of data, it also supports other nested object.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cross-Reference Table (xref)")," : The cross-reference table contains a list of all objects in the file, their byte offsets, and their status (whether they are still in use or not). This table allows for efficient random access and updating of the file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Trailer")," : The trailer section provides essential information about the PDF file, including the location of the cross-reference table, the total number of objects in the file, the root object of the document, and the end of file marker."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Structure of PDF file",src:n(65989).Z,width:"521",height:"482"}),(0,i.kt)("br",{parentName:"p"}),"\n","Source : ",(0,i.kt)("a",{parentName:"p",href:"https://www.researchgate.net/figure/An-example-of-a-simple-PDF-file-structure-that-consists-of-one-page-that-contains-a_fig1_326102942"},"https://www.researchgate.net/figure/An-example-of-a-simple-PDF-file-structure-that-consists-of-one-page-that-contains-a_fig1_326102942")))}f.isMDXComponent=!0},66393:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pdf-example-554f85e14ebe041b754cd39858ba9d58.png"},65989:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pdf-structure-b912ede5736d8c475fe29e6360faaa7f.png"}}]);