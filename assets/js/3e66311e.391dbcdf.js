"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[5805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/computer-networking/rtp",id:"rtp",title:"RTP",description:"RTP"},i=void 0,p={unversionedId:"computer-networking/rtp/rtp",id:"computer-networking/rtp/rtp",title:"RTP",description:"RTP",source:"@site/docs/computer-networking/28-rtp/rtp.md",sourceDirName:"computer-networking/28-rtp",slug:"/computer-networking/rtp",permalink:"/cs-notes/computer-networking/rtp",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-networking/28-rtp/rtp.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1693394193,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{slug:"/computer-networking/rtp",id:"rtp",title:"RTP",description:"RTP"},sidebar:"sidebar",previous:{title:"Email Protocol",permalink:"/cs-notes/computer-networking/email-protocol"},next:{title:"RTC",permalink:"/cs-notes/computer-networking/rtc"}},s={},c=[{value:"RTP Process",id:"rtp-process",level:3}],l={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Main Source : ",(0,a.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Real-time_Transport_Protocol"},"Real-time Tranport Protocol Wikipedia"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Real-time Transport Protocol (RTP)")," is a network protocol used for the real-time transmission of audio and video data in the ",(0,a.kt)("a",{parentName:"p",href:"/computer-networking/tcp-ip-model"},"TCP/IP standard"),". RTP is commonly used in applications such as video conferencing, streaming media, and other multimedia applications that require real-time delivery of continuous data."),(0,a.kt)("p",null,"RTP uses ",(0,a.kt)("a",{parentName:"p",href:"/computer-networking/udp"},"User Datagram Protocol (UDP)"),", which is a simple, lightweight, and efficient mechanism to send data over network. Compared to ",(0,a.kt)("a",{parentName:"p",href:"/computer-networking/tcp-protocol"},"TCP protocol"),", it doesn't guarantee that all data will be sent. UDP's low overhead and reduced latency make it suitable for time-sensitive applications."),(0,a.kt)("h3",{id:"rtp-process"},"RTP Process"),(0,a.kt)("p",null,"RTP is used for media transmission, so before the transmission happens, these media file need to be encoded first."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Payload Packetization")," : RTP packetizes the encoded media into smaller units called RTP packets. Each RTP packet consists of an RTP header and a payload, these packet are numbered in sequence to detect packet loss. The header contains version of RTP, payload type or the type of data being carried, timestamp to maintain synchronization, and other information. The payload is the actual media data.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Transmission")," : RTP relies on the ",(0,a.kt)("a",{parentName:"p",href:"/computer-networking/udp"},"UDP protocol"),", the UDP layer delivers the packets to the appropriate receiving application based on the destination port number.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Packet Reassembly")," : The received RTP packets are reassembled based on their sequence numbers. This ensures that the media data is reconstructed in the correct order.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Playout Timing")," : The timestamp in each RTP packet assists in maintaining proper playout timing at the receiving end. By using the timestamp information, the receiving application or media player can synchronize the playback of the media data.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Media Decoding")," : Once the RTP packets are reassembled, they are typically decoded using the appropriate codec. The decoding process reverses the compression applied during encoding, allowing the media data to be rendered or played out accurately. After being decoded, the media is ready to be played by the application."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"High level process of RTP",src:r(69684).Z,width:"661",height:"407"}),(0,a.kt)("br",{parentName:"p"}),"\n","Source : ",(0,a.kt)("a",{parentName:"p",href:"https://www.oreilly.com/library/view/advanced-infrastructure-penetration/9781788624480/5ce761e5-1024-4556-a0b0-0864a1856de1.xhtml"},"https://www.oreilly.com/library/view/advanced-infrastructure-penetration/9781788624480/5ce761e5-1024-4556-a0b0-0864a1856de1.xhtml")))))}m.isMDXComponent=!0},69684:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rtp-flow-a230b918bfd60b5ec62a11863429f2ce.png"}}]);