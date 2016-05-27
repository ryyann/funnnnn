import angular from 'angular';
import uiRouter from 'angular-ui-router';
import playButtonComponent from './playButton.component';

let playButtonModule = angular.module('playButton', [
  uiRouter
])

.component('playButton', playButtonComponent);

export default playButtonModule;
