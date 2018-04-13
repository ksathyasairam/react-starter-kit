
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
} from 'graphql';

const PersonType = new ObjectType({
  name: 'Person',
  fields: {
  	_id : { type: new NonNull(StringType) },
    firstName: { type: new NonNull(StringType) },
    lastName: { type: new NonNull(StringType) },
    phoneNumber: { type: new NonNull(StringType) },
    age: { type: new NonNull(StringType) },
 	sex : {	type: new NonNull(BooleanType)},
	},
);

export default PersonType;


