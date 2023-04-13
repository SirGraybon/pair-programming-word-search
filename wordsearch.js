const wordSearch = (letters, word) => {
  //checks horizontal words
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word) || l.split("").reverse().join("").includes(word)) {
      console.log("horizontal true");
      return true;
    }
  }
  // checks vertical words
  for (let i = 0; i < letters[i].length; i++) {
    let verticalJoin = "";
    for (let j = 0; j < letters.length; j++) {
      verticalJoin += (letters[j][i]);
    }
    if (verticalJoin.includes(word)) {
      console.log("vertical true");
      return true;
    }
  }


  // first diagonal "South East"
  // console.log(letters);
  // let n = 0;
  // diagWordBank = [];
  // let loops = letters.length - 1;
  // console.log(loops);
  // for (let i = 0; i < letters[0].length; i++) {
  //   let newWord = "";
  //   let newWord2 = "";
  //   let c = 0;
  //   for (let j = loops - n; j < letters.length; j++) {
  //     newWord += letters[j][c];
  //     if (letters[c][j] === undefined) {
  //       continue;
  //     }
  //     newWord2 += letters[c][j];
  //     c++;
  //   }
  //   n++;
  //   diagWordBank.push(newWord);
  //   diagWordBank.push(newWord2);

  // }
  
  
  
  // if (diagWordBank.includes(word)) {
  //   console.log("1: ", diagWordBank);
  //   return true;
  // }



  //console.log("2: ", newWord2)



  return false;

};




module.exports = wordSearch;

//// notes /////


//map
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]


/// notes ///
// search each column for word
// search each row for word
/// stretch goals ///
//search diagonally
// backwards 

//from index 0 to index 7 diagonally sum = 28
// array dimensions 8*9

// String[][] b = [a,b,c]
//                [d,e,f]
//                [g,h,i];  

// #1 (0,0)               -> a
// #2 (1,0)  (0,1)        -> bd
// #3 (2,0)  (1,1)  (0,2) -> gec
// #4 (2,1)  (1,2)        -> hf
// #5 (2,2)               -> i

//wordSearch
//Middle Diagonal
// #1 (0,0) A
// #2 (1,1) E
// #3 (2,2) C
// #3 (3,3) T
// #3 (4,4) Y
// #3 (5,5) E
// #3 (6,6) A
// #3 (7,7) S



wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FFURL');

