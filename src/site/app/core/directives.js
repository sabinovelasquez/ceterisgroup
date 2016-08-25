export default ngModule => {
  require('./main/contact/contact')(ngModule);
  require('./main/header/header')(ngModule);
  require('./main/nav/nav')(ngModule);
  require('./main/services/services')(ngModule);
  require('./main/about-us/about-us')(ngModule);
  require('./main/map-section/map-section')(ngModule);
  require('./main/footer/footer')(ngModule);
};
