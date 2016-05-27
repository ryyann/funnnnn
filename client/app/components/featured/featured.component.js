import template from './featured.html';
import controller from './featured.controller';
import './featured.scss';

let featuredComponent = {
  restrict: 'E',
  bindings: {
  	image: '@',
  	lines: '<',
  	lineTwo: '@',
  	text: '@'
  },
  template,
  controller,
  controllerAs: 'featured'
};

export default featuredComponent;
