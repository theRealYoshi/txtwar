ApiUtil = {
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
