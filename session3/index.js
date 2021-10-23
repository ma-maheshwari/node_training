const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
const app = express();
const Car = require("./models/Cars");
mongoose.connect("mongodb://localhost:27017/cars");

db.once("open", () => {
  console.log("Database Connected!");
});

db.on("error", (err) => console.error("err", err));

app.use(express.json());

//find data get from db
app.get("/", async (req, res) => {
  try {
    const resp = await Car.find({ name: req.query.name });
    res.send({ res: resp });
  } catch (err) {
    res.send("err", err);
  }
});

//insert
app.post("/save", (req, res) => {
  const body = req.body;
  const car = new Car({
    name: body.name,
    year_launched: body.year_launched,
  });

  car.save((err, data) => {
    if (err) return err;
    res.send("data inserted");
  });
});

//update
app.put("/update", (req, res) => {
  const body = req.body;
  Car.findOneAndUpdate({ name: body.name },{name: 'updated name'}, (err, data) => {
    if (err) return err;
    res.send(data);
  });
});

//delete
app.delete("/remove", (req, res) => {
  const body = req.body;
  Car.remove({ name: body.name }, (err, data) => {
    if (err) return err;
    res.send(data);
  });
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
