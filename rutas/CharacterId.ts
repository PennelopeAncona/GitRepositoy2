import { Request, Response } from "express";
import { Db } from "mongodb";

export const characterId = async (req: Request, res: Response) => {
  const id = req.params.id;
  const db: Db = req.app.get("db");
  const char = await db.collection("Characters").findOne({ id: parseInt(id) });
  if (char) res.status(200).json(char);
  else res.status(404).send();
};