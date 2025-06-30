import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cesar Schutz - Base de Conhecimento',
  tagline: 'Documentando minha jornada de aprendizado em tecnologia',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cesarschutz.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/knowledge-base/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cesarschutz', // Usually your GitHub org/user name.
  projectName: 'knowledge-base', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Link para editar páginas de documentação no GitHub
          editUrl:
            'https://github.com/cesarschutz/knowledge-base/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Link para editar posts do blog no GitHub
          editUrl:
            'https://github.com/cesarschutz/knowledge-base/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Cesar Schutz',
      logo: {
        alt: 'Cesar Schutz Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/cesarschutz/knowledge-base',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cesarschutz',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/cesarschutz',
            },
          ],
        },
        {
          title: 'Conteúdo',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Repositório',
              href: 'https://github.com/cesarschutz/knowledge-base',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cesar Schutz. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
