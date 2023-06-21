import pool from "../../pool";
const query = pool.prototype.query;

export const getReviewByProductId = async <T extends string>(product_id: T) => {
  const getReviewByProductId = await query(
    `SELECT * FROM reviews WHERE product_id= $1`,
    [product_id]
  );
  return getReviewByProductId.rows;
};
