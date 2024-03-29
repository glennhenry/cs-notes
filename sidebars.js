// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "intro",
    "0index/index",

    // 1. Digital Signal Processing
    {
      type: "category",
      label: "Digital Signal Processing",
      link: {
        type: "doc",
        id: "digital-signal-processing/digital-signal-processing",
      },
      items: [
        "digital-signal-processing/signal/signal",
        {
          type: "category",
          label: "Fourier Analysis",
          items: [
            "digital-signal-processing/fourier-series/fourier-series",
            "digital-signal-processing/fourier-transform/fourier-transform",
            "digital-signal-processing/convolution/convolution",
            "digital-signal-processing/discrete-fourier-transform/discrete-fourier-transform",
            "digital-signal-processing/fast-fourier-transform/fast-fourier-transform",
            "digital-signal-processing/discrete-cosine-transform/discrete-cosine-transform",
            "digital-signal-processing/wavelets/wavelets",
            "digital-signal-processing/laplace-transform/laplace-transform",
            "digital-signal-processing/z-transform/z-transform",
          ],
        },
        {
          type: "category",
          label: "Signal Transmission",
          items: [
            "digital-signal-processing/sampling/sampling",
            "digital-signal-processing/quantization/quantization",
            "digital-signal-processing/coding/coding",
            "digital-signal-processing/multiplexing/multiplexing",
            "digital-signal-processing/signal-transmission-medium/signal-transmission-medium",
          ],
        },
        {
          type: "category",
          label: "Signal Processing",
          items: [
            "digital-signal-processing/filtering/filtering",
            "digital-signal-processing/compression/compression",
            "digital-signal-processing/denoising/denoising",
          ],
        },
      ],
    },

    // 2. Computer & Programming Fundamentals
    {
      type: "category",
      label: "Computer & Programming Fundamentals",
      link: {
        type: "doc",
        id: "computer-and-programming-fundamentals/computer-and-programming-fundamentals",
      },
      items: [
        {
          type: "category",
          label: "Computer Representation",
          items: [
            "computer-and-programming-fundamentals/number-system/number-system",
            "computer-and-programming-fundamentals/binary-representation/binary-representation",
            "computer-and-programming-fundamentals/bitwise-operation/bitwise-operation",
            "computer-and-programming-fundamentals/floating-number/floating-number",
            "computer-and-programming-fundamentals/data-representation/data-representation",
          ],
        },
        {
          type: "category",
          label: "Computer Fundamentals",
          items: [
            "computer-and-programming-fundamentals/operating-system/operating-system",
            "computer-and-programming-fundamentals/memory/memory",
          ],
        },
        {
          type: "category",
          label: "Programming Fundamentals",
          items: [
            "computer-and-programming-fundamentals/programming-concepts/programming-concepts",
            "computer-and-programming-fundamentals/data-structures-and-algorithms/data-structures-and-algorithms",
            {
              type: "category",
              label: "Programming Paradigms",
              items: [
                {
                  type: "category",
                  label: "Imperative",
                  items: [
                    "computer-and-programming-fundamentals/imperative-procedural-programming/imperative-procedural-programming",
                    "computer-and-programming-fundamentals/object-oriented-programming/object-oriented-programming",
                  ],
                },
                {
                  type: "category",
                  label: "Declarative",
                  items: [
                    "computer-and-programming-fundamentals/declarative-functional-programming/declarative-functional-programming",
                    "computer-and-programming-fundamentals/query-language/query-language",
                  ],
                },
                "computer-and-programming-fundamentals/concurrency-and-parallelism/concurrency-and-parallelism",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Code Execution",
          items: [
            "computer-and-programming-fundamentals/compilation/compilation",
            "computer-and-programming-fundamentals/interpreter/interpreter",
            "computer-and-programming-fundamentals/runtime-environment/runtime-environment",
          ],
        },
        "computer-and-programming-fundamentals/computer-and-programming-terminology/computer-and-programming-terminology",
      ],
    },

    // 3. Digital Media Processing
    {
      type: "category",
      label: "Digital Media Processing",
      link: {
        type: "doc",
        id: "digital-media-processing/digital-media-processing",
      },
      items: [
        {
          type: "category",
          label: "Image Processing",
          items: [
            "digital-media-processing/image-properties/image-properties",
            "digital-media-processing/image-enhancement/image-enhancement",
            "digital-media-processing/image-acquisition-sensing/image-acquisition-sensing",
            "digital-media-processing/image-restoration/image-restoration",
            "digital-media-processing/image-editing/image-editing",
          ],
        },

        {
          type: "category",
          label: "Audio Processing",
          items: [
            "digital-media-processing/sound-audio-properties/sound-audio-properties",
            "digital-media-processing/audio-input-output/audio-input-output",
            "digital-media-processing/audio-effects/audio-effects",
            "digital-media-processing/audio-equalization/audio-equalization",
            "digital-media-processing/audio-editing/audio-editing",
            "digital-media-processing/speech-processing/speech-processing",
          ],
        },

        {
          type: "category",
          label: "Video Processing",
          items: [
            "digital-media-processing/video-representation/video-representation",
            "digital-media-processing/video-recording/video-recording",
            "digital-media-processing/video-effects-enhancement/video-effects-enhancement",
            "digital-media-processing/flash-player-swf/flash-player-swf",
          ],
        },

        {
          type: "category",
          label: "Digital Media Formats",
          items: [
            "digital-media-processing/mime-type/mime-type",
            {
              type: "category",
              label: "Image",
              items: [
                "digital-media-processing/bitmap-bmp/bitmap-bmp",
                "digital-media-processing/jpg-jpeg/jpg-jpeg",
                "digital-media-processing/png/png",
                "digital-media-processing/webp/webp",
                "digital-media-processing/svg/svg",
                "digital-media-processing/gif/gif",
              ],
            },
            {
              type: "category",
              label: "Audio",
              items: [
                "digital-media-processing/wav/wav",
                "digital-media-processing/ogg-vorbis/ogg-vorbis",
                "digital-media-processing/mp3/mp3",
              ],
            },
            {
              type: "category",
              label: "Video",
              items: [
                "digital-media-processing/avi/avi",
                "digital-media-processing/mp4/mp4",
              ],
            },
            {
              type: "category",
              label: "Document",
              items: [
                "digital-media-processing/xml/xml",
                "digital-media-processing/markdown-md/markdown-md",
                "digital-media-processing/text-file-txt/text-file-txt",
                "digital-media-processing/pdf/pdf",
              ],
            },
          ],
        },
      ],
    },

    // 4. Computer Networking
    {
      type: "category",
      label: "Computer Networking",
      link: { type: "doc", id: "computer-networking/computer-networking" },
      items: [
        {
          type: "category",
          label: "Network Standard",
          items: [
            "computer-networking/osi-model/osi-model",
            "computer-networking/tcp-ip-model/tcp-ip-model",
          ],
        },
        {
          type: "category",
          label: "Network Fundamental",
          items: [
            {
              type: "category",
              label: "Network Addressing",
              items: [
                "computer-networking/ip-address/ip-address",
                "computer-networking/subnet-mask/subnet-mask",
                "computer-networking/mac-address/mac-address",
                "computer-networking/routing/routing",
                "computer-networking/gateway/gateway",
                "computer-networking/ports/ports",
              ],
            },

            {
              type: "category",
              label: "Network Device",
              items: [
                "computer-networking/hubs/hubs",
                "computer-networking/switch/switch",
                "computer-networking/router/router",
                "computer-networking/dial-up-modem/dial-up-modem",
              ],
            },

            {
              type: "category",
              label: "Computer Connection",
              items: [
                "computer-networking/socket/socket",
                "computer-networking/broadband/broadband",
                "computer-networking/ethernet/ethernet",
                "computer-networking/lan-wan/lan-wan",
                "computer-networking/server/server",
              ],
            },
          ],
        },
        "computer-networking/network-topology/network-topology",
        {
          type: "category",
          label: "Network Services & Protocol",
          items: [
            "computer-networking/dns/dns",
            "computer-networking/dhcp/dhcp",
            "computer-networking/nat/nat",
            "computer-networking/proxy/proxy",
            "computer-networking/vpn/vpn",
            {
              type: "category",
              label: "Network Protocol",
              items: [
                "computer-networking/tcp-protocol/tcp-protocol",
                "computer-networking/udp/udp",
                "computer-networking/ftp/ftp",
                "computer-networking/email-protocol/email-protocol",
                "computer-networking/rtp/rtp",
                "computer-networking/rtc/rtc",
                "computer-networking/http-https/http-https",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Wireless & Mobile Networking",
          items: [
            "computer-networking/wi-fi/wi-fi",
            "computer-networking/bluetooth/bluetooth",
            "computer-networking/cellular-networking/cellular-networking",
            "computer-networking/sim-card/sim-card",
          ],
        },
        "computer-networking/network-security/network-security",
        "computer-networking/network-encryption/network-encryption",
        "computer-networking/networking-command/networking-command",
      ],
    },

    // 5. Data Structures & Algorithms
    {
      type: "category",
      label: "Data Structures & Algorithms",
      link: {
        type: "doc",
        id: "data-structures-and-algorithms/data-structures-and-algorithms",
      },
      items: [
        "data-structures-and-algorithms/analysis-of-algorithms/analysis-of-algorithms",
        {
          type: "category",
          label: "Data Structures",
          items: [
            "data-structures-and-algorithms/array/array",
            "data-structures-and-algorithms/linked-list/linked-list",
            "data-structures-and-algorithms/stack/stack",
            "data-structures-and-algorithms/queue/queue",
            "data-structures-and-algorithms/hash-table/hash-table",
            "data-structures-and-algorithms/set/set",
            "data-structures-and-algorithms/tree/tree",
            "data-structures-and-algorithms/heap/heap",
            "data-structures-and-algorithms/graph/graph",
            "data-structures-and-algorithms/trie/trie",
          ],
        },
        {
          type: "category",
          label: "Algorithms",
          items: [
            {
              type: "category",
              label: "Common Types",
              items: [
                "data-structures-and-algorithms/sorting/sorting",
                "data-structures-and-algorithms/search/search",
                "data-structures-and-algorithms/recursion/recursion",
                "data-structures-and-algorithms/divide-and-conquer/divide-and-conquer",
                "data-structures-and-algorithms/traversal/traversal",
                "data-structures-and-algorithms/backtracking/backtracking",
                "data-structures-and-algorithms/greedy/greedy",
                "data-structures-and-algorithms/dynamic-programming/dynamic-programming",
              ],
            },
            {
              type: "category",
              label: "Other Algorithms",
              items: [
                "data-structures-and-algorithms/two-pointer/two-pointer",
                "data-structures-and-algorithms/sliding-window/sliding-window",
                "data-structures-and-algorithms/prefix-sum/prefix-sum",
              ],
            },
            {
              type: "category",
              label: "Graph Algorithms",
              items: [
                "data-structures-and-algorithms/cycle-detection/cycle-detection",
                "data-structures-and-algorithms/shortest-path/shortest-path",
                "data-structures-and-algorithms/union-find/union-find",
                "data-structures-and-algorithms/topological-sort/topological-sort",
                "data-structures-and-algorithms/minimum-spanning-tree/minimum-spanning-tree",
              ],
            },
          ],
        },
      ],
    },

    // 6. Computer Organization & Architecture
    {
      type: "category",
      label: "Computer Organization & Architecture",
      link: {
        type: "doc",
        id: "computer-organization-and-architecture/computer-organization-and-architecture",
      },
      items: [
        "computer-organization-and-architecture/coa-fundamentals/coa-fundamentals",
        "computer-organization-and-architecture/boolean-logic/boolean-logic",
        {
          type: "category",
          label: "CPU",
          items: [
            "computer-organization-and-architecture/alu/alu",
            "computer-organization-and-architecture/registers-and-ram/registers-and-ram",
            "computer-organization-and-architecture/control-unit/control-unit",
            "computer-organization-and-architecture/cpu-design/cpu-design",
          ],
        },
        "computer-organization-and-architecture/input-output/input-output",
        "computer-organization-and-architecture/assembly-language/assembly-language",
        {
          type: "category",
          label: "Computer Architecture",
          items: [
            "computer-organization-and-architecture/von-neumann/von-neumann",
            "computer-organization-and-architecture/harvard/harvard",
            "computer-organization-and-architecture/isa/isa",
          ],
        },
        "computer-organization-and-architecture/gpu/gpu",
        "computer-organization-and-architecture/vector-processors-and-tpu/vector-processors-and-tpu",
      ],
    },

    // 7. Operating System
    {
      type: "category",
      label: "Operating System",
      link: { type: "doc", id: "operating-system/operating-system" },
      items: [
        "operating-system/os-fundamentals/os-fundamentals",
        "operating-system/kernel/kernel",
        "operating-system/process-management/process-management",
        "operating-system/multithreading/multithreading",
        "operating-system/process-synchronization/process-synchronization",
        "operating-system/interrupt-handling/interrupt-handling",
        "operating-system/system-call/system-call",
        "operating-system/inter-process-communication/inter-process-communication",
        "operating-system/memory-management/memory-management",
        "operating-system/disk-management/disk-management",
        "operating-system/file-system/file-system",
        "operating-system/device-management/device-management",
        "operating-system/booting/booting",
        "operating-system/networking/networking",
        "operating-system/user-interface/user-interface",
        "operating-system/virtualization/virtualization",
        "operating-system/protection-and-security/protection-and-security",
        {
          type: "category",
          label: "Case Studies",
          items: [
            "operating-system/type-of-os/type-of-os",
            "operating-system/unix/unix",
            "operating-system/bsd/bsd",
            "operating-system/linux-kernel/linux-kernel",
            "operating-system/windows/windows",
            "operating-system/android/android",
            "operating-system/macos-and-ios/macos-and-ios",
          ],
        },
      ],
    },

    // 8. Theory of Computation & Automata
    {
      type: "category",
      label: "Theory of Computation & Automata",
      link: {
        type: "doc",
        id: "theory-of-computation-and-automata/theory-of-computation-and-automata",
      },
      items: [
        "theory-of-computation-and-automata/toc-fundamentals/toc-fundamentals",
        "theory-of-computation-and-automata/finite-automata/finite-automata",
        "theory-of-computation-and-automata/regular-languages-part-1/regular-languages-part-1",
        "theory-of-computation-and-automata/advanced-automata/advanced-automata",
        "theory-of-computation-and-automata/regular-languages-part-2/regular-languages-part-2",
        "theory-of-computation-and-automata/formal-grammar/formal-grammar",
        "theory-of-computation-and-automata/context-free-grammar/context-free-grammar",
        "theory-of-computation-and-automata/pushdown-automata/pushdown-automata",
        "theory-of-computation-and-automata/turing-machine/turing-machine",
        "theory-of-computation-and-automata/undecidability/undecidability",
        "theory-of-computation-and-automata/complexity-theory/complexity-theory",
      ],
    },

    // 9. Programming Language Theory
    {
      type: "category",
      label: "Programming Language Theory",
      link: {
        type: "doc",
        id: "programming-language-theory/programming-language-theory",
      },
      items: [
        "programming-language-theory/plt-fundamentals/plt-fundamentals",
        "programming-language-theory/syntax/syntax",
        "programming-language-theory/names-binding-scoping/names-binding-scoping",
        "programming-language-theory/semantic-analysis/semantic-analysis",
        "programming-language-theory/target-architecture/target-architecture",
        "programming-language-theory/control-flow/control-flow",
        "programming-language-theory/data-types/data-types",
        "programming-language-theory/subroutines/subroutines",
        "programming-language-theory/data-abstraction/data-abstraction",
        "programming-language-theory/functional-languages/functional-languages",
        "programming-language-theory/logic-languages/logic-languages",
        "programming-language-theory/concurrency/concurrency",
        "programming-language-theory/implementation/implementation",
      ],
    },

    // 10. Compilers
    {
      type: "category",
      label: "Compilers",
      link: { type: "doc", id: "compilers/compilers" },
      items: [],
    },

    // 11. Database System
    {
      type: "category",
      label: "Database System",
      link: { type: "doc", id: "database-system/database-system" },
      items: [
        "database-system/relational-data/relational-data",
        "database-system/query-language/query-language",
        {
          type: "category",
          label: "Database Management",
          items: [
            {
              type: "category",
              label: "Database Design",
              items: [
                "database-system/database-model/database-model",
                "database-system/normalization/normalization",
                "database-system/transactions/transactions",
                "database-system/concurrency-control/concurrency-control",
                "database-system/trigger-and-constraints/trigger-and-constraints",
              ],
            },
            "database-system/logging-and-recovery/logging-and-recovery",
            "database-system/database-index/database-index",
            "database-system/database-optimization/database-optimization",
          ],
        },
        "database-system/nosql/nosql",
        {
          type: "category",
          label: "Database Implementation",
          items: [
            "database-system/storage-management/storage-management",
            "database-system/index-implementation/index-implementation",
            "database-system/query-processing/query-processing",
            "database-system/query-compiler/query-compiler",
          ],
        },
      ],
    },

    // 12. Computer Graphics
    {
      type: "category",
      label: "Computer Graphics",
      link: { type: "doc", id: "computer-graphics/computer-graphics" },
      items: [
        "computer-graphics/computer-images-part-1/computer-images-part-1",
        "computer-graphics/computer-images-part-2/computer-images-part-2",
        "computer-graphics/03-2d-transformation/2d-transformation",
        "computer-graphics/04-3d-transformation/3d-transformation",
        "computer-graphics/gpu-pipeline/gpu-pipeline",
        "computer-graphics/low-level-graphics/low-level-graphics",
        "computer-graphics/curves/curves",
        "computer-graphics/surfaces/surfaces",
        "computer-graphics/textures-part-1/textures-part-1",
        "computer-graphics/textures-part-2/textures-part-2",
        "computer-graphics/shading-part-1/shading-part-1",
        "computer-graphics/shading-part-2/shading-part-2",
        "computer-graphics/rendering-part-1/rendering-part-1",
        "computer-graphics/rendering-part-2/rendering-part-2",
        "computer-graphics/ray-tracing/ray-tracing",
        "computer-graphics/shadows/shadows",
        "computer-graphics/reflections/reflections",
        "computer-graphics/sampling/sampling",
        "computer-graphics/signal-processing/signal-processing",
        "computer-graphics/computer-display/computer-display",
        "computer-graphics/computer-animation/computer-animation",
        "computer-graphics/physics-based-animation/physics-based-animation",
        "computer-graphics/simulation/simulation",
      ],
    },

    // 13. Frontend Web Development
    {
      type: "category",
      label: "Frontend Web Development",
      link: {
        type: "doc",
        id: "frontend-web-development/frontend-web-development",
      },
      items: [
        "frontend-web-development/html/html",
        "frontend-web-development/html-dom/html-dom",
        "frontend-web-development/css/css",
        "frontend-web-development/javascript/javascript",
        "frontend-web-development/json/json",
        "frontend-web-development/html-css-javascript/html-css-javascript",
        "frontend-web-development/web-url/web-url",
        "frontend-web-development/web-browser/web-browser",
        "frontend-web-development/search-engine/search-engine",
        "frontend-web-development/static-and-dynamic-site/static-and-dynamic-site",
        "frontend-web-development/web-hosting/web-hosting",
        "frontend-web-development/node-js/node-js",
        "frontend-web-development/npm/npm",
        "frontend-web-development/react-js/react-js",
        "frontend-web-development/docker-and-kubernetes/docker-and-kubernetes",
      ],
    },

    // 14. Backend Development
    {
      type: "category",
      label: "Backend Development",
      link: { type: "doc", id: "backend-development/backend-development" },
      items: [
        "backend-development/web-server/web-server",
        {
          type: "category",
          label: "APIs",
          items: [
            "backend-development/apis-server-logic/apis-server-logic",
            "backend-development/rest-api/rest-api",
            "backend-development/soap/soap",
            "backend-development/graphql/graphql",
            "backend-development/rpc/rpc",
            "backend-development/webhook/webhook",
            "backend-development/websocket/websocket",
          ],
        },
        "backend-development/authentication/authentication",
        "backend-development/authentication-technique/authentication-technique",
        "backend-development/authorization/authorization",
        "backend-development/search-engine/search-engine",
        "backend-development/message-broker/message-broker",
        {
          type: "category",
          label: "Architecture",
          items: [
            "backend-development/monolithic/monolithic",
            "backend-development/microservice/microservice",
            "backend-development/soa/soa",
            "backend-development/serverless/serverless",
          ],
        },
        "backend-development/containerization/containerization",
        "backend-development/docker-kubernetes/docker-kubernetes",
        "backend-development/backend-server-security/backend-server-security",
        "backend-development/caching/caching",
        "backend-development/backend-optimization/backend-optimization",
      ],
    },

    // 15. Computer Security
    {
      type: "category",
      label: "Computer Security",
      link: { type: "doc", id: "computer-security/computer-security" },
      items: [
        "computer-security/computer-security-fundamentals/computer-security-fundamentals",
        {
          type: "category",
          label: "Cryptography",
          items: [
            "computer-security/math-concepts/math-concepts",
            {
              type: "category",
              label: "Hashing",
              items: [
                "computer-security/hash-function/hash-function",
                "computer-security/md5/md5",
                "computer-security/sha/sha",
              ],
            },
            "computer-security/encryption/encryption",
            {
              type: "category",
              label: "Symmetric Encryption",
              items: [
                "computer-security/des/des",
                "computer-security/aes/aes",
                "computer-security/blowfish/blowfish",
              ],
            },
            {
              type: "category",
              label: "Asymmetric Encryption & Key Exchange",
              items: [
                "computer-security/diffie-hellman/diffie-hellman",
                "computer-security/rsa/rsa",
                "computer-security/elliptic-curve-cryptography/elliptic-curve-cryptography",
                "computer-security/dsa/dsa",
              ],
            },
            "computer-security/lattice-based-cryptography/lattice-based-cryptography",
            "computer-security/blockchain/blockchain",
          ],
        },
        "computer-security/antivirus-antimalware/antivirus-antimalware",
        "computer-security/reverse-engineering/reverse-engineering",
        "computer-security/network-security/network-security",
        "computer-security/web-security/web-security",
        "computer-security/mobile-security/mobile-security",
        "computer-security/backend-server-security/backend-server-security",
        "computer-security/other-attack-and-exploit/other-attack-and-exploit",
      ],
    },

    // 16. Machine Learning
    {
      type: "category",
      label: "Machine Learning",
      link: { type: "doc", id: "machine-learning/machine-learning" },
      items: [
        "machine-learning/linear-regression/linear-regression",
        "machine-learning/logistic-regression/logistic-regression",
        "machine-learning/naive-bayes/naive-bayes",
        "machine-learning/k-nearest-neighbors/k-nearest-neighbors",
        "machine-learning/decision-trees/decision-trees",
        "machine-learning/random-forest/random-forest",
        "machine-learning/gradient-boosting-machine/gradient-boosting-machine",
        "machine-learning/support-vector-machine/support-vector-machine",
        "machine-learning/principal-component-analysis/principal-component-analysis",
        "machine-learning/k-means-clustering/k-means-clustering",
        "machine-learning/collaborative-filtering/collaborative-filtering",
      ],
    },

    // 17. Deep Learning
    {
      type: "category",
      label: "Deep Learning",
      link: { type: "doc", id: "deep-learning/deep-learning" },
      items: [
        "deep-learning/deep-learning-foundation/deep-learning-foundation",
        "deep-learning/deep-learning-tasks/deep-learning-tasks",
        "deep-learning/neural-network/neural-network",
        "deep-learning/cnn/cnn",
        "deep-learning/resnet/resnet",
        "deep-learning/u-net/u-net",
        "deep-learning/siamese-network/siamese-network",
        "deep-learning/rnn/rnn",
        "deep-learning/lstm/lstm",
        "deep-learning/gru/gru",
        "deep-learning/autoencoder/autoencoder",
        "deep-learning/variational-autoencoder/variational-autoencoder",
        "deep-learning/gan/gan",
        {
          type: "category",
          label: "Transformers",
          items: [
            "deep-learning/transformers/attention-mechanism/attention-mechanism",
            "deep-learning/transformers/transformers-architecture/transformers-architecture",
            "deep-learning/transformers/transformers-audio/transformers-audio",
            "deep-learning/transformers/bert/bert",
            "deep-learning/transformers/gpt/gpt",
            "deep-learning/transformers/bart/bart",
            "deep-learning/transformers/vision-transformers/vision-transformers",
          ],
        },
        "deep-learning/diffusion-model/diffusion-model",
        {
          type: "category",
          label: "Reinforcement Learning",
          items: [
            "deep-learning/reinforcement-learning/reinforcement-learning-fundamental/reinforcement-learning-fundamental",
            {
              type: "category",
              label: "Model-Based",
              items: [
                "deep-learning/reinforcement-learning/markov-models/markov-models",
                "deep-learning/reinforcement-learning/markov-decision-process/markov-decision-process",
              ],
            },
            {
              type: "category",
              label: "Model-Free",
              items: [
                "deep-learning/reinforcement-learning/monte-carlo-method/monte-carlo-method",
                "deep-learning/reinforcement-learning/temporal-difference/temporal-difference",
                "deep-learning/reinforcement-learning/sarsa/sarsa",
                "deep-learning/reinforcement-learning/q-learning/q-learning",
                "deep-learning/reinforcement-learning/policy-gradient/policy-gradient",
                "deep-learning/reinforcement-learning/imitation-learning/imitation-learning",
              ],
            },
            "deep-learning/reinforcement-learning/multi-agent/multi-agent",
          ],
        },
      ],
    },

    // 18. Software Engineering
    {
      type: "category",
      label: "Software Engineering",
      link: { type: "doc", id: "software-engineering/software-engineering" },
      items: [
        "software-engineering/software-process/software-process",
        {
          type: "category",
          label: "Software Design",
          items: [
            "software-engineering/software-principles/software-principles",
            "software-engineering/diagrams/diagrams",
            {
              type: "category",
              label: "Design Patterns",
              items: [
                "software-engineering/creational-patterns/creational-patterns",
                "software-engineering/structural-patterns/structural-patterns",
                "software-engineering/behavioral-patterns/behavioral-patterns",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Software Architecture",
          items: [
            "software-engineering/client-server/client-server",
            "software-engineering/event-driven/event-driven",
            "software-engineering/master-slave/master-slave",
            "software-engineering/peer-to-peer/peer-to-peer",
            "software-engineering/layered/layered",
            "software-engineering/other-architecture-patterns/other-architecture-patterns",
          ],
        },
        {
          type: "category",
          label: "Software Management",
          items: [
            "software-engineering/software-testing/software-testing",
            "software-engineering/software-debugging/software-debugging",
            "software-engineering/build-and-package-management/build-and-package-management",
            "software-engineering/version-control/version-control",
            "software-engineering/open-sourcing/open-sourcing",
            "software-engineering/modularization/modularization",
            "software-engineering/software-deployment/software-deployment",
          ],
        },
        "software-engineering/system-design/system-design",
        "software-engineering/system-design-examples/system-design-examples",
      ],
    },

    // 19. Cloud Computing
    {
      type: "category",
      label: "Cloud Computing & Distributed Systems",
      link: {
        type: "doc",
        id: "cloud-computing-and-distributed-systems/cloud-computing-and-distributed-systems",
      },
      items: [
        "cloud-computing-and-distributed-systems/fundamentals/fundamentals",
        {
          type: "category",
          label: "Distributed Systems",
          items: [
            "cloud-computing-and-distributed-systems/distributed-systems-model/distributed-systems-model",
            "cloud-computing-and-distributed-systems/distributed-systems-communication/distributed-systems-communication",
            "cloud-computing-and-distributed-systems/distributed-file-system/distributed-file-system",
            "cloud-computing-and-distributed-systems/distributed-database/distributed-database",
          ],
        },
        {
          type: "category",
          label: "Architecture & Models",
          items: [
            "cloud-computing-and-distributed-systems/client-server/client-server",
            "cloud-computing-and-distributed-systems/event-driven/event-driven",
            "cloud-computing-and-distributed-systems/master-slave/master-slave",
            "cloud-computing-and-distributed-systems/peer-to-peer/peer-to-peer",
            "cloud-computing-and-distributed-systems/microservice/microservice",
            "cloud-computing-and-distributed-systems/mapreduce/mapreduce",
            "cloud-computing-and-distributed-systems/lambda/lambda",
          ],
        },
        {
          type: "category",
          label: "Cloud-Native Technologies",
          items: [
            "cloud-computing-and-distributed-systems/virtualization/virtualization",
            "cloud-computing-and-distributed-systems/containerization/containerization",
            "cloud-computing-and-distributed-systems/docker-and-kubernetes/docker-and-kubernetes",
          ],
        },
        "cloud-computing-and-distributed-systems/cloud-models/cloud-models",
        "cloud-computing-and-distributed-systems/cloud-database/cloud-database",
        "cloud-computing-and-distributed-systems/cloud-security/cloud-security",
        "cloud-computing-and-distributed-systems/cloud-services/cloud-services",
      ],
    },
  ],
};

module.exports = sidebars;
