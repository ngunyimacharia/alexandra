import { Accounts } from 'meteor/accounts-base';

Accounts.config({
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Accounts.onLogin(function(){
  FlowRouter.go('/');
});
