import { getReviewByProductId as reviewsModel } from "./reviews.model";

export const resolver = {
  Query: {
    getReviewByProductId: (_: any, { product_id }: { product_id: string }) => {
      return reviewsModel(product_id);
    },
  },
};
