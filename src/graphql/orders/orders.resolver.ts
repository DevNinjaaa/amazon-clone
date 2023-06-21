import ordersModel from "./orders.model";
const { getOrderByUserId, getAllOrders } = ordersModel;

const resolvers = {
  Query: {
    getAllOrders: <T extends {user_id: string}>(_: any, { user_id }: T)  => {
      return getOrderByUserId(user_id);
    },
    getOrderByUserId:() => {
      return getAllOrders();
    },
  },
};

export default resolvers;
