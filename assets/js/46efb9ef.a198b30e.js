"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7170],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>h});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(t),k=s,h=c["".concat(l,".").concat(k)]||c[k]||N[k]||r;return t?n.createElement(h,m(m({ref:a},o),{},{components:t})):n.createElement(h,m({ref:a},o))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=k;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},12235:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const r={slug:"/deep-learning/reinforcement-learning/q-learning",id:"q-learning",title:"Q-Learning",description:"Q-Learning"},m=void 0,p={unversionedId:"deep-learning/reinforcement-learning/q-learning/q-learning",id:"deep-learning/reinforcement-learning/q-learning/q-learning",title:"Q-Learning",description:"Q-Learning",source:"@site/docs/deep-learning/16-reinforcement-learning/07-q-learning/q-learning.md",sourceDirName:"deep-learning/16-reinforcement-learning/07-q-learning",slug:"/deep-learning/reinforcement-learning/q-learning",permalink:"/cs-notes/deep-learning/reinforcement-learning/q-learning",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/deep-learning/16-reinforcement-learning/07-q-learning/q-learning.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1698234445,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{slug:"/deep-learning/reinforcement-learning/q-learning",id:"q-learning",title:"Q-Learning",description:"Q-Learning"},sidebar:"sidebar",previous:{title:"SARSA",permalink:"/cs-notes/deep-learning/reinforcement-learning/sarsa"},next:{title:"Policy-Gradient",permalink:"/cs-notes/deep-learning/reinforcement-learning/policy-gradient"}},l={},i=[{value:"Algorithm",id:"algorithm",level:3},{value:"Q-Table",id:"q-table",level:3},{value:"Q-Network",id:"q-network",level:3},{value:"Target Network",id:"target-network",level:4}],o={toc:i},c="wrapper";function N(e){let{components:a,...r}=e;return(0,s.kt)(c,(0,n.Z)({},o,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"(/deep-learning/reinforcement-learning/reinforcement-learning-fundamental)\n(/deep-learning/reinforcement-learning/temporal-difference)\n(/deep-learning/reinforcement-learning/sarsa)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Main Source :")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://youtu.be/qhRNvCVVJaA?si=UPvDuOOCuOsDQf9V"},"Q-Learning Explained - A Reinforcement Learning Technique - deeplizard"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://towardsdatascience.com/deep-q-learning-tutorial-mindqn-2a4c855abffc"},"Deep Q-Learning Tutorial: minDQN by Mike Wang - Medium")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q-Learning")," is a ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#model-based--model-free"},"model-free")," algorithm to estimate the action-value function (Q-values). Q-learning is an ",(0,s.kt)("strong",{parentName:"p"},"off-policy algorithm")," that updates its policy without using its current policy, it differs with on-policy algorithms like ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/reinforcement-learning/sarsa"},"SARSA")," that update based on the current policy."),(0,s.kt)("h3",{id:"algorithm"},"Algorithm"),(0,s.kt)("p",null,"Q-Learning is another type of ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/reinforcement-learning/temporal-difference"},"TD"),", the algorithm is similar to ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/reinforcement-learning/sarsa"},"SARSA"),", however, it differs in the update rule."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Initialization")," : First, the Q-values is initialized to some arbitary or some initial values.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Choose action")," : The agent selects an action to take in the current state based on the Q-values. It can use the ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#epsilon-greedy"},"epsilon-greedy")," strategy to balance the ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#exploration--exploitation"},"exploration and exploitation"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Update Rule")," : Based on the observed transition (state, action, reward, next state), the agent update the Q-value using the following update rule :"),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"new\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"Q"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2190"),(0,s.kt)("mi",{parentName:"mrow"},"Q"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"\u03b3"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0max"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"Q"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"s"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"a"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"Q"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{new } Q(s, a) \\leftarrow Q(s, a) + \\alpha \\space (r + \\gamma \\space \\text{max}[Q(s', a')] - Q(s, a))")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"new\xa0")),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2190"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05556em"}},"\u03b3"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"max")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"))"))))))),(0,s.kt)("p",{parentName:"li"},"The difference between SARSA is the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"max"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"Q"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"s"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"a"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{max}[Q(s', a')]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"max")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")]")))))," term. It represent the maximum Q-value among all possible actions in the next state ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"s"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s'")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7519em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))))))),". In SARSA we instead used the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"Q"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"s"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"a"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Q(s', a')")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", which is the Q-value of the action the agent takes in the next state ",(0,s.kt)("strong",{parentName:"p"},"by following a policy"),"."),(0,s.kt)("p",{parentName:"li"},"So in Q-learning, we do not follow policy to select action nor use it to update its own policy. The choice of next action depends on the estimated next maximum Q-value, in a greedy manner.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Repeat")," : Repeat the step 2 and 3. At the end of the learning process, we then find the optimal policy based on the Q-value we gathered."))),(0,s.kt)("h3",{id:"q-table"},"Q-Table"),(0,s.kt)("p",null,"Q-table (also known as the action-value table) is a data structure that stores the estimated Q-values for each state-action pair in Q-learning. Initially, the Q-table is usually initialized with arbitrary values or set to zeros. Then, as the agent interacts with the environment and learns from the observed rewards, we will use ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#bellman-equation"},"Bellman equation")," to update the Q-values in the Q-table."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Q-table",src:t(73186).Z,width:"600",height:"186"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://www.researchgate.net/figure/The-model-of-Q-learning-and-the-structure-of-Q-table_fig1_339665871"},"https://www.researchgate.net/figure/The-model-of-Q-learning-and-the-structure-of-Q-table_fig1_339665871")),(0,s.kt)("h3",{id:"q-network"},"Q-Network"),(0,s.kt)("p",null,"A Q-network, also known as a Q-function approximator or Q-value function approximator, is a type of ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/neural-network"},"neural network")," used in reinforcement learning to approximate the Q-values for state-action pairs."),(0,s.kt)("p",null,"Neural network is pretty good at approximating complex and non-linear function. The Q-values in reinforcement learning problems can be highly complex and depend on intricate relationships between states and actions. Using neural network will also help us generalize on unseen states."),(0,s.kt)("p",null,"The network can be implemented using a simple fully connected network or a ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/cnn"},"convolutional neural network (CNN)")," if related to image problem."),(0,s.kt)("p",null,"The network will take a state, it will be passed through the network and will produce a set of Q-values of all possible action over a given state. We will then choose the maximum Q-values and continue the agent exploration."),(0,s.kt)("p",null,"The parameter of the network will be updated to minimize the loss. The loss is calculated by comparing the predicted Q-values and the target Q-values. The target Q-values are computed using the ",(0,s.kt)("a",{parentName:"p",href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#bellman-equation"},"Bellman equation"),", which takes current Q-values and reward the agent received."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Q-network",src:t(86663).Z,width:"763",height:"424"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://wikidocs.net/174548"},"https://wikidocs.net/174548")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Q-learning comparison between q-table and q-network",src:t(55330).Z,width:"897",height:"311"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://www.baeldung.com/cs/q-learning-vs-deep-q-learning-vs-deep-q-network"},"https://www.baeldung.com/cs/q-learning-vs-deep-q-learning-vs-deep-q-network")),(0,s.kt)("h4",{id:"target-network"},"Target Network"),(0,s.kt)("p",null,"In the previous approach, we updated the Q-network parameter based on the target value or the current estimate of Q-values. This can be unstable, because they are constantly changing. Q-values is estimated using Bellman equation, which takes current Q-values, however, the Q-values itself depend on the estimated Q-values."),(0,s.kt)("p",null,"The approach is to use two distinct network, the other network is called ",(0,s.kt)("strong",{parentName:"p"},"target network"),". The target network is a separate copy of the Q-network that is periodically updated to match the current Q-network's weights."),(0,s.kt)("p",null,"The tight coupling can be reduced by introducing separate target network. The use of target network is to improve the stability and convergence of the learning process. We will then update the Q-network based on the target network, not directly based on the computed target values."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Target network",src:t(87972).Z,width:"657",height:"402"}),(0,s.kt)("br",{parentName:"p"}),"\n","Source : ",(0,s.kt)("a",{parentName:"p",href:"https://arshren.medium.com/deep-q-learning-a-deep-reinforcement-learning-algorithm-f1366cf1b53d"},"https://arshren.medium.com/deep-q-learning-a-deep-reinforcement-learning-algorithm-f1366cf1b53d")))}N.isMDXComponent=!0},55330:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/q-learning-comparison-b90ccd26aba4a30dfcfb6753e6d8a05d.png"},86663:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/q-network-9df7975c88b4a57ff51e7dfaf86a3b29.png"},73186:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/q-table-d733a6f4b45bdfc79c942f1853efdd43.png"},87972:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/target-network-0187408b3e2a9234d30cf2378c4c9805.png"}}]);