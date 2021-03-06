import { GraphQLObjectType as ObjectType } from 'graphql';

import createperson from '../mutations/createperson';

const Mutation = new ObjectType({
  name: 'Mutation',
  fields: {
    createperson,
  },
});

export default Mutation;
