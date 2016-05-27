import angular from 'angular';
import Home from './home/home';
import Featured from './featured/featured';
import Foot from './foot/foot';

let componentModule = angular.module('app.components', [
  Home.name,
  Featured.name,
  Foot.name
]);

export default componentModule;
