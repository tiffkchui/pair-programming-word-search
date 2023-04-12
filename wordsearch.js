const wordSearch = (letters, word) => {

  if (word === "") return false;

  // check horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));

  //console.log(horizontalJoin)

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // check vertically
  const vertical = function(matrix) {

    let newMatrix = [];

    for (let row = 0; row < matrix.length; row++) {

      if (matrix.length === 1) {
        matrix[0].forEach(num => {
          let arr2 = [];
          arr2.push(num);
          newMatrix.push(arr2);
        });
        return newMatrix;
      }

      let arr = [];

      for (let col = 0; col < matrix.length; col++) {
        if (matrix[col][row] !== undefined) {
          arr.push(matrix[col][row]);
        }
      }
      newMatrix.push(arr);
    }
    return newMatrix;
  };

  const verticalJoin = vertical(letters).map(ls => ls.join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  // found nothing ...
  return false;

};

module.exports = wordSearch;