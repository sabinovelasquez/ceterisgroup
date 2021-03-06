export default ngModule => {
  require('./map-section.scss');

  ngModule.directive('mapSection', function mapSection() {
    return {
      template: require('./map-section.jade'),
      scope: {},
      controllerAs: 'map',
      controller: function mapSectionCtrl() {
        this.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAW6F-ZiyoqA4YCZ99-s9DU-OEuUxHvaU8';
        this.mapCenter = '-33.4506266,-70.6836916';
        this.mapStyle = [{
          'featureType': 'administrative',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#444444',
          }]},
        {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [{
            'color': '#f2f2f2',
          }]},
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [{
            'visibility': 'off',
          }]},
        {
          'featureType': 'poi.business',
          'elementType': 'geometry.fill',
          'stylers': [{
            'visibility': 'on',
          }]},
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [{
            'saturation': -100,
          },
          {
            'lightness': 45,
          }]},
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [{
            'visibility': 'simplified',
          }]},
        {
          'featureType': 'road.arterial',
          'elementType': 'labels.icon',
          'stylers': [{
            'visibility': 'off',
          }]},
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [{
            'visibility': 'off',
          }]},
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [{
            'color': '#b4d4e1',
          },
          {
            'visibility': 'on',
          }],
        }];
      },
    };
  });
};
