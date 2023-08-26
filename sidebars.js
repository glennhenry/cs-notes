// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "intro",

    // Template
    // {
    //   type: "category",
    //   label: "Title",

    //   // Link is used only if it has md file
    //   link: { type: "doc", id: "kebab-title/kebab-title" },
    //   items: ["kebab-title/kebab-content/kebab-content"],
    // },

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
            "computer-networking/udp/udp",
            "computer-networking/dhcp/dhcp",
            "computer-networking/nat/nat",
            "computer-networking/proxy/proxy",
            "computer-networking/vpn/vpn",
            {
              type: "category",
              label: "Network Protocol",
              items: [
                "computer-networking/tcp-protocol/tcp-protocol",
                "computer-networking/ftp/ftp",
                "computer-networking/smtp/smtp",
                "computer-networking/rtp/rtp",
                "computer-networking/http-https/http-https",
              ],
            },
          ],
        }, 
        "computer-networking/real-time-communication-rtc/real-time-communication-rtc",
        {
          type: "category",
          label: "Wireless Networking",
          items: [
            "computer-networking/wireless-access-point-wap/wireless-access-point-wap",
            "computer-networking/wi-fi/wi-fi",
            "computer-networking/hotspot/hotspot",
            "computer-networking/bluetooth/bluetooth",
          ],
        },

        {
          type: "category",
          label: "Mobile Networking",
          items: [
            "computer-networking/cellular-networking/cellular-networking",
            "computer-networking/sim-card/sim-card",
          ],
        },
        
        {
          type: "category",
          label: "Network Security",
          items: [
            "computer-networking/firewall/firewall",
            "computer-networking/ddos/ddos",
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

    // Software Engineering
    {
      type: "category",
      label: "Software Engineering",
      link: { type: "doc", id: "software-engineering/software-engineering" },
      items: ["software-engineering/xx1-package-manager/package-manager"],
    },

    // Web Development
    {
      type: "category",
      label: "Web Development",
      link: { type: "doc", id: "web-development/web-development" },
      items: [
        "web-development/html/html",
        "web-development/html-dom/html-dom",
        "web-development/css/css",
        "web-development/javascript/javascript",
        "web-development/json/json",
        "web-development/html-css-javascript/html-css-javascript",
        "web-development/web-url/web-url",
        "web-development/web-browser/web-browser",
        "web-development/search-engine/search-engine",
        "web-development/static-and-dynamic-site/static-and-dynamic-site",
        "web-development/web-hosting/web-hosting",
        "web-development/web-security/web-security",
        "web-development/node-js/node-js",
        "web-development/npm/npm",
        "web-development/react-js/react-js",
        "web-development/docker-and-kubernetes/docker-and-kubernetes",
      ],
    },

    // Backend Development
    {
      type: "category",
      label: "Backend Development",
      link: { type: "doc", id: "backend-development/backend-development" },
      items: [],
    },

    // Computer Security
    {
      type: "category",
      label: "Computer Security",
      link: { type: "doc", id: "computer-security/computer-security" },
      items: [
        "computer-security/xx-web-security/web-security",
        "computer-security/xx1-phising/phising",
        "computer-security/xx2-social-engineering/social-engineering",
      ],
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

    // Data Science
    {
      type: "category",
      label: "Data Science",
      link: { type: "doc", id: "data-science/data-science" },
      items: [],
    },

    // Machine Learning
    {
      type: "category",
      label: "Machine Learning",
      link: { type: "doc", id: "machine-learning/machine-learning" },
      items: [],
    },

    // Deep Learning
    {
      type: "category",
      label: "Deep Learning",
      link: { type: "doc", id: "deep-learning/deep-learning" },
      items: [
        "deep-learning/xx-natural-language-processing/natural-language-processing",
        "deep-learning/xx1-computer-vision/computer-vision",
      ],
    },

    // Cloud Computing
    {
      type: "category",
      label: "Cloud Computing",
      link: { type: "doc", id: "cloud-computing/cloud-computing" },
      items: [
        "cloud-computing/xx-virtualization/virtualization",
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
