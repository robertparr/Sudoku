function MainCtrl($scope) {
var CAN=2;
    $scope.buttonStatus = [CAN, CAN, CAN, CAN, CAN, CAN, CAN, CAN, CAN];
    
    $scope.changeButtonStatus = function(buttonId) {
        var currentStatus = $scope.buttonStatus[buttonId];
        var status = (++currentStatus > 2 ? 0 : currentStatus);
        $scope.buttonStatus[buttonId] = status;
    };
    
    $scope.resetButtons = function() {
        $scope.buttonStatus = [CAN, CAN, CAN, CAN, CAN, CAN, CAN, CAN, CAN];
    };
    
    $scope.getResults = function() {
        var testResults = permutate.getPermutations(8, 3);
        alert(testResults.length);
    };
};


