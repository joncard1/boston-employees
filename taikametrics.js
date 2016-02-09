// This defines the application in AngularJS, and the next line defines the controller for the body tag.
angular.module('taikametrics', [])
.controller('ViewAverageEarnings', ['$scope', '$http', function($scope, $http) {
    // TODO: Put up some default display
    $http.get('https://data.cityofboston.gov/resource/4swk-wcg8.json?$select=title&$group=title').then(function(response) {
        $scope.selectList = response.data
    });

    $scope.onChangeTitle = function() {
        if($scope.selectedOption) {
            // Some of the values contain & or #, so these must be encoded.
            var url = 'https://data.cityofboston.gov/resource/4swk-wcg8.json?$select=avg(total_earnings)&title=' + encodeURIComponent($scope.selectedOption.title);
            $http.get(url).then(function(response) {
                $scope.avgEarnings = response.data[0].avg_total_earnings;
            });
            // TODO: Should report something in the event of miscommunication.
        } else {
            // Empty string signals to the template not to display the value.
            $scope.avgEarnings = ""
        }
    };
}]);
