require.config({
	paths: {
	      jquery : '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js',
        angular: 'https://code.angularjs.org/1.2.16/angular',
        uiRouter: 'http://angular-ui.github.io/ui-router/release/angular-ui-router',
        ocLazyLoad: 'vendor/ocLazyLoad',
        app: 'app'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'ngRoute': ['angular'],
		'app': ['angular']
	}
});


require(['angular', 'app'], function(angular) {
	'use strict';
	angular.bootstrap(document, ['app']);
});