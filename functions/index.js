const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const fs = require('fs-extra');

const storage = new Storage();

exports.optimizeImages = functions.storage
.object()
.onFinalize(async object => {
  console.log('upload file');
});