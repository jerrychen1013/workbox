module.exports = {
  'globDirectory': 'build/',
  'globPatterns': [
    '**/*.css',
    'index.html',
    'js/animation.js',
    'pages/404.html',
    'pages/offline.html'
  ],
  'swSrc': 'src/sw.js',
  'swDest': 'build/sw.js',
  'globIgnores': [
    '../workbox-cli-config.js'
  ],
  'templateUrls': {
    '/': ['index.html']
  }
};
