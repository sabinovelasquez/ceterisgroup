export default ngModule => {
  require('./header.scss');

  ngModule.directive('mainHeader', function mainHeader($uibModal, UsersAPIService) {
    return {
      template: require('./header.jade'),
      scope: {},
      controllerAs: 'header',
      controller: function mainHeaderCtrl() {
        this.parallaxBg = 'img/header.jpg';
        this.login = () => {
          $uibModal.open({
            animation: true,
            template: require('../login/login-modal.jade'),
            size: 'lg',
            controllerAs: 'modal',
            controller: function ModalCtrl($uibModalInstance) {
              // const user = {};
              // const username = 'sabino';
              // user.name = 'Sabino';
              // user.lastname = 'Velásquez';
              // user.email = 'sabinovelasquez@gmail.com';
              // user.comuna = 'Providencia';
              // user.phone = '+56968406912';
              // user.verified = false;
              this.submit = () => {
                console.log(this.user);
              }
              // this.storeUser = () => {
              //   UsersAPIService.storeUser(user, username);
              // };
              this.close = () => $uibModalInstance.dismiss();
            },
          });
        };
      },
    };
  });
};
