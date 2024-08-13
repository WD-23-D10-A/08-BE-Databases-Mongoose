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
  // embedding
  favouriteFruit: fruitSchema,
});

const Person = new mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 10,
  review: "ok",
});

const createPerson = async () => {
  const person = new Person({
    name: "Amy",
    age: 19,
    favouriteFruit: pineapple,
  });

  try {
    await pineapple.save();
    const result = await person.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};

// createPerson();

const banana = new Fruit({
  name: "banana",
  rating: 10,
  review: "banana",
});

const updateSteven = async () => {
  try {
    await banana.save();
    const res = await Person.updateOne(
      { _id: "66bb1015576e301c1b16914c" },
      { favouriteFruit: banana }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};
updateSteven();
