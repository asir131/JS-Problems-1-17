const prompt = require('prompt-sync')();
function printPalindromicTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
      let rowString = '';
  for (let j = 0; j < rows - i; j++) {
        rowString += ' ';
      }
  for (let j = i; j < 2 * i; j++) {
        rowString += j;
      }
  for (let j = 2 * i - 2; j >= i; j--) {
        rowString += j;
      }
  
      console.log(rowString);
    }
  }
  const numberOfRows = prompt("Enter the number of rows: ");
  printPalindromicTriangle(parseInt(numberOfRows));
  