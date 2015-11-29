TwilioUtil = {
  validateNumber: function(phoneNumber){
    $.ajax({
      url: 'https://www.twilio.com/docs/api/lookups/' + phoneNumber ,
      type: 'GET',
      success: function(callback){
        console.log(callback);
      }
    });
  }
};
