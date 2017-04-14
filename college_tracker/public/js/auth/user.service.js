(function () {
  'use strict';

  angular
    .module('college_tracker')
    .factory("student", student);

  student.$inject = ["$log", "$http"];

  function student($log, $http) {
    $log.info("student service loaded!");

    var service = {
      create: create
    };
    return service;

    function create(data) {
      var promise = $http({
        method: 'POST',
        url:    '/api/students',
        data:   data
      });

      return promise;
    }
  }

})();
