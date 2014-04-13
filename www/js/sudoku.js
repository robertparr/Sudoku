var permutate = (function() {
    
    var results = [];
    var target = 0;
    
    function doPermute(input, output, used, places, level) {        
            
        if (places === level) {
            if (output.unique().length === output.length && sum(output) === target){
                var sortedArray = output.sort().slice(0);
                if (!contains(results, sortedArray)) {
                    results.push(sortedArray);
                }                
            }            
            return;
        } 
        
        level++;
        
        for (var i = 0; i < input.length; i++) {
            
            if (used[i] === true) {
                continue;
            }            
            
            used[i] = true;
            output.push(input[i]);
            doPermute(input, output, used, places, level);
            used[i] = false;
            output.pop();
        }
    }
    function arrays_equal(a,b) { return !(a<b || b<a); };
    
    Array.prototype.unique = function() {
    var o = {}, i, l = this.length, r = [];
    for(i=0; i<l;i+=1) o[this[i]] = this[i];
    for(i in o) r.push(o[i]);
    return r;
};
    
    function contains(completeArray, arrayToFind) {
        for (var a=0;a<completeArray.length;a++) {
            if (arrays_equal(completeArray[a], arrayToFind)) {
                return true;
            }
        }
        return false;
    }
    
    function sum(myData) {
        var myTotal=0;
        for(var i=0, len=myData.length; i<len; i++){
            myTotal += myData[i];
        }
        return myTotal;
    }
    
    return {
        getPermutations: function(t, places) {
            
            target=t;
            var chars = [1,2,3,4,5,6,7,8,9];
            var output = [];
            var used = new Array(chars.length);      

            doPermute(chars, output, used, places, 0);        
            return results;    
        }
    };
})();
