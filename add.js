var multiline = require('multiline')

exports.url = '/add'
exports.template = multiline(function() {/*
  <h1>{{title}}</h1>
*/})

exports.controller = function($scope) {
  $scope.title = 'Add'
}
