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

  // Prepopulate vm.all with colleges from API
  getColleges()

  function getColleges(){
    $http
      // will need to change this to heroku when deploying
      .get('http://localhost:3000/api/colleges')
      .then(function(response) {
        vm.all = response.data
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

  // show
  function getOneCollege(college) {
    $http
      .get('/api/colleges/' + college._id)
      .then(function(response) {
        vm.selectedCollege = response.data
      })
  }

// I don't actually want students to add or delete colleges; only to their favorites aka My College List. Therefore these actions will go in the students_controller as an update
// // delete
//   function deleteCollege(college){
//     $http
//       .delete('/api/colleges/' + college._id)
//       .then(function(response){
// 		 getColleges()
//       })
//   }

}
