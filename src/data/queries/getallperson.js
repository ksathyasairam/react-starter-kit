import PersonType from '../types/PersonType';
import PersonModel from "../mongodb/Person";
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLList as ListType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
} from 'graphql';

const getallperson = {
  type: new ListType (PersonType),
  resolve: async (rootValue) => {
    
      return PersonModel.find();
    },
  
};

export default getallperson;


