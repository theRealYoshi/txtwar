$(function(){
  var root = document.getElementById('container');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
          <div>
            {this.props.children}
          </div>
      );
    }
  });


  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={TxtWarForm} />
      </Route>
    );

  if (root) {
    React.render(<Router>{routes}</Router>, root);
  }

});
