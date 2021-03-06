/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  introduction: ["introduction"],
  basic: [{ type: "autogenerated", dirName: "basic" }],
  intermediate: [{ type: "autogenerated", dirName: "intermediate" }],
  // intermediate: [
  //   "intermediate/what-is-poker",
  //   "intermediate/game-theory",
  //   "equity",
  //   "board-texture",
  // ],

  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
