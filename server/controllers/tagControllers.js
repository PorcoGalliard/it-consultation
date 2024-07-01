const {
  createTag,
  getAllTags,
  getTagById,
  updateTag,
  deleteTag,
} = require("../models/Tags");

class TagController {
  static async create(req, res, next) {
    try {
      const tag = await createTag(req.body);
      res.status(201).json(tag);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const tags = await getAllTags();
      res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const tag = await getTagById(req.params.id);
      if (!tag) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.status(200).json(tag);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const tag = await updateTag(req.params.id, req.body);
      if (!tag) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.status(200).json(tag);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleted = await deleteTag(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TagController;
