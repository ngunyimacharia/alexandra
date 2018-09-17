import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Eits } from '../api/eits.js';

import '../pages/eits.html';
import '../pages/eit_add.html';
import '../pages/eit_edit.html';

var deleteArray = [];

Template.Eits_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('eits');
});


Template.Eits_page.helpers({
  eits(){
    return Eits.find();
  }
});

Template.Eits_page.events({

    'click .delete-checkbox'(event){
      var id = event.target.value;
      if(event.target.checked){
        deleteArray.push(id);
      }else{
        deleteArray.splice(deleteArray.indexOf(id),1);
      }
    },

    'click #deleteEit'(event){
      if(!confirm("Are you sure you want to delete EiT?")){
        return;
      }
      for(var i=0; i<deleteArray.length; i++){
        Meteor.call('eits.remove',deleteArray[i]);
      }
      swal({
        title:'Hurray!!',
        text:'The selected EiTs have been successfully deleted!',
        type:'success'
      });
    }
});
