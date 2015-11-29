ApiUtil = {
  validateNumber: function(phoneNumber){
    $.ajax({
      url: '/api/twilio_lookup',
      type: 'GET',
      data: phoneNumber,
      success: function(result){
        console.log(result);
      }
    });
  },
  fetchGifs: function(param, tagSearch){
    $.ajax({
      url: '/api/gifs',
      type: 'GET',
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
