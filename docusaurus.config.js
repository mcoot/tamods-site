/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TAMods',
  tagline: 'Unofficial modding support for Tribes: Ascend',
  url: 'https://www.tamods.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mcoot', // Usually your GitHub org/user name.
  projectName: 'tamods-site', // Usually your repo name.
  themeConfig: {    
    prism: {
      additionalLanguages: ['powershell'],
    },
    colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    switchConfig: {
      darkIcon: '🔆',
      darkIconStyle: { 
      },
      lightIcon: '🕶️',
      lightIconStyle: {
      },
    },
  },
    navbar: {
      title: 'TAMods',
      style: 'primary',
      logo: {
        alt: 'TAMods Logo',
        src: 'img/favicon.png',
      },
      items: [
        {to: 'blog', label: 'News', position: 'left'},
        {
          to: 'docs/doc_user_install',
          activeBasePath: 'docs',
          label: 'Get TAMods',
          position: 'left',
        },
        {
          to: 'docs/doc_dev_intro',
          activeBasePath: 'docs',
          label: 'TAMods Docs',
          position: 'left',
        },
        {
          to: 'docs/doc_srv_api_overview',
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
              to: 'docs/doc_user_install',
            },
            {
              label: 'TAMods Documentation',
              to: 'docs/doc_dev_intro',
            },
            {
              label: 'TAMods-Server Documentation',
              to: 'docs/doc_srv_api_overview',
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
              href: 'https://discord.gg/ySkx6Cg',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mcoot/taserver/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mcoot/taserver/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
