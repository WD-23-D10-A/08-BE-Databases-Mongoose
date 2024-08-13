const mongoose = require("mongoose");

main().catch((err) => console.error(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name defined"],
  },
  rating: {
    type: Number,
    min: [1, "can't be lower than 1"],
    max: [10, "can't be higher than 10"],
    required: [true, "no rating defined"],
  },
  review: String,
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "great",
});

fruit.save();
