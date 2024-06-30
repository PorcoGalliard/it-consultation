const {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
} = require("../models/Orders");

class OrderController {
  static async create(req, res, next) {
    try {
      const { total_biaya, user_id, consultant_id, service_id } = req.body;
      const order = {
        total_biaya,
        user_id,
        consultant_id,
        service_id,
      };
      const newOrder = await createOrder(order);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const orders = await getAllOrders();
      res.status(200).json({ orders: orders });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const order = await getOrderById(id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  static async remove(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await deleteOrder(id);
      if (!deleted) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderController;
