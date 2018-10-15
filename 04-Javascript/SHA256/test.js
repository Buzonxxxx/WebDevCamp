var forge = require('node-forge');

var md = forge.md.sha256.create();
md.update('The quick brown fox jumps over the lazy dog');
console.log(md.digest().toHex());

// https://github.com/digitalbazaar/forge


const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);