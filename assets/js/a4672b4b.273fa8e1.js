"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4806],{86523:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(85893),t=n(11151);const a={slug:"/digital-media-processing/audio-equalization",id:"audio-equalization",title:"Audio Equalization",description:"Audio Equalization"},r=void 0,o={id:"digital-media-processing/audio-equalization/audio-equalization",title:"Audio Equalization",description:"Audio Equalization",source:"@site/docs/digital-media-processing/09-audio-equalization/audio-equalization.md",sourceDirName:"digital-media-processing/09-audio-equalization",slug:"/digital-media-processing/audio-equalization",permalink:"/cs-notes/digital-media-processing/audio-equalization",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/digital-media-processing/09-audio-equalization/audio-equalization.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1723296077e3,frontMatter:{slug:"/digital-media-processing/audio-equalization",id:"audio-equalization",title:"Audio Equalization",description:"Audio Equalization"},sidebar:"sidebar",previous:{title:"Audio Effects",permalink:"/cs-notes/digital-media-processing/audio-effects"},next:{title:"Audio Editing",permalink:"/cs-notes/digital-media-processing/audio-editing"}},d={},l=[{value:"Frequency Range",id:"frequency-range",level:3},{value:"Equalizer",id:"equalizer",level:3}];function u(e){const i={a:"a",br:"br",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Main Source:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Equalization_(audio)",children:"Equalization (audio) \u2014 Wikipedia"})})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://youtu.be/4FkKiWJfd00",children:"What Is Equalization? | Simple Explanation For Beginners \u2014 C-Threep"})})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Audio equalization"}),", often referred to as EQ, is the process of adjusting a specific range of frequency to make it stronger (sounds louder) or weaker (sounds softer)."]}),"\n",(0,s.jsx)(i.h3,{id:"frequency-range",children:"Frequency Range"}),"\n",(0,s.jsx)(i.p,{children:"Human audible range is divided into specific frequency range. These categories make us easier to target specific sound. Overall, they are divided into 3 general range, bass, mids, and highs."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Sub-bass"}),": Below 60 Hz, these frequencies are felt more than they are heard. They provide the foundation for bass-heavy sounds like kick drums and rumbling effects."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Bass"}),": Ranging from 60 Hz to 250 Hz, these frequencies are responsible for the low-end body and warmth in music."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Low-mid"}),": Spanning from around 250 Hz to 2,000 Hz, these frequencies contribute to the fullness and presence of instruments and vocals."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Mid"}),": Extending from roughly 2,000 Hz to 5,000 Hz, these frequencies often define the intelligibility and clarity of vocals and the bite of certain instruments."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"High-mid"}),": Occupying the range of 5,000 Hz to 8,000 Hz, these frequencies influence the presence and brilliance of sounds."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"High"}),": Above 8,000 Hz, these frequencies add sparkle and airiness to the audio.\n",(0,s.jsx)(i.img,{alt:"Audio spectrum of frequency bands",src:n(64433).Z+"",width:"483",height:"278"}),(0,s.jsx)(i.br,{}),"\n","Source: ",(0,s.jsx)(i.a,{href:"https://www.audioreputation.com/audio-frequency-spectrum-explained/",children:"https://www.audioreputation.com/audio-frequency-spectrum-explained/"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"equalizer",children:"Equalizer"}),"\n",(0,s.jsxs)(i.p,{children:["EQ works in between human audible frequency which is from 20 Hz to 20 kHz. An EQ also consists of a number of ",(0,s.jsx)(i.a,{href:"/digital-signal-processing/filtering",children:"filters"}),", which are used to filter off specific frequency."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Example of EQ Filter",src:n(19395).Z+"",width:"639",height:"359"}),(0,s.jsx)(i.br,{}),"\n","Source: ",(0,s.jsx)(i.a,{href:"https://www.musicguymixing.com/eq-filters/",children:"https://www.musicguymixing.com/eq-filters/"})]}),"\n",(0,s.jsx)(i.p,{children:"EQ is typically used in audio processing software. The EQ is represented as a graph, where the original audio is the straight line. Specifically, the straight line represents the default or when all the frequency range are set to the same level. This mean the intensity of either bass, mids, or highs should be the same. The level or the loudness scale of the sound is measured in dB (decibels)."}),"\n",(0,s.jsx)(i.p,{children:"Equalizing is done by adjusting the line, which is done to make specific frequency sounds louder than the others. For example, if we drag the line between the 7 kHz frequency, this will make any sound wave with 7 kHz sounds louder. The surrounding frequency is also adjusted to create a smoothed effect."}),"\n",(0,s.jsx)(i.p,{children:"The range of adjusted surrounding frequency is called Q-factor. A lower Q or smaller range will make the sound sharper or louder in small range of frequency. A higher Q or bigger range will make the sound sounds smoother."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Adjusting the equalizer",src:n(23080).Z+"",width:"607",height:"261"}),(0,s.jsx)(i.br,{}),"\n","Source: ",(0,s.jsx)(i.a,{href:"https://youtu.be/4FkKiWJfd00?t=179",children:"https://youtu.be/4FkKiWJfd00?t=179"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"An audio player software that has equalizer",src:n(55280).Z+"",width:"630",height:"408"})})]})}function c(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},23080:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/adjusting-equalizer-581f5a0a6c95642f1439d54dcfe98c2e.png"},19395:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/eq-filters-02694d56a5321826ba09f559bd13ac7c.png"},55280:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/equalization-example-09461b7ac9123249130336288c1df589.png"},64433:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/frequency-bands-36390c1d8110524843461564f0da660d.png"},11151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>r});var s=n(67294);const t={},a=s.createContext(t);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);