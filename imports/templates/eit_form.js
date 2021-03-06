import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './eit_form.html';


Template.Eit_data_form.helpers({
  years(){
    var years = [];
    var startYear = 2010;
    var currentYear = (new Date()).getFullYear();
    var endYear = currentYear + 5;
    for(var i=startYear; i<= endYear; i++){
      var year = {year:i};
      if(i == (currentYear+2)){
        year.current = true;
      }
      years.push(year);
    }
    return years;
  },

  countries(){
    return [{name:'Algeria'}, {name:'Angola'}, {name:'Benin'}, {name:'Botswana'}, {name:'Burkina Faso'}, {name:'Burundi'}, {name:'Cabo Verde'}, {name:'Cameroon'}, {name:'Central African Republic (CAR)'}, {name:'Chad'}, {name:'Comoros'}, {name:'Democratic Republic of the Congo'}, {name:'Republic of the Congo'}, {name:'Cote d\'Ivoire'}, {name:'Djibouti'}, {name:'Egypt'}, {name:'Equatorial Guinea'}, {name:'Eritrea'}, {name:'Eswatini (formerly Swaziland)'}, {name:'Ethiopia'}, {name:'Gabon'}, {name:'Gambia'}, {name:'Ghana',default:true}, {name:'Guinea'}, {name:'Guinea-Bissau'}, {name:'Kenya'}, {name:'Lesotho'}, {name:'Liberia'}, {name:'Libya'}, {name:'Madagascar'}, {name:'Malawi'}, {name:'Mali'}, {name:'Mauritania'}, {name:'Mauritius'}, {name:'Morocco'}, {name:'Mozambique'}, {name:'Namibia'}, {name:'Niger'}, {name:'Nigeria'}, {name:'Rwanda'}, {name:'Sao Tome and Principe'}, {name:'Senegal'}, {name:'Seychelles'}, {name:'Sierra Leone'}, {name:'Somalia'}, {name:'South Africa'}, {name:'South Sudan'}, {name:'Sudan'}, {name:'Swaziland (renamed to Eswatini)'}, {name:'Tanzania'}, {name:'Togo'}, {name:'Tunisia'}, {name:'Uganda'}, {name:'Zambia'}, {name:'Zimbabwe'}];
  },


});


Template.Eit_data_form.events({
  'submit form'(event){
    event.preventDefault();
    var eit_data = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      dob: event.target.dob.value,
      country: event.target.country.value,
      gender: event.target.gender.value,
      cohort: event.target.cohort.value,
    };
    Meteor.call('eits.insert',eit_data);
    swal({
      title:'Hurray!!',
      text:'The EiT has been successfully added!',
      type:'success'
    });
    FlowRouter.go('/eits');
  }
});
