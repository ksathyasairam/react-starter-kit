import PersonType from '../types/PersonType';
import PersonInputType from '../types/PersonInputType';
import PersonModel from "../mongodb/Person";
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
} from 'graphql';

const createperson = {
  type: PersonType,
  args: {
      input: {
        type: new NonNull(PersonInputType),
      },
    },
  resolve: async (rootValue, { input }) => {

      var PersonInstance = new PersonModel({

    firstName: input.firstName,
    lastName: input.lastName,
    phoneNumber: input.phoneNumber,
    age: input.age,
    sex : input.sex,

      });
    
    PersonInstance.save(function (err) {
    if (err) return console.error(err);
    });

     return PersonInstance;
    },
  
};

export default createperson;


