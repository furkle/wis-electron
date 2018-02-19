#! /usr/env/node

const {
  resolve,
} = require('path');
const {
  promisify,
} = require('util');

const rimraf = promisify(require('rimraf'));
const ncp    = promisify(require('ncp'));

const appDir  = resolve(__dirname, '..', 'app');
const distDir = resolve(__dirname, '..', 'dist');

const winDir = resolve(distDir, 'windows', 'resources', 'app');
const osxDir = resolve(distDir, 'osx', 'Electron.app', 'Contents', 'Resources', 'app');
const linDir = resolve(distDir, 'linux', 'resources', 'app');

Promise.all([ rimraf(winDir), rimraf(osxDir), rimraf(linDir), ]).catch((e) => {
  console.log(e);
}).then(() => {
  Promise.all([ ncp(appDir, winDir), ncp(appDir, osxDir), ncp(appDir, linDir), ]).catch((e) => {
    console.log(e);
  }).then(() => {
    console.log('all done!');
  });
});
