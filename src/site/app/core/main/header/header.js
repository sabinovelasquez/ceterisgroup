export default ngModule => {
  require('./header.scss');

  ngModule.directive('mainHeader', function mainHeader($uibModal) {
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
              this.close = () => $uibModalInstance.dismiss();
            },
          });
        };
      },
    };
  });
};
