const base = require('../../.fusumarc');

const basePath = 'demo';

module.exports = {
  meta: {
    ...base.meta,
    title: 'Demo',
    description: 'this is demo',
    url: `${base.meta.url}${basePath}`,
  },
  slide: {
    showIndex: true,
    code: {
      languages: ['json', 'markdown', 'javascript', 'css'],
    },
  },
  extends: {
    css: 'style.css',
  },
};
