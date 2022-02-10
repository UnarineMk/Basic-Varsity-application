import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import data from "./data.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/api/tertiaries", (req, res) => {
  res.send(data.tertiaries);
});
// app.get("/api/tertiaries:id", (req, res) => {
//   const tertiary = data.tertiaries.find((x) => x._id === req.params.id);
//   if (tertiary) {
//     res.send(tertiary);
//   } else {
//     res.status(404).send({ message: "Product Was Not Found" });
//   }
// });

// app.use((err, req, res, next) => {
//   const status = err.name && err.name === "ValidationError" ? 400 : 500;
//   res.status(status).send({
//     message: err.message,
//   });
// });

app.listen(5000, () => {
  console.log("serve at http://localhost:5000");
});
