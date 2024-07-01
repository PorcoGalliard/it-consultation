const {
  createServiceTag,
  getAllServiceTags,
  getServiceTagById,
  getServiceTagsByServiceId,
  deleteServiceTag,
} = require("../models/ServiceTags");

class ServiceTagController {
  static async create(req, res, next) {
    try {
      const serviceTag = await createServiceTag(req.body);
      res.status(201).json(serviceTag);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const serviceTags = await getAllServiceTags();
      res.status(200).json(serviceTags);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const serviceTag = await getServiceTagById(req.params.id);
      if (!serviceTag) {
        return res.status(404).json({ message: "ServiceTag not found" });
      }
      res.status(200).json(serviceTag);
    } catch (error) {
      next(error);
    }
  }

  static async getByServiceId(req, res, next) {
    try {
      const serviceTags = await getServiceTagsByServiceId(
        req.params.service_id
      );
      if (!serviceTags.length) {
        return res.status(404).json({ message: "ServiceTags not found" });
      }
      res.status(200).json(serviceTags);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleted = await deleteServiceTag(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "ServiceTag not found" });
      }
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ServiceTagController;
