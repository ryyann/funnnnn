import template from './playButton.html';
import controller from './playButton.controller';
import './playButton.scss';

let playButtonComponent = {
  restrict: 'E',
  bindings: {
  	video: '@'
  },
  template,
  controller,
  controllerAs: 'pb'
};

export default playButtonComponent;
