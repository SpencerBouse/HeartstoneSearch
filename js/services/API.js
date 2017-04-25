(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http) {

            return {
                getCards:(name) => {
                    return $http({
                        type: "GET",
                        headers: {'X-Mashape-Key':'BpXKWg0w2GmshG30InKm34fNyYfqp1TtUkajsnwKmIa5jN4BVM'},
                        url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${name}`,
                    })
                },
            };
        });

})();
