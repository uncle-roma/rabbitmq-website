// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RabbitMQ',
  tagline: 'One broker to queue them all',
  favicon: 'img/rabbitmq-logo.svg',

  // We need to force the trailing slash behavior to make it work with
  // CloudFlare pages.
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://www.rabbitmq.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rabbitmq', // Usually your GitHub org/user name.
  projectName: 'rabbitmq-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    releaseBranches: {
      rabbitmq: {
        // RabbitMQ releases per version declared in Docusaurus ('current' for
        // the future docs).
        'current': {
          releases: [
          ],
        },
        '3.13': {
          releases: [
            {version: '3.13.1', release_date: "2024-03-29", },
            {
              version: '3.13.0',
              release_date: "2024-02-22",
              links: [
                {
                  type: "announcement",
                  url: "/blog/2024/03/11/rabbitmq-3.13.0-announcement"
                },
              ],
            },
          ],
          end_of_support: "2025-08-31",
        },
        '3.12': {
          releases: [
            {version: '3.12.13', release_date: "2024-02-16", },
            {version: '3.12.12', release_date: "2024-01-09", },
            {version: '3.12.11', release_date: "2023-12-22", },
            {version: '3.12.10', release_date: "2023-11-21", },
            {version: '3.12.9', release_date: "2023-11-17", },
            {version: '3.12.8', release_date: "2023-11-01", },
            {version: '3.12.7', release_date: "2023-10-18", },
            {version: '3.12.6', release_date: "2023-09-22", },
            {version: '3.12.5', release_date: "2023-09-20", },
            {version: '3.12.4', release_date: "2023-08-24", },
            {version: '3.12.3', release_date: "2023-08-18", },
            {version: '3.12.2', release_date: "2023-07-18", },
            {version: '3.12.1', release_date: "2023-06-26", },
            {version: '3.12.0', release_date: "2023-06-02", },
          ],
          end_of_support: "2024-12-31",
        },
        '3.11': {
          releases: [
            {version: '3.11.28', release_date: "2023-12-22", },
            {version: '3.11.27', release_date: "2023-12-15", },
            {version: '3.11.26', release_date: "2023-11-20", },
            {version: '3.11.25', release_date: "2023-11-01", },
            {version: '3.11.24', release_date: "2023-10-18", },
            {version: '3.11.23', release_date: "2023-09-12", },
            {version: '3.11.22', release_date: "2023-08-24", },
            {version: '3.11.21', release_date: "2023-08-18", },
            {version: '3.11.20', release_date: "2023-07-18", },
            {version: '3.11.19', release_date: "2023-06-26", },
            {version: '3.11.18', release_date: "2023-06-07", },
            {version: '3.11.17', release_date: "2023-05-29", },
            {version: '3.11.16', release_date: "2023-05-13", },
            {version: '3.11.15', release_date: "2023-04-30", },
            {version: '3.11.14', release_date: "2023-04-29", },
            {version: '3.11.13', release_date: "2023-03-31", },
            {version: '3.11.12', release_date: "2023-03-30", },
            {version: '3.11.11', release_date: "2023-03-20", },
            {version: '3.11.10', release_date: "2023-03-02", },
            {version: '3.11.9', release_date: "2023-02-13", },
            {version: '3.11.8', release_date: "2023-01-30", },
            {version: '3.11.7', release_date: "2023-01-17", },
            {version: '3.11.6', release_date: "2023-01-05", },
            {version: '3.11.5', release_date: "2022-12-14", },
            {version: '3.11.4', release_date: "2022-11-29", },
            {version: '3.11.3', release_date: "2022-11-10", },
            {version: '3.11.2', release_date: "2022-10-19", },
            {version: '3.11.1', release_date: "2022-10-13", },
            {version: '3.11.0', release_date: "2022-09-28", },
          ],
          end_of_support: "2024-07-31",
        },
        '3.10': {
          releases: [
            {version: '3.10.25', release_date: "2023-07-18", },
            {version: '3.10.24', release_date: "2023-06-07", },
            {version: '3.10.23', release_date: "2023-05-25", },
            {version: '3.10.22', release_date: "2023-04-30", },
            {version: '3.10.21', release_date: "2023-04-29", },
            {version: '3.10.20', release_date: "2023-03-22", },
            {version: '3.10.19', release_date: "2023-03-02", },
            {version: '3.10.18', release_date: "2023-02-13", },
            {version: '3.10.17', release_date: "2023-01-31", },
            {version: '3.10.16', release_date: "2023-01-30", },
            {version: '3.10.15', release_date: "2023-01-30", },
            {version: '3.10.14', release_date: "2023-01-17", },
            {version: '3.10.13', release_date: "2022-12-14", },
            {version: '3.10.12', release_date: "2022-11-29", },
            {version: '3.10.11', release_date: "2022-11-10", },
            {version: '3.10.10', release_date: "2022-10-19", },
            {version: '3.10.9', release_date: "2022-10-13", },
            {version: '3.10.8', release_date: "2022-09-25", },
            {version: '3.10.7', release_date: "2022-08-02", },
            {version: '3.10.6', release_date: "2022-07-11", },
            {version: '3.10.5', release_date: "2022-06-06", },
            {version: '3.10.4', release_date: "2022-06-01", },
            {version: '3.10.2', release_date: "2022-05-20", },
            {version: '3.10.1', release_date: "2022-05-11", },
            {version: '3.10.0', release_date: "2022-05-03", },
          ],
          end_of_support: "2023-12-31",
        },
      },

      // Client releases.
      java: '5.21.0',
      dotnet: '6.6.0',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebarsDocs.js',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rabbitmq/rabbitmq-website/tree/main/',
        },
        blog: {
          blogSidebarCount: 0,
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rabbitmq/rabbitmq-website/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },

        // User tracking: Google tag for Google Analytics.
        gtag: {
          trackingID: 'G-9SLB9X7PHR',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: './sidebarsTutorials.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'release-information',
        path: 'release-information',
        routeBasePath: 'release-information',
        sidebarPath: './sidebarsReleaseInfo.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kubernetes',
        path: 'kubernetes',
        routeBasePath: 'kubernetes',
        sidebarPath: './sidebarsKubernetes.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'client-libraries',
        path: 'client-libraries',
        routeBasePath: 'client-libraries',
        sidebarPath: './sidebarsClientLibs.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true
      },
      // Replace with your project's social card
      image: 'img/rabbitmq-social-media-card.svg',
      navbar: {
        // We do not define a title here because we only want the logo to
        // appear in the top-level area.
        // title: 'RabbitMQ',
        logo: {
          alt: 'RabbitMQ',
          src: 'img/rabbitmq-logo-with-name.svg',
        },
        items: [
          {to: '/tutorials', label: 'Getting Started', position: 'left'},
          {
            type: 'docSidebar',
            label: 'Docs',
            sidebarId: 'docsSidebar',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsBefore: [
              {type: 'html', value: '<strong>Supported</strong>'},
            ],
            dropdownItemsAfter: [
              {href: 'https://v3-12.rabbitmq.com/documentation.html', label: '3.12'},
              {to: '/release-information', label: 'Release Information'},
              //{type: 'html', value: '<strong>Unsupported</strong>'},
            ],
          },
          {
            label: 'Support',
            to: '/contact',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/rabbitmq/rabbitmq-website',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'new-release',
        content: '<strong style="font-size: var(--ifm-h4-font-size);"><a href="/blog/2024/03/11/rabbitmq-3.13.0-announcement">RabbitMQ 3.13.0 is released!</a></strong>',
        backgroundColor: 'var(--ifm-color-primary-contrast-background)',
        textColor: 'var(--ifm-font-color-base)',
        isCloseable: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn about RabbitMQ',
            items: [
              {
                label: 'Getting Started',
                to: '/tutorials',
              },
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Reach out to the RabbitMQ team',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rabbitmq',
              },
              {
                label: 'Mailing list',
                href: 'https://groups.google.com/forum/#!forum/rabbitmq-users',
              },
              {
                label: 'Discord',
                href: 'https://www.rabbitmq.com/discord/',
              },
              {
                label: 'Slack',
                href: 'https://www.rabbitmq.com/slack/',
              },
              {
                label: 'Contact us',
                to: '/contact',
              },
            ],
          },
          {
            title: 'Broadcom',
            items: [
              {
                label: 'VMware Tanzu',
                href: 'https://tanzu.vmware.com/',
              },
              {
                label: 'Terms of Use',
                href: 'https://www.vmware.com/help/legal.html',
              },
              {
                label: 'Privacy',
                href: 'https://www.vmware.com/help/privacy.html',
              },
              {
                label: 'Trademark Guidelines',
                to: '/trademark-guidelines',
              },
              {
                label: 'Your California Privacy Rights',
                href: 'https://www.vmware.com/help/privacy/california-privacy-rights.html',
              },
            ],
          },
        ],
        copyright: `Copyright © 2007-${new Date().getFullYear()} Broadcom. All Rights Reserved. The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'csharp',
          'elixir',
          'erlang',
          'go',
          'java',
          'json',
          'php',
          'powershell',
          'python',
          'shell-session',
          'yaml',
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'H10VQIW16Y',

        // Public API key: it is safe to commit it
        apiKey: 'f23e8af89d899070974a643428531141',

        indexName: 'rabbitmq.com',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to
        // disable it)
        searchPagePath: 'search',
      },

      // User tracking: OneTrust Cookie Consent popup.
      metadata: [
        {
          name: 'onetrust-data-domain',
          content: '73d8ba46-8c12-43f6-8c22-24aa21b8d93d',
        },
        {
          name: 'microsites-utag',
          content: 'https://tags.tiqcdn.com/utag/vmware/microsites-privacy/prod/utag.js',
        },
      ],
    }),

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:400,700',
      },
    },
    {
      tagName: 'script',
      attributes: {
        href: '//www.vmware.com/files/templates/inc/utag_data.js',
      },
    },
    {
      tagName: 'script',
      attributes: {
        href: '//tags.tiqcdn.com/utag/vmware/microsites-privacy/prod/utag.sync.js',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: "function OptanonWrapper() { { window.dataLayer.push({ event: 'OneTrustGroupsUpdated' }); } }",
    },
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
