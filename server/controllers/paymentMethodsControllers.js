const {
  createPaymentMethod,
  findPaymentMethodById,
  findAllPaymentMethods,
  updatePaymentMethod,
  deletePaymentMethod,
} = require("../models/PaymentMethods");

class PaymentMethodsController {
  static async create(req, res, next) {
    try {
      const { method_name, details } = req.body;
      const newMethod = await createPaymentMethod({ method_name, details });
      res.status(201).json(newMethod);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const methods = await findAllPaymentMethods();
      res.status(200).json({ payment_methods: methods });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const method = await findPaymentMethodById(id);
      if (!method) {
        return res.status(404).json({ message: "Payment method not found" });
      }
      res.status(200).json(method);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { method_name, details } = req.body;
      const updatedMethod = await updatePaymentMethod(id, {
        method_name,
        details,
      });
      if (!updatedMethod) {
        return res.status(404).json({ message: "Payment method not found" });
      }
      res.status(200).json(updatedMethod);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedMethod = await deletePaymentMethod(id);
      if (!deletedMethod) {
        return res.status(404).json({ message: "Payment method not found" });
      }
      res.status(200).json({ message: "Payment method deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PaymentMethodsController;
