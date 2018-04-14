import {
  GraphQLInputObjectType as InputType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
} from 'graphql';

const PersonInputType = new InputType({
  name: 'PersonInput',
  fields: {
    firstName: { type: new NonNull(StringType) },
    lastName: { type: new NonNull(StringType) },
    phoneNumber: { type: new NonNull(StringType) },
    age: { type: new NonNull(StringType) },
    sex: { type: new NonNull(BooleanType) },
  },
});

export default PersonInputType;
