const base = require('../../.fusumarc');

const basePath = 'kubevirt';

module.exports = {
  meta: {
    ...base.meta,
    title: 'kubevirt',
    description: 'this is kubevirt',
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