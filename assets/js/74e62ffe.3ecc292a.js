"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[1134],{16597:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>m});var n=e(85893),i=e(11151);const t={slug:"/digital-signal-processing/laplace-transform",id:"laplace-transform",title:"Laplace Transform",description:"Laplace Transform"},r=void 0,l={id:"digital-signal-processing/laplace-transform/laplace-transform",title:"Laplace Transform",description:"Laplace Transform",source:"@site/docs/digital-signal-processing/09-laplace-transform/laplace-transform.md",sourceDirName:"digital-signal-processing/09-laplace-transform",slug:"/digital-signal-processing/laplace-transform",permalink:"/cs-notes/digital-signal-processing/laplace-transform",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/digital-signal-processing/09-laplace-transform/laplace-transform.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1723035355e3,frontMatter:{slug:"/digital-signal-processing/laplace-transform",id:"laplace-transform",title:"Laplace Transform",description:"Laplace Transform"},sidebar:"sidebar",previous:{title:"Wavelets",permalink:"/cs-notes/digital-signal-processing/wavelets"},next:{title:"Z-Transform",permalink:"/cs-notes/digital-signal-processing/z-transform"}},c={},m=[{value:"Visualization",id:"visualization",level:3}];function h(s){const a={a:"a",annotation:"annotation",br:"br",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Main Source:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:"Various source from Google and YouTube"})}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Laplace transform"})," is a mathematical operation that converts a time-domain function ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(t)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]})," into a complex frequency-domain representation ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"F"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"F(s)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Laplace transform can be thought as the generalized ",(0,n.jsx)(a.a,{href:"/digital-signal-processing/fourier-transform",children:"Fourier transform"}),". Laplace transform extends the concept of the Fourier transform by allowing the analysis of a broader class of functions, including those functions that are not necessarily periodic or defined over an infinite time interval."]}),"\n",(0,n.jsx)(a.p,{children:"Fourier transform uses a complex exponential term to capture sinusoidal waves. This complex variable has only an imaginary part, representing the frequency component of the signal. On the other hand, the Laplace Transform involves both a real and an imaginary part in its complex variable."}),"\n",(0,n.jsx)(a.p,{children:"The real part helps to represent exponential growth and exponential decay in the signal. These are characteristics of signal whose amplitude increases or decreases exponentially over time."}),"\n",(0,n.jsx)(a.p,{children:"The Laplace transform is defined as the following:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Laplace transform formula with input signal of time and output a function of complex number",src:e(20029).Z+"",width:"397",height:"85"})}),"\n",(0,n.jsx)(a.p,{children:"Where:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"\u03c3"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mi,{children:"\u03c9"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"s = \\sigma + j \\omega"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c3"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"j\u03c9"})]})]})]})}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"\u03c3"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\sigma"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c3"})]})})]}),": the real part of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"s"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})})]})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mi,{children:"\u03c9"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"j \\omega"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"j\u03c9"})]})})]}),": the imaginary part of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"s"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})})]}),", where ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"j"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," is the imaginary unit ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"j^2 = \u22121"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1.0085em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"\u03c9"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\omega"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c9"})]})})]})," is the angular frequency."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"The concept of Laplace transform is same as Fourier transform. The complex term is multiplied by the original signal to capture the contribution of each frequency components."}),"\n",(0,n.jsx)(a.h3,{id:"visualization",children:"Visualization"}),"\n",(0,n.jsx)(a.p,{children:"Laplace transform is typically represented in 3D graph, where x-axis represents the real part, y-axis represent the imaginary part, and the z-axis represent the magnitude or phase. If Fourier transform were to be visualized, it would be a flat 2D graph instead."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"Laplace transform visualization",src:e(56918).Z+"",width:"536",height:"405"}),(0,n.jsx)(a.br,{}),"\n","Source: ",(0,n.jsx)(a.a,{href:"https://www.sharetechnote.com/html/EngMath_LaplaceTransform.html",children:"https://www.sharetechnote.com/html/EngMath_LaplaceTransform.html"})]}),"\n",(0,n.jsx)(a.p,{children:"Some regions may go to infinity, indicating that the corresponding frequency exhibits exponential growth or decay without limit. The presence of holes suggests that the function has discontinuities or exhibits oscillatory behavior."})]})}function o(s={}){const{wrapper:a}={...(0,i.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},20029:(s,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"},56918:(s,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/laplace-transform-visualization-f4df7a248c9b440c1f5a22bb385b7f65.png"},11151:(s,a,e)=>{e.d(a,{Z:()=>l,a:()=>r});var n=e(67294);const i={},t=n.createContext(i);function r(s){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function l(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),n.createElement(t.Provider,{value:a},s.children)}}}]);