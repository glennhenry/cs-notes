"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[1485],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={slug:"/digital-media-processing/mp4",id:"mp4",title:"MP4",description:"MP4"},o=void 0,s={unversionedId:"digital-media-processing/mp4/mp4",id:"digital-media-processing/mp4/mp4",title:"MP4",description:"MP4",source:"@site/docs/digital-media-processing/27-mp4/mp4.md",sourceDirName:"digital-media-processing/27-mp4",slug:"/digital-media-processing/mp4",permalink:"/cs-notes/digital-media-processing/mp4",draft:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/digital-media-processing/27-mp4/mp4.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1692442910,formattedLastUpdatedAt:"Aug 19, 2023",frontMatter:{slug:"/digital-media-processing/mp4",id:"mp4",title:"MP4",description:"MP4"},sidebar:"sidebar",previous:{title:"AVI",permalink:"/cs-notes/digital-media-processing/avi"},next:{title:"XML",permalink:"/cs-notes/digital-media-processing/xml"}},p={},l=[{value:"MP4 Structure",id:"mp4-structure",level:3},{value:"MP4 Compression (H.264)",id:"mp4-compression-h264",level:3}],c={toc:l},m="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Main Source : ",(0,n.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/MP4_file_format"},"Wikipedia MP4 file format"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MPEG-4 Part 14 (MP4)")," is a digital multimedia container format, meaning it's not limited to store one type of file, it can store video, audio, subtitle, metadata, and still images."),(0,n.kt)("p",null,"It's important to note that MP4 is just container, the actual video or audio data needs to be encoded and decoded by their specific codecs. Codecs are software or hardware that is responsible for the encoding and decoding process. In simple term, they are responsible for converting data into a transmittable format and also converting it back to actual data."),(0,n.kt)("p",null,"For example, H.264 is the video codec for MP4, MP3 or AAC are the audio codecs. Codecs are also capable of compressing data before being transmitted or stored. This way we can remove redudancides and irrelevant information to save space or bandwidth."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MP4 as a multimedia container",src:a(74755).Z,width:"812",height:"325"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://www.filefix.org/format/mp4.html"},"https://www.filefix.org/format/mp4.html"),", ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MP4_file_format"},"https://en.wikipedia.org/wiki/MP4_file_format")),(0,n.kt)("h3",{id:"mp4-structure"},"MP4 Structure"),(0,n.kt)("p",null,"MP4 consists of a file header and multimedia data that are organized into containers called atoms or boxes. These atoms represent the actual multimedia data and can also contain other nested atoms."),(0,n.kt)("p",null,"Atoms have variable sizes and specific types. The minimum size of an atom is 8 bytes. The first 4 bytes of an atom indicate its size, while the following 4 bytes specify the atom's type."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"File Header")," : This contains the file type, version, and other information about the file."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Atoms")," : The main components of an MP4 file comes after the header, it could contain many atoms such as :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ftyp (file type)")," : Specify the file type and the common data structures used."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"moov (movie)")," : Contains the movie metadata, such as the video and audio tracks, the timecode, and the tracks properties."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"mdat (media data)")," : Contains the media data, such as the video and audio samples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"udta (user data)")," : Contains the user-defined metadata."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"trak (track)")," : Contains information about a single track, such as the track's type, the track's timecode, and the track's samples.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Structure of MP4 file",src:a(6714).Z,width:"473",height:"318"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://www.trekview.org/blog/2022/injecting-camm-gpmd-telemetry-videos-part-2-mp4-overview/"},"https://www.trekview.org/blog/2022/injecting-camm-gpmd-telemetry-videos-part-2-mp4-overview/")),(0,n.kt)("h3",{id:"mp4-compression-h264"},"MP4 Compression (H.264)"),(0,n.kt)("p",null,"H.264, also known as AVC (Advanced Video Coding), is a the most commonly used lossy video compression. Like the general compression technique, H.264 removes redundancies and irrevelant information."),(0,n.kt)("p",null,'H.264 process each frame as "block" which is a fixed-size rectangular region within a frame of video. The block size can vary, example are 4x4, 16x16, or 32x32 pixels.'),(0,n.kt)("p",null,"In H.264, two main technique of compression are used. ",(0,n.kt)("strong",{parentName:"p"},"Spatial compression")," compress each frame of video individually just like compressing an image. ",(0,n.kt)("strong",{parentName:"p"},"Temporal compression")," compress multiple of frames together, it takes advantage of similarities between consecutive video frames. The idea is that not all pixels within each frames changes. We can reference the same block of pixels to the previous or future frames."),(0,n.kt)("p",null,"Other techniques used in H.264 :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Transform Coding")," : H.264 uses transform coding, specifically the ",(0,n.kt)("a",{parentName:"p",href:"/digital-signal-processing/discrete-cosine-transform"},"discrete cosine transform (DCT)"),", to convert image data from the spatial domain to the frequency domain. This conversion allows for additional compression by representing the video content using fewer frequency components.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rate Control")," : H.264 can adjust bit rate for specific scenes. For example, we can use higher bit rate to complex or high-motion scenes and a lower bit rate to less complex or static scenes."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MP4 block",src:a(18104).Z,width:"850",height:"469"}),(0,n.kt)("br",{parentName:"p"}),"\n","Source : ",(0,n.kt)("a",{parentName:"p",href:"https://www.eetimes.com/emerging-h-264-standard-supports-broadcast-video-encoding-2/"},"https://www.eetimes.com/emerging-h-264-standard-supports-broadcast-video-encoding-2/")))}d.isMDXComponent=!0},18104:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mp4-block-597a3c0ba14fb2d18e1d337fa3eda366.webp"},74755:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mp4-container-060772088d3919f43a21f5040cb663fa.png"},6714:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mp4-structure-eb9fffb1ddff1733e547283d1a31ac3f.png"}}]);