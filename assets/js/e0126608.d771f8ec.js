"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[9692],{55544:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=s(85893),t=s(11151);const r={slug:"/computer-graphics/computer-display",id:"computer-display",title:"Computer Display",description:"Computer Display"},o="Computer Display",a={id:"computer-graphics/computer-display/computer-display",title:"Computer Display",description:"Computer Display",source:"@site/docs/computer-graphics/20-computer-display/computer-display.md",sourceDirName:"computer-graphics/20-computer-display",slug:"/computer-graphics/computer-display",permalink:"/cs-notes/computer-graphics/computer-display",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-graphics/20-computer-display/computer-display.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1708081935,formattedLastUpdatedAt:"Feb 16, 2024",frontMatter:{slug:"/computer-graphics/computer-display",id:"computer-display",title:"Computer Display",description:"Computer Display"},sidebar:"sidebar",previous:{title:"Signal Processing",permalink:"/cs-notes/computer-graphics/signal-processing"},next:{title:"Computer Animation",permalink:"/cs-notes/computer-graphics/computer-animation"}},l={},d=[{value:"Type of Computer Display",id:"type-of-computer-display",level:3},{value:"Cathode Ray Tube (CRT)",id:"cathode-ray-tube-crt",level:4},{value:"Liquid Crystal Display (LCD)",id:"liquid-crystal-display-lcd",level:4},{value:"Light Emitting Diode (LED)",id:"light-emitting-diode-led",level:4},{value:"Flat Panel Types",id:"flat-panel-types",level:4},{value:"Video Interface",id:"video-interface",level:3},{value:"Display Measurement",id:"display-measurement",level:3},{value:"Refresh Rate",id:"refresh-rate",level:4},{value:"Video Resolution",id:"video-resolution",level:3},{value:"Video Data",id:"video-data",level:3},{value:"Video Compression",id:"video-compression",level:3}];function h(e){const i={a:"a",admonition:"admonition",br:"br",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"computer-display",children:"Computer Display"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["Main Source : ",(0,n.jsx)(i.a,{href:"https://youtu.be/lhK7ZMcW5pU",children:"Intro to Graphics 23 - Computer Animation"})]})}),"\n",(0,n.jsxs)(i.p,{children:["Computer generates information, the process of displaying the information is called ",(0,n.jsx)(i.strong,{children:"Computer Display"}),", the information generated by computer will be outputted into visual device like monitor or screen."]}),"\n",(0,n.jsx)(i.p,{children:"Computer can generate complex visual like animation and video, computer is able to do this by creating illusion of motion. In fact those motion are created by sequence of image that is displayed and updated bunch of times per seconds."}),"\n",(0,n.jsx)(i.h3,{id:"type-of-computer-display",children:"Type of Computer Display"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["Source : ",(0,n.jsx)(i.a,{href:"https://youtu.be/yxygknX1AiE",children:"PowerCert"})]})}),"\n",(0,n.jsx)(i.h4,{id:"cathode-ray-tube-crt",children:"Cathode Ray Tube (CRT)"}),"\n",(0,n.jsxs)(i.p,{children:["CRT is the oldest monitor display, it uses 3 color electron gun (red, green, blue). The electron gun will rapidly fire to the screen creating a combination of colors. The rate of fire or the re-drawing is called ",(0,n.jsx)(i.strong,{children:"refresh rate"}),". For example a refresh rate of 60 Hz means that the display will be re-drawn 60 times per second."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Electron gun firing to screen to display image of building",src:s(74200).Z+"",width:"324",height:"302"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://youtu.be/yxygknX1AiE?t=101",children:"https://youtu.be/yxygknX1AiE?t=101"})]}),"\n",(0,n.jsx)(i.h4,{id:"liquid-crystal-display-lcd",children:"Liquid Crystal Display (LCD)"}),"\n",(0,n.jsx)(i.p,{children:"LCD displays is a flat display that consist of a layer of liquid crystal material, in front of that there exists an RGB color filter to produce the different color we need. An LCD monitor needs a light source behind."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Layer of LCD monitor",src:s(62724).Z+"",width:"350",height:"196"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://youtu.be/yxygknX1AiE?t=162",children:"https://youtu.be/yxygknX1AiE?t=162"})]}),"\n",(0,n.jsx)(i.h4,{id:"light-emitting-diode-led",children:"Light Emitting Diode (LED)"}),"\n",(0,n.jsx)(i.p,{children:"An LED display is a type of LCD display which use light-emitting diodes (LEDs) light as the light source."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Comparison of light source between LCD and LED",src:s(80062).Z+"",width:"701",height:"335"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://youtu.be/yxygknX1AiE?t=215",children:"https://youtu.be/yxygknX1AiE?t=215"})]}),"\n",(0,n.jsx)(i.h4,{id:"flat-panel-types",children:"Flat Panel Types"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Twisted Nematic (TN)"})," : TN panels use liquid crystals that twist in response to an applied electric current. TN has a good response time, however, TN panels have limited viewing angles, meaning that color and image quality degrade when viewed from off-center angles."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"In-Plane Switching (IPS)"})," : IPS uses liquid crystals that move horizontally between two glass plates. They are arranged in a parallel orientation between the glass plates. IPS offers wider viewing angles compared to TN panels, while also ensuring consistent colors and image quality even when viewed from different angles."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Vertical Alignment (VA)"})," : VA panels use liquid crystals that align vertically between two glass plates. Liquid crystals in VA panels can tilt and align in different angles to control the passage of light."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Comparison between flat panel types",src:s(98979).Z+"",width:"580",height:"283"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://www.benq.com/en-us/knowledge-center/knowledge/how-to-choose-between-tn-va-and-ips-panels-for-the-games-you-play.html",children:"https://www.benq.com/en-us/knowledge-center/knowledge/how-to-choose-between-tn-va-and-ips-panels-for-the-games-you-play.html"})]}),"\n",(0,n.jsx)(i.h3,{id:"video-interface",children:"Video Interface"}),"\n",(0,n.jsx)(i.p,{children:"A video interfaaces is used for transferring display signals from a device (such as a CPU or GPU) to a monitor or display. After the CPU and GPU generate graphics, the binary data representing the images or video is sent from the device to the display using one of these interfaces."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"VGA"})," : VGA is an analog video display interface meaning it can only transfer analog data, it is commonly found on older computers, monitors, and projectors."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"DVI"})," : DVI is made to succeed the VGA, it has 3 types, DVI-A which only sends analog signal, DVI-D that sends digital signal and DVI-I which is able to send both analog and digital signal."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"HDMI"})," : HDMI is a popular use nowadays, it transmit high-definition audio, video, and network communication signals in a single cable."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"DisplayPort"})," : DisplayPort is primarily used for video, however it can also be used for transfering USB data and audio. DisplayPort is able to send display by chaining from monitors to monitors, it is called daisy chaining."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Thunderbolt"})," : Thunderbolt is relatively new technology released in 2011. Thunderbolt is used in Apple technologies, it offers high bandwidth and up to 6 daisy chaining."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Comparison between video interfaces",src:s(64058).Z+"",width:"461",height:"215"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://www.jagadmedia.id/2020/11/perbedaan-dvi-hdmi-displayport-vga.html",children:"https://www.jagadmedia.id/2020/11/perbedaan-dvi-hdmi-displayport-vga.html"})]}),"\n",(0,n.jsx)(i.h3,{id:"display-measurement",children:"Display Measurement"}),"\n",(0,n.jsxs)(i.p,{children:["Both animation and video uses image and the more image used will results in smoother, the measurement of how many image is called ",(0,n.jsx)(i.strong,{children:"frame rate"})," and typically in ",(0,n.jsx)(i.strong,{children:"FPS (Frames Per Second)"})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Comparison between 60 FPS showing more image and 24 FPS showing less image",src:s(66826).Z+"",width:"554",height:"247"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://www.animotica.com/blog/fps-in-video-editing/",children:"https://www.animotica.com/blog/fps-in-video-editing/"})]}),"\n",(0,n.jsx)(i.p,{children:"The typical FPS for some display are :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Television :","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"North America, NTSC (National Television Standards Committee) - 30 FPS"}),"\n",(0,n.jsx)(i.li,{children:"Europe, PAL (Phase Alternate Lines) - 25 FPS"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Movies : The standard is 24 FPS, sometimes 48 - 120 FPS"}),"\n",(0,n.jsx)(i.li,{children:"Computer Monitor : 60 FPS, high-end gaming monitors can support frame rates of 120 FPS or higher."}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"refresh-rate",children:"Refresh Rate"}),"\n",(0,n.jsxs)(i.p,{children:["Computer monitor also have ",(0,n.jsx)(i.strong,{children:"refresh rate"}),", which is the measurement of how many times per second the screen is updated with new image data. It is typically measured in Hertz (Hz), which represents the number of cycles per second."]}),"\n",(0,n.jsx)(i.p,{children:"Common refresh rates for monitors are 60 Hz, 120 Hz, and 144 Hz, although some high-end gaming monitors can support even higher refresh rates, such as 240 Hz or 360 Hz."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"A comparison between 60, 120, 240 Hz refresh rate with higher making the image look less blurry",src:s(36557).Z+"",width:"813",height:"407"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://www.benq.com/en-us/campaign/gaming-projector/resources/gaming-projector-high-refresh-rates.html",children:"https://www.benq.com/en-us/campaign/gaming-projector/resources/gaming-projector-high-refresh-rates.html"})]}),"\n",(0,n.jsx)(i.h3,{id:"video-resolution",children:"Video Resolution"}),"\n",(0,n.jsxs)(i.p,{children:["This refers to the ",(0,n.jsx)(i.strong,{children:"number of pixels in an image"}),", typically measured in terms of width and height. It is often expressed as the total number of pixels in the image, such as 1920x1080 or 4K (3840x2160)."]}),"\n",(0,n.jsx)(i.p,{children:"The resolution of a video can have a significant impact on its visual quality, with higher resolutions generally providing sharper and more detailed images. The higher resolution will also require more processing power and storage space, and may not be necessary for all applications."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Example of resolution and its aspect ratio",src:s(90843).Z+"",width:"282",height:"232"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://youtu.be/lhK7ZMcW5pU?t=566",children:"https://youtu.be/lhK7ZMcW5pU?t=566"})]}),"\n",(0,n.jsx)(i.p,{children:"Low-resolution video can look blurry or pixelated because it does not have enough pixels to represent the details of the image accurately. While high-resolution video has more pixels to represent the details of the image more accurately, which results in a sharper and more detailed image."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Comparison between resolution showing rocket image with better quality in higher resolution",src:s(14869).Z+"",width:"1019",height:"401"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsxs)(i.a,{href:"https://commons.wikimedia.org/wiki/File:YouTube-resolution-comparison.jpg",children:["https://commons.wikimedia.org/wiki/File",":YouTube-resolution-comparison",".jpg"]})]}),"\n",(0,n.jsx)(i.h3,{id:"video-data",children:"Video Data"}),"\n",(0,n.jsx)(i.p,{children:"Video contains data related to the digital information that makes up a video file. This can include information about :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Resolution :"}),' The number of pixels in image, e.g. 1920x1080 (also known as "1080p").']}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Frame Rate :"})," Number of individual frames or images that are displayed per second, a video with 60 FPS will be smoother but also stores larger data than a 24 fps video."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Color Depth"})," : Number of colors that can be represented in each pixel of the image. A video with 8-bit color depth can represent up to 256 different colors per pixel, while a video with 10-bit color depth can represent up to 1024 different colors per pixel."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Compression"})," : The process of reducing the amount of data required to store and transmit a video file. Common compression are H.264 and AVC."]}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.strong,{children:"Actual content such as visual and audio"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"video-compression",children:"Video Compression"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Video Compression"})," is essential for efficient storage, transmission, and playback of video content, particularly over networks with limited bandwidth or storage capacity."]}),"\n",(0,n.jsxs)(i.p,{children:["Compressing a video may results in losing an information, accuracy, and detail. This is called ",(0,n.jsx)(i.strong,{children:"lossy compression"}),", which reduce significant amount of data with some negative drawbacks."]}),"\n",(0,n.jsxs)(i.p,{children:["There is ",(0,n.jsx)(i.strong,{children:"Lossless Compression"})," which is a compression technique that reduces the size of a file without losing any information. This make lossless compression reduce the data lesser than the lossy one."]}),"\n",(0,n.jsx)(i.p,{children:"The big idea of how video compression works :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Spatial Compression"})," : Removing unnecessary data which refers to pixels that do not significantly contribute to the visual quality of the image. A pixel that don\u2019t contribute visual quality means that human eye won\u2019t perceive the image accurately. For example, some pixels in an image may be very similar to their neighboring pixels."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Temporal Compression"})," : Removing unnecessary data from frames that do not contain significant changes from previous frames. For example, a video where someone waves their hands but the background doesn\u2019t change at all. Using this compression we can use the previous background frame and only change at frame where the motion occurs."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Run-Length Encoding (RLE)"}),' : A lossless compression which involves storing data with the value and the count instead of the full length. For example, consider data with \u201cAAAABBBCCD\u201d, with RLE we can reduce it to "4A3B2C1D\u201d which results in smaller length. However, it\u2019s less effective with data that has less repetition.']}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Comparing a blurry mp4 image with H.264 showing a better quality",src:s(72).Z+"",width:"353",height:"221"}),(0,n.jsx)(i.br,{}),"\n","Source : ",(0,n.jsx)(i.a,{href:"https://www.videoconverterfactory.com/tips/h264-to-mp4.html",children:"https://www.videoconverterfactory.com/tips/h264-to-mp4.html"})]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["Find out more about compression in ",(0,n.jsx)(i.a,{href:"/digital-signal-processing/compression",children:"here"}),"."]})})]})}function c(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},74200:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/crt-19f8355c20382768963e396063b8b937.png"},66826:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/frames-per-second-9e11813e3707daa4d6ddd1f6bca892e8.png"},62724:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/lcd-7449f50d6fd173f8d2416a2adc76fe9f.png"},80062:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/led-acdd428d2088a4451d45d96b72e2422c.png"},72:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/mp4-h264-dcb3a59e3fbb1c2f13900bd86a84ff82.png"},98979:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/panel-type-adec0084d4ceaf0d917d9ac286890e5d.png"},36557:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/refresh-rate-d0721123b847ea9df28537b70e03661c.png"},14869:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/resolution-comparison-ac0b5e17e53e127d0073bf8253889664.png"},90843:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/resolution-example-dd8a1e7ec225d86f68e5c66f2c42608f.png"},64058:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/video-interface-6cd5ee300e43475d527638703754c81c.png"},11151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>o});var n=s(67294);const t={},r=n.createContext(t);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);