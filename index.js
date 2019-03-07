/**
* hexo-tag-details
* https://github.com/hinastory/hexo-tag-details.git
* Copyright (c) 2019, hinastory
* Licensed under the MIT license.
* Syntax:
*   {% details [mode:open/close] summary text %}
*   detail text
*   {% enddetails %}
**/

'use strict';
const util = require('hexo-util');
const config = hexo.config.tagDetails;
const className = (config && config.className) ? config.className: false;
const openSetting = (config && config.openSetting) ? config.openSetting: false;

hexo.extend.tag.register('details', tagDetails, { ends: true });

function tagDetails(args, content) {
  let openMode;
  let filtered = args.filter(e => {
    if (e  === 'mode:open') {
      openMode = true;
      return false;
    } else if (e === 'mode:close') {
      openMode = false;
      return false;
    } else {
      return true;
    }
  });

  let isOpen = filtered.length < args.length ? openMode : openSetting;
  let summary = util.htmlTag('summary', {}, filtered.join(' '));
  let rendered = hexo.render.renderSync({ text: content, engine: 'markdown' });
  let attrs = {};

  if (isOpen) attrs.open = 'open';
  if (className) attrs.class = className;

  return util.htmlTag('details', attrs, summary + rendered);
}