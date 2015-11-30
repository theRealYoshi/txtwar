ApiActions = {
  receiveSingleNumber: function(phoneNumber){
    AppDispatcher.dispatch({
      actionType: PhoneNumberConstants.phoneNumberReceived,
      phoneNumber: phoneNumber
    })
  }
}
