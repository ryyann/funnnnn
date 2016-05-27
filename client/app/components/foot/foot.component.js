import template from './foot.html';
import controller from './foot.controller';
import './foot.scss';

let footComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default footComponent;
