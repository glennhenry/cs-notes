"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[5914],{80759:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(85893),t=n(11151);const a={slug:"/computer-and-programming-fundamentals/binary-representation",id:"binary-representation",title:"Binary Representation",description:"Binary Representation"},r=void 0,l={id:"computer-and-programming-fundamentals/binary-representation/binary-representation",title:"Binary Representation",description:"Binary Representation",source:"@site/docs/computer-and-programming-fundamentals/02-binary-representation/binary-representation.md",sourceDirName:"computer-and-programming-fundamentals/02-binary-representation",slug:"/computer-and-programming-fundamentals/binary-representation",permalink:"/cs-notes/computer-and-programming-fundamentals/binary-representation",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/computer-and-programming-fundamentals/02-binary-representation/binary-representation.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1698758035e3,frontMatter:{slug:"/computer-and-programming-fundamentals/binary-representation",id:"binary-representation",title:"Binary Representation",description:"Binary Representation"},sidebar:"sidebar",previous:{title:"Number System",permalink:"/cs-notes/computer-and-programming-fundamentals/number-system"},next:{title:"Bitwise Operation",permalink:"/cs-notes/computer-and-programming-fundamentals/bitwise-operation"}},c={},m=[{value:"Binary Operation",id:"binary-operation",level:3},{value:"Addition",id:"addition",level:4},{value:"Subtraction",id:"subtraction",level:4},{value:"Multiplication &amp; Division",id:"multiplication--division",level:4},{value:"Binary Representation",id:"binary-representation",level:3},{value:"Least &amp; Most Significant Bit",id:"least--most-significant-bit",level:4},{value:"Signed Magnitude",id:"signed-magnitude",level:4},{value:"One Complement",id:"one-complement",level:4},{value:"Two Complement",id:"two-complement",level:4}];function h(e){const s={a:"a",annotation:"annotation",br:"br",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Main Source :"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://youtu.be/sJXTo3EZoxM?si=4d2siZL-FEOu-TAC",children:"Binary Addition and Subtraction With Negative Numbers, 2's Complements & Signed Magnitude - The Organic Chemistry Tutor"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://www.geeksforgeeks.org/1s-2s-complement-binary-number/",children:"1\u2019s and 2\u2019s complement of a Binary Number - Geeks For Geeks"})})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"binary-operation",children:"Binary Operation"}),"\n",(0,i.jsx)(s.p,{children:"Similar to decimal number system we uses in everyday life, binary numbers can also be subject to basic arithmetic operations such as addition, subtraction, multiplication, and division. The overall idea is the same as decimal number operation, however, it differs in the representation of numbers and the rules for carrying out the operations."}),"\n",(0,i.jsx)(s.h4,{id:"addition",children:"Addition"}),"\n",(0,i.jsx)(s.p,{children:"There are four possible combination of addition in binary :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"0 + 0 = 0"}),"\n",(0,i.jsx)(s.li,{children:"0 + 1 = 1"}),"\n",(0,i.jsx)(s.li,{children:"1 + 0 = 1"}),"\n",(0,i.jsx)(s.li,{children:"1 + 1 = 0 (with a carry of 1)"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Carry refers to the situation where the sum of two digit in a column exceeds the base (which is 2 in binary). When a carry occurs, it is carried over to the next column to the left. In decimal addition, when the sum of two digits in a column is greater than 9, we carry over the tens place value to the left column. (e.g. 5 + 6 = 11, we carry 10 to left column, resulting the digit of 1 in the current column)."}),"\n",(0,i.jsx)(s.p,{children:"Here is an example of binary addition :"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Binary addition gif",src:n(91945).Z+"",width:"482",height:"285"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.tes.com/teaching-resource/r354-ks3-computer-science-theory-sow-12775550",children:"https://www.tes.com/teaching-resource/r354-ks3-computer-science-theory-sow-12775550"})," (edited)"]}),"\n",(0,i.jsx)(s.h4,{id:"subtraction",children:"Subtraction"}),"\n",(0,i.jsx)(s.p,{children:"There are four possible combination in binary subtraction :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"0 - 0 = 0: When subtracting 0 from 0, the result is 0."}),"\n",(0,i.jsx)(s.li,{children:"1 - 0 = 1: When subtracting 0 from 1, the result is 1."}),"\n",(0,i.jsx)(s.li,{children:"1 - 1 = 0: When subtracting 1 from 1, the result is 0."}),"\n",(0,i.jsx)(s.li,{children:"0 - 1 = 1 with a borrow: When subtracting 1 from 0, borrowing occurs from a higher place value. This is similar to decimal subtraction, where you borrow when subtracting a larger number from a smaller number. In binary, when subtracting 1 from 0, you borrow 1 from the next higher bit, resulting in 1 in the current place value and a borrow to the left. If the higher bit is also 0, we will keep borrowing until a nonzero bit is encountered or until there are no more higher bits (resulting in negative number in decimal)."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Binary subtraction gif",src:n(6570).Z+"",width:"432",height:"280"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://joeherbert.dev/revision/computing",children:"https://joeherbert.dev/revision/computing"})," (edited)"]}),"\n",(0,i.jsx)(s.h4,{id:"multiplication--division",children:"Multiplication & Division"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Binary multiplication gif",src:n(41156).Z+"",width:"361",height:"296"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://medium.com/@karlrombauts/building-an-8-bit-computer-in-logisim-part-2-arithmetic-ae7861c82e79",children:"https://medium.com/@karlrombauts/building-an-8-bit-computer-in-logisim-part-2-arithmetic-ae7861c82e79"})," (edited)"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Binary division gif",src:n(46836).Z+"",width:"366",height:"328"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://medium.com/@karlrombauts/building-an-8-bit-computer-in-logisim-part-2-arithmetic-ae7861c82e79",children:"https://medium.com/@karlrombauts/building-an-8-bit-computer-in-logisim-part-2-arithmetic-ae7861c82e79"})," (edited)"]}),"\n",(0,i.jsx)(s.h3,{id:"binary-representation",children:"Binary Representation"}),"\n",(0,i.jsx)(s.p,{children:"Binary representation have some properties and utilization to represent concept like negative numbers."}),"\n",(0,i.jsx)(s.h4,{id:"least--most-significant-bit",children:"Least & Most Significant Bit"}),"\n",(0,i.jsx)(s.p,{children:"They are the terms used in binary representation to refer to the position or significance of bits within a binary number."}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"least significant bit (LSB)"})," is the rightmost bit in a binary number, and it holds the least amount of significance, which is the ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsx)(s.mn,{children:"0"})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"2^0"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"0"})})]})})})})})]})]})})]}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"most significant bit (MSB)"}),", on the other hand, is the leftmost bit in a binary number, and it holds the most significant value. Its value corresponds to the highest power of 2 within the number. For example, in a byte or 8-bit binary numbers, it holds the ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsx)(s.mn,{children:"7"})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"2^7"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"7"})})]})})})})})]})]})})]})," value."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Least and most significant bit",src:n(89773).Z+"",width:"380",height:"123"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.researchgate.net/figure/Least-significant-bit_fig2_351128700",children:"https://www.researchgate.net/figure/Least-significant-bit_fig2_351128700"})]}),"\n",(0,i.jsx)(s.h4,{id:"signed-magnitude",children:"Signed Magnitude"}),"\n",(0,i.jsxs)(s.p,{children:["In binary numbers, we don't use negative sign to represent negative number, we instead uses another binary digit to determine whether its a positive or negative number, the extra digit is called the ",(0,i.jsx)(s.strong,{children:"sign bit"}),", and it doesn't contribute to overall value. The other binary digit that contributes to overall value is called the ",(0,i.jsx)(s.strong,{children:"magnitude bits"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Signed magnitude is a way to represent negative or positive number, where the most significant bit (MSB) is used as the sign bit. The MSB of 1 represent the binary number is negative, while 0 represent positive number. In some cases, the usage of MSB as the sign bit makes us need an extra binary digit to represent a larger number."}),"\n",(0,i.jsx)(s.p,{children:"The representation using signed magnitude is very simple, however, it introduces complexity when performing arithmetic operations, as special rules are required to handle the sign bit separately from the magnitude bits."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Signed magnitude",src:n(53394).Z+"",width:"431",height:"282"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.geeksforgeeks.org/difference-between-signed-magnitude-and-2s-complement/",children:"https://www.geeksforgeeks.org/difference-between-signed-magnitude-and-2s-complement/"})]}),"\n",(0,i.jsx)(s.h4,{id:"one-complement",children:"One Complement"}),"\n",(0,i.jsx)(s.p,{children:"One complement is another signed number representation or the method of representing both positive and negative numbers, it uses a specific method to represent negative number."}),"\n",(0,i.jsx)(s.p,{children:"In one complement, we still use sign bit (same as signed magnitude) to indicate the sign of the number (positive or negative), and the magnitude bits are obtained by inverting (flipping) all the bits of the positive number."}),"\n",(0,i.jsxs)(s.p,{children:["For example, the number +5 is represented as ",(0,i.jsx)(s.code,{children:"0101"}),". To obtain the one's complement representation of 5, we invert each bit to get ",(0,i.jsx)(s.code,{children:"1010"}),", which represent -5. Similarly, the number -5 in one's complement representation ",(0,i.jsx)(s.code,{children:"1010"})," can be converted back to its positive form by inverting each bit, resulting in ",(0,i.jsx)(s.code,{children:"0101"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"One complement",src:n(62160).Z+"",width:"378",height:"143"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.meracalculator.com/math/ones-complement.php",children:"https://www.meracalculator.com/math/ones-complement.php"})]}),"\n",(0,i.jsx)(s.h4,{id:"two-complement",children:"Two Complement"}),"\n",(0,i.jsx)(s.p,{children:"The two complement is another signed number representation. To obtain the two complement of a binary number, the method is very similar to one complement, we first obtain the one complement (flip the bit), and then we add extra 1 to the resulting binary number."}),"\n",(0,i.jsxs)(s.p,{children:["For example, the number 5 in binary form, which is ",(0,i.jsx)(s.code,{children:"00000101"}),". By inverting the bits, we obtain ",(0,i.jsx)(s.code,{children:"11111010"}),", and when we add 1 to this result, we arrive at the two's complement representation, which is ",(0,i.jsx)(s.code,{children:"11111011"}),". This representation signifies the value of -5."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Two complement",src:n(45894).Z+"",width:"467",height:"348"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://www.codingninjas.com/studio/library/2-s-complement",children:"https://www.codingninjas.com/studio/library/2-s-complement"})]}),"\n",(0,i.jsx)(s.p,{children:"To actually determine the decimal value of a binary number in two complement, we will need to add each positional value along with the power of base 2 and include the sign bit by negating the value of the power of base 2."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Two complement example 2",src:n(18927).Z+"",width:"416",height:"332"}),(0,i.jsx)(s.br,{}),"\n","Source : ",(0,i.jsx)(s.a,{href:"https://youtu.be/sJXTo3EZoxM?si=j67uhtI6_sfZauME&t=457",children:"https://youtu.be/sJXTo3EZoxM?si=j67uhtI6_sfZauME&t=457"})]}),"\n",(0,i.jsxs)(s.p,{children:["7 is represented as ",(0,i.jsx)(s.code,{children:"0111"})," in binary, the two complement is ",(0,i.jsx)(s.code,{children:"1001"}),". To calculate ",(0,i.jsx)(s.code,{children:"1001"}),", we will do (",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{children:"\xd7"}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsx)(s.mn,{children:"0"})]})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"1 \\times 2^0"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"0"})})]})})})})})]})]})]})]}),") + (",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mn,{children:"0"}),(0,i.jsx)(s.mo,{children:"\xd7"}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsx)(s.mn,{children:"1"})]})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"0 \\times 2^1"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(s.span,{className:"mord",children:"0"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"1"})})]})})})})})]})]})]})]}),") + (",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mn,{children:"0"}),(0,i.jsx)(s.mo,{children:"\xd7"}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsx)(s.mn,{children:"2"})]})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"0 \\times 2^2"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(s.span,{className:"mord",children:"0"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]}),") + (",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{children:"\xd7"}),(0,i.jsx)(s.mo,{children:"\u2212"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsx)(s.mn,{children:"3"})]}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"1 \\times -(2^3)"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"3"})})]})})})})})]}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),"), which is equal to 1 + 0 + 0 + (-8) = -7."]})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},91945:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/binary-addition-7df67ddf104fd180a3017f12e16ce951.gif"},46836:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/binary-division-bc19e7b5fc92dee8bc31d7521357112f.gif"},41156:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/binary-multiplication-287eaf1f33c67d0064eec7693dbb2ffc.gif"},6570:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/binary-subtraction-142b63b0e8c13c72ddbff7f319c7f36f.gif"},89773:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/lsb-msb-0f3df4836bb0008bb21b8d3950c13bec.png"},62160:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/one-complement-002fa1aa90cb6892e4b6d945d5615a58.png"},53394:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sign-bit-192e57c0519647d674e1958af2852f70.png"},18927:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/two-complement-2-12951eb338e771bc29b74991e6eec6cd.png"},45894:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/two-complement-8ce9c61cca484334f9a30c80a01d8737.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var i=n(67294);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);