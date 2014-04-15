'use strict';

describe('Sudoku App', function() {

    it('test2', function() {
	var testResults = permutate.getPermutations(8, 3);
	console.log(testResults);
        expect(testResults.length).toBe(2);
    });
  
    it('test1', function() {
	var testResults = permutate.getPermutations(6, 3);
	console.log(testResults);
        expect(testResults.length).toBe(1);
    });
});