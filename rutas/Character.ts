import { Request, Response } from "express";
import { Db } from "mongodb";

export const character = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 20;
  const db: Db = req.app.get("db");
  const chars = await db
    .collection("Characters")
    .find()
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .toArray();
  res.status(200).json(chars);
};