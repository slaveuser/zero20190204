const _rimraf = require('rimraf');
const fs = require("fs");
const path = require("path");
const mkdirp = require('mkdirp');
var copy = require('recursive-copy');
const del = require('del');


async function prepareBuildFolder(basePath, buildPath) {
  //basePath = basePath || process.cwd()
  //var buildPath = path.join(basePath, "./.zero")
  // await rimraf(buildPath)
  await del([path.join(buildPath, "/**"), '!' + buildPath, '!'+path.join(buildPath, '/node_modules/**') ]);
  mkdirp.sync(buildPath)
  await copy(basePath, buildPath, { filter: ['**/*', "!.zero"] })
}

module.exports = prepareBuildFolder