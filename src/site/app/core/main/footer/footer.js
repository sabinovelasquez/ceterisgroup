export default ngModule => {
  require('./footer.scss');

  ngModule.directive('mainFooter', function mainFooter(ContactAPIService, LoginAPIService) {
    return {
      template: require('./footer.jade'),
      controllerAs: 'footer',
      controller: function mainHeaderCtrl() {
        this.contactForm = (activate) => {
          ContactAPIService.openForm(activate);
        };
        this.login = () => {
          LoginAPIService.openLogin();
        };
      },
    };
  });
};
