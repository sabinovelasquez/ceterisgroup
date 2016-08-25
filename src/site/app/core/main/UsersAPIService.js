export default ngModule => {
  ngModule.service('UsersAPIService', function UsersAPIService($firebaseArray, $firebaseObject) {
    const Firebase = require('firebase');
    this.registersUsers = {};

    return {
      userExist: (username) => {
        const ref = new Firebase(`https://distributed-amp-138923.firebaseio.com/users/${username}`);
        const exist = $firebaseObject(ref);
        return exist;
      },
      storeUser: (user, username) => {
        const ref = new Firebase(`https://distributed-amp-138923.firebaseio.com/users/${username}`);
        ref.set(user);
      },
      // delBook: (day) => {
      //   const ref = new Firebase(`https://distributed-amp-138923.firebaseio.com/booked/`);
      //   ref.remove();
      // },
    };
  });
};
