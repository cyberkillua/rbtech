import db from "../models";
import { Request, Response } from "express";
import hashPassword from "../utils/hashPassword";
import generateToken from "../utils/generateToken";
import bcrypt from "bcryptjs";

export const create = async (req: Request, res: Response) => {
  const { storeName, email, password, phoneNumber } = req.body;
  try {
    const storeExists = await db.Store.findOne({ where: { email } });
    if (storeExists) {
      return res.status(400).json({
        message: "admin already exists",
      });
    }
    const hashedPassword = await hashPassword(password);
    const admin = await db.Store.create({
      name: storeName,
      phoneNumber,
      email,
      password: hashedPassword,
    });

    const token = generateToken(admin.id);
    res.status(200).json({ msg: "store created successfully", token });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Request could not be completed", data: err });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const store = await db.Store.findOne({
      where: { email },
    });
    if (!store) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isValid = await bcrypt.compare(password, store.password);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = generateToken(store.id);
    res.status(200).json({ message: "store logged in sucessfully ", token });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Request could not be completed", data: err });
  }
};

export const LoggedInUser = async (req: Request, res: Response) => {
  try {
    const store = await db.Store.findOne({
      where: { id: req.store?.id },
      attributes: { exclude: ["password"] },
    });
    if (!store) {
      return res.status(400).json({
        message: "Unable to process your request. ",
      });
    }

    res.status(200).json({ msg: "store found", store });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Request could not be completed", data: err });
  }
};
