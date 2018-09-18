import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

if(Meteor.isServer){
  Meteor.publish('users',function eitsPublication(){
    return Meteor.users.find({}, {fields: {username: 1, createdAt: 1,}});
  });
}
