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

const personSchema = new mongoose.Schema({
  name: String,
  alter: Number,
});

const Person = new mongoose.model("Person", personSchema);

// Person.updateOne({ _id: "66bb170c90df5dee91e62314" }, { name: "Mohamad" })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const updateSteven = async () => {
  try {
    const result = await Person.updateOne(
      { _id: "66bb170c90df5dee91e62314" },
      { name: "Mohamed2" }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};

// updateSteven();

const deleteFruit = async () => {
  try {
    const result = await Fruit.deleteOne({ _id: "66bb0ed51d2d1b2b2cb1ec6f" });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// deleteFruit();

// const johns = new Person({
//   name: "John",
//   alter: 23,
// });

// johns.save();

const deleteJohns = async () => {
  try {
    const result = await Person.deleteMany({ name: "John" });
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};

// deleteJohns();
