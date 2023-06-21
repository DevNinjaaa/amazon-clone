import pool from "../../pool";

let query = pool.prototype.query


const getOrderByUserId = async <T extends string>(user_id: T) => {
  const getOrderByUserId = await query(
    `SELECT * FROM orders WHERE user_id = $1`,
    [user_id]
  );
  return getOrderByUserId.rows[0];
};

const getAllOrders = async () => {
  const getAllOrders = await query(
    `SELECT * FROM orders`
  );
  return getAllOrders.rows;
};
export default {getOrderByUserId, getAllOrders}