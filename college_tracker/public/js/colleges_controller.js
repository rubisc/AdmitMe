angular.module('college_tracker')
.controller('CollegesController', CollegesController)

CollegesController.$inject = ['$http']
function CollegesController($http){
  var vm = this
  vm.sortBy = 'name'
  vm.all = []
  vm.selectedCollege = {}
  vm.getColleges = getColleges
  vm.getOneCollege = getOneCollege
  // vm.addFavorite = addFavorite

// Prepopulate vm.all with colleges from API
getColleges()

function getColleges(){
  $http
    // will need to change this to heroku when deploying
    // .get('http://localhost:3000/api/colleges')
    .get('/api/colleges')
    .then(function(response) {
      vm.all = response.data
  })
}
//


// show
function getOneCollege(college) {
  // $http
  //   .get('http://localhost:3000/api/colleges/' + college._id)
  //   .then(function(response) {
      console.log(college)
      vm.selectedCollege = college
      console.log(vm.selectedCollege.name)
    }
}

// function addFavorite() {
//   $http
//     .post('/students/favorites', vm.selectedCollege)
//     .then(function(response) {
//       console.log(response)
//     })
// }






// I don't actually want students to add or delete colleges; only to their favorites aka My College List. Therefore these actions will go in the students_controller as an update
// // delete
//   function deleteCollege(college){
//     $http
//       .delete('/api/colleges/' + college._id)
//       .then(function(response){
// 		 getColleges()
//       })
//   }
