import { defineConfig } from 'dumi';
import * as path from 'node:path';

export default defineConfig({
  alias: {
    '@builtins': path.resolve(__dirname, '.dumi/theme/builtins'),
  },
  base: '/react-list-docs/',
  publicPath: '/react-list-docs/',
  logo: '/react-list-docs/logo.png',
  locales: [{ id: 'en-US', name: 'English' }],
  resolve: {
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'ReactList',
    description: 'A type-safe list component with slot-based architecture.',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
      {
        title: 'Components',
        link: '/components',
      },
      {
        title: 'API',
        link: '/guide/api',
      },
      {
        title: 'Playground',
        link: '/playground',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/aric-tpls/react-list-docs',
    },
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
