/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const chess = Array(n).fill().map(() => Array(n).fill('.'))
  const result = []
  backTracking()
  return result
  
  function backTracking (row = 0) {
      if (row === n) {
          result.push(convertFormat(chess))
          return 
      }
      for (let i = 0; i < n; ++i) {
          if (isValid(row, i)) {
              chess[row][i] = 'Q'
              backTracking(row + 1)
              chess[row][i] = '.'
          }
      }
  }
  
  function convertFormat (chess) {
      let result = []
      chess.forEach(item => {
          result.push([...item].join(''))
      })
      return result
  }
  
  function isValid (row, col) {
      for (let i = 0; i < row; ++i) {
          if (chess[i][col] === 'Q') return false
      }
      
      let left = col, right = col
      for (let i = row - 1; i >= 0; --i) {
          --left
          ++right
          if (chess[i][left] === 'Q' || chess[i][right] === 'Q') return false
      }
      return true
  }
};
// @lc code=end

