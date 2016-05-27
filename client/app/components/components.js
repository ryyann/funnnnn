import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Featured from './featured/featured';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Featured.name
]);

export default componentModule;
