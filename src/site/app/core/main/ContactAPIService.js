export default ngModule => {
  require('./contact/contact.scss');
  ngModule.service('ContactAPIService', function ContactAPIService($uibModal) {
    this.openForm = () => {
      $uibModal.open({
        animation: true,
        template: require('./contact/contact.jade'),
        size: 'lg',
        controllerAs: 'contact',
        controller: function ModalCtrl($uibModalInstance) {
          this.close = () => {
            $uibModalInstance.dismiss();
          };
        },
      });
    };
  });
};
