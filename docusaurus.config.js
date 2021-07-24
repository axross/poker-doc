const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");
const remarkCard = require("./src/plugins/remark-card");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Reraised",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "axross", // Usually your GitHub org/user name.
  projectName: "poker-doc", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Reraised",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "introduction",
          position: "left",
          label: "はじめに",
        },
        {
          type: "doc",
          docId: "basic/what-is-poker",
          position: "left",
          label: "初心者向け",
        },
        {
          type: "doc",
          docId: "intermediate/what-is-poker",
          position: "left",
          label: "中級者向け",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "Author",
          items: [
            {
              label: "Website",
              to: "https://www.kohei.dev/",
            },
            {
              label: "GitHub",
              href: "https://github.com/axross",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/axross_",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kohei Asai.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          remarkPlugins: [math, remarkCard],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};
