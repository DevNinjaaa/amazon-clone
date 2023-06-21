import { getCategories } from "./categories.model";

const resolvers = {
  Query: {
    categories: async () => {
      return await getCategories();
    },
  },
};

export default resolvers;