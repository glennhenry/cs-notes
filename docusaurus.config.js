// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Latex for math formula
const math = require("remark-math");
const katex = require("rehype-katex");

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

const organizationName = "glennhenry";
const projectName = "cs-notes";
const baseUrl = `/${projectName}/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CS Notes",
  tagline: "My CS notes from various online course, tutorial and lectures",
  favicon: "img/favicon.ico",

  url: `https://${organizationName}.github.io`,
  baseUrl: baseUrl,

  organizationName: organizationName,
  projectName: projectName,
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        stopWords: ["All pages"],
        maxHits: 10,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/glennhenry/cs-notes/tree/main",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: "img/favicon.jpg",
      navbar: {
        title: "Notes",
        style: "dark",
        logo: {
          alt: "Docusaurus Logo",
          src: "img/logo.svg",
        },
        hideOnScroll: true,
        items: [
          {
            label: "Github",
            href: "https://github.com/glennhenry/cs-notes",
            position: "left",
          },
          {
            label: "Made with Docusaurus",
            href: "https://github.com/facebook/docusaurus",
            position: "right",
          },
          {
            label: "Index",
            href: "/index",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()}, myself. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
