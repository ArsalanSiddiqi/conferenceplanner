'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.papers = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('paper');
    });
  }

  $onInit() {
    this.$http.get('/api/papers').then(response => {
      this.papers = response.data;
      this.socket.syncUpdates('paper', this.papers);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('conferencePlannerApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
