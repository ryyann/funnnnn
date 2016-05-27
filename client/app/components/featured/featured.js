import angular from 'angular';
import uiRouter from 'angular-ui-router';
import featuredComponent from './featured.component';

let featuredModule = angular.module('featured', [
  uiRouter
])

.component('featured', featuredComponent);

export default featuredModule;
