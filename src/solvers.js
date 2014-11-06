/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var matrix = [];

  for (var i = 0; i < n; i++) {
    var row = Math.pow(2, i).toString(2);
    if (row.length < n) {
      for (var j = row.length; j < n; j++) {
        row = '0' + row;
      }
    }
    row = row.split('').map(function(el){
      return Number(el);
    });
    matrix.push(row);
  }
  solution = matrix;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var matrix = [];

  for (var i = 0; i < n; i++) {
    var row = Math.pow(2, i).toString(2);
    if (row.length < n) {
      for (var j = row.length; j < n; j++) {
        row = '0' + row;
      }
    }
    row = row.split('').map(function(el){
      return Number(el);
    });
    matrix.push(row);
  }

  var possible_solutions = permutations(matrix);
  for(var i = 0; i < possible_solutions.length; i++){
    var board = new Board(possible_solutions[i]);
    if(!board.hasAnyRooksConflicts()){
      solutionCount++;
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = 0;
  var matrix = [];

  for (var i = 0; i < n; i++) {
    var row = Math.pow(2, i).toString(2);
    if (row.length < n) {
      for (var j = row.length; j < n; j++) {
        row = '0' + row;
      }
    }
    row = row.split('').map(function(el){
      return Number(el);
    });
    matrix.push(row);
  }

  var possible_solutions = permutations(matrix);
  for(var i = 0; i < possible_solutions.length; i++){
    var board = new Board(possible_solutions[i]);
    if(!board.hasAnyQueensConflicts()){
      solution = board;
      break;
    }
  }


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var matrix = [];

  for (var i = 0; i < n; i++) {
    var row = Math.pow(2, i).toString(2);
    if (row.length < n) {
      for (var j = row.length; j < n; j++) {
        row = '0' + row;
      }
    }
    row = row.split('').map(function(el){
      return Number(el);
    });
    matrix.push(row);
  }

  var possible_solutions = permutations(matrix);
  for(var i = 0; i < possible_solutions.length; i++){
    var board = new Board(possible_solutions[i]);
    if(!board.hasAnyQueensConflicts()){
      solutionCount++;
    }
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// helper functions
function permutations(list){
  // Empty list has one permutation
    if (list.length == 0)
      return [[]];

    var result = [];

    for (var i=0; i<list.length; i++)
    {
      // Clone list (kind of)
      var copy = list.slice();

      // Cut one element from list
      var head = copy.splice(i, 1);

      // Permute rest of list
      var rest = permutations(copy);

      // Add head to each permutation of rest of list
      for (var j=0; j<rest.length; j++)
      {
        var next = head.concat(rest[j]);
        result.push(next);
      }
    }

    return result;
}
function factorial(n) {
  if(n === 0 || n === 1){
    return 1;
  }
}
// function factorial (n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//   return f[n] = factorial(n-1) * n;
// }
