export default ngModule => {
  require('./services.scss');

  ngModule.directive('services', function servicesBar() {
    return {
      template: require('./services.jade'),
    };
  });
};
