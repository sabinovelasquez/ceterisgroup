export default ngModule => {
  require('./main/UsersAPIService')(ngModule);
  require('./main/ContactAPIService')(ngModule);
  require('./main/LoginAPIService')(ngModule);
};
