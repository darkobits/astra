import type { VSCTConfiguration } from '@darkobits/vsct';

export default {
  outDir: 'extension',
  displayName: 'Astra',
  themes: [
    {
      path: './dist/astra.js',
      label: 'Astra',
      uiTheme: 'vs-dark'
    }
  ]
} satisfies VSCTConfiguration;
