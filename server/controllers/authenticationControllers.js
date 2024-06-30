const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/User");
const {
  createConsultant,
  findConsultantByEmail,
} = require("../models/Consultants");
const { validationResult } = require("express-validator");

class AuthController {
  static async userRegister(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, email, password, gender } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = { username, email, password: hashedPassword, gender };
      const newUser = await createUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  static async userLogin(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      const user = await findUserByEmail(email);
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const accessToken = jwt.sign(
        { userId: user.id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.json({ message: "Login successful", accessToken });
    } catch (error) {
      next(error);
    }
  }

  static async consultantRegister(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { nama_brand, username, email, password, NIK, gender } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const consultant = {
        nama_brand,
        username,
        email,
        password: hashedPassword,
        NIK,
        gender,
      };
      const newConsultant = await createConsultant(consultant);
      res.status(201).json(newConsultant);
    } catch (error) {
      next(error);
    }
  }

  static async consultantLogin(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      const consultant = await findConsultantByEmail(email);
      if (!consultant) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const isMatch = await bcrypt.compare(password, consultant.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const accessToken = jwt.sign(
        { consultantId: consultant.id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.json({ message: "Login successful", accessToken });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
