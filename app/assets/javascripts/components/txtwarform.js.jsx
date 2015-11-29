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
		var number = event.currentTarget.value;
		this.setState({ inputVal: number});
		if (this.state.inputVal.length === 10){
	    var debounced = debounce(function(){
	      console.log(this.state.inputVal);
				ApiUtil.validateNumber({phone_number: this.state.inputVal});
	    }.bind(this), 1500)
			debounced();
		}
  },
	_addToState: function(event){
		event.preventDefault();
		var num = event.currentTarget.value;
		this.setState({inputVal: this.state.inputVal + num});
	},
	_deleteFromState: function(event){
		event.preventDefault();
		this.setState({inputVal: this.state.inputVal.slice(0, -1)})
	},
  render: function(){
		var numArr = new Array(10);
		for (var i = 0; i < numArr.length; i++){
			numArr[i] = i;
		}
    return (
      <div className="form">
        <h1>Valid number</h1>
        <form className="phone-number-submit" onSubmit={this._handleSubmit}>
          <input
            className='search-query'
            id='search-input'
            onChange={this._handleInput}
            placeholder="(000)-000-0000"
            value={this.state.inputVal}/>
        </form>
				<div className="keypad">
					{
						numArr.map(function(num){
							return <button type="button"
														 value={num}
														 onClick={this._addToState}>
														{num}
										</button>;
						}.bind(this))
					}
					<button type="button" onClick={this._deleteFromState}>Delete</button>
				</div>
      </div>
    );
  }
});
