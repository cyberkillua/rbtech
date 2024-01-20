import db from "../models";
import { Request, Response } from "express";

export const addProductToStore = async (req: Request, res: Response) => {
  try {
    const { name, price, description, photos, availableSize } = req.body;
    const storeId = req.store?.id;

    const product = await db.Product.create({
      name,
      price,
      description,
      photos,
      availableSize,
      storeId,
    });

    res.status(200).json({ message: "product created successfully", product });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Request could not be completed", data: error });
  }
};

export const editProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, photos, availableSize, productId } =
      req.body;

    const product = await db.Product.findOne({
      where: { id: productId },
    });

    if (!product) {
      res.status(422).json({ error: "Product does not exists" });
      return;
    }

    await db.Product.update(
      {
        name,
        price,
        description,
        photos,
        availableSize,
      },
      { where: { id: productId } }
    );

    res.status(200).json({ message: "product edited successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Request could not be completed", data: error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    const productExist = await db.Product.findOne({
      where: { id: productId },
    });
    if (!productExist) {
      res.status(422).json({ error: "Product does not exists" });
      return;
    }
    await db.Product.destroy({
      where: { id: productId },
    });
    res.status(200).json({ msg: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Request could not be completed", data: error });
  }
};
