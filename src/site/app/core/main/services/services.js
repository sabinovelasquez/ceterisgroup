export default ngModule => {
  require('./services.scss');

  ngModule.directive('services', function services(ContactAPIService) {
    return {
      template: require('./services.jade'),
      controllerAs: 'services',
      controller: function mainHeaderCtrl() {
        this.contactForm = () => {
          ContactAPIService.openForm();
        };
      },
    };
  });
};
