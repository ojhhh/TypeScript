require("dotenv").config();
import express from "express";
import sequelize from "./models";

const app = express();

app.use(express.urlencoded({ extended: false }));
console.log("Connecting to database:", process.env.DATABASE_NAME);

sequelize.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("connect success");
  })
  .catch((err: any) => {
    console.error(err);
  });

app.listen(8080, () => {
  console.log("server on");
});
