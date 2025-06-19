// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";
import externalLinkIcon from "./src/assets/externalLinkIcon.js";
import { fontHeadTags } from "./src/assets/headlinks.js";

// https://astro.build/config
export default defineConfig({
  site: "https://glennhenry.github.io",
  base: "cs-notes",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, [rehypeExternalLinks, externalLinkIcon]],
  },
  integrations: [
    starlight({
      head: [...fontHeadTags],
      plugins: [starlightThemeObsidian()],
      customCss: ["./src/assets/custom.css"],
      logo: {
        src: "./src/assets/logo.jpg",
      },
      favicon: "./src/assets/favicon.ico",
      editLink: {
        baseUrl: "https://github.com/glennhenry/cs-notes/edit/main/",
      },
      credits: true,
      title: "CS Notes",
      components: {
        Pagination: "./src/components/Pagination.astro",
        PageFrame: "./src/components/PageFrame.astro",
        Sidebar: "./src/components/Sidebar.astro",
      },

      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/glennhenry/cs-notes",
        },
      ],

      sidebar: [
        { label: "Intro", slug: "index" },
        { label: "All Pages", slug: "all-pages" },

        // 1. Computer and Programming Fundamentals
        {
          label: "Computer and Programming Fundamentals",
          collapsed: true,
          items: [
            {
              label: "Computer Representation",
              collapsed: true,
              items: [
                "computer-and-programming-fundamentals/number-system",
                "computer-and-programming-fundamentals/binary-representation",
                "computer-and-programming-fundamentals/bitwise-operation",
                "computer-and-programming-fundamentals/floating-number",
                "computer-and-programming-fundamentals/data-representation",
              ],
            },
            {
              label: "Computer Fundamentals",
              collapsed: true,
              items: [
                "computer-and-programming-fundamentals/operating-system",
                "computer-and-programming-fundamentals/memory",
              ],
            },
            {
              label: "Programming Fundamentals",
              collapsed: true,
              items: [
                "computer-and-programming-fundamentals/programming-concepts",
                "computer-and-programming-fundamentals/data-structures-and-algorithms",
                {
                  label: "Programming Paradigms",
                  collapsed: true,
                  items: [
                    {
                      label: "Imperative",
                      collapsed: true,
                      items: [
                        "computer-and-programming-fundamentals/imperative-procedural-programming",
                        "computer-and-programming-fundamentals/object-oriented-programming",
                      ],
                    },
                    {
                      label: "Declarative",
                      collapsed: true,
                      items: [
                        "computer-and-programming-fundamentals/declarative-functional-programming",
                        "computer-and-programming-fundamentals/query-language",
                        "computer-and-programming-fundamentals/logic-programming",
                      ],
                    },
                  ],
                },
                {
                  label: "General Concepts",
                  collapsed: true,
                  items: [
                    "computer-and-programming-fundamentals/concurrency",
                    "computer-and-programming-fundamentals/caching",
                  ],
                },
                {
                  label: "Code Execution",
                  collapsed: true,
                  items: [
                    "computer-and-programming-fundamentals/compilation",
                    "computer-and-programming-fundamentals/interpreter",
                    "computer-and-programming-fundamentals/runtime-environment",
                  ],
                },
                "computer-and-programming-fundamentals/computer-and-programming-terminology",
              ],
            },
          ],
        },

        // 2. Digital Signal Processing
        {
          label: "Digital Signal Processing",
          collapsed: true,
          items: [
            "digital-signal-processing/signal",
            {
              label: "Fourier Analysis",
              collapsed: true,
              items: [
                "digital-signal-processing/fourier-series",
                "digital-signal-processing/fourier-transform",
                "digital-signal-processing/convolution",
                "digital-signal-processing/discrete-fourier-transform",
                "digital-signal-processing/fast-fourier-transform",
                "digital-signal-processing/discrete-cosine-transform",
                "digital-signal-processing/wavelets",
                "digital-signal-processing/laplace-transform",
                "digital-signal-processing/z-transform",
              ],
            },
            {
              label: "Signal Transmission",
              collapsed: true,
              items: [
                "digital-signal-processing/sampling",
                "digital-signal-processing/quantization",
                "digital-signal-processing/encoding-and-decoding",
                "digital-signal-processing/multiplexing",
                "digital-signal-processing/signal-transmission-medium",
              ],
            },
            {
              label: "Signal Processing",
              collapsed: true,
              items: [
                "digital-signal-processing/filtering",
                "digital-signal-processing/compression",
                "digital-signal-processing/denoising",
              ],
            },
          ],
        },

        // 3. Digital Media Processing
        {
          label: "Digital Media Processing",
          collapsed: true,
          items: [
            {
              label: "Image Processing",
              collapsed: true,
              items: [
                "digital-media-processing/image-properties",
                "digital-media-processing/image-enhancement",
                "digital-media-processing/image-acquisition-sensing",
                "digital-media-processing/image-restoration",
                "digital-media-processing/image-editing",
              ],
            },

            {
              label: "Audio Processing",
              collapsed: true,
              items: [
                "digital-media-processing/sound-audio-properties",
                "digital-media-processing/audio-input-output",
                "digital-media-processing/audio-effects",
                "digital-media-processing/audio-equalization",
                "digital-media-processing/audio-editing",
                "digital-media-processing/speech-processing",
              ],
            },

            {
              label: "Video Processing",
              collapsed: true,
              items: [
                "digital-media-processing/video-representation",
                "digital-media-processing/video-recording",
                "digital-media-processing/video-effects-enhancement",
              ],
            },
            {
              label: "Digital Media Formats",
              collapsed: true,
              items: [
                "digital-media-processing/mime-type",
                {
                  label: "Image",
                  collapsed: true,
                  items: [
                    "digital-media-processing/bmp",
                    "digital-media-processing/jpg-jpeg",
                    "digital-media-processing/png",
                    "digital-media-processing/webp",
                    "digital-media-processing/svg",
                    "digital-media-processing/gif",
                  ],
                },
                {
                  label: "Audio",
                  collapsed: true,
                  items: [
                    "digital-media-processing/wav",
                    "digital-media-processing/ogg-vorbis",
                    "digital-media-processing/mp3",
                  ],
                },
                {
                  label: "Video",
                  collapsed: true,
                  items: [
                    "digital-media-processing/avi",
                    "digital-media-processing/mp4",
                  ],
                },
                {
                  label: "Document",
                  collapsed: true,
                  items: [
                    "digital-media-processing/xml",
                    "digital-media-processing/json",
                    "digital-media-processing/txt",
                    "digital-media-processing/md",
                    "digital-media-processing/pdf",
                  ],
                },
                {
                  label: "Other",
                  collapsed: true,
                  items: ["digital-media-processing/swf"],
                },
              ],
            },
          ],
        },

        // 4. Computer Networking
        {
          label: "Computer Networking",
          collapsed: true,
          items: [
            {
              label: "Network Standard",
              collapsed: true,
              items: [
                "computer-networking/osi-model",
                "computer-networking/tcp-ip-model",
              ],
            },
            {
              label: "Network Fundamental",
              collapsed: true,
              items: [
                {
                  label: "Network Addressing",
                  collapsed: true,
                  items: [
                    "computer-networking/ip-address",
                    "computer-networking/subnet-mask",
                    "computer-networking/mac-address",
                    "computer-networking/routing",
                    "computer-networking/gateway",
                    "computer-networking/ports",
                  ],
                },

                {
                  label: "Network Device",
                  collapsed: true,
                  items: [
                    "computer-networking/hubs",
                    "computer-networking/switch",
                    "computer-networking/router",
                    "computer-networking/dial-up-modem",
                  ],
                },

                {
                  label: "Computer Connection",
                  collapsed: true,
                  items: [
                    "computer-networking/socket",
                    "computer-networking/broadband",
                    "computer-networking/ethernet",
                    "computer-networking/lan-wan",
                    "computer-networking/server",
                  ],
                },
              ],
            },
            "computer-networking/network-topology",
            {
              label: "Network Services & Protocol",
              collapsed: true,
              items: [
                "computer-networking/dns",
                "computer-networking/dhcp",
                "computer-networking/nat",
                "computer-networking/proxy",
                "computer-networking/vpn",
                {
                  label: "Network Protocol",
                  collapsed: true,
                  items: [
                    "computer-networking/tcp-protocol",
                    "computer-networking/udp",
                    "computer-networking/ftp",
                    "computer-networking/email-protocol",
                    "computer-networking/rtp",
                    "computer-networking/rtc",
                    "computer-networking/http-https",
                  ],
                },
              ],
            },
            {
              label: "Wireless & Mobile Networking",
              collapsed: true,
              items: [
                "computer-networking/wi-fi",
                "computer-networking/bluetooth",
                "computer-networking/cellular-networking",
                "computer-networking/sim-card",
              ],
            },
            "computer-networking/network-security",
            "computer-networking/network-encryption",
            "computer-networking/networking-command",
          ],
        },

        // 5. Data Structures & Algorithms
        {
          label: "Data Structures & Algorithms",
          collapsed: true,
          items: [
            "data-structures-and-algorithms/analysis-of-algorithms",
            {
              label: "Data Structures",
              collapsed: true,
              items: [
                "data-structures-and-algorithms/array",
                "data-structures-and-algorithms/linked-list",
                "data-structures-and-algorithms/stack",
                "data-structures-and-algorithms/queue",
                "data-structures-and-algorithms/hash-table",
                "data-structures-and-algorithms/set",
                "data-structures-and-algorithms/tree",
                "data-structures-and-algorithms/heap",
                "data-structures-and-algorithms/graph",
                "data-structures-and-algorithms/trie",
              ],
            },
            {
              label: "Algorithms",
              collapsed: true,
              items: [
                {
                  label: "Common Types",
                  collapsed: true,
                  items: [
                    "data-structures-and-algorithms/sorting",
                    "data-structures-and-algorithms/search",
                    "data-structures-and-algorithms/recursion",
                    "data-structures-and-algorithms/divide-and-conquer",
                    "data-structures-and-algorithms/traversal",
                    "data-structures-and-algorithms/backtracking",
                    "data-structures-and-algorithms/greedy",
                    "data-structures-and-algorithms/dynamic-programming",
                  ],
                },
                {
                  label: "Other Algorithms",
                  collapsed: true,
                  items: [
                    "data-structures-and-algorithms/two-pointer",
                    "data-structures-and-algorithms/sliding-window",
                    "data-structures-and-algorithms/prefix-sum",
                  ],
                },
                {
                  label: "Graph Algorithms",
                  collapsed: true,
                  items: [
                    "data-structures-and-algorithms/cycle-detection",
                    "data-structures-and-algorithms/shortest-path",
                    "data-structures-and-algorithms/union-find",
                    "data-structures-and-algorithms/topological-sort",
                    "data-structures-and-algorithms/minimum-spanning-tree",
                  ],
                },
              ],
            },
          ],
        },

        // 6. Computer Organization & Architecture
        {
          label: "Computer Organization & Architecture",
          collapsed: true,
          items: [
            "computer-organization-and-architecture/coa-fundamentals",
            "computer-organization-and-architecture/boolean-logic",
            {
              label: "CPU",
              collapsed: true,
              items: [
                "computer-organization-and-architecture/alu",
                "computer-organization-and-architecture/registers-and-ram",
                "computer-organization-and-architecture/control-unit",
                "computer-organization-and-architecture/cpu-design",
              ],
            },
            "computer-organization-and-architecture/input-output",
            "computer-organization-and-architecture/assembly-language",
            {
              label: "Computer Architecture",
              collapsed: true,
              items: [
                "computer-organization-and-architecture/von-neumann",
                "computer-organization-and-architecture/harvard",
                "computer-organization-and-architecture/isa",
              ],
            },
            "computer-organization-and-architecture/other-processing-units",
          ],
        },

        // 7. Operating System
        {
          label: "Operating System",
          collapsed: true,
          items: [
            "operating-system/os-fundamentals",
            "operating-system/kernel",
            "operating-system/process-management",
            "operating-system/multithreading",
            "operating-system/process-synchronization",
            "operating-system/interrupt-handling",
            "operating-system/system-call",
            "operating-system/inter-process-communication",
            "operating-system/memory-management",
            "operating-system/disk-management",
            "operating-system/file-system",
            "operating-system/device-management",
            "operating-system/booting",
            "operating-system/networking",
            "operating-system/user-interface",
            "operating-system/virtualization",
            "operating-system/protection-and-security",
            {
              label: "Case Studies",
              collapsed: true,
              items: [
                "operating-system/type-of-os",
                "operating-system/unix",
                "operating-system/bsd",
                "operating-system/linux-kernel",
                "operating-system/windows",
                "operating-system/android",
                "operating-system/macos-and-ios",
              ],
            },
          ],
        },

        // 8. Theory of Computation & Automata
        {
          label: "Theory of Computation & Automata",
          collapsed: true,
          items: [
            "theory-of-computation-and-automata/toc-fundamentals",
            "theory-of-computation-and-automata/finite-automata",
            "theory-of-computation-and-automata/regular-languages-part-1",
            "theory-of-computation-and-automata/advanced-automata",
            "theory-of-computation-and-automata/regular-languages-part-2",
            "theory-of-computation-and-automata/formal-grammar",
            "theory-of-computation-and-automata/context-free-grammar",
            "theory-of-computation-and-automata/pushdown-automata",
            "theory-of-computation-and-automata/turing-machine",
            "theory-of-computation-and-automata/undecidability",
            "theory-of-computation-and-automata/complexity-theory",
          ],
        },

        // 9. Compilers & Programming Languages
        {
          label: "Compilers & Programming Languages",
          collapsed: true,
          items: [
            "compilers-and-programming-languages/cpl-fundamentals",
            {
              label: "Compiler Frontend",
              collapsed: true,
              items: [
                "compilers-and-programming-languages/syntax",
                "compilers-and-programming-languages/scanning",
                "compilers-and-programming-languages/parsing",
                "compilers-and-programming-languages/semantic-analysis",
              ],
            },
            {
              label: "Programming Languages Constructs",
              collapsed: true,
              items: [
                "compilers-and-programming-languages/names-scopes-bindings",
                "compilers-and-programming-languages/control-flow",
                "compilers-and-programming-languages/data-types",
                "compilers-and-programming-languages/subroutines",
                "compilers-and-programming-languages/data-abstraction",
              ],
            },
            {
              label: "Compiler Backend",
              collapsed: true,
              items: [
                "compilers-and-programming-languages/target-architecture",
                "compilers-and-programming-languages/intermediate-representation",
                "compilers-and-programming-languages/assembly-language",
                "compilers-and-programming-languages/code-generation",
                "compilers-and-programming-languages/compiler-optimization",
              ],
            },
            {
              label: "Other Programming Model",
              collapsed: true,
              items: [
                "compilers-and-programming-languages/functional-languages",
                "compilers-and-programming-languages/logic-languages",
                "compilers-and-programming-languages/concurrency",
                "compilers-and-programming-languages/scripting-languages",
              ],
            },
          ],
        },

        // 10. Database System
        {
          label: "Database System",
          collapsed: true,
          items: [
            "database-system/relational-data",
            "database-system/query-language",
            {
              label: "Database Management",
              collapsed: true,
              items: [
                {
                  label: "Database Design",
                  collapsed: true,
                  items: [
                    "database-system/database-model",
                    "database-system/normalization",
                    "database-system/transactions",
                    "database-system/concurrency-control",
                    "database-system/trigger-and-constraints",
                  ],
                },
                "database-system/logging-and-recovery",
                "database-system/database-index",
                "database-system/database-optimization",
              ],
            },
            "database-system/nosql",
            {
              label: "Database Implementation",
              collapsed: true,
              items: [
                "database-system/storage-management",
                "database-system/index-implementation",
                "database-system/query-processing",
                "database-system/query-compiler",
              ],
            },
          ],
        },

        // 11. Computer Graphics
        {
          label: "Computer Graphics",
          collapsed: true,
          items: [
            "computer-graphics/computer-images-part-1",
            "computer-graphics/computer-images-part-2",
            "computer-graphics/2d-transformation",
            "computer-graphics/3d-transformation",
            "computer-graphics/gpu-pipeline",
            "computer-graphics/low-level-graphics",
            "computer-graphics/curves",
            "computer-graphics/surfaces",
            "computer-graphics/textures-part-1",
            "computer-graphics/textures-part-2",
            "computer-graphics/shading-part-1",
            "computer-graphics/shading-part-2",
            "computer-graphics/rendering-part-1",
            "computer-graphics/rendering-part-2",
            "computer-graphics/ray-tracing",
            "computer-graphics/shadows",
            "computer-graphics/reflections",
            "computer-graphics/sampling",
            "computer-graphics/signal-processing",
            "computer-graphics/computer-display",
            "computer-graphics/computer-animation",
            "computer-graphics/physics-based-animation",
            "computer-graphics/simulation",
          ],
        },

        // 12. Internet & Web
        {
          label: "Internet & Web",
          collapsed: true,
          items: [
            "internet-and-web/html",
            "internet-and-web/css",
            "internet-and-web/javascript",
            "internet-and-web/web-url",
            "internet-and-web/web-browser",
            "internet-and-web/search-engine",
            "internet-and-web/web-hosting",
          ],
        },

        // 13. Backend System
        {
          label: "Backend System",
          collapsed: true,
          items: [
            "backend-system/web-server",
            {
              label: "APIs",
              collapsed: true,
              items: [
                "backend-system/apis-server-logic",
                "backend-system/rest-api",
                "backend-system/soap",
                "backend-system/graphql",
                "backend-system/rpc",
                "backend-system/webhook",
                "backend-system/websocket",
              ],
            },
            "backend-system/authentication",
            "backend-system/authorization",
            "backend-system/search-engine",
            "backend-system/message-broker",
            {
              label: "Architecture",
              collapsed: true,
              items: [
                "backend-system/monolithic",
                "backend-system/microservice",
                "backend-system/soa",
                "backend-system/serverless",
              ],
            },
            "backend-system/backend-server-security",
            "backend-system/backend-optimization",
          ],
        },

        // 14. Computer Security
        {
          label: "Computer Security",
          collapsed: true,
          items: [
            "computer-security/computer-security-fundamentals",
            {
              label: "Cryptography",
              collapsed: true,
              items: [
                "computer-security/math-concepts",
                {
                  label: "Hashing",
                  collapsed: true,
                  items: [
                    "computer-security/hash-function",
                    "computer-security/md5",
                    "computer-security/sha",
                  ],
                },
                "computer-security/encryption",
                {
                  label: "Symmetric Encryption",
                  collapsed: true,
                  items: [
                    "computer-security/des",
                    "computer-security/aes",
                    "computer-security/blowfish",
                  ],
                },
                {
                  label: "Asymmetric Encryption & Key Exchange",
                  collapsed: true,
                  items: [
                    "computer-security/diffie-hellman",
                    "computer-security/rsa",
                    "computer-security/elliptic-curve-cryptography",
                    "computer-security/dsa",
                  ],
                },
                "computer-security/lattice-based-cryptography",
                "computer-security/blockchain",
              ],
            },
            "computer-security/antivirus-antimalware",
            "computer-security/reverse-engineering",
            "computer-security/network-security",
            "computer-security/web-security",
            "computer-security/mobile-security",
            "computer-security/backend-server-security",
            "computer-security/other-attack-and-exploit",
          ],
        },

        // 15. Machine Learning
        {
          label: "Machine Learning",
          collapsed: true,
          items: [
            "machine-learning/linear-regression",
            "machine-learning/logistic-regression",
            "machine-learning/naive-bayes",
            "machine-learning/k-nearest-neighbors",
            "machine-learning/decision-trees",
            "machine-learning/random-forest",
            "machine-learning/gradient-boosting-machine",
            "machine-learning/support-vector-machine",
            "machine-learning/principal-component-analysis",
            "machine-learning/k-means-clustering",
            "machine-learning/collaborative-filtering",
          ],
        },

        // 16. Deep Learning
        {
          label: "Deep Learning",
          collapsed: true,
          items: [
            "deep-learning/deep-learning-foundation",
            "deep-learning/deep-learning-tasks",
            "deep-learning/neural-network",
            "deep-learning/cnn",
            "deep-learning/resnet",
            "deep-learning/u-net",
            "deep-learning/siamese-network",
            "deep-learning/rnn",
            "deep-learning/lstm",
            "deep-learning/gru",
            "deep-learning/autoencoder",
            "deep-learning/variational-autoencoder",
            "deep-learning/gan",
            {
              label: "Transformers",
              collapsed: true,
              items: [
                "deep-learning/transformers/attention-mechanism",
                "deep-learning/transformers/transformers-architecture",
                "deep-learning/transformers/transformers-audio",
                "deep-learning/transformers/bert",
                "deep-learning/transformers/gpt",
                "deep-learning/transformers/bart",
                "deep-learning/transformers/vision-transformers",
              ],
            },
            "deep-learning/diffusion-model",
            {
              label: "Reinforcement Learning",
              collapsed: true,
              items: [
                "deep-learning/reinforcement-learning/reinforcement-learning-fundamental",
                {
                  label: "Model-Based",
                  collapsed: true,
                  items: [
                    "deep-learning/reinforcement-learning/markov-models",
                    "deep-learning/reinforcement-learning/markov-decision-process",
                  ],
                },
                {
                  label: "Model-Free",
                  collapsed: true,
                  items: [
                    "deep-learning/reinforcement-learning/monte-carlo-method",
                    "deep-learning/reinforcement-learning/temporal-difference",
                    "deep-learning/reinforcement-learning/sarsa",
                    "deep-learning/reinforcement-learning/q-learning",
                    "deep-learning/reinforcement-learning/policy-gradient",
                    "deep-learning/reinforcement-learning/imitation-learning",
                  ],
                },
                "deep-learning/reinforcement-learning/multi-agent",
              ],
            },
          ],
        },

        // 17. Software Engineering
        {
          label: "Software Engineering",
          collapsed: true,
          items: [
            "software-engineering/software-process",
            {
              label: "Software Design",
              collapsed: true,
              items: [
                "software-engineering/software-principles",
                "software-engineering/diagrams",
                {
                  label: "Design Patterns",
                  collapsed: true,
                  items: [
                    "software-engineering/creational-patterns",
                    "software-engineering/structural-patterns",
                    "software-engineering/behavioral-patterns",
                  ],
                },
              ],
            },
            {
              label: "Software Architecture",
              collapsed: true,
              items: [
                "software-engineering/client-server",
                "software-engineering/event-driven",
                "software-engineering/master-slave",
                "software-engineering/peer-to-peer",
                "software-engineering/layered",
                "software-engineering/other-architecture-patterns",
              ],
            },
            {
              label: "Software Management",
              collapsed: true,
              items: [
                "software-engineering/software-testing",
                "software-engineering/software-debugging",
                "software-engineering/build-and-package-management",
                "software-engineering/version-control",
                "software-engineering/open-sourcing",
                "software-engineering/modularization",
                "software-engineering/software-deployment",
              ],
            },
            "software-engineering/system-design",
            "software-engineering/system-design-examples",
          ],
        },

        // 18. Cloud Computing
        {
          label: "Cloud Computing & Distributed Systems",
          collapsed: true,
          items: [
            "cloud-computing-and-distributed-systems/fundamentals",
            {
              label: "Distributed Systems",
              collapsed: true,
              items: [
                "cloud-computing-and-distributed-systems/distributed-systems-model",
                "cloud-computing-and-distributed-systems/distributed-systems-communication",
                "cloud-computing-and-distributed-systems/distributed-file-system",
                "cloud-computing-and-distributed-systems/distributed-database",
              ],
            },
            {
              label: "Architecture & Models",
              collapsed: true,
              items: [
                "cloud-computing-and-distributed-systems/client-server",
                "cloud-computing-and-distributed-systems/event-driven",
                "cloud-computing-and-distributed-systems/master-slave",
                "cloud-computing-and-distributed-systems/peer-to-peer",
                "cloud-computing-and-distributed-systems/microservice",
                "cloud-computing-and-distributed-systems/mapreduce",
                "cloud-computing-and-distributed-systems/lambda",
              ],
            },
            {
              label: "Cloud-Native Technologies",
              collapsed: true,
              items: [
                "cloud-computing-and-distributed-systems/virtualization",
                "cloud-computing-and-distributed-systems/containerization",
                "cloud-computing-and-distributed-systems/docker-and-kubernetes",
              ],
            },
            "cloud-computing-and-distributed-systems/cloud-models",
            "cloud-computing-and-distributed-systems/cloud-database",
            "cloud-computing-and-distributed-systems/cloud-security",
            "cloud-computing-and-distributed-systems/cloud-services",
          ],
        },
      ],
    }),
  ],
});
