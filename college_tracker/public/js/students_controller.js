angular.module('college_tracker')
  .controller('StudentsController', StudentsController)

StudentsController.$inject = ['$http']
function StudentsController($http) {
  var vm = this
  vm.selectedStudent = {}
  // just for student's own profile
  vm.getStudent = getStudent
  vm.updateStudent = updateStudent
  // vm.deleteStudent = deleteStudent

function getStudent(student) {
    $http
    //calls api to get student info
      .get('/api/me')
    //once call is complete get student info
      .then(function(res) {
        vm.currentStudent = res.data.student
      })
  }
  getStudent()

  function setStudent(student) {
    vm.currentStudent = student
  }

  function updateStudent(student) {
    $http
      .patch('/api/me', vm.currentStudent)
      .then(function(res) {
        getStudent()
        console.log(res.data)
      })
      vm.currentStudent = {}
  }


}
