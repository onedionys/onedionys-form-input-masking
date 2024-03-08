// test/test.js
const assert = require('assert');
const formInputMasking = require('../src/form-input-masking');

describe('Form Input Masking', () => {
  it('should mask the input according to the provided pattern', () => {
    // Write your test cases here
    const maskedInput = formInputMasking.maskInput('1234567890', '(000) 000-0000');
    assert.strictEqual(maskedInput, '(123) 456-7890');
  });
  // Add more test cases as needed
});
