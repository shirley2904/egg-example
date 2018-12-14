'use strict';

// had enabled by egg
// exports.static = true;
// exports.mysql = {
//   enable: true,
//   package: 'egg-mysql',
// };

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.oAuth2Server = {
  enable: true,
  package: 'egg-oauth2-server',
};