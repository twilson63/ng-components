var angular = require('angular')
var domify = require('domify')
var multiline = require('multiline')

angular.module('App', [require('angular-ui-router')])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('home', require('./home'))
      .state('add', require('./add'))
  })

document.body.appendChild(domify(multiline(function() {/*
<div ng-app="App">
  <ui-view></ui-view>
  <nav>
    <a ui-sref="home">Home</a>
    <a ui-sref="add">Add</a>
  </nav>
</div>
*/})))
