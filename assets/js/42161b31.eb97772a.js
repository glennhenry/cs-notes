"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6123],{90763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const r={slug:"/computer-networking/rtc",id:"rtc",title:"RTC",description:"RTC"},o=void 0,c={id:"computer-networking/rtc/rtc",title:"RTC",description:"RTC",source:"@site/docs/computer-networking/29-rtc/rtc.md",sourceDirName:"computer-networking/29-rtc",slug:"/computer-networking/rtc",permalink:"/cs-notes/computer-networking/rtc",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-networking/29-rtc/rtc.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1706857828,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{slug:"/computer-networking/rtc",id:"rtc",title:"RTC",description:"RTC"},sidebar:"sidebar",previous:{title:"RTP",permalink:"/cs-notes/computer-networking/rtp"},next:{title:"HTTP & HTTPS",permalink:"/cs-notes/computer-networking/http-https"}},a={},l=[{value:"RTC Process",id:"rtc-process",level:3},{value:"WebRTC",id:"webrtc",level:3}];function d(e){const n={a:"a",br:"br",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/SsN4gl_wV_8?si=AMKXMF-PNW-0YUJB",children:"How Does WebRTC Work? - heyletscode"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/WmR9IMUD_CY?si=QsSM0JlQ2FnAHcgF",children:"WebRTC in 100 Seconds - Fireship"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Real Time Communication (RTC)"})," is a networking protocol used to transmit real-time communication data including voice calls, video calls, instant messaging, and file sharing over the networks. RTC is based on ",(0,i.jsx)(n.a,{href:"/computer-networking/tcp-ip-model",children:"TCP/IP standard"}),", it can use the ",(0,i.jsx)(n.a,{href:"/computer-networking/tcp-protocol",children:"TCP protocol"})," or the ",(0,i.jsx)(n.a,{href:"/computer-networking/udp",children:"UDP protocol"}),". Although, UDP is more used due to its lower latency and better real-time performance, it prioritizes speed over reliability."]}),"\n",(0,i.jsx)(n.h3,{id:"rtc-process",children:"RTC Process"}),"\n",(0,i.jsx)(n.p,{children:"RTC is a peer-to-peer connection, meaning it doesn't involve server and the participants communicate directly. Server is only involved at the beginning and at the end of communication. RTC is based on session, session is a period of a particular activity. In the context of RTC, it is a period of interaction or communication between participants."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session Initialization"})," : The RTC protocol begins with session initialization, where participants indicate their intention to communicate. This is typically achieved through a signaling process and through a signaling server. Signaling is a process of coordinating between participants, it includes setting up and closing connection. This process is necessary to inform participants to communicate and synchronize their actions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Media Exchange"})," : Once the session is established, the RTC protocol facilitates the exchange of real-time media streams, such as audio, video, or data. Media streams are typically packetized into smaller units and transmitted over the network. ",(0,i.jsx)(n.a,{href:"/computer-networking/rtp",children:"Real-Time Transport Protocol (RTP)"})," is commonly used for this."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session Termination"})," : When participants conclude their communication, the session will be terminated. This involves signaling the end of the session to all participants, releasing resources, and closing the communication channels. Cleanup tasks may include releasing network connections, freeing up system resources, and updating session state information."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"RTC process architecture",src:t(29030).Z+"",width:"521",height:"394"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"webrtc",children:"WebRTC"}),"\n",(0,i.jsx)(n.p,{children:"WebRTC is a web real-time communication technology that uses RTC protocol. It establishes the same peer-to-peer connections for voice calling, video chat, file sharing, and other forms of real-time communication."}),"\n",(0,i.jsx)(n.p,{children:'To begin connection, the participant need to send an "offer" to the signaling server. It contains necessary information including protocol version, session name, session identifier, session title, email address, phone number, and other important information. The signaling server will exchange the information between each participant.'}),"\n",(0,i.jsxs)(n.p,{children:["Peer-to-peer connection could bring some problems, many devices uses private IP address assigned by ",(0,i.jsx)(n.a,{href:"/computer-networking/nat",children:"Network Address Translation (NAT)"}),". These private IP addresses are not directly reachable from the public internet. Another problem is some devices have a ",(0,i.jsx)(n.a,{href:"/computer-networking/network-security#firewall",children:"firewall"})," as network security."]}),"\n",(0,i.jsx)(n.p,{children:"WebRTC uses standard called Interactive Connectivity Establishment (ICE). ICE helps avoiding private IP address problem by utilizing STUN (Session Traversal Utilities for NAT) servers. It enables devices to determine their public IP addresses by contacting these servers, allowing them to communicate with the outside world."}),"\n",(0,i.jsx)(n.p,{children:"ICE also helps overcoming firewall by utilizing TURN (Traversal Using Relays around NAT) servers. TURN servers act as intermediaries, relaying data between devices when direct connections are not possible."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"WebRTC&#39;s architecture",src:t(39465).Z+"",width:"403",height:"313"}),(0,i.jsx)(n.br,{}),"\n","Source : ",(0,i.jsx)(n.a,{href:"https://www.techtarget.com/searchunifiedcommunications/definition/WebRTC-Web-Real-Time-Communications",children:"https://www.techtarget.com/searchunifiedcommunications/definition/WebRTC-Web-Real-Time-Communications"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},29030:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/rtc-architecture-b9e0c37069ffff7b50d8e32ee0e031b6.png"},39465:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/webrtc-9308b2a7c9a644ba31f58f6060013721.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);