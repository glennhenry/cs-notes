"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6022],{99082:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=s(85893),t=s(11151);const o={slug:"/computer-networking/dns",id:"dns",title:"DNS",description:"DNS"},i=void 0,d={id:"computer-networking/dns/dns",title:"DNS",description:"DNS",source:"@site/docs/computer-networking/19-dns/dns.md",sourceDirName:"computer-networking/19-dns",slug:"/computer-networking/dns",permalink:"/cs-notes/computer-networking/dns",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-networking/19-dns/dns.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1693741114e3,frontMatter:{slug:"/computer-networking/dns",id:"dns",title:"DNS",description:"DNS"},sidebar:"sidebar",previous:{title:"Network Topology",permalink:"/cs-notes/computer-networking/network-topology"},next:{title:"DHCP",permalink:"/cs-notes/computer-networking/dhcp"}},a={},c=[{value:"DNS Record",id:"dns-record",level:3},{value:"Type of DNS Server",id:"type-of-dns-server",level:3}];function h(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Main Source :"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://youtu.be/mpQZVYPuDGU?si=HkwtlF9fHOXMEvN7",children:"How a DNS Server (Domain Name System) works | PowerCert"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://youtu.be/HnUDtycXSNE?si=owMYV2iZG8w72g_r",children:"DNS Records Explained"})})}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Domain Name System (DNS)"})," is a server acting as a service that translates human-readable domain name into an ",(0,n.jsx)(r.a,{href:"/computer-networking/ip-address",children:"IP address"}),", which used to identify a device connecting to the network."]}),"\n",(0,n.jsxs)(r.p,{children:["In computer networking, we uses ",(0,n.jsx)(r.a,{href:"/computer-networking/ip-address",children:"IP address"})," to identify each devices on the network. When accessing a specific website on the internet, we usually enter the domain name or website name in our browser. Browser will need to establish a connection to their server to get the required resource to show the website. Establishing a connection will require IP address as the destination address of where the network is."]}),"\n",(0,n.jsx)(r.p,{children:"However, the browser doesn't understand the domain name entered by user. To resolve this, the browser sends a request to the DNS server, which translates the human-readable name into an IP address. Once the browser obtains the destination address, it can establish a connection and access the desired resource."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{alt:"Browser sends request to DNS server and receive the IP address of the destination",src:s(3820).Z+"",width:"547",height:"434"}),(0,n.jsx)(r.br,{}),"\n","Source : ",(0,n.jsx)(r.a,{href:"https://www.geeksforgeeks.org/working-of-domain-name-system-dns-server/",children:"https://www.geeksforgeeks.org/working-of-domain-name-system-dns-server/"})]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["Find out in ",(0,n.jsx)(r.a,{href:"/frontend-web-development/web-url",children:"here"})," to know more about domain name or URL"]})}),"\n",(0,n.jsx)(r.h3,{id:"dns-record",children:"DNS Record"}),"\n",(0,n.jsx)(r.p,{children:"DNS server has a map of different type of domain name. They are categorized based on the specific purpose. Here are some common record :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"A (Address)"})," : An A record maps a domain name to an IPv4 address."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"AAAA (IPv6 Address)"})," : Similar to the A record, the AAAA record maps a domain name to an IPv6 address."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"CNAME (Canonical Name)"})," : A CNAME record creates an alias for a domain. It allows multiple domain names to be directed to the same IP address. For example, we can create a CNAME record to associate ",(0,n.jsx)(r.code,{children:"www.example.com"})," with ",(0,n.jsx)(r.code,{children:"example.com"}),". This mean everytime user enters ",(0,n.jsx)(r.code,{children:"www.example.com"}),", it will be redirected to ",(0,n.jsx)(r.code,{children:"example.com"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"MX (Mail Exchanger)"})," : An MX record specifies the mail servers responsible for receiving emails sent to a domain."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"TXT (Text)"})," : A TXT record allows domain owners to add arbitrary text to their DNS records. It is commonly used for purposes such as verification, email authentication, and adding human-readable information."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"NS (Name Server)"})," : NS records specify the authoritative name servers for a particular domain which is the DNS servers that are responsible for storing and providing DNS information for a domain."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"type-of-dns-server",children:"Type of DNS Server"}),"\n",(0,n.jsx)(r.p,{children:"DNS server is distributed around the world, it also consist of hierarchy which tells the importance of the domain. Here are some types of DNS server :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Local DNS"})," : While trying to convert a domain name into an IP address, our computer will first check if the website has ever been connected to before, check if it's exist in the local computer memory. If yes, the computer doesn't need to connect to the DNS server."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Recursive Resolver"})," : This DNS server act as the bridge between our computer to the higher hierarchy of DNS server. It will recursively ask to the higher server, also will store the responses it receive to speed up future request."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Authoritative Name Server"})," : Authoritative name servers are responsible for storing the DNS records (such as A records, CNAME records, MX records, etc.) for a specific domain. They provides record for specific domain."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Top-Level Domain (TLD) Server"})," : TLD servers are responsible for storing information about the domains within a specific top-level domain. For example, the .com TLD server stores information about all the domains ending with .com."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Root Server"})," : These are the highest-level DNS servers in the hierarchy. They store the IP addresses of the authoritative servers for top-level domains (TLDs) like .com, .net, .org, etc. There are 13 sets of root servers distributed worldwide, managed by different organizations."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{alt:"Type of DNS server",src:s(17870).Z+"",width:"712",height:"630"}),(0,n.jsx)(r.br,{}),"\n","Source : ",(0,n.jsx)(r.a,{href:"https://www.menandmice.com/glossary/dns-server-types",children:"https://www.menandmice.com/glossary/dns-server-types"})]})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3820:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/images/dns-server-9ea00d378226185e1d40080b33378ec7.png"},17870:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/images/type-of-dns-server-be1f84bdea9e3c88f99b8b8d8cda7710.png"},11151:(e,r,s)=>{s.d(r,{Z:()=>d,a:()=>i});var n=s(67294);const t={},o=n.createContext(t);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);