const mongoose = require("mongoose");

// import * as mongoose from "mongoose";

// import mongoose from "mongoose";

// import { connect } from "mongoose";
main().catch((err) => console.error(err));

async function main() {
  mongoose.set("strictQuery", false);
  // localhost oder 127.0.0.1:27017
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}

// schema

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// model

const Fruit = new mongoose.model("Fruit", fruitSchema);

// document

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Great.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  alter: Number,
});

const Person = new mongoose.model("Person", personSchema);

const steven = new Person({
  name: "Steven",
  alter: 23,
});

steven
  .save()
  .then(() => console.log("hat geklappt"))
  .catch((err) => console.log(err));

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 5,
  review: "mid",
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me",
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture",
});

// Fruit.insertMany([kiwi, orange, banana])
//   .then(() => console.log("Data inserted"))
//   .catch((err) => console.log(err));
