const {
  assignPaymentMethod,
  findPaymentMethodsByUserId,
  removePaymentMethodAssignment,
} = require("../models/PaymentMethodAssignment");

class PaymentMethodAssignmentController {
  static async createAssignment(req, res, next) {
    try {
      const { user_id, consultant_id, payment_method_id } = req.body;
      const assignment = await assignPaymentMethod({
        user_id,
        consultant_id,
        payment_method_id,
      });
      res
        .status(201)
        .json({ message: "Payment method assigned successfully", assignment });
    } catch (error) {
      next(error);
    }
  }

  static async getAssignmentsByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const assignments = await findPaymentMethodsByUserId(userId);
      res.status(200).json(assignments);
    } catch (error) {
      next(error);
    }
  }

  static async getAssignmentsByConsultant(req, res, next) {
    try {
      const { consultantId } = req.params;
      const assignments = await findPaymentMethodsByConsultantId(consultantId);
      res.status(200).json(assignments);
    } catch (error) {
      next(error);
    }
  }

  static async deleteAssignment(req, res, next) {
    try {
      const { id } = req.params;
      await removePaymentMethodAssignment(id);
      res.status(200).json({ message: "Assignment removed successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PaymentMethodAssignmentController;
