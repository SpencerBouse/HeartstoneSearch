(function() {
    'use strict';

    angular
        .module('routing')
        .controller('mainController', function(API, $filter) {
            const vm = this;


            vm.cardUpdate = function() {
              $('canvas').remove();
                let newCards = API.getCards(vm.inputBox)
                newCards.then(res => {
                    if(res.data.length < 21){
                    let newRes = $filter('filter')(res.data, {
                        'type': 'minion'
                    });
                    vm.data = newRes
                    vm.data.forEach(function(singleCard,idx){
                      var cost = singleCard.cost
                      var health = singleCard.health
                      var attack = singleCard.attack
                      var data= [cost,attack,health]
                      vm.makeChart(data,idx)
                    })}
                    // vm.cardData = {}
                })
            },
            vm.makeChart = function(data,idx){
              var chart = document.createElement('canvas');
              let space = "space"+idx;
              console.log(idx);
              var divNew = document.getElementById(space);
              divNew.insertBefore(chart,divNew.childNodes[0]);

              var data = {
                  labels: ["Cost","Health","Attack"],
                  datasets: [
                      {
                          label: "Stas",
                          borderWidth: 1,
                          backgroundColor: [
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(255, 206, 86, 0.2)'
                          ],
                          borderColor: [
                              'rgba(54, 162, 235, 1)',
                              'rgba(255,99,132,1)',
                              'rgba(255, 206, 86, 1)'
                          ],
                          data: data,
                      }
                  ]
              };

              var myBarChart = new Chart(chart, {
                  type: 'horizontalBar',
                  data: data,
                });



            }
        });

})();
