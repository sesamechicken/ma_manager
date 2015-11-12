app.config(function($routeProvider){
  $routeProvider
     .when('/', {
      templateUrl : 'views/students.html'
    })
    .when('/fulltime', {
      templateUrl : 'views/student-detail.html'
    })
    .otherwise({
        redirectTo: '/'
      });

});