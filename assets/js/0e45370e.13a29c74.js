"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6714],{73239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(85893),r=n(11151);const s={slug:"/deep-learning/transformers/transformers-architecture",id:"transformers-architecture",title:"Transformers Architecture",description:"Transformers Architecture"},a=void 0,o={id:"deep-learning/transformers/transformers-architecture/transformers-architecture",title:"Transformers Architecture",description:"Transformers Architecture",source:"@site/docs/deep-learning/14-transformers/02-transformers-architecture/transformers-architecture.md",sourceDirName:"deep-learning/14-transformers/02-transformers-architecture",slug:"/deep-learning/transformers/transformers-architecture",permalink:"/cs-notes/deep-learning/transformers/transformers-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/deep-learning/14-transformers/02-transformers-architecture/transformers-architecture.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1707298369,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{slug:"/deep-learning/transformers/transformers-architecture",id:"transformers-architecture",title:"Transformers Architecture",description:"Transformers Architecture"},sidebar:"sidebar",previous:{title:"Attention Mechanism",permalink:"/cs-notes/deep-learning/transformers/attention-mechanism"},next:{title:"Transformers Audio",permalink:"/cs-notes/deep-learning/transformers/transformers-audio"}},l={},c=[{value:"Transformers Architecture",id:"transformers-architecture",level:2},{value:"Encoder",id:"encoder",level:3},{value:"Decoder",id:"decoder",level:3},{value:"Learning Process",id:"learning-process",level:3},{value:"Extras",id:"extras",level:4}];function h(e){const t={a:"a",br:"br",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://youtu.be/z1xs9jdZnuY?si=_rWDHRCle8k-x8SG",children:"Transformer (Attention is all you need) - Minsuk Heo \ud5c8\ubbfc\uc11d"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://youtu.be/4Bdc55j80l8?si=hHjopC6GvZl-mZTv",children:"Illustrated Guide to Transformers Neural Network: A step by step explanation - The A.I. Hacker - Michael Phi"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://huggingface.co/learn/nlp-course/chapter1/1",children:"Hugging Face NLP course part 1"})})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transformers"})," is a type of deep learning architecture that specifically uses the ",(0,i.jsx)(t.a,{href:"/deep-learning/transformers/attention-mechanism",children:"attention mechanism"})," as the key component. While ",(0,i.jsx)(t.a,{href:"/deep-learning/transformers/attention-mechanism#rnn-with-attention",children:"RNN with attention"})," also use the attention mechanism, transformers is a standalone architecture that doesn't need traditional sequential model like ",(0,i.jsx)(t.a,{href:"/deep-learning/rnn",children:"RNN"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"RNN processes information in sequence, each step has to wait for the previous step to complete, this will makes computation slow. The removal of RNN will indeed allow us to get better performance. The motivation behind transformers is to address the performance issue we are facing in RNN. The question is, how can we remove RNN while preserving the attention mechanism?"}),"\n",(0,i.jsx)(t.h2,{id:"transformers-architecture",children:"Transformers Architecture"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"The main architecture of transformers",src:n(26742).Z+"",width:"413",height:"594"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://machinelearningmastery.com/the-transformer-model/",children:"https://machinelearningmastery.com/the-transformer-model/"})," (with modification)"]}),"\n",(0,i.jsx)(t.p,{children:"Transformers follow the encoder and decoder architecture, meaning one component should capture and summarize information from input and another is the one that produces output."}),"\n",(0,i.jsx)(t.h3,{id:"encoder",children:"Encoder"}),"\n",(0,i.jsx)(t.p,{children:"The encoder is responsible for taking and processing the input sequence, it consist of multiple layer that works together. Here is the walkthrough of input processing in encoder :"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Input Embedding"})," : The input sequence is first transformed into a dense vector (often called as ",(0,i.jsx)(t.strong,{children:"token"}),") that of course contain numbers. The input embedding is a learnable process, meaning it can be adjusted during the backpropagation process."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Positional Encoding"})," : Since transformers doesn't include RNN that process input sequentially, ",(0,i.jsx)(t.strong,{children:"positional encoding"})," is a technique to capture the relative position of tokens within a sequence."]}),"\n",(0,i.jsxs)(t.p,{children:["Positional encoding is done by adding a sinusoidal function (sin and cos) of different frequency to the token vector. Basically the sinusoidal function will model the position information of each element in the sequence using different variation of frequency. There are few reason why sinusoidal function is used, one of the important is the ",(0,i.jsx)(t.strong,{children:"periodic"})," nature offers an unlimited encoding regardless of our input length. Other reason are its smooth transition and non-linear function."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Positional encoding",src:n(97328).Z+"",width:"589",height:"357"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://datascience.stackexchange.com/questions/51065/what-is-the-positional-encoding-in-the-transformer-model",children:"https://datascience.stackexchange.com/questions/51065/what-is-the-positional-encoding-in-the-transformer-model"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The first and second is the input pre-processing, the third and so on is the actual processing inside an encoder layer."}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Self-Attention"})," : Transformers uses a mechanism called ",(0,i.jsx)(t.strong,{children:"self-attention"}),". The standard attention mechanism produces a context vector (vector that contains important information about the sequence we are processing) by considering the input sequence and the current output we are generating. In other word, it needs two sequence which is the input and current output to generate another output."]}),"\n",(0,i.jsx)(t.p,{children:"On the other hand, self-attention only need a single sequence. Self-attention weigh the relevance or importance of each element by comparing it with other element in the sequence itself. This will make different element have different relevance in the sequence."}),"\n",(0,i.jsxs)(t.p,{children:["What makes it superior than the standard attention mechanism, it offers us ",(0,i.jsx)(t.strong,{children:"parallelization"}),". Remember that in ",(0,i.jsx)(t.a,{href:"/deep-learning/transformers/attention-mechanism#attention",children:"RNN with attention"})," on each output step, the attention vector is different, they are computed based on current output step. Self-attention that uses single sequence allows us to compute attention scores for all elements simultaneously, leading to better performance."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Self-attention process"})," :",(0,i.jsx)(t.br,{}),"\n","The self-attention is implemented by matrix multiplication. The token embedding are fed into the first layer in encoder. The self-attention mechanism is applied, it is done by calculating three types of vector called ",(0,i.jsx)(t.strong,{children:"query, key, and value vectors"}),". The tokens embedding are combined in a matrix, it will be multiplied by three types of matrices that correspond to each vector mentioned. The matrix are ",(0,i.jsx)(t.strong,{children:"Wq, Wk, and Wv"}),", they are basically weights in form of matrix, which mean they are learnable."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These three vector carries the information of token, they will be used to calculate an attention weight, which is the value of importance of a token in sequence."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The query vector represent specific position of token in the input sequence that we want to compute the attention weights for."}),"\n",(0,i.jsx)(t.li,{children:"Key vector represent the other token in the sequence that is being compared to the query vector. As explained in self-attention mechanism, we will compare all the element with each other to consider which one is more important than other."}),"\n",(0,i.jsx)(t.li,{children:"Value vector contain the actual information or the features of each token in the sequence."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Visualization of the relation between each word or token in self-attention.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.img,{alt:"Self-attention visualization 2",src:n(23854).Z+"",width:"933",height:"497"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://www.researchgate.net/figure/A-visualization-of-a-learned-self-attention-head-on-a-sentence-The-visualization-shows_fig5_346522738",children:"https://www.researchgate.net/figure/A-visualization-of-a-learned-self-attention-head-on-a-sentence-The-visualization-shows_fig5_346522738"}),", ",(0,i.jsx)(t.a,{href:"https://babich.biz/transformer-architecture/",children:"https://babich.biz/transformer-architecture/"})]}),"\n",(0,i.jsxs)(t.p,{children:["The query and key vector (transposed) will be multiplied together, producing something called ",(0,i.jsx)(t.strong,{children:"attention scores"}),", it can be interpreted as the similarity between two token. The higher the result is the stronger the relevance. They will be divided by the square root of the dimensionality of the key vectors, to prevent large number. ",(0,i.jsx)(t.a,{href:"/deep-learning/neural-network#softmax-activation-function",children:"Softmax activation function"})," will be applied to the previous result, resulting normalized value (they sum up to 1)."]}),"\n",(0,i.jsxs)(t.p,{children:["The normalized value will be multiplied with the value vector. The result of it is what we call ",(0,i.jsx)(t.strong,{children:"attention weights"}),". The normalized value which represent the similarity of information is multiplied by the actual information of the token in input sequence. This mean we are assigning the similarity of information to each token."]}),"\n",(0,i.jsxs)(t.p,{children:["The output (called ",(0,i.jsx)(t.strong,{children:"attention layer output"}),") will be the sum of all attention weights and this will be done for all element in sequence. The properties of encoder that consider each token in sequence including the previous and subsequent token to capture the information that lies on the input is called ",(0,i.jsx)(t.strong,{children:"bi-directional"}),". In other word, it can pay attention to every token in the sequence."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Self-attention matrix multiplication",src:n(21199).Z+"",width:"907",height:"241"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://theaisummer.com/transformer/",children:"https://theaisummer.com/transformer/"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Another visualization of self-attention",src:n(40580).Z+"",width:"759",height:"293"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://youtu.be/z1xs9jdZnuY?si=czJyixA7IV3DxG7k&t=475",children:"https://youtu.be/z1xs9jdZnuY?si=czJyixA7IV3DxG7k&t=475"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Multi-Head Attention"})," : Multi-head attention is an extension of the self-attention mechanism that improves its efficiency through parallel computation."]}),"\n",(0,i.jsxs)(t.p,{children:["The set of query, key, and value vector we have obtained is grouped in something called ",(0,i.jsx)(t.strong,{children:"attention head"}),". They first goes into a linear layer to be projected into different vector spaces, basically projecting them mean we are looking through these vector from different perspective. This will allows the model to capture different representation of the input."]}),"\n",(0,i.jsx)(t.p,{children:"So, to calculate attention weights in parallel, we will compute all the attention head simultaneously. The same calculation that includes multiplication between query and key vector, softmax normalization, and multiplication with the value vector, is also performed."}),"\n",(0,i.jsx)(t.p,{children:"By calculating them simultaneously, the model can have longer dependencies when processing the input sequence. The model attends to all other tokens and can access different parts of the sequence during the matrix multiplication process."}),"\n",(0,i.jsx)(t.p,{children:"Each result of attention head will be concatenated together and will be passed into a linear layer again, producing the final output of multi-head attention layer."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Multi-head attention",src:n(48503).Z+"",width:"351",height:"452"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://paperswithcode.com/method/multi-head-attention",children:"https://paperswithcode.com/method/multi-head-attention"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Residual Connection and Layer Normalization (Add & Norm)"})," : We did alot of calculation, during the backpropagation process, we may lose some information including the positional encoding we did in the earlier step. Transformers uses the ",(0,i.jsx)(t.a,{href:"/deep-learning/resnet#residual-connection",children:"residual connection concept"})," to help prevent the vanishing gradient issue. This is implemented by adding the input that bypass the attention layer with the same input that goes to the attention layer. This layer also include a normalization process to normalize the output of attention layer, to prevent large number and stabilize the training process."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Feed-Forward Networks (FFN)"})," : The attention output is passed through a feed-forward network within the encoder layer. The FFN that includes activation function like ReLU introduces non-linearity. The output of the FFN is then passed through another residual connection and layer normalization. Similar to residual connection in multi-head attention layer, we will add the input that bypass the feed-forward network with the one that goes through it."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Residual connection",src:n(89861).Z+"",width:"645",height:"307"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://deepgram.com/learn/visualizing-and-explaining-transformer-models-from-the-ground-up",children:"https://deepgram.com/learn/visualizing-and-explaining-transformer-models-from-the-ground-up"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The step from 3 to 6 represent the process of a single encoder layer. In conclusion, a single layer of encoder processes and transform the input sequence to capture relevant information in the sequence. The output of encoder is a key and value pair that represent the information about the input sequence."}),"\n",(0,i.jsx)(t.p,{children:"Transformers architecture may includes multiple encoder layer, they have identical architecture but they don't share weights."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"The encoder layer",src:n(23660).Z+"",width:"214",height:"393"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://machinelearningmastery.com/the-transformer-model/",children:"https://machinelearningmastery.com/the-transformer-model/"})," (with modification)"]}),"\n",(0,i.jsx)(t.h3,{id:"decoder",children:"Decoder"}),"\n",(0,i.jsx)(t.p,{children:"The decoder is responsible for generating the output sequence, it consist of similar layer with encoder like multi-head attention, add & norm, and feed-forward network. The decoder takes input from encoder layer (the relevant information) and from the previous output as well."}),"\n",(0,i.jsx)(t.p,{children:"The decoder first process the previous output and then it will be combined with the output from encoder."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Output Embedding"})," : The previously generated output embedded or will be turned into a vector representation (token), similar to input embedding in encoder."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Positional Encoding"})," : The similar encoding process to capture the relative position of each token in the sequence."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Masked Multi-Head Attention"})," : In the normal multi-head attention, we calculated the attention weights using matrix multiplication which include multiplying every element with each other. Multiplying with every element includes accessing its query, key, vector, meaning we have information about them. However, we don't want this to happen in decoder, we don't want to generate output with the information from future. This is implemented by changing some of the value in the matrix during the matrix multiplication to a very large negative number. The properties of decoder that only access previously generated token is called ",(0,i.jsx)(t.strong,{children:"uni-directional"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Masked multi-head attention",src:n(83266).Z+"",width:"784",height:"242"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://tigris-data-science.tistory.com/entry/%EC%B0%A8%EA%B7%BC%EC%B0%A8%EA%B7%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-Transformer4-Masked-Multi-Head-Attention%EA%B3%BC-Decoder",children:"https://tigris-data-science.tistory.com/entry/%EC%B0%A8%EA%B7%BC%EC%B0%A8%EA%B7%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-Transformer4-Masked-Multi-Head-Attention%EA%B3%BC-Decoder"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Add & Norm"})," : It then goes to the add & norm layer again which consist of residual connection and normalization layer."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Multi-head Attention"})," : Also known as ",(0,i.jsx)(t.strong,{children:"encoder-decoder attention"})," or ",(0,i.jsx)(t.strong,{children:"cross-attention"}),", in this step, the multi-head attention will be done again. Multi-head attention will need query, key, and value vector, the input for them will be the combination of the output from encoder and previous result from decoder. Encoder provides the key and value pair, the decoder's previous output is transformed into a query. So basically, the encoder provides the contextual information from key and value pair and its combined with the query from decoder that represent what we need to generate the output now. It then goes to add & norm layer again."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Feed-Forward Network + Add & Norm"})," : The next component in the decoder layer is the feed-forward network. Same as the encoder, it consist of fully connected layer with non-linear activation function. Next, it will be normalized again in the add & norm layer."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Output"})," : Finally, the output from previous layer will go into a linear layer, followed with softmax activation function to produces the probability of each token. The model select the token with highest probability and use it as the input for next decoder step. Decoder is considered as  ",(0,i.jsx)(t.strong,{children:"auto-regressive"})," or ",(0,i.jsx)(t.strong,{children:"causal-attention"}),", meaning it output sequence one step at a time, in an iterative and sequential manner."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Transformers output",src:n(41347).Z+"",width:"479",height:"291"}),(0,i.jsx)(t.br,{}),"\n","Source : ",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/pulse/intro-transformer-architecture-jithin-s-l",children:"https://www.linkedin.com/pulse/intro-transformer-architecture-jithin-s-l"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"learning-process",children:"Learning Process"}),"\n",(0,i.jsx)(t.p,{children:"After output is generated, the prediction or whatever the output is will be compared with the actual label of the input. For example :"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"In machine translation, the labels would be the target sequences or translations corresponding to the source sequences."}),"\n",(0,i.jsx)(t.li,{children:"In text classification, the labels represent different categories of the input text."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After loss is calculated, the similar learning process will be done, including the backpropagation process through all the layer of transformers model from the decoder output until the encoder input."}),"\n",(0,i.jsx)(t.h4,{id:"extras",children:"Extras"}),"\n",(0,i.jsx)(t.p,{children:"Transformers consists of encoder and decoder, however, they are not necesarry used together. In tasks like text classification or sentiment analysis, where understanding of the input is the primary objective, the encoder captures contextual information about the data, the information can be fed into classifier directly. A decoder-only model is designed for generating output. It is applicable in tasks such as dialogue generation, where it generates the subsequent word based on previously generated words."}),"\n",(0,i.jsx)(t.p,{children:"They are often used together for sequence-to-sequence tasks like text translation that require understanding of input data and the output generation."}),"\n",(0,i.jsxs)(t.p,{children:["Transformers model is considered as semi-supervised learning. The semi-supervised learning involve techniques like pre-training and fine tuning. The pre-training technique mean the model is trained on unlabeled data. During the pre-training process, the model learns the general language representation and capture how each word relate with each other. It will then be fine tuned, a smaller labeled dataset will be fed to the model to adapt it on specific tasks or specific topic (the method is also called ",(0,i.jsx)(t.strong,{children:"transfer learning"}),")."]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},89861:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-norm-a83cbb62aef4b9965812c9379658d813.png"},23660:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/encoder-layer-6a205a39c14cf4505b729a703469f5f0.png"},83266:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/masked-multi-head-attention-46ddaaea0aa6d6fd268a3e2ba570cc84.png"},48503:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/multi-head-attention-3944081d5838af9adaaecb5c7beb0abb.png"},97328:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/positional-encoding-45f699c2543499baa834ada806243631.png"},40580:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self-attention-2-f32b43e6f7b09d16f9cac0f2e824bd1b.png"},23854:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self-attention-visualization-11a9fbd1c07e6fa7f140ec5827291ab7.png"},21199:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self-attention-a556567684fdea41975866e764f76c8e.png"},26742:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/transformers-architecture-979b9f67f275bed7004cc50535d25569.png"},41347:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/transformers-output-eda0dc134579527e86a626998bcc2abd.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(67294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);