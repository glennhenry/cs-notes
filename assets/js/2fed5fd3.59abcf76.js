"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[9300],{27962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=n(85893),s=n(11151);const o={slug:"/backend-development/authentication",id:"authentication",title:"Authentication",description:"Authentication"},r=void 0,a={id:"backend-development/authentication/authentication",title:"Authentication",description:"Authentication",source:"@site/docs/backend-development/09-authentication/authentication.md",sourceDirName:"backend-development/09-authentication",slug:"/backend-development/authentication",permalink:"/cs-notes/backend-development/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/backend-development/09-authentication/authentication.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1708945901e3,frontMatter:{slug:"/backend-development/authentication",id:"authentication",title:"Authentication",description:"Authentication"},sidebar:"sidebar",previous:{title:"WebSocket",permalink:"/cs-notes/backend-development/websocket"},next:{title:"Authentication Technique",permalink:"/cs-notes/backend-development/authentication-technique"}},c={},h=[{value:"Authentication Factor",id:"authentication-factor",level:3},{value:"Authentication Factor Number",id:"authentication-factor-number",level:3},{value:"General Authentication Process",id:"general-authentication-process",level:3}];function l(e){const t={a:"a",admonition:"admonition",br:"br",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://www.sumologic.com/glossary/authentication-factor/",children:"Authentication factor - definition & overview - sumo logic"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://www.techtarget.com/searchsecurity/definition/authentication-factor",children:"authentication factor - TechTarget"})})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Authentication"})," is the process of verifying the identity of a user or system attempting to access a resource or perform an action. User's identity are typically stored in the system local storage such as database in a server or owned by the user itself in some authentication technique. The system will verify user's credentials by checking it if it's available in the storage."]}),"\n",(0,i.jsxs)(t.p,{children:["The process of establishing user's identity in the system is called ",(0,i.jsx)(t.strong,{children:"register"})," or ",(0,i.jsx)(t.strong,{children:"sign up"}),". Common identity required are username, email, and password. The process of accessing the system with previously established identity is called ",(0,i.jsx)(t.strong,{children:"sign-in"}),". Last but not least, ",(0,i.jsx)(t.strong,{children:"logout"})," or ",(0,i.jsx)(t.strong,{children:"sign-out"})," which is the process of ending current access to the system."]}),"\n",(0,i.jsx)(t.h3,{id:"authentication-factor",children:"Authentication Factor"}),"\n",(0,i.jsxs)(t.p,{children:["The charateristics of someone's identity can be categorized into 5, these are called ",(0,i.jsx)(t.strong,{children:"authentication factor"})," :"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Knowledge Factors"})," : Knowledge factors rely on something the user knows, such as a password, passphrase, PIN, or answers to security questions."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Possession Factors"})," : Involve something the user possesses, typically physical object or devices such as smart cards or mobile devices."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Inherence Factors"})," : Also known as ",(0,i.jsx)(t.strong,{children:"biometric factors"}),", these are unique physical or behavioral characteristics of the user. Biometric authentication factors include fingerprint scans, iris or retinal scans, voice recognition, facial recognition, or even typing patterns."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Location Factors"})," : Location factors takes account the geographic location or network information associated with the user. For example, a system may authenticate a user based on their ",(0,i.jsx)(t.a,{href:"/computer-networking/ip-address",children:"IP address"}),", GPS location, or proximity to a specific ",(0,i.jsx)(t.a,{href:"/computer-networking/wi-fi",children:"Wi-Fi"})," network."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Behavior Factors"})," : Behavior factors focus on the user's patterns and habits such as user's typing speed, mouse movements, navigation patterns, or even the timing and frequency of their interactions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"authentication-factor-number",children:"Authentication Factor Number"}),"\n",(0,i.jsxs)(t.p,{children:["Authentication may also include more than just one evidence from the user, there can be more than one factor of consideration, this is called ",(0,i.jsx)(t.strong,{children:"authentication factor number"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Single-Factor Authentication (SFA)"})," : This involves just a single authentication factor, typically a password or PIN."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Two-Factor Authentication (2FA)"})," : 2FA requires the user to provide two different authentication factors to verify their identity. For example, the first factor is password and the system may generate some number which is sent to user's mobile device as the second factor."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Multi-Factor Authentication (MFA)"})," : MFA is the use of two or more authentication factors. It can include a combination of all authentication factor including the 5 listed above (knowledge, possession, inherence, location, behavior)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"general-authentication-process",children:"General Authentication Process"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"User Request / Login"})," : The authentication process begins when a user sends a request to access a protected resource or initiate a login operation, the user will also enter their credentials."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"User Identification"})," : The backend system receives the user request and verify it against the stored credentials. Based on the verification, the system decide whether to grant access to the user or not."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Additional Factors (optional)"})," : Depending on the auth factor number used, the system may need additional credentials."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Session Establishment"})," : Upon successful authentication, the system establishes a session for the authenticated user. A session is a period of time the user has been actively authenticated in a system, typically the user will receive their own session identifier, which will be used for subsequent access and is limited in time (expirable)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Authorization & Access Grant"})," : The system decide whether the user has appropriate permission to do certain actions, if the user is allowed, the system will grant access to the user's requested resource or operation. The user can proceed to interact with the system or perform the desired actions."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Session Termination"})," : After the user is done with their activity, the session can be terminated, whether explicitly through a logout operation, or automatically by the system after a period of inactivity or upon reaching the session expiration time."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Example of an authentication process",src:n(86323).Z+"",width:"830",height:"372"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://swoopnow.com/user-authentication/",children:"https://swoopnow.com/user-authentication/"})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/backend-development/authentication-technique",children:"authentication technique"})," for implementation."]})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},86323:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/auth-example-ad7d1eb4b5e98c58939b6084947dcf86.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(67294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);