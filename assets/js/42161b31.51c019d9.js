"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={slug:"/computer-networking/rtc",id:"rtc",title:"RTC",description:"RTC"},a=void 0,s={unversionedId:"computer-networking/rtc/rtc",id:"computer-networking/rtc/rtc",title:"RTC",description:"RTC",source:"@site/docs/computer-networking/29-rtc/rtc.md",sourceDirName:"computer-networking/29-rtc",slug:"/computer-networking/rtc",permalink:"/cs-notes/computer-networking/rtc",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-networking/29-rtc/rtc.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1693394193,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{slug:"/computer-networking/rtc",id:"rtc",title:"RTC",description:"RTC"},sidebar:"sidebar",previous:{title:"RTP",permalink:"/cs-notes/computer-networking/rtp"},next:{title:"HTTP & HTTPS",permalink:"/cs-notes/computer-networking/http-https"}},c={},l=[{value:"RTC Process",id:"rtc-process",level:3},{value:"WebRTC",id:"webrtc",level:3}],p={toc:l},m="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main Source :")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://youtu.be/SsN4gl_wV_8?si=AMKXMF-PNW-0YUJB"},"How Does WebRTC Work? - heyletscode"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://youtu.be/WmR9IMUD_CY?si=QsSM0JlQ2FnAHcgF"},"WebRTC in 100 Seconds - Fireship")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Real Time Communication (RTC)")," is a networking protocol used to transmit real-time communication data including voice calls, video calls, instant messaging, and file sharing over the networks. RTC is based on ",(0,i.kt)("a",{parentName:"p",href:"/computer-networking/tcp-ip-model"},"TCP/IP standard"),", it can use the ",(0,i.kt)("a",{parentName:"p",href:"/computer-networking/tcp-protocol"},"TCP protocol")," or the ",(0,i.kt)("a",{parentName:"p",href:"/computer-networking/udp"},"UDP protocol"),". Although, UDP is more used due to its lower latency and better real-time performance, it prioritize speed over reliability."),(0,i.kt)("h3",{id:"rtc-process"},"RTC Process"),(0,i.kt)("p",null,"RTC is a peer-to-peer connection, meaning it doesn't involve server and the participiants communicate directly. Server is only involved at the beginning and at the end of communication. RTC is based on session, session is a period of a particular acvitity. In the context of RTC, it is a period of interaction or communication between participants."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Session Initialization")," : The RTC protocol begins with session initialization, where participants indicate their intention to communicate. This is typically achieved through a signaling process and through a signaling server. Signaling is a process of coordinating between participants, it includes setting up and closing connection. This process is necesarry to inform participants to communicate and synchronize their actions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Media Exchange")," : Once the session is established, the RTC protocol facilitates the exchange of real-time media streams, such as audio, video, or data. Media streams are typically packetized into smaller units and transmitted over the network. ",(0,i.kt)("a",{parentName:"p",href:"/computer-networking/rtp"},"Real-Time Transport Protocol (RTP)")," is commonly used for this.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Session Termination")," : When participants conclude their communication, the session will be terminated. This involves signaling the end of the session to all participants, releasing resources, and closing the communication channels. Cleanup tasks may include releasing network connections, freeing up system resources, and updating session state information."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"RTC process architecture",src:n(26349).Z,width:"521",height:"394"})))),(0,i.kt)("h3",{id:"webrtc"},"WebRTC"),(0,i.kt)("p",null,"WebRTC is a web real-time communication technology that uses RTC protocol. It establish the same peer-to-peer connections for voice calling, video chat, file sharing, and other forms of real-time communication."),(0,i.kt)("p",null,'To begin connection, the participant need to send an "offer" to the signaling server. It contains necesarry information including protocol version, session name, session identifier, session title, email address, phone number, and other important information. The signaling server will exchange the information between each participants.'),(0,i.kt)("p",null,"Peer-to-peer connection could bring some problems, many devices uses private IP address assigned by ",(0,i.kt)("a",{parentName:"p",href:"/computer-networking/nat"},"Network Address Translation (NAT)"),". These private IP addresses are not directly reachable from the public internet. Another problem is some devices have a ",(0,i.kt)("a",{parentName:"p",href:"/computer-networking/firewall"},"firewall")," as network security."),(0,i.kt)("p",null,"WebRTC uses standard called Interactive Connectivity Establishment (ICE). ICE helps avoiding private IP address problem by utilizing STUN (Session Traversal Utilities for NAT) servers. It enables devices to determine their public IP addresses by contacting these servers, allowing them to communicate with the outside world."),(0,i.kt)("p",null,"ICE also helps overcoming firewall by utilizing TURN (Traversal Using Relays around NAT) servers. TURN servers act as intermediaries, relaying data between devices when direct connections are not possible."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WebRTC architecture",src:n(58397).Z,width:"403",height:"313"}),(0,i.kt)("br",{parentName:"p"}),"\n","Source : ",(0,i.kt)("a",{parentName:"p",href:"https://www.techtarget.com/searchunifiedcommunications/definition/WebRTC-Web-Real-Time-Communications"},"https://www.techtarget.com/searchunifiedcommunications/definition/WebRTC-Web-Real-Time-Communications")))}u.isMDXComponent=!0},26349:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rtc-architecture-b9e0c37069ffff7b50d8e32ee0e031b6.png"},58397:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/webrtc-9308b2a7c9a644ba31f58f6060013721.png"}}]);