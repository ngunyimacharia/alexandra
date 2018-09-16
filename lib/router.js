FlowRouter.route('/',{
  action: function(params, queryParams){
    BlazeLayout.render(
      'App_body',
      {header: 'Main_header',main: 'Welcome_page'}
    );
  }
});

var eits = FlowRouter.group({
  prefix:'/eits'
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
