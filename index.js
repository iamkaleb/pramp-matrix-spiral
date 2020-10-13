function spiralCopy(inputMatrix) {
    result = []
    let topRow = 0
    let bottomRow = inputMatrix.length - 1
    let firstColumn = 0
    let lastColumn = inputMatrix[0].length - 1
    
    while (topRow <= bottomRow && firstColumn <= lastColumn) {
      
      for (i = firstColumn; i <= lastColumn; i++) {
        result.push(inputMatrix[topRow][i])
      }
      topRow++
      
      for (i = topRow; i <= bottomRow; i++) {
        result.push(inputMatrix[i][lastColumn])
      }
      lastColumn--
      
      if (topRow <= bottomRow) {
        for (i = lastColumn; i >= firstColumn; i--) {
          result.push(inputMatrix[bottomRow][i])
        }
      }
      bottomRow--
      
      if (firstColumn <= lastColumn) {
        for (i = bottomRow; i >= topRow; i--) {
          result.push(inputMatrix[i][0])
        }
      }
      firstColumn++
    }
   
   return result
     
 }

// spiralCopy([[1]])
// spiralCopy([[1], [2]])
// spiralCopy([[1], [2]])
// spiralCopy([[1,2]])
// spiralCopy([[1,2]])
// spiralCopy([[1,2],[3,4]])
// spiralCopy([[1,2,3,4,5],[6,7,8,9,10]])
spiralCopy([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]])

