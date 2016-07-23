export default ngModule => {
  require('./about-us.scss');

  ngModule.directive('aboutUs', function aboutUs() {
    return {
      template: require('./about-us.jade'),
      scope: {},
      controllerAs: 'us',
    };
  });
};
