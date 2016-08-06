export default ngModule => {
  ngModule.service('SendgridApiService', ($http) => {
    const service = {
      sendMail: (to, subject, text, from) => {
        return $http({
          method: 'get',
          url: `https://api.sendgrid.com/api/mail.send.json?api_key=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&to=${to}&subject=${subject}&text=${text}&from=${from}`,
        });
      },
    };
    return service;
  });
};
