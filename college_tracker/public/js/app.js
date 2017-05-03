angular
  .module('college_tracker', ['ui.router'])
  .config(CollegeRouter)

CollegeRouter.$inject = ['$stateProvider', '$urlRouterProvider']
function CollegeRouter($stateProvider, $urlRouterProvider){

  // Front end routes using angular ui.router:
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'colleges_templates/index.html'
    // controller: 'CollegesController',
    // controllerAs: 'CollegesCtrl'
  })
  .state('signin', {
      url: '/signin',
      templateUrl: 'authentication_templates/signin.html',
      controller: 'SignInController',
      controllerAs: 'signInVm'
  })
  .state('signup', {
      url: '/signup',
      templateUrl: 'authentication_templates/signup.html',
      controller: 'SignInController',
      controllerAs: 'signInVm'
  })
  .state('show', {
    url: '/colleges/:id',
    templateUrl: 'colleges_templates/show.html',
    // controller: 'CollegesController',
    // controllerAs: 'CollegesCtrl'
  })
  .state('collegeList', {
    url: '/students/:id',
    templateUrl: 'students_templates/show.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'about.html'
  })
  .state('blog', {
        onEnter: function($window) {
            $window.open('https://rubiscollegeappservices.wordpress.com/', '_self');
        }
    })

  // Default (fallback) route:
  $urlRouterProvider.otherwise('/')

}
