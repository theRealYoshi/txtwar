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
            dajdalkgjdaklfjdsa
            //{this.props.children}
          </div>
      );
    }
  });


  var routes = (
      <Route component={App}>
      </Route>
    );

  if (root) {
    React.render(<Router>{routes}</Router>, root);
  }

});
