module.exports = {
  options: {
    separator: '\n\n',
    stripBanners: {
      block: false,
      line: false
    },
    banner: '<%= banner %>',
  },
  dist: {
    src: ['src/u.strength.js'],
    dest: 'dist/u.strength.js'
  }
};
