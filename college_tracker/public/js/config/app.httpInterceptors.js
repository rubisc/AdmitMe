(function() {
  "use strict";

  angular
    .module("college_tracker")
    .config(configure);

  configure.$inject = ["$httpProvider"];

  function configure($httpProvider) {
    $httpProvider.interceptors.push("jsonHeadersService");
    $httpProvider.interceptors.push("tokenSigningService");
    $httpProvider.interceptors.push("authErrorRedirect");
    console.log("http", $httpProvider.interceptors)
  }

})();
