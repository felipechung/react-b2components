module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/theming',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  typescript: {
    check: true,
  },
};
