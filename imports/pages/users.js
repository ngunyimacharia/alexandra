import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Users } from '../api/users.js';

import './users.html';
Template.Users_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('users');
});


Template.Users_page.helpers({
  users(){
    var users = Meteor.users.find().fetch();
    console.log(users);
    return users;
  }
});
