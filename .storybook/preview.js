import '../src/unified.scss';
// import '../dist/styles.css';
import './storybook.scss';
import { withThemeByDataAttribute } from '@storybook/addon-styling';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      dark: 'dark',
      light: 'light',
    },
    defaultTheme: 'dark',
    attributeName: 'data-ui-theme',
  }),
];

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
