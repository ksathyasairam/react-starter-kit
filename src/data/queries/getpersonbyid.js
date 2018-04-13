import PersonType from '../types/PersonType';
import PersonModel from "../mongodb/Person";
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
} from 'graphql';

const getpersonbyid = {
  type: PersonType,
  args: {
      id: {
        type: new NonNull(StringType),
      },
    },
  resolve: async (rootValue, { id }) => {
    
     return PersonModel.findById(id);
    },
  
};

export default getpersonbyid;


