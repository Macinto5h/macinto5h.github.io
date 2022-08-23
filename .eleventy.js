module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget('src/assets/scss');

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
    },
    templateFormats: [
      'pug',
      'md'
    ]
  };
};
