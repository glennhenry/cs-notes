"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[7170],{60421:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(85893),t=a(11151);const r={slug:"/deep-learning/reinforcement-learning/q-learning",id:"q-learning",title:"Q-Learning",description:"Q-Learning"},i=void 0,l={id:"deep-learning/reinforcement-learning/q-learning/q-learning",title:"Q-Learning",description:"Q-Learning",source:"@site/docs/deep-learning/16-reinforcement-learning/07-q-learning/q-learning.md",sourceDirName:"deep-learning/16-reinforcement-learning/07-q-learning",slug:"/deep-learning/reinforcement-learning/q-learning",permalink:"/cs-notes/deep-learning/reinforcement-learning/q-learning",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/deep-learning/16-reinforcement-learning/07-q-learning/q-learning.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1711965459,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{slug:"/deep-learning/reinforcement-learning/q-learning",id:"q-learning",title:"Q-Learning",description:"Q-Learning"},sidebar:"sidebar",previous:{title:"SARSA",permalink:"/cs-notes/deep-learning/reinforcement-learning/sarsa"},next:{title:"Policy-Gradient",permalink:"/cs-notes/deep-learning/reinforcement-learning/policy-gradient"}},c={},m=[{value:"Algorithm",id:"algorithm",level:3},{value:"Q-Table",id:"q-table",level:3},{value:"Q-Network",id:"q-network",level:3},{value:"Target Network",id:"target-network",level:4}];function h(e){const s={a:"a",annotation:"annotation",blockquote:"blockquote",br:"br",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msup:"msup",mtext:"mtext",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"(/deep-learning/reinforcement-learning/reinforcement-learning-fundamental)\n(/deep-learning/reinforcement-learning/temporal-difference)\n(/deep-learning/reinforcement-learning/sarsa)"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Main Source :"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://youtu.be/qhRNvCVVJaA?si=UPvDuOOCuOsDQf9V",children:"Q-Learning Explained - A Reinforcement Learning Technique - deeplizard"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://towardsdatascience.com/deep-q-learning-tutorial-mindqn-2a4c855abffc",children:"Deep Q-Learning Tutorial: minDQN by Mike Wang - Medium"})})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Q-Learning"})," is a ",(0,n.jsx)(s.a,{href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#model-based--model-free",children:"model-free"})," algorithm to estimate the action-value function (Q-values). Q-learning is an ",(0,n.jsx)(s.strong,{children:"off-policy algorithm"})," that updates its policy without using its current policy, it differs with on-policy algorithms like ",(0,n.jsx)(s.a,{href:"/deep-learning/reinforcement-learning/sarsa",children:"SARSA"})," that update based on the current policy."]}),"\n",(0,n.jsx)(s.h3,{id:"algorithm",children:"Algorithm"}),"\n",(0,n.jsxs)(s.p,{children:["Q-Learning is another type of ",(0,n.jsx)(s.a,{href:"/deep-learning/reinforcement-learning/temporal-difference",children:"TD"}),", the algorithm is similar to ",(0,n.jsx)(s.a,{href:"/deep-learning/reinforcement-learning/sarsa",children:"SARSA"}),", however, it differs in the update rule."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Initialization"})," : First, the Q-values is initialized to some arbitary or some initial values."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Choose action"})," : The agent selects an action to take in the current state based on the Q-values. It can use the ",(0,n.jsx)(s.a,{href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#epsilon-greedy",children:"epsilon-greedy"})," strategy to balance the ",(0,n.jsx)(s.a,{href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#exploration--exploitation",children:"exploration and exploitation"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Update Rule"})," : Based on the observed transition (state, action, reward, next state), the agent update the Q-value using the following update rule :"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mtext,{children:"new\xa0"}),(0,n.jsx)(s.mi,{children:"Q"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"s"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{children:"\u2190"}),(0,n.jsx)(s.mi,{children:"Q"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"s"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mi,{children:"\u03b1"}),(0,n.jsx)(s.mtext,{children:"\xa0"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mi,{children:"\u03b3"}),(0,n.jsx)(s.mtext,{children:"\xa0max"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"["}),(0,n.jsx)(s.mi,{children:"Q"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"s"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mi,{children:"Q"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"s"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\text{new } Q(s, a) \\leftarrow Q(s, a) + \\alpha \\space (r + \\gamma \\space \\text{max}[Q(s', a')] - Q(s, a))"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord text",children:(0,n.jsx)(s.span,{className:"mord",children:"new\xa0"})}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"\u2190"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(s.span,{className:"mspace",children:"\xa0"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05556em"},children:"\u03b3"}),(0,n.jsx)(s.span,{className:"mspace",children:"\xa0"}),(0,n.jsx)(s.span,{className:"mord text",children:(0,n.jsx)(s.span,{className:"mord",children:"max"})}),(0,n.jsx)(s.span,{className:"mopen",children:"["}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mclose",children:")]"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mclose",children:"))"})]})]})]})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The difference between SARSA is the ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mtext,{children:"max"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"["}),(0,n.jsx)(s.mi,{children:"Q"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"s"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\text{max}[Q(s', a')]"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord text",children:(0,n.jsx)(s.span,{className:"mord",children:"max"})}),(0,n.jsx)(s.span,{className:"mopen",children:"["}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mclose",children:")]"})]})})]})," term. It represent the maximum Q-value among all possible actions in the next state ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"s"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"s'"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]}),". In SARSA we instead used the ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"Q"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"s"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"Q(s', a')"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", which is the Q-value of the action the agent takes in the next state ",(0,n.jsx)(s.strong,{children:"by following a policy"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"So in Q-learning, we do not follow policy to select action nor use it to update its own policy. The choice of next action depends on the estimated next maximum Q-value, in a greedy manner."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Repeat"})," : Repeat the step 2 and 3. At the end of the learning process, we then find the optimal policy based on the Q-value we gathered."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"q-table",children:"Q-Table"}),"\n",(0,n.jsxs)(s.p,{children:["Q-table (also known as the action-value table) is a data structure that stores the estimated Q-values for each state-action pair in Q-learning. Initially, the Q-table is usually initialized with arbitrary values or set to zeros. Then, as the agent interacts with the environment and learns from the observed rewards, we will use ",(0,n.jsx)(s.a,{href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#bellman-equation",children:"Bellman equation"})," to update the Q-values in the Q-table."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Q-table",src:a(38721).Z+"",width:"600",height:"186"}),(0,n.jsx)(s.br,{}),"\n","Source : ",(0,n.jsx)(s.a,{href:"https://www.researchgate.net/figure/The-model-of-Q-learning-and-the-structure-of-Q-table_fig1_339665871",children:"https://www.researchgate.net/figure/The-model-of-Q-learning-and-the-structure-of-Q-table_fig1_339665871"})]}),"\n",(0,n.jsx)(s.h3,{id:"q-network",children:"Q-Network"}),"\n",(0,n.jsxs)(s.p,{children:["A Q-network, also known as a Q-function approximator or Q-value function approximator, is a type of ",(0,n.jsx)(s.a,{href:"/deep-learning/neural-network",children:"neural network"})," used in reinforcement learning to approximate the Q-values for state-action pairs."]}),"\n",(0,n.jsx)(s.p,{children:"Neural network is pretty good at approximating complex and non-linear function. The Q-values in reinforcement learning problems can be highly complex and depend on intricate relationships between states and actions. Using neural network will also help us generalize on unseen states."}),"\n",(0,n.jsxs)(s.p,{children:["The network can be implemented using a simple fully connected network or a ",(0,n.jsx)(s.a,{href:"/deep-learning/cnn",children:"convolutional neural network (CNN)"})," if related to image problem."]}),"\n",(0,n.jsx)(s.p,{children:"The network will take a state, it will be passed through the network and will produce a set of Q-values of all possible action over a given state. We will then choose the maximum Q-values and continue the agent exploration."}),"\n",(0,n.jsxs)(s.p,{children:["The parameter of the network will be updated to minimize the loss. The loss is calculated by comparing the predicted Q-values and the target Q-values. The target Q-values are computed using the ",(0,n.jsx)(s.a,{href:"/deep-learning/reinforcement-learning/reinforcement-learning-fundamental#bellman-equation",children:"Bellman equation"}),", which takes current Q-values and reward the agent received."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Q-network",src:a(19967).Z+"",width:"763",height:"424"}),(0,n.jsx)(s.br,{}),"\n","Source : ",(0,n.jsx)(s.a,{href:"https://wikidocs.net/174548",children:"https://wikidocs.net/174548"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Q-learning comparison between q-table and q-network",src:a(9992).Z+"",width:"897",height:"311"}),(0,n.jsx)(s.br,{}),"\n","Source : ",(0,n.jsx)(s.a,{href:"https://www.baeldung.com/cs/q-learning-vs-deep-q-learning-vs-deep-q-network",children:"https://www.baeldung.com/cs/q-learning-vs-deep-q-learning-vs-deep-q-network"})]}),"\n",(0,n.jsx)(s.h4,{id:"target-network",children:"Target Network"}),"\n",(0,n.jsx)(s.p,{children:"In the previous approach, we updated the Q-network parameter based on the target value or the current estimate of Q-values. This can be unstable, because they are constantly changing. Q-values is estimated using Bellman equation, which takes current Q-values, however, the Q-values itself depend on the estimated Q-values."}),"\n",(0,n.jsxs)(s.p,{children:["The approach is to use two distinct network, the other network is called ",(0,n.jsx)(s.strong,{children:"target network"}),". The target network is a separate copy of the Q-network that is periodically updated to match the current Q-network's weights."]}),"\n",(0,n.jsx)(s.p,{children:"The tight coupling can be reduced by introducing separate target network. The use of target network is to improve the stability and convergence of the learning process. We will then update the Q-network based on the target network, not directly based on the computed target values."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Target network",src:a(31462).Z+"",width:"657",height:"402"}),(0,n.jsx)(s.br,{}),"\n","Source : ",(0,n.jsx)(s.a,{href:"https://arshren.medium.com/deep-q-learning-a-deep-reinforcement-learning-algorithm-f1366cf1b53d",children:"https://arshren.medium.com/deep-q-learning-a-deep-reinforcement-learning-algorithm-f1366cf1b53d"})]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9992:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/q-learning-comparison-b90ccd26aba4a30dfcfb6753e6d8a05d.png"},19967:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/q-network-9df7975c88b4a57ff51e7dfaf86a3b29.png"},38721:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/q-table-d733a6f4b45bdfc79c942f1853efdd43.png"},31462:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/target-network-0187408b3e2a9234d30cf2378c4c9805.png"},11151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>i});var n=a(67294);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);