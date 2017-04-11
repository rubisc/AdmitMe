angular.module('college_tracker')
.controller('CollegesController', CollegesController)

CollegesController.$inject = ['$http']
function CollegesController($http){
  var vm = this
  vm.all = []
  vm.newCollege = {}
  vm.selectedCollege = {}
  vm.getColleges = getColleges
  vm.addCollege = addCollege
  vm.getOneCollege = getOneCollege
  vm.deleteCollege = deleteCollege

  // Prepopulate vm.all with colleges from API
  getColleges()

  function getColleges(){
    $http
      .get('/api/colleges')
      .then(function(response) {
        vm.all = response.data
    })
  }

// show
function getOneCollege(college) {
  $http
    .get('/api/colleges/' + college._id)
    .then(function(response) {
      vm.selectedCollege = response.data
    })
}

  function addCollege(){
    $http
      .post('/api/colleges', vm.newCollege)
      .then(function(response){
        getColleges()
    })
    vm.newCollege = {}
  }

  function deleteCollege(college){
    $http
      .delete('/api/colleges/' + college._id)
      .then(function(response){
		 getColleges()
      })
  }

}
