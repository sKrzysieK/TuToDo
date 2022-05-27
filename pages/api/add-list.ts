import { List, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  item: List;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return;
  const body = JSON.parse(req.body)
  const newList = await prisma.list.create({
    data: {
      name: body.name,
      color: body.color,
    },
  });
  res.status(200).json({ item: newList });
}
