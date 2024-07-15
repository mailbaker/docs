import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MailBaker",
  description: "Build responsive email templates confidently",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo/mailbaker-symbol.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'MailBaker' }],
    // ['meta', { property: 'og:image', content: 'https://mailbaker.com/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://mailbaker.com' }],
    ['meta', { property: 'og:description', content: 'Build responsive email templates confidently' }],
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@mailbaker' }],
    ['meta', { name: 'theme-color', content: '#2963ff' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/mailbaker-symbol.svg',
    nav: [
      { text: 'Documentation', link: '/docs/introduction' }
    ],

    sidebar: [
      { text: 'What is MailBaker', link: 'docs/introduction' },
      { text: 'Installation ', link: 'docs/installation' },
      {
        text: 'Development',
        items: [
          { text: 'Build process', link: 'docs/development/build-process' },
          { text: 'Templates', link: 'docs/development/templates' },
          { text: 'Components', link: 'docs/development/components' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mailbaker/framework' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Šarūnas Ročevas'
    }
  }
})
