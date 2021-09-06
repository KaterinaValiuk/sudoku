/*jshint esversion: 8 */
module.exports = function solveSudoku(matrix) {
  let emptyPositions = saveEmptyPositions(matrix);
  const limit = 9;
        for(let i = 0; i < emptyPositions.length;) {
          let row = emptyPositions[i][0];
          let coll = emptyPositions[i][1];
          let num = matrix[row][coll] + 1;
          let found = false;
          while(!found && num <= limit) {
            if(checkNum(matrix, coll, row, num)) {
              found = true;
              matrix[row][coll] = num;
              i++;
            } else {
              num++;
            }
          }
          if(!found) {
            matrix[row][coll] = 0;
            i--;
          }
        }
        return matrix;
      };

      function saveEmptyPositions(matrix){
        let emptyPositions = [];
        for(let row = 0; row < 9; row++){
          for(let coll = 0; coll < 9; coll++){
            if(matrix[row][coll] === 0){
              emptyPositions.push([row,coll]);
            }
          }
        }
        return emptyPositions;
      }

      function checkRow(matrix, row, num) {
        for(let i = 0; i < 9; i++) {
          if(matrix[row][i] === num) {
            return false;
            }
          }
        return true;
        }
      
      function checkColumn(matrix, coll, num) {
        for(let i = 0; i < 9; i++) {
          if(matrix[i][coll] === num) {
            return false;
          }
        }
        return true;
      }

      function checkSquare(matrix, x, y, num) {
        let squareSize = [matrix[0].length / 3, matrix.length / 3];
        let xCorner = 0;
        let yCorner = 0;
    
        while(x >= xCorner + squareSize[0]) {
          xCorner += squareSize[0];
        }
    
        while(y >= yCorner + squareSize[1]) {
          yCorner += squareSize[1];
        }
    
        for(let i = yCorner; i < yCorner + squareSize[1]; i++) {
          for(let j = xCorner; j < xCorner + squareSize[0]; j++) {
            if(matrix[i][j] == num) {        
              return false;
            }
          }
        }
        return true;
      }


      function checkNum(matrix, x, y, num) {
        if(checkRow(matrix, y, num) &&
          checkColumn(matrix, x, num) &&
          checkSquare(matrix, x, y, num)) {
          return true;
        } else {
          return false;
        }
      }
