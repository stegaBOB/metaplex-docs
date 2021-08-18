const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Metaplex Docs',
  tagline: 'Documentation for the Metaplex frontend and NFT standard.',
  url: 'https://docs.metaplex.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'metaplexfoundation',
  projectName: 'metaplex-docs', 
  themeConfig: {
    navbar: {
      title: 'Metaplex Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/meta-white.svg',
        srcDark: 'img/meta-black.svg',
      },
      items: [
        {
          href: 'https://github.com/metaplex-foundation/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/RfzFD9g9WE',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/metaplex',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/metaplex-foundation/metaplex',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Metaplex Foundation`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/metaplex-foundation/metaplex-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
