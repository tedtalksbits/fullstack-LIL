import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
  const { key } = req.query;

  res.status(200).json([
    {
      name: "John David",
      age: 29,
      address: "21 Somewhere street",
      isLoggedIn: false,
    },
    {
      name: "Mike David",
      age: 27,
      address: "21 Somewhere street",
      isLoggedIn: true,
    },
    {
      name: "Jacob David",
      age: 9,
      address: "21 Somewhere street",
      isLoggedIn: false,
    },
    { key },
  ]);
});

export default router;
