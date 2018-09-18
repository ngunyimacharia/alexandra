/* Accounts routes */

FlowRouter.route('/login',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {header: 'Login_header',main: 'Login_page'}
    );
  }
});

FlowRouter.route('/logout',{
  action: function(params, queryParams){
    Meteor.logout(function(){
      FlowRouter.go('/login');
    });
  }
});


/* Other routes */

FlowRouter.route('/',{
  action: function(params, queryParams){
    if(Meteor.userId()){
      BlazeLayout.render(
        'App_body',
        {header: 'Main_header',main: 'Welcome_page'}
      );
    }else{
      BlazeLayout.render(
        'App_body',
        {header: 'Login_header',main: 'Welcome_page'}
      );
    }
  }
});

var eits = FlowRouter.group({
  prefix:'/eits',
  triggersEnter: [isUserLoggedIn],
});

eits.route('/', {
    action: function(params, queryParams) {
      BlazeLayout.render(
        'App_body',
        {header: 'Main_header',main: 'Eits_page'});
    }
});

eits.route('/add',{
  action: function(params, queryParams){
    BlazeLayout.render(
      'App_body',
      {header: 'Main_header',main: 'Eit_add_page',eitId: null});
  }
});

eits.route('/edit/:eitId',{
  action: function(params, queryParams){
    var eitId = FlowRouter.getParam("eitId");
    BlazeLayout.render(
      'App_body',
      {header: 'Main_header',main: 'Eit_edit_page',eitId: eitId });
  }
});


FlowRouter.route('/users',{
  triggersEnter: [isUserLoggedIn],
  action: function(params, queryParams){
    BlazeLayout.render(
      'App_body',
      {header: 'Main_header',main: 'Users_page'});
  }
});

function isUserLoggedIn () {
  return function (context, redirect, stop) {
    if ( Meteor.userId() ) {
      route = FlowRouter.current();
    } else {
      FlowRouter.go("/login");
    }
  }
}
