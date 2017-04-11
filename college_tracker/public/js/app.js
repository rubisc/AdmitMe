angular
  .module('college_tracker', ['ui.router'])
  .config(CollegeRouter)

CollegeRouter.$inject = ['$stateProvider', '$urlRouterProvider']
function CollegeRouter($stateProvider, $urlRouterProvider){

  // Front end routes using angular ui.router:
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '../colleges_templates/index.html'
  })
  .state('new', {
    url: '/new',
    templateUrl: '../colleges_templates/new.html'
  })
  .state('show', {
    url: '/colleges/:id',
    templateUrl: '../colleges_templates/show.html'
  });

  // Default (fallback) route:
  $urlRouterProvider.otherwise('/')

}
