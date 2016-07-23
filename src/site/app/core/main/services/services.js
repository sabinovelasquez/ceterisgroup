export default ngModule => {
  require('./services.scss');

  ngModule.directive('services', function services() {
    return {
      template: require('./services.jade'),
    };
  });
};
