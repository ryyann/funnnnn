import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footComponent from './foot.component';

let footModule = angular.module('foot', [
  uiRouter
])

.component('foot', footComponent);

export default footModule;
