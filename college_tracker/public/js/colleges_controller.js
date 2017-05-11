angular.module('college_tracker')
.controller('CollegesController', CollegesController)

CollegesController.$inject = ['$http', '$state', 'authService']
function CollegesController($http, $state, authService){
  var vm = this
  vm.sortBy = 'name'
  vm.all = []
  vm.selectedCollege = {}
  vm.getColleges = getColleges
  vm.getOneCollege = getOneCollege
  vm.addFavorite = addFavorite

  function getStudent(student) {
      $http
      //calls api to get student info
        .get('/api/me')
      //once call is complete get student info
        .then(function(res) {
          vm.currentStudent = res.data.data
          console.log(vm.currentStudent)
        })
    }

    getStudent()

// Prepopulate vm.all with colleges from API
getColleges()

function getColleges(){
  $http
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
      $state.go('show', {id: college._id})
    }

  function addFavorite(college) {
    vm.currentStudent.collegeList.push(college)
    console.log(college)
    $http
    .post('/api/students/' + vm.currentStudent._id + '/favorites', college)
    .then(function(res) {
      getStudent()
      console.log(vm.currentStudent)
    })
  }

// function addFavorite(){
//   // grab token to get student id
//     $http
//     .post('/api/students/favorites', {college: $state.params.id, id: vm.currentStudent._id})
//     .then(function(response) {
//       console.log(response)
//     })
//   }

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
