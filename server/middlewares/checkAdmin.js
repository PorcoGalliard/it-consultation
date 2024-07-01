const checkAdmin = (req, res, next) => {
  if (!req.user || !req.user.is_admin) {
    return res
      .status(403)
      .json({ message: "Forbidden: Admin access required" });
  }
  next();
};

module.exports = checkAdmin;
