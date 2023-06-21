import pool from "../../pool";
  
const query = pool.prototype.query

export async function getCategories(){
  const getCategories = await query(`SELECT * FROM categories`);
  return getCategories.rows;
}
 


