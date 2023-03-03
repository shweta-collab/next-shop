import { NextApiHandler } from "next";

const handleRevalidate: NextApiHandler  = async (req, res) => {
  const event = req.body;
  console.log(event);
  if (event.model === "product") {
    const id = event.entry.id;
    await Promise.all([res.revalidate("/"), res.revalidate(`/products/${id}`)]);
  }
  res.status(204).end();
};

export default handleRevalidate;
