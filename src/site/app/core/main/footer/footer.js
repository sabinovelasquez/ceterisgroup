export default ngModule => {
  require('./footer.scss');

  ngModule.directive('mainFooter', function mainFooter(ContactAPIService, LoginAPIService) {
    return {
      template: require('./footer.jade'),
      controllerAs: 'footer',
      controller: function mainHeaderCtrl() {
        this.contactForm = () => {
          ContactAPIService.openForm();
        };
        this.login = () => {
          LoginAPIService.openLogin();
        };
      },
    };
  });
};
