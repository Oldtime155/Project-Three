var app = angular.module('app', []);

app.controller('mainCtrl', mainCtrl);
app.directive('avatar', avatarDirective);

function mainCtrl ($scope) {
  $scope.users = [{
    name: 'Brendan Huber',
    avatarUrl: 'http://ec2-52-89-1-114.us-west-2.compute.amazonaws.com/201html/Me.jpg'
  }];
  $scope.addNew = function (user) {
    $scope.users.push({
      name: user.name,
      avatarUrl: user.url
    });
    user.name = '';
    user.url = '';
  };
}

function avatarDirective () {
  return {
    scope: {
      user: '='
    },
    restrict: 'E',
    template: (
      '<div class="myAv">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
      '</div>'
    ),
    link: link
  };
  
  function link (scope) {
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'default.jpg';
    }
  }

}