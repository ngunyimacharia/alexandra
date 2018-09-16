import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Eits } from '../api/eits.js';

import '../pages/eits.html';
import '../pages/eit_add.html';
import '../pages/eit_edit.html';

Template.Eits_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('eits');
});


Template.Eits_page.helpers({
  eits(){
    return Eits.find();
  }
});
