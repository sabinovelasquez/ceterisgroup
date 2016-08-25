export default ngModule => {
  require('./contact/contact.scss');
  ngModule.service('ContactAPIService', function ContactAPIService($uibModal, $http) {
    this.openForm = () => {
      $uibModal.open({
        animation: true,
        template: require('./contact/contact.jade'),
        size: 'lg',
        controllerAs: 'contact',
        controller: function ModalCtrl($uibModalInstance) {
          this.data = {};
          this.loading = false;
          this.close = () => {
            $uibModalInstance.dismiss();
          };
          this.submit = () => {
            this.loading = true;
            $http.post('http://ceterisgroup.cl/sendMail.php', this.data).
            success( () => {
              this.loading = false;
            });
          };
        },
      });
    };
  });
};
