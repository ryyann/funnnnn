import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import PlayButton from './playButton/playButton'

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  PlayButton.name
]);

export default commonModule;
