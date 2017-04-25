(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

      $urlRouterProvider.otherwise('home');

    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
		        controller: 'mainController',
		        controllerAs: 'vm'
		      }
		   }
	    })
	    .state('allItems', {
	      url: '/allItems/:id',
	      views: {
		      'content': {
		        templateUrl: '../partials/allItems.html',
		        controller: 'mainController',
		        controllerAs: 'vm'
		      }
		   }
	    })
	    .state('genres', {
	      url: '/genre',
	      views: {
		      'content': {
		        templateUrl: '../partials/genre.html',
		        controller: 'mainController',
		        controllerAs: 'vm'
		      }
		   }
	    })
	    // .state('login', {
	    //   url: '/login',
	    //   views: {
		  //     'content': {
		  //       templateUrl: '../partials/login.html',
		  //       controller: 'LoginController',
		  //       controllerAs: 'vm'
		  //     }
		  //  }
	    // });

    });

})();
