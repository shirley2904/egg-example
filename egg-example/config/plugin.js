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
  enable: false,
  package: 'egg-oauth2-server',
};

module.exports.passport = {
  enable: true,
  package: 'egg-passport',
};

module.exports.passportLocal = {
  enable: true,
  package: 'passport-local',
};

exports.cors = {
  enable: false,
  package: 'egg-cors',
};

exports.cheerio = {
  enable: true,
  package: 'cheerio',
};
