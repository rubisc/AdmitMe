(function() {
'use strict';

angular
  .module("college_tracker")
  .controller("SignInController", SignInController)

  SignInController.$inject = ["$log", "authService", "student", "$state"]

  function SignInController($log, authService, student, $state) {
    var vm = this;

    vm.signUp = {};
    vm.submitSignUp = submitSignUp;
    vm.logIn = {};
    vm.submitLogIn = submitLogIn;
    vm.conflict = false;
    vm.student = vm.logIn.email;

    // FUNCTIONS
    function submitSignUp() {
      student
        .create(vm.signUp)
        .then(function(res) {
          return authService.logIn(vm.signUp);
        })
        .then(
          // on success
          function(decodedToken) {
            $log.info('Logged in!', decodedToken);
            $state.go('index');
          },
          // on error
          function(err) {
            if (err.status === 409) vm.conflict = true;
            $log.info('Log In Error', err);
          }
        );
    }

    function submitLogIn() {
      console.log()
      authService
        .logIn(vm.logIn)
        .then(
          // on success
          function(decodedToken) {
            $log.info('Logged in!', decodedToken);
            $state.go('index');
            console.log(vm.logIn.email)
          },
          // on error
          function(err) {
            $log.info('Error:', err);
          }
        );
    }

    $log.info("SignInController loaded!");
  }
})();
