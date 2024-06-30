const {
  createService,
  findServiceById,
  updateService,
  deleteService,
} = require("../models/ConsultantService");

class ConsultantServiceContoller {
  static async create(req, res, next) {
    try {
      const { nama_service, deskripsi, biaya_service, consultant_id } =
        req.body;
      const service = { nama_service, deskripsi, biaya_service, consultant_id };
      const newService = await createService(service);
      res.status(201).json(newService);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { nama_service, deskripsi, biaya_service } = req.body;
      const updatedFields = { nama_service, deskripsi, biaya_service };
      const updatedService = await updateService(id, updatedFields);
      if (!updatedService) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(updatedService);
    } catch (error) {
      next(error);
    }
  }

  static async remove(req, res, next) {
    try {
      const { id } = req.params;
      const service = await findServiceById(id);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      await deleteService(id);
      res.json({ message: "Service deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConsultantServiceContoller;
