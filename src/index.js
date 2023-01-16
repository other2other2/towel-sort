module.exports = function towelSort(matrix) {

  let result = [];
  if (matrix === undefined) return result;
  matrix.forEach((element, index) => {
    if ((index + 1) % 2 === 0) {
      result.push(...element.reverse());
    } else {
      result.push(...element);
    }
  });
  return result;
}
