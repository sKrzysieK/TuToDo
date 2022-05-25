import { List, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  item: List;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return;
  const newList = await prisma.list.create({
    data: {
      name: req.body.name,
      color: req.body.color,
    },
  });
  res.status(200).json({ message: "created", item: newList });
}
