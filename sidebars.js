// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "intro",

    // Digital Signal Processing
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

    // Computer & Programming Fundamentals
    {
      type: "category",
      label: "Computer & Programming Fundamentals",
      link: {
        type: "doc",
        id: "computer-and-programming-fundamentals/computer-and-programming-fundamentals",
      },
      items: [
        "computer-and-programming-fundamentals/xx-computer-representation/computer-representation",
        "computer-and-programming-fundamentals/xx1-number-system/number-system",
        "computer-and-programming-fundamentals/xx2-bitwise-operation/bitwise-operation",
      ],
    },

    // Digital Media Processing
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

    // Computer Networking
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

        {
          type: "category",
          label: "Network Security",
          items: [
            "computer-networking/ddos-attack/ddos-attack",
            "computer-networking/firewall/firewall",
            "computer-networking/network-encryption/network-encryption",
          ],
        },
        "computer-networking/networking-command/networking-command",
      ],
    },

    // Data Structures & Algorithms
    {
      type: "category",
      label: "Data Structures & Algorithms",
      link: {
        type: "doc",
        id: "data-structures-and-algorithms/data-structures-and-algorithms",
      },
      items: [
        "data-structures-and-algorithms/xx-tree/tree",
        "data-structures-and-algorithms/xx1-binary-tree/binary-tree",
        "data-structures-and-algorithms/xx2-heap/heap",
      ],
    },

    // Computer Organization & Architecture
    {
      type: "category",
      label: "Computer Organization & Architecture",
      link: {
        type: "doc",
        id: "computer-organization-and-architecture/computer-organization-and-architecture",
      },
      items: [],
    },

    // Operating System
    {
      type: "category",
      label: "Operating System",
      link: { type: "doc", id: "operating-system/operating-system" },
      items: [
        "operating-system/xx-containerization-virtualization/containerization-virtualization"
      ],
    },

    // Theory of Computation & Automata
    {
      type: "category",
      label: "Theory of Computation & Automata",
      link: {
        type: "doc",
        id: "theory-of-computation-and-automata/theory-of-computation-and-automata",
      },
      items: [],
    },

    // Compilers
    {
      type: "category",
      label: "Compilers",
      link: { type: "doc", id: "compilers/compilers" },
      items: [],
    },

    // Programming Language Theory
    {
      type: "category",
      label: "Programming Language Theory",
      link: {
        type: "doc",
        id: "programming-language-theory/programming-language-theory",
      },
      items: [],
    },

    // System Programming
    {
      type: "category",
      label: "System Programming",
      link: { type: "doc", id: "system-programming/system-programming" },
      items: [],
    },

    // Database System
    {
      type: "category",
      label: "Database System",
      link: { type: "doc", id: "database-system/database-system" },
      items: [],
    },

    // Computer Graphics
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

    // Frontend Web Development
    {
      type: "category",
      label: "Frontend Web Development",
      link: { type: "doc", id: "frontend-web-development/frontend-web-development" },
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

    // Backend Development
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
        "backend-development/containerization-virtualization/containerization-virtualization",
        "backend-development/docker-kubernetes/docker-kubernetes",
        "backend-development/backend-server-security/backend-server-security",
        "backend-development/caching/caching",
        "backend-development/backend-optimization/backend-optimization",
      ],
    },

    // Computer Security
    {
      type: "category",
      label: "Computer Security",
      link: { type: "doc", id: "computer-security/computer-security" },
      items: [
        "computer-security/xx-web-security/web-security",
        {
          type: "category",
          label: "Web Security",
          items: ["computer-security/xx-web-security/web-security"],
        },
        "computer-security/xx1-phising/phising",
        "computer-security/xx2-social-engineering/social-engineering",
        "computer-security/xx3-firewall/firewall",
        "computer-security/xx4-network-encryption/network-encryption",
        "computer-security/xx5-ddos-attack/ddos-attack",
        "computer-security/xx6-hash-function/hash-function",
        "computer-security/xx7-aes/aes",
        "computer-security/xx8-eavesdropping/eavesdropping",
        "computer-security/xx9-man-in-the-middle-attack/man-in-the-middle-attack",
        "computer-security/xx10-symmetric-encryption/symmetric-encryption",
        "computer-security/xx11-asymmetric-encryption/asymmetric-encryption",
        "computer-security/xx12-des/des",
        "computer-security/xx13-rsa/rsa",
        "computer-security/xx14-diffie-hellman/diffie-hellman",
        "computer-security/xx15-sha/sha",
        "computer-security/xx16-elliptic-curve/elliptic-curve",
        "computer-security/xx17-encryption/encryption",
      ],
    },

    // Machine Learning
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
        {
          type: "category",
          label: "Reinforcement Learning",
          items: [
            "machine-learning/reinforcement-learning/reinforcement-learning-intro/reinforcement-learning-intro",
            "machine-learning/reinforcement-learning/example3/example3",
          ],
        },
      ],
    },

    // Deep Learning
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
        {
          type: "category",
          label: "Stable Diffusion",
          items: [
            "deep-learning/stable-diffusion/stable-diffusion-intro/stable-diffusion-intro",
            "deep-learning/stable-diffusion/example2/example2",
          ],
        },
        {
          type: "category",
          label: "Deep Reinforcement Learning",
          items: [
            "deep-learning/deep-reinforcement-learning/deep-reinforcement-learning-intro/deep-reinforcement-learning-intro",
            "deep-learning/deep-reinforcement-learning/examplerl/examplerl",
          ],
        },
      ],
    },

    // Software Engineering
    {
      type: "category",
      label: "Software Engineering",
      link: { type: "doc", id: "software-engineering/software-engineering" },
      items: ["software-engineering/xx1-package-manager/package-manager"],
    },

    // Cloud Computing
    {
      type: "category",
      label: "Cloud Computing",
      link: { type: "doc", id: "cloud-computing/cloud-computing" },
      items: [
        "cloud-computing/xx-containerization-virtualization/containerization-virtualization",
        "cloud-computing/xx1-docker-and-kubernetes/docker-and-kubernetes",
      ],
    },

    // Extras
    {
      type: "category",
      label: "Extras",
      link: { type: "doc", id: "extras/extras" },
      items: [
        "extras/deepweb-and-darkweb/deepweb-and-darkweb",
        "extras/tor-browser/tor-browser",
        "extras/vr-ar/vr-ar",
      ],
    },
  ],
};

module.exports = sidebars;
