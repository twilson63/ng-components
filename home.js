var multiline = require('multiline')

exports.url = '/'

exports.template = multiline(function() {/*
<h1>{{title}}</h1>
*/})

exports.controller = function($scope) {
  $scope.title = 'Home'  
}
