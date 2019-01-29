import { Meteor } from 'meteor/meteor';
import { Eits } from './eits.js';

const resolvers = {
  Query:{
    getEITs(){
      return Eits.find({}).fetch();
    },
    getOneEIT(_,args){
      return Eits.findOne(args.id);
    }
  },
  Mutation:{
    addEIT(_,args){
      let eitId = Eits.insert({
        first_name:args.first_name,
        last_name:args.last_name,
        dob:args.dob,
        country:args.country,
        gender:args.gender,
        cohort:args.cohort
      });
      return Eits.findOne(eitId);
    },
    updateEIT(_,args){
      Eits.update(
        args.id,
        {
          $set:{
            first_name:args.first_name,
            last_name:args.last_name,
            dob:args.dob,
            country:args.country,
            gender:args.gender,
            cohort:args.cohort
          }
        }
      );
      return Eits.findOne(args.id);
    },
    deleteEIT(_,args){
      Eits.remove(args.id);
      return args.id;
    }
  }
}

export default resolvers
