"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[8897],{24078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(85893),s=t(11151);const i={slug:"/computer-networking/vpn",id:"vpn",title:"VPN",description:"VPN"},o=void 0,c={id:"computer-networking/vpn/vpn",title:"VPN",description:"VPN",source:"@site/docs/computer-networking/23-vpn/vpn.md",sourceDirName:"computer-networking/23-vpn",slug:"/computer-networking/vpn",permalink:"/cs-notes/computer-networking/vpn",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-networking/23-vpn/vpn.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1723455088e3,frontMatter:{slug:"/computer-networking/vpn",id:"vpn",title:"VPN",description:"VPN"},sidebar:"sidebar",previous:{title:"Proxy",permalink:"/cs-notes/computer-networking/proxy"},next:{title:"TCP Protocol",permalink:"/cs-notes/computer-networking/tcp-protocol"}},a={},l=[{value:"VPN Benefits",id:"vpn-benefits",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Main Source: ",(0,r.jsx)(n.a,{href:"https://youtu.be/R-JUOpCgTZc?si=vIQRWPCVOFV5-vun",children:"VPN (Virtual Private Network) Explained | PowerCert"})]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Virtual Private Network (VPN)"})," is a technology used to create a secure connection over a public network such as the internet. It allows users to send and receive data as if their devices were directly connected to a private network, even when they are accessing the internet through a public or untrusted network."]}),"\n",(0,r.jsx)(n.p,{children:"A computer that connects to a server can be monitored by ISP, government, or other malicious actor. By using VPN service, we can secure our connection. A VPN service can be thought as a virtual shield of the connection we establish."}),"\n",(0,r.jsxs)(n.p,{children:["Instead of connecting directly to the server, a VPN service which is operated in a ",(0,r.jsx)(n.strong,{children:"VPN server"}),", act as the intermediary of our connection to the server (we make connection to VPN server using a software tool called ",(0,r.jsx)(n.strong,{children:"VPN client"}),"). So, the VPN server will handle the connection to the actual server we are accessing. It includes requesting, receiving, and sending the response back to us from the server."]}),"\n",(0,r.jsxs)(n.p,{children:["VPN is similar with ",(0,r.jsx)(n.a,{href:"/computer-networking/proxy",children:"proxy"}),", the difference is a VPN server provides a more secure connection and other benefits."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"VPN that acts as a middle shield between client and the internet",src:t(99109).Z+"",width:"904",height:"359"}),(0,r.jsx)(n.br,{}),"\n","Source: ",(0,r.jsx)(n.a,{href:"https://www.hostinger.com/tutorials/what-is-vpn",children:"https://www.hostinger.com/tutorials/what-is-vpn"})]}),"\n",(0,r.jsx)(n.h3,{id:"vpn-benefits",children:"VPN Benefits"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Privacy"}),": VPN will secure your internet traffic and hide your IP address while connecting to a server, a VPN helps protect your privacy and makes it difficult for third parties, such as hackers or government agencies, to monitor your online activities."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Security"}),": VPNs use encryption protocols to secure your data, making it unreadable to anyone who intercepts it. In simple term, the request or data sent from server will be converted into a format that is not readable by human and it can only be transformed back by the intended recipient. This is especially important when connecting to public Wi-Fi networks, which are often unsecured and vulnerable to attacks."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Remote Connection"}),': We can use VPN as a private network. All the devices will be equiped by VPN services. Even if the devices are in remote places, we can connect it to a central location as if it was a local "private" network. Along with security benefits, we can be sure for transferring sensitive data.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Bypass Restrictions"}),": VPNs can help bypass censorship and geolocation restrictions by allowing you to connect to servers located in different regions. This can be useful for accessing blocked websites or services in your country. This works because we are not actually connecting to the actual server, instead the VPN server is the one who connects. We can choose to connect from a VPN server located in a country where the website is not blocked from there."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Refers to ",(0,r.jsx)(n.a,{href:"/computer-security",children:"computer security cryptography"})," section to know more about security and encryption."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},99109:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vpn-example-60d416f44e6ee26fdd073a56dce5f5a9.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);