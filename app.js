

angular.module('ngTodos', [])
.controller('todoController', function($scope, $http) {
  $scope.getAll = function() {
    $http.get('/', $scope)
    .success(function(data) {
      console.log("posted successfully");
    }).error(function(data) {
      console.error("error in posting");
    });
  };  
  $scope.todos = [];
  $scope.todos.push($scope.getAll);

  $scope.addTodo = function () {
    $http.post('/', $scope)
    .success(function(data) {
      console.log("posted successfully" + $scope.newTodo);
    }).error(function(data) {
      console.error("error in posting");
    });
  }; 
    //$scope.todos.push($scope.newTodo);
    //$scope.todos = app.post($scope.newTodo);
    //console.log(app);
  $scope.todos.push($scope.getAll());
  $scope.newTodo = '';
  console.log($scope.todos);

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
    console.log("removeTodo");
  };
});  
//};

// angular.module('Todos', [])
// .factory ('todoData', function($http) {
//   var getAll = function () {
//     return $http({
//       method: 'GET',
//       url: '/',
//       success: function () {
//         console.log('google');
//       }  
//     }).then(function (resp) {
//       return resp.data;
//     });
//   };
// }); 
