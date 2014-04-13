'use strict';

describe('Sudoku App', function() {

    it('should redirect index.html to index.html#/phones', function() {
        var target=6, places=3;
        var testResults = permutate.getPermutations(target, places);
      
        console.log(testResults);
        expect(testResults.length).toBe(1);
    });
});