export default ngModule => {
  require('./header.scss');

  ngModule.directive('mainHeader', function mainHeader($uibModal, UsersAPIService, $timeout) {
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
            size: 'md',
            controllerAs: 'modal',
            controller: function ModalCtrl($uibModalInstance) {
              this.username = null;
              this.auth = {};
              // const username = 'sabino';
              // user.name = 'Sabino';
              // user.lastname = 'Velásquez';
              // user.email = 'sabinovelasquez@gmail.com';
              // user.comuna = 'Providencia';
              // user.phone = '+56968406912';
              // user.verified = false;
              this.userExist = () => {
                return UsersAPIService.userExist(this.username);
              };
              this.submit = () => {
                this.loading = true;
                // const service = UsersAPIService.userExist(this.username);
                // this.auth = service;
                $timeout(() => {
                  this.loading = false;
                  this.auth.verified = false;
                }, 3000);
              };
              // this.storeUser = () => {
              //   UsersAPIService.storeUser(user, username);
              // };
              this.close = () => {
                $uibModalInstance.dismiss();
                this.loading = false;
              };
            },
          });
        };
      },
    };
  });
};
