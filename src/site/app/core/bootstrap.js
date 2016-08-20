require('./vendor')();

const ngModule = angular.module('app', [
  'duScroll',
  'ngAnimate',
  'ngParallax',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'firebase',
  'ui.bootstrap',
  'ui.router',
  'ngMap',
]);

require('./config')(ngModule);
require('./controllers')(ngModule);
require('./directives')(ngModule);
require('./services')(ngModule);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'], {
  	//
  });
});
