import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello!");
});

app.set("port", process.env.PORT || 3002);
app.listen(app.get("port"));

console.log(`listening on ${process.env.PORT || 3002}`);
