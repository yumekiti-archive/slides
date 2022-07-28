const base = require('../../.fusumarc');

const basePath = 'piyo';

module.exports = {
  meta: {
    ...base.meta,
    title: 'piyo',
    description: 'this is piyo',
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