"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[2806],{27550:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=t(85893),n=t(11151);const i={slug:"/data-structures-and-algorithms/graph",id:"graph",title:"Graph",description:"Graph"},r=void 0,c={id:"data-structures-and-algorithms/graph/graph",title:"Graph",description:"Graph",source:"@site/docs/data-structures-and-algorithms/10-graph/graph.md",sourceDirName:"data-structures-and-algorithms/10-graph",slug:"/data-structures-and-algorithms/graph",permalink:"/cs-notes/data-structures-and-algorithms/graph",draft:!1,unlisted:!1,editUrl:"https://github.com/glennhenry/cs-notes/tree/main/docs/data-structures-and-algorithms/10-graph/graph.md",tags:[],version:"current",lastUpdatedBy:"glennhenry",lastUpdatedAt:1706857828,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{slug:"/data-structures-and-algorithms/graph",id:"graph",title:"Graph",description:"Graph"},sidebar:"sidebar",previous:{title:"Heap",permalink:"/cs-notes/data-structures-and-algorithms/heap"},next:{title:"Trie",permalink:"/cs-notes/data-structures-and-algorithms/trie"}},d={},h=[{value:"Terminology",id:"terminology",level:3},{value:"Types of Graph",id:"types-of-graph",level:3},{value:"Directed",id:"directed",level:4},{value:"Undirected",id:"undirected",level:4},{value:"Weighted",id:"weighted",level:4},{value:"Unweighted",id:"unweighted",level:4},{value:"Cyclic",id:"cyclic",level:4},{value:"Acyclic",id:"acyclic",level:4},{value:"Connected",id:"connected",level:4},{value:"Disconnected",id:"disconnected",level:4},{value:"Bipartite",id:"bipartite",level:4},{value:"Complete",id:"complete",level:4},{value:"Graph Representation",id:"graph-representation",level:3},{value:"Adjacency Matrix",id:"adjacency-matrix",level:4},{value:"Adjacency List",id:"adjacency-list",level:4}];function o(e){const s={a:"a",annotation:"annotation",br:"br",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Main Source :"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Graph_(abstract_data_type)",children:"Graph (abstract data type) - Wikipedia"})})}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Graph"})," is a data structure that represents a collection of interconnected elements."]}),"\n",(0,a.jsx)(s.h3,{id:"terminology",children:"Terminology"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Vertex / Vertices"})," : Also called ",(0,a.jsx)(s.strong,{children:"node"}),", it is a fundamental element in graph, it is a single object or entity which a graph has. Each vertex can connect to each other."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Edges"})," : The connections or relationships between vertices in a graph is called ",(0,a.jsx)(s.strong,{children:"edge"}),". They represent the associations or interactions between the entities represented by the vertices."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Adjacent"})," : Two nodes are considered adjacent to each other, when there is an edge connecting them directly."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Neighbors"})," : All the nodes that are directly connected to a given node by an edge."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Graph terminology",src:t(11297).Z+"",width:"432",height:"309"})}),"\n",(0,a.jsx)(s.h3,{id:"types-of-graph",children:"Types of Graph"}),"\n",(0,a.jsx)(s.p,{children:"Graph can be classified based on various characteristics :"}),"\n",(0,a.jsx)(s.h4,{id:"directed",children:"Directed"}),"\n",(0,a.jsx)(s.p,{children:"A graph where its edges have a specific direction, indicating a one-way relationship between nodes. The edges can be traversed only in the direction specified by the edge."}),"\n",(0,a.jsx)(s.h4,{id:"undirected",children:"Undirected"}),"\n",(0,a.jsx)(s.p,{children:"The opposite of directed, its edges have no specific direction and represent a two-way relationship between nodes. The edges can be traversed in both directions."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Directed vs undirected graph",src:t(30558).Z+"",width:"689",height:"342"})}),"\n",(0,a.jsx)(s.h4,{id:"weighted",children:"Weighted"}),"\n",(0,a.jsx)(s.p,{children:"Each edge in the graph is assigned a weight or a cost, representing the strength, distance, or any other quantitative value associated with the relationship between nodes."}),"\n",(0,a.jsx)(s.h4,{id:"unweighted",children:"Unweighted"}),"\n",(0,a.jsx)(s.p,{children:"On the other hand, unweighted graph's edges have equal importance and do not carry any additional information or weight."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Weighted vs unweighted graph",src:t(35339).Z+"",width:"1066",height:"277"})}),"\n",(0,a.jsx)(s.h4,{id:"cyclic",children:"Cyclic"}),"\n",(0,a.jsx)(s.p,{children:"A cyclic graph contains cycles or loops, meaning that it is possible to traverse a path in the graph that starts from a node and returns to the same node without repeating any edges."}),"\n",(0,a.jsx)(s.h4,{id:"acyclic",children:"Acyclic"}),"\n",(0,a.jsx)(s.p,{children:"An acyclic graph has no cycles or loops. It is not possible to traverse a path in the graph that starts from a node and returns to the same node without repeating any edges."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Cyclic vs acyclic graph",src:t(21775).Z+"",width:"617",height:"347"})}),"\n",(0,a.jsx)(s.h4,{id:"connected",children:"Connected"}),"\n",(0,a.jsx)(s.p,{children:"A connected graph is one in which there is a path between every pair of nodes. In other words, there are no isolated nodes or disconnected components in the graph."}),"\n",(0,a.jsx)(s.h4,{id:"disconnected",children:"Disconnected"}),"\n",(0,a.jsx)(s.p,{children:"A disconnected graph is a type of graph where there are at least two vertices that are not connected by any path within the graph."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Connected vs disconnected graph",src:t(97098).Z+"",width:"860",height:"341"})}),"\n",(0,a.jsx)(s.h4,{id:"bipartite",children:"Bipartite"}),"\n",(0,a.jsx)(s.p,{children:"A bipartite graph is a graph whose nodes can be divided into two disjoint sets such that no two nodes within the same set are connected by an edge. In other words, the graph can be colored using only two colors without any adjacent nodes having the same color."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.img,{alt:"Bipartite graph",src:t(84386).Z+"",width:"804",height:"252"}),(0,a.jsx)(s.br,{}),"\n","Source : ",(0,a.jsx)(s.a,{href:"https://rohithv63.medium.com/graph-algorithm-bipartite-graph-dfs-f7f6a4afed4c",children:"https://rohithv63.medium.com/graph-algorithm-bipartite-graph-dfs-f7f6a4afed4c"})]}),"\n",(0,a.jsx)(s.h4,{id:"complete",children:"Complete"}),"\n",(0,a.jsx)(s.p,{children:"A complete graph is one in which there is an edge between every pair of distinct nodes. In other words, all nodes in the graph are connected to each other."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.img,{alt:"Complete graph",src:t(95137).Z+"",width:"300",height:"230"}),(0,a.jsx)(s.br,{}),"\n","Source : ",(0,a.jsx)(s.a,{href:"https://www.tutorialscan.com/datastructure/complete-graph/",children:"https://www.tutorialscan.com/datastructure/complete-graph/"})]}),"\n",(0,a.jsxs)(s.p,{children:["Depending on the problem, a graph may have multiple characteristics together. For example, a ",(0,a.jsx)(s.a,{href:"/data-structures-and-algorithms/tree",children:"tree"})," is a special type of graph where it is undirected and acyclic. We can traverse from top to bottom or vice versa and it has no cycle in it. A graph is a more generalized tree, it is more flexible, and it can have arbitrary connections and structures."]}),"\n",(0,a.jsx)(s.h3,{id:"graph-representation",children:"Graph Representation"}),"\n",(0,a.jsx)(s.p,{children:"To represent graph, we will need a way to represent their edge and the vertices which stores values."}),"\n",(0,a.jsx)(s.h4,{id:"adjacency-matrix",children:"Adjacency Matrix"}),"\n",(0,a.jsxs)(s.p,{children:["An adjacency matrix is a two-dimensional matrix where rows and columns represent the nodes of the graph. The value at position ",(0,a.jsx)(s.code,{children:"(i, j)"})," in the matrix indicates whether there is an edge between nodes ",(0,a.jsx)(s.code,{children:"i"})," and ",(0,a.jsx)(s.code,{children:"j"})," (typically indicated by 1 if they are connected and 0 if they are not connected). This representation is useful for dense graphs (graphs with many edges) and allows for efficient lookup of edge existence (multidimensional array indexing). However, it requires ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mi,{children:"V"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(V^2)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," space, where ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"V"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"V"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"})]})})]})," is the number of vertices."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.img,{alt:"Adjacency matrix",src:t(60841).Z+"",width:"956",height:"364"}),(0,a.jsx)(s.br,{}),"\n","Source : ",(0,a.jsx)(s.a,{href:"https://www.geeksforgeeks.org/add-and-remove-edge-in-adjacency-matrix-representation-of-a-graph/",children:"https://www.geeksforgeeks.org/add-and-remove-edge-in-adjacency-matrix-representation-of-a-graph/"})]}),"\n",(0,a.jsx)(s.h4,{id:"adjacency-list",children:"Adjacency List"}),"\n",(0,a.jsx)(s.p,{children:"An adjacency list represents a graph as an array of lists or arrays. Each element of the array corresponds to a node, and the list at each index contains the neighbors or adjacent nodes of that node. This representation is efficient for sparse graphs (graphs with fewer edges) as it requires space proportional to the number of edges. It allows for efficient traversal of neighbors for each node."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.img,{alt:"Adjacency list",src:t(34116).Z+"",width:"480",height:"210"}),(0,a.jsx)(s.br,{}),"\n","Source : ",(0,a.jsx)(s.a,{href:"https://www.lavivienpost.com/implement-weighted-graph-as-adjacency-list/",children:"https://www.lavivienpost.com/implement-weighted-graph-as-adjacency-list/"})]}),"\n",(0,a.jsxs)(s.p,{children:["For example, we have an array of nodes ",(0,a.jsx)(s.code,{children:"[[2, 3], [1, 3], [1, 2, 4], [3]]"}),", where node ",(0,a.jsx)(s.code,{children:"i"})," correspond to index ",(0,a.jsx)(s.code,{children:"i - 1"})," in the array. The node ",(0,a.jsx)(s.code,{children:"1"})," should correspond to index ",(0,a.jsx)(s.code,{children:"0"}),", which has ",(0,a.jsx)(s.code,{children:"2"})," and ",(0,a.jsx)(s.code,{children:"3"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Here is the comparison of the time complexity of adjacency matrix and list, where ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"E"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"E"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"})]})})]})," and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"V"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"V"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"})]})})]})," is the number of edges and the number of vertices, respectively."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.img,{alt:"Comparison of the time complexity of adjacency matrix and list",src:t(59650).Z+"",width:"724",height:"341"}),(0,a.jsx)(s.br,{}),"\n","Source : ",(0,a.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Graph_(abstract_data_type)",children:"https://en.wikipedia.org/wiki/Graph_(abstract_data_type)"})]})]})}function l(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},34116:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/adjacency-list-4649fba345b6440b7a3323642f37c029.jpg"},60841:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/adjacency-matrix-c749652ed5468e47a7456f18a7552872.jpg"},84386:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/bipartite-9bc8f348c5e91a6dde0d3134bb99a38e.png"},95137:(e,s,t)=>{t.d(s,{Z:()=>a});const a="data:image/webp;base64,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"},97098:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/connected-disconnected-a4b837256e891715c19946678663c2c2.png"},21775:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/cyclic-acyclic-c442198bd6925600acf1571580d74335.png"},30558:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/directed-undirected-bc9cd80fc25f457074f12449428fadca.png"},59650:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/graph-complexity-faf58a92b60fd5d5796cbfd6e88d5c40.png"},11297:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/graph-terminology-868a1da8c6fbee86aebe2cb7d9ad774b.png"},35339:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/weighted-unweighted-22922e9ec2f58528df2df785fa330b66.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>r});var a=t(67294);const n={},i=a.createContext(n);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);