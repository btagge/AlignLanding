alignLanding.directive('jumbotron', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/jumbotron.html',
        scope: {
            jumboImg: '=',
            jumboHeader1: '=',
            jumboHeader2: '=',
            jumboCta: '&',
            jumboCtaString: '@'
        }
    }
});