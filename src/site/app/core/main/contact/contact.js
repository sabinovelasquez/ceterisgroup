export default ngModule => {
  require('./contact.scss');

  ngModule.directive('contactForm', function contactForm() {
    return {
      template: require('./contact.jade'),
    };
  });
};
