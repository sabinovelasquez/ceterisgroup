export default ngModule => {
  require('./main/header/header')(ngModule);
  require('./main/nav/nav')(ngModule);
  require('./main/services/services')(ngModule);
  require('./main/about-us/about-us')(ngModule);
};
