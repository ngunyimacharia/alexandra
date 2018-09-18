import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './body.html';
import './headers.html';

//Pages templates
import '../pages/eits.js';
import '../pages/welcome.html';
import '../pages/login.html';

//Templates
import '../templates/eit_form.js';
import '../templates/eit_edit_form.js';

Template.loginButtons.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
