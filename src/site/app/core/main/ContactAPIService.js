export default ngModule => {
  require('./contact/contact.scss');
  ngModule.service('ContactAPIService', function ContactAPIService($uibModal, $http) {
    this.openForm = (activate) => {
      $uibModal.open({
        animation: true,
        template: require('./contact/contact.jade'),
        size: 'lg',
        controllerAs: 'contact',
        controller: function ModalCtrl($uibModalInstance) {
          this.data = {};
          this.activate = activate;
          this.loading = false;
          this.selectOpt = ['Cotización de servicios.', 'Activación de cuenta.', 'Contactar a un ejecutivo.', 'Consultas sobre mi comunidad.', 'Programa referidos.', 'Otros asuntos.'];
          this.selectCom = ['Cerrillos', 'La Reina', 'Pudahuel', 'Cerro Navia', 'Las Condes', 'Quilicura', 'Conchalí', 'Lo Barnechea', 'Quinta Normal', 'El Bosque', 'Lo Espejo', 'Recoleta', 'Estación Central', 'Lo Prado', 'Renca', 'Huechuraba', 'Macul', 'San Miguel', 'Independencia', 'Maipú', 'San Joaquín', 'La Cisterna', 'Ñuñoa', 'San Ramón', 'La Florida', 'Pedro Aguirre Cerda', 'Santiago', 'La Pintana', 'Peñalolén', 'Vitacura', 'La Granja', 'Providencia', 'Padre Hurtado', 'San Bernardo', 'Puente Alto', 'Pirque', 'San José de Maipo'];
          this.comuna = this.selectCom[0];
          this.close = () => {
            $uibModalInstance.dismiss();
          };
          this.submit = () => {
            this.loading = true;
            $http.post('http://ceterisgroup.cl/sendMail.php', this.data).
            success( (data) => {
              this.sent = data;
              this.loading = false;
            });
          };
        },
      });
    };
  });
};
