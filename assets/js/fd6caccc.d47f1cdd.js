"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[8897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/computer-networking/vpn",id:"vpn",title:"VPN",description:"VPN"},i=void 0,s={unversionedId:"computer-networking/vpn/vpn",id:"computer-networking/vpn/vpn",title:"VPN",description:"VPN",source:"@site/docs/computer-networking/23-vpn/vpn.md",sourceDirName:"computer-networking/23-vpn",slug:"/computer-networking/vpn",permalink:"/cs-notes/computer-networking/vpn",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-networking/23-vpn/vpn.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1693134159,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{slug:"/computer-networking/vpn",id:"vpn",title:"VPN",description:"VPN"},sidebar:"sidebar",previous:{title:"Proxy",permalink:"/cs-notes/computer-networking/proxy"},next:{title:"TCP Protocol",permalink:"/cs-notes/computer-networking/tcp-protocol"}},c={},p=[{value:"VPN Benefits",id:"vpn-benefits",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Main Source : ",(0,o.kt)("a",{parentName:"strong",href:"https://youtu.be/R-JUOpCgTZc?si=vIQRWPCVOFV5-vun"},"VPN (Virtual Private Network) Explained | PowerCert"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Virtual Private Network (VPN)")," is a technology used to create a secure connection over a public network such as the internet. It allows users to send and receive data as if their devices were directly connected to a private network, even when they are accessing the internet through a public or untrusted network."),(0,o.kt)("p",null,"A computer that connects to a server can be monitored by ISP, government, or other malicious actor. By using VPN service, we can secure our connection. A VPN service can be thought as a virtual shield of the connection we establish."),(0,o.kt)("p",null,"The idea is, instead of the client that connects directly to the server, a vpn server act as middleman that connects to the server. It is different with ",(0,o.kt)("a",{parentName:"p",href:"/computer-networking/proxy"},"proxy"),", the difference is that VPN server doesn't request on behalf of the client and it also provides privacy and security benefits."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VPN that acts as a middle shield between client and the internet",src:n(8621).Z,width:"904",height:"359"}),(0,o.kt)("br",{parentName:"p"}),"\n","Source : ",(0,o.kt)("a",{parentName:"p",href:"https://www.hostinger.com/tutorials/what-is-vpn"},"https://www.hostinger.com/tutorials/what-is-vpn")),(0,o.kt)("h3",{id:"vpn-benefits"},"VPN Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Privacy")," : VPN will secure your internet traffic and hide your IP address, a VPN helps protect your privacy and makes it difficult for third parties, such as hackers or government agencies, to monitor your online activities.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Security")," : VPNs use encryption protocols to secure your data, making it unreadable to anyone who intercepts it. In simple term, the request or data sent from server will be converted into a format that is not readable by human and it can only be transformed back by the intended recipient. This is especially important when connecting to public Wi-Fi networks, which are often unsecured and vulnerable to attacks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Remote Connection"),' : We can use VPN as a private network. All the devices will be equiped by VPN services. Even if the devices are in remote places, we can connect it to a central location as if it was a local "private" network. Along with security benefits, we can be sure for transferring sensitive data.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bypass Restrictions")," : VPNs can help bypass censorship and geolocation restrictions by allowing you to connect to servers located in different regions. This can be useful for accessing blocked websites or services in your country. This works because the VPN server are distributed around the would. We can choose to connect from server in a country where the website is not blocked there."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Refers to ",(0,o.kt)("a",{parentName:"p",href:"/computer-security"},"computer security cryptography")," section to know more about security and encryption.")))}d.isMDXComponent=!0},8621:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vpn-example-60d416f44e6ee26fdd073a56dce5f5a9.png"}}]);