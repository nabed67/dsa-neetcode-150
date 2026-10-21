/**
 * Brute force approach
 */

// function isValidSudoku(board: string[][]): boolean {
//   const LENGTH_OF_BOARD = 9;

//   for (let r = 0; r < LENGTH_OF_BOARD; r++) {
//     for (let c = 0; c < LENGTH_OF_BOARD; c++) {
//       const val = board[r][c];
//       if (val === ".") continue;

//       // row level
//       for (let j = 0; j < LENGTH_OF_BOARD; j++) {
//         if (j !== c && board[r][j] === val) return false;
//       }

//       // column level
//       for (let i = 0; i < LENGTH_OF_BOARD; i++) {
//         if (i !== r && board[i][c] === val) return false;
//       }

//       const br = Math.floor(r / 3) * 3;
//       const bc = Math.floor(c / 3) * 3;

//       for (let i = br; i < br + 3; i++)
//         for (let j = bc; j < bc + 3; j++)
//           if ((i !== r || j !== c) && board[i][j] === val) return false;
//     }
//   }

//   return true;
// }

/**
 * Optimal approach using Set
 */

function isValidSudoku(board: string[][]): boolean {
  const LENGTH_OF_BOARD = 9;

  const rows = Array.from({ length: LENGTH_OF_BOARD }, () => new Set<string>());
  const cols = Array.from({ length: LENGTH_OF_BOARD }, () => new Set<string>());
  const boxs = Array.from({ length: LENGTH_OF_BOARD }, () => new Set<string>());

  for (let r = 0; r < LENGTH_OF_BOARD; r++) {
    for (let c = 0; c < LENGTH_OF_BOARD; c++) {
      const v = board[r][c];
      if (v === ".") continue;

      const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (rows[r].has(v) || cols[c].has(v) || boxs[b].has(v)) return false;

      rows[r].add(v);
      cols[c].add(v);
      boxs[b].add(v);
    }
  }

  return true;
}

const board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
