#!/usr/bin/env node
'use strict';
const uaCmd = require('./')
let data = '';
let out;

/**
 * Usage:
 *   echo "some_user_agent" | ua-cmd
 */
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  let chunk = process.stdin.read();
  if (chunk !== null) {
    data += chunk;
  }
});
process.stdin.on('end', () => {
  out = uaCmd.prettyParse(data);
  process.stdout.write(`${out}\n`);
});

/**
 * Usage:
 *   ua-cmd "some_user_agent"
 */
if (process.argv[2]) {
  out = uaCmd.prettyParse(process.argv[2]);
  process.stdout.write(`${out}\n`);
  process.stdin.end();
}
