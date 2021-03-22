"use strict";

function controller($scope) {
  var DIRECTION = {
    LEFT: 0,
    RIGHT: 1,
    FADE: 2
  };
  
  $scope.slides = [{
    index: 0,
    color: '#F00',
    description: 'red'
  }, {
    index: 1,
    color: '#0F0',
    description: 'green'
  }, {
    index: 2,
    color: '#00F',
    description: 'blue'
  }];

  $scope.selectedSlide = $scope.slides[0];
  $scope.slideDirection = DIRECTION.LEFT;
  
  $scope.slideFade = function() {
    $scope.slideDirection = DIRECTION.FADE;
  };
  
  $scope.nextSlide = function() {
    $scope.slideDirection = DIRECTION.LEFT;
    var index = $scope.slides.indexOf($scope.selectedSlide);

    if (index + 1 < $scope.slides.length) {
      index = index += 1;
      $scope.selectedSlide = $scope.slides[index];
    } else {
      index = 0;
      $scope.selectedSlide = $scope.slides[index];
    }
  };
  
  $scope.previousSlide = function() {
    $scope.slideDirection = DIRECTION.RIGHT;
    var index = $scope.slides.indexOf($scope.selectedSlide);

    if (index - 1 > -1) {
      index = index - 1;
      $scope.selectedSlide = $scope.slides[index];
    } else {
      index = $scope.slides.length - 1;
      $scope.selectedSlide = $scope.slides[index];
    }
  };
  
  $scope.debug = function () {
    console.log('slides', $scope.slides);
    console.log('selectedSlide', $scope.selectedSlide);
  };
}

controller.$inject = ['$scope'];
angular.module('app', ['ngAnimate']).controller('controller', controller);