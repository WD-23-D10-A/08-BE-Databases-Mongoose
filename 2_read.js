const mongoose = require("mongoose");

main().catch((err) => console.error(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const getFruit = async () => {
  try {
    const apple = await Fruit.find({ _id: "66bb0eb995e4654185a2e72f" });
    console.log(apple);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};

// getFruit();

// Fruit.find({ _id: "66bb0eb995e4654185a2e72f" })
//   .then(function (apple) {
//     console.log(apple); // success
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(() => mongoose.connection.close());

const getNames = async () => {
  try {
    const fruits = await Fruit.find();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};

getNames();
