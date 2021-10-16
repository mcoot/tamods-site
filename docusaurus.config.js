// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TAMods',
  tagline: 'Unofficial modding support for Tribes: Ascend',
  url: 'https://www.tamods.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mcoot', // Usually your GitHub org/user name.
  projectName: 'tamods-site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mcoot/tamods-site/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mcoot/tamods-site/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TAMods',
        style: 'primary',
        logo: {
          alt: 'TAMods Logo',
          src: 'img/favicon.png',
        },
        items: [
          {to: '/blog', label: 'News', position: 'left'},
          {
            to: 'docs/user/doc_user_install',
            activeBasePath: 'docs',
            label: 'Get TAMods',
            position: 'left',
          },
          {
            to: 'docs/developer/doc_dev_intro',
            activeBasePath: 'docs',
            label: 'TAMods Docs',
            position: 'left',
          },
          {
            to: 'docs/server/doc_srv_api_overview',
            activeBasePath: 'docs',
            label: 'TAMods-Server Docs',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get TAMods',
                to: 'docs/user/doc_user_install',
              },
              {
                label: 'TAMods Documentation',
                to: 'docs/developer/doc_dev_intro',
              },
              {
                label: 'TAMods-Server Documentation',
                to: 'docs/server/doc_srv_api_overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Tribes Subreddit',
                href: 'http://www.reddit.com/r/tribes',
              },
              {
                label: 'Australian Tribes Discord',
                href: 'https://discord.gg/MYdN9Xm5Bg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Site GitHub',
                href: 'https://github.com/mcoot/tamods-site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TAMods Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
