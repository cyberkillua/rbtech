import db from "../models";
import { Request, Response } from "express";

export const revenueDashboard = async (req: Request, res: Response) => {
  try {
    const { storeId } = req.query;
    const store = await db.Store.findOne({
      where: { id: storeId },
    });
    if (!store) {
      return res.status(400).json({ message: "store not available" });
    }

    const orders = await db.Orders.findAll({
      where: { storeId },
    });

    const totalRevenue = orders.reduce((acc, order) => {
      return acc + order.totalPrice;
    }, 0);

    const deliveryPriceRevenue = orders.reduce((acc, order) => {
      return acc + order.deliveryPrice;
    }, 0);

    const productRevenue = orders.reduce((acc, order) => {
      return acc + order.productPrice;
    }, 0);
    const revenues = {
      totalRevenue,
      deliveryPriceRevenue,
      productRevenue,
    };
    res.status(200).json({ message: "revenue fetched", revenues });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Request could not be completed", data: error });
  }
};
