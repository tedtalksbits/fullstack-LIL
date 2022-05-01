import express from "express";
import router from "./api";

// initialize app
const app = express();

//setup ejs (js in html)
app.set("view engine", "ejs");

// port
const PORT = process.env.PORT || 8976;

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api/v1", router);

// middlewares
app.use(express.static("public"));

// listen on port
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
