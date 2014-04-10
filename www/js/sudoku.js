var permutate = (function() {
    
    var results = [];
    var target = 0;
    
    function doPermute(input, output, used, places, level) {        
            
        if (places === level) {
            //output.filter(onlyUnique()).length === output.length && 
            console.log("Before unique "+output[1]);
            console.log("Unique: "+output.filter(onlyUnique()));
            if (sum(output) === target){
                console.log("output="+output+", results="+results);
                var sortedArray = output.sort().slice(0);
 
                if (!contains(results, sortedArray)) {
                    console.log("Adding "+sortedArray);
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
            //console.log("before pop: "+output);
            output.pop();
            //console.log("after pop: "+output);
        }
    }
    function arrays_equal(a,b) { return !(a<b || b<a); };
    
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
    function contains(completeArray, arrayToFind) {
        //console.log("in contains %s %s", completeArray, arrayToFind);
        for (var a=0;a<completeArray.length;a++) {
            console.log("comparing %s to %s %s", completeArray[a], arrayToFind, (arrays_equal(completeArray[a], arrayToFind)));   
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

//var target=3, places=2;
//var testResults = permutate.getPermutations(target, places);
 



