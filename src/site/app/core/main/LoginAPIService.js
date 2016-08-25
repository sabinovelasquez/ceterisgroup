export default ngModule => {
  require('./login/login-modal.scss');
  ngModule.service('LoginAPIService', function LoginAPIService(UsersAPIService, $uibModal, $timeout) {
    this.openLogin = () => {
      $uibModal.open({
        animation: true,
        template: require('./login/login-modal.jade'),
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
  });
};
