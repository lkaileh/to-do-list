

angular.module('ngTodos', [])
.controller('todoController', function($scope) {
  $scope.todos = [];

  $scope.addTodo = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = '';
  };

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
  };
});
//.factory ('todoData')
