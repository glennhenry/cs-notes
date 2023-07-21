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
      items: [],
    },

    // Computer Networking
    {
      type: "category",
      label: "Computer Networking",
      link: { type: "doc", id: "computer-networking/computer-networking" },
      items: [],
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
        "web-development/browser/browser",
        "web-development/static-and-dynamic-site/static-and-dynamic-site",
        "web-development/web-hosting/web-hosting",
        "web-development/web-security/web-security",
        "web-development/npm/npm",
        "web-development/node-js/node-js",
        {
          type: "category",
          label: "Web Frameworks",
          link: { type: "doc", id: "web-development/web-frameworks/web-frameworks" },
          items: [
            "web-development/web-frameworks/react-js/react-js",
            "web-development/web-frameworks/python-django/python-django",
          ],
        },
        "web-development/docker-and-kubernates/docker-and-kubernates",
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
      items: ["computer-security/xx-web-security/web-security"],
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
  ],
};

module.exports = sidebars;
