FlowRouter.route('/',{
  action: function(params, queryParams){
    BlazeLayout.render(
      'App_body',
      {header: 'Main_header',main: 'Welcome_page'}
    );
  }
});

FlowRouter.route('/eits', {
    action: function(params, queryParams) {
      BlazeLayout.render(
        'App_body',
        {header: 'Main_header',main: 'Eits_page'});
    }
});
