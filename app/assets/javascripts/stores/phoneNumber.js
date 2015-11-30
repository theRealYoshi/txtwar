(function(root) {
  var _phoneNumbers = [];
  var CHANGE_EVENT = "CHANGE";
  var SINGLE_CHANGE_EVENT = "SINGLE_CHANGE_EVENT";

  var resetGifs = function(phoneNumbers){
    _phoneNumbers = phoneNumbers.slice(0);
  };

  var addPhoneNumber = function(phoneNumber){
    var idx;
    for (var i = 0; i < _phoneNumbers.length; i++) {
     if (_phoneNumbers[i].id === phoneNumber.id) {
       idx = i;
     }
    }
    if (!idx){
      _phoneNumbers.push(phoneNumber);
    }
  };

  var removePhoneNumber = function(phoneNumber){
    var idx;
    for (var i = 0; i < _phoneNumbers.length; i++) {
     if (_phoneNumbers[i].id === phoneNumber.id) {
       idx = i;
     }
    }
    if (idx !== -1){
      _phoneNumbers.splice(idx, 1);
    }
  };

  var PhoneNumberStore = root.PhoneNumberStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _phoneNumbers.slice(0);
    },
    find: function(id){
      var phoneNumber;
     _phoneNumbers.forEach(function(g) {
       if(g.id === id) { phoneNumber = g; }
     });
     return phoneNumber;
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    addSingleChangeListener: function(callback){
      this.on(SINGLE_CHANGE_EVENT, callback);
    },
    removeSingleChangeListener: function(callback){
      this.removeListener(SINGLE_CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case PhoneNumberConstants.PHONENUMBER_RECEIVED:
          var singleResult = addPhoenNumber(payload.phoneNumber);
          PhoneNumberStore.emit(SINGLE_CHANGE_EVENT);
          break;
        case PhoneNumberConstants.PHONENUMBER_REMOVED:
          var singleRemove = removePhoneNumber(payload.phoneNumber);
          PhoneNumberStore.emit(SINGLE_CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
