function debounce(func, wait, immediate) {
	var timeout;
  return function() {
		var context = this, args = arguments;
    console.log(context);
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var TxtWarForm = React.createClass({
  getInitialState: function(){
    return { inputVal: ""}
  },
  _handleSubmit: function(){
    console.log("fjdakljfkdl");
    // api util and then update the store
  },
  _handleInput: function(event){
    event.preventDefault();
    debounce(function(event){
      var number = event.currentTarget.value;
      this.setState({ inputVal: number});
      console.log(this.state.inputVal);
    }, 250)
    
      //debounce and then do callback for twilio look
  },
  render: function(){
    return (
      <div className="form">
        <h1>Submit a valid number</h1>
        <form className="phone-number-submit" onSubmit={this._handleSubmit}>
          <input
            className='search-query'
            id='search-input'
            onChange={this._handleInput}
            placeholder="Search Tag Name Or Album Name"
            value={this.state.inputVal}/>
        </form>
      </div>
    );
  }
});
