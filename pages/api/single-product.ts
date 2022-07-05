import { getSingleProduct } from "data/watch";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const product = getSingleProduct(req.body.slug);

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(product);
  }
}
