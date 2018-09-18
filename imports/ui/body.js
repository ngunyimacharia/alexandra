import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './body.html';
import './headers.html';

//Pages templates
import '../pages/eits.js';
import '../pages/welcome.html';
import '../pages/auth.html';
import '../pages/users.js'

//Templates
import '../templates/eit_form.js';
import '../templates/eit_edit_form.js';

Template.Login_page.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
