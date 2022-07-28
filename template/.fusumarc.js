const base = require('../../.fusumarc');

const basePath = 'hoge';

module.exports = {
  meta: {
    ...base.meta,
    title: 'hoge',
    description: 'this is hoge',
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
