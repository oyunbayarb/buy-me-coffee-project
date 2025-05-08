import express, {json} from "express";
import {CreateUserRouter} from "./routers/user";

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/user", CreateUserRouter);

app.listen(8000, () => {
  console.log("server running at http://localhost:8000");
});
