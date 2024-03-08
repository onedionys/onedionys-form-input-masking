/**
 * Function to mask input according to the provided pattern.
 * @param {string} input - The input string to be masked.
 * @param {string} pattern - The pattern to apply for masking (e.g., '00/00/0000' for date).
 * @returns {string} - The masked input string.
 */
function maskInput(input, pattern) {
  let index = 0;
  let maskedInput = '';
  
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '0') {
      if (index < input.length) {
        maskedInput += input[index];
        index++;
      } else {
        break;
      }
    } else {
      maskedInput += pattern[i];
    }
  }
  
  return maskedInput;
}

module.exports = {
  maskInput
};
