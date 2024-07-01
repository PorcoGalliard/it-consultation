const {
  createInvoice,
  getInvoiceById,
  updateInvoiceStatus,
  getAllInvoicesByUserId,
  getAllPaidOrdersByConsultantId,
} = require("../models/Invoices");

class InvoiceController {
  static async create(req, res, next) {
    try {
      const invoice = await createInvoice(req.body);
      res.status(201).json(invoice);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const invoice = await getInvoiceById(req.params.id);
      if (!invoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }
      res.status(200).json(invoice);
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      const invoice = await updateInvoiceStatus(req.params.id, req.body.status);
      if (!invoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }
      res.status(200).json(invoice);
    } catch (error) {
      next(error);
    }
  }

  static async getAllByUserId(req, res, next) {
    try {
      const invoices = await getAllInvoicesByUserId(req.params.userId);
      res.status(200).json(invoices);
    } catch (error) {
      next(error);
    }
  }

  static async getAllPaidOrdersByConsultantId(req, res, next) {
    try {
      const invoices = await getAllPaidOrdersByConsultantId(
        req.params.consultantId
      );
      res.status(200).json(invoices);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InvoiceController;
