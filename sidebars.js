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

      // Link is used only if it has md file
      link: {
        type: "doc",
        id: "digital-media-processing/digital-media-processing",
      },
      items: [
        
      ],
    },

    // Computer Networking
    {
      type: "category",
      label: "Computer Networking",
      link: { type: "doc", id: "computer-networking/computer-networking" },
      items: [
        "computer-networking/xx-dns/dns",
        "computer-networking/xx2-ip-address/ip-address",
        "computer-networking/xx3-ports/ports",
        "computer-networking/xx4-http-and-https/http-and-https",
        "computer-networking/xx5-server/server",
      ],
    },

    // Data Structures & Algorithm
    {
      type: "category",
      label: "Data Structures & Algorithm",
      link: { type: "doc", id: "data-structures-and-algorithm/data-structures-and-algorithm" },
      items: [
        "data-structures-and-algorithm/xx-tree/tree",
        "data-structures-and-algorithm/xx1-binary-tree/binary-tree",
        "data-structures-and-algorithm/xx2-heap/heap",
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
        "computer-graphics/computer-animation-part-1/computer-animation-part-1",
        "computer-graphics/computer-animation-part-2/computer-animation-part-2",
        "computer-graphics/physics-based-animation/physics-based-animation",
        "computer-graphics/simulation/simulation",
      ],
    },

    // Data Science
    {
      type: "category",
      label: "Data Science",
      link: { type: "doc", id: "data-science/data-science" },
      items: [

      ],
    },

    // Machine Learning
    {
      type: "category",
      label: "Machine Learning",
      link: { type: "doc", id: "machine-learning/machine-learning" },
      items: [

      ],
    },

    // Deep Learning
    {
      type: "category",
      label: "Deep Learning",
      link: { type: "doc", id: "deep-learning/deep-learning" },
      items: [

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
      ],
    },
  ],
};

module.exports = sidebars;
