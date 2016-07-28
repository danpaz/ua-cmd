# ua-cmd

[![npm version](https://badge.fury.io/js/ua-cmd.svg)](https://www.npmjs.com/package/ua-cmd)

User agent string parsing from the command line.

    ➜  ua-cmd "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36"

      Chrome 50.0.2661.86
      Mac OS 10.11.4

    ➜  echo "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36" | ua-cmd

      Chrome 50.0.2661.86
      Mac OS 10.11.4

## Install

    npm install -g ua-cmd

## Test

    npm test
