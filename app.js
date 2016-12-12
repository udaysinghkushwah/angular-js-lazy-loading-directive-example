define([
  'angular', 
  'uiRouter',
  'ocLazyLoad'
], function (angular) {
  
  var app = angular.module('app', ['ui.router', 'oc.lazyLoad']);
   
  app.config(function($stateProvider, $locationProvider, $ocLazyLoadProvider) {
    var lazyDeferred;
    
    $ocLazyLoadProvider.config({
      loadedModules: ['app'],
      asyncLoader: require
    });
    
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html",
        controller: 'mainCtrl'
      });
  
    $locationProvider.html5Mode(true);
  });
  app.directive('whenScrollEnds', function() {
       console.log("adasd");
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var visibleHeight = element.height();
                var threshold = 100;
                console.log("scroll ends");
                element.scroll(function() {
                    var scrollableHeight = element.prop('scrollHeight');
                    var hiddenContentHeight = scrollableHeight - visibleHeight;

                    if (hiddenContentHeight - element.scrollTop() <= threshold) {
                        // Scroll is almost at the bottom. Loading more rows
                        scope.$apply(attrs.whenScrollEnds);
                    }
                });
            }
        };
    });
  app.controller('mainCtrl', function($scope,$http) {
    $scope.songList=[];
   $scope.init=function(){
		   	console.log("init function");
		    $http({
		        method : "GET",
		        url : "http://private-f4bf5-music6.apiary-mock.com/search"
		    }).then(function mySucces(response) {
		    	angular.forEach(response.data,function(val){
		    		$scope.songList.push(val)
		    	});
		         
		         console.log($scope.songList);
		    }, function myError(response) {
		        console.log(response);
		    });
		}
	$scope.init();
  });
  
});
