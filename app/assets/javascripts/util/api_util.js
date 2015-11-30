ApiUtil = {
  validateNumber: function(phoneNumber){
    $.ajax({
      url: '/api/twilio_lookup',
      type: 'GET',
      data: phoneNumber,
      success: function(number){
        console.log(number);
        //update store with number
      },
      error: function(){
        console.log("invalid");
      }
    });
  },
  saveNumber: function(phoneNumber){
    $.ajax({
      url: '/api/gifs',
      type: 'POST',
      data: param,
      success: function(gifs){
        if (tagSearch){
          ApiActions.receiveTagSearch(gifs);
        } else {
          ApiActions.receiveAll(gifs);
        }
      }
    });
  }
};
