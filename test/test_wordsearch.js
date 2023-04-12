const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {

  const matrix = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ];

  it("should return false if the word is not present", function() {
    const result = wordSearch(matrix, 'FRANK')
    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(matrix, 'SEINFELD')
    assert.isTrue(result);
  });

  it("should return true if the word can be found vertically", () => {
    const result = wordSearch(matrix, 'YAAA');
    assert.isTrue(result);
  });

  it("should return false if the word is not found vertically", () => {
    const result = wordSearch(matrix, 'NOTHERE');
    assert.isFalse(result);
  });

  it("should return false if the array is empty", () => {
    const result = wordSearch(matrix, 'TEST');
    assert.isFalse(result);
  });

  it("should return false if word is an empty string", () => {
    const result = wordSearch(matrix, '');
    assert.isFalse(result);
  });

});
