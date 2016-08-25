export default ngModule => {
  require('./nav.scss');

  ngModule.directive('navBar', function navBar(ContactAPIService) {
    return {
      template: require('./nav.jade'),
      controllerAs: 'navBar',
      controller: function navBarCtrl() {
        this.contactForm = () => {
          ContactAPIService.openForm();
        };
      },
    };
  });
};
