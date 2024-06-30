const {
  createService,
  findServiceById,
  updateService,
  deleteService,
} = require("../models/ConsultantService");

const {
  getAllServices,
  getServiceById,
  getServicesByConsultantId,
} = require("../models/Service");

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

  static async getAll(req, res, next) {
    try {
      const services = await getAllServices();
      res.status(200).json({ services: services });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const service = await getServiceById(id);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.status(200).json(service);
    } catch (error) {
      next(error);
    }
  }

  static async getByConsultantId(req, res, next) {
    try {
      const { consultantId } = req.params;
      const services = await getServicesByConsultantId(consultantId);
      res.status(200).json({ services: services });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConsultantServiceContoller;
