'use strict';

const expect = require('chai').expect;
const uaCmd = require('./');
const TEST_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/' +
 '537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36';

describe('uaCmd', () => {

  describe('prettyParse', () => {
    it('should parse browser', () => {
      const result = uaCmd.prettyParse(TEST_UA);

      expect(result).to.contain('Chrome 50.0.2661.86');
    });

    it('should parse os', () => {
      const result = uaCmd.prettyParse(TEST_UA);

      expect(result).to.contain('Mac OS 10.11.4');
    });
  });

});
