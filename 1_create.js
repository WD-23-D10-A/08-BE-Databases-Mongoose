// Importiere das Mongoose-Modul, das für die Interaktion mit MongoDB verwendet wird
const mongoose = require("mongoose");

// import * as mongoose from "mongoose";

// import mongoose from "mongoose";

// import { connect } from "mongoose";

// Hauptfunktion, die die Verbindung zur MongoDB-Datenbank herstellt
main().catch((err) => console.error(err));

async function main() {
  // Deaktiviert die strikte Abfrageüberprüfung in Mongoose
  mongoose.set("strictQuery", false);

  // Verbindet sich mit der MongoDB-Datenbank "fruitsDB" auf dem lokalen Rechner
  // localhost oder 127.0.0.1:27017
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}

// schema
// Definiert das Schema für die "Fruit"-Dokumente in der MongoDB-Datenbank
const fruitSchema = new mongoose.Schema({
  name: String, // Name der Frucht
  rating: Number, // Bewertung der Frucht
  review: String, // Rezension zur Frucht
});

// model
// Erstellt ein Mongoose-Modell für das "Fruit"-Schema (collection)
const Fruit = new mongoose.model("Fruit", fruitSchema);

// document
// Erstellt ein neues "Fruit"-Dokument mit den angegebenen Eigenschaften
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Great.",
});

// Speichert das "Fruit"-Dokument in der Datenbank
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

// Speichert das "Person"-Dokument in der Datenbank und gibt eine Erfolgsmeldung aus
steven
  .save()
  .then(() => console.log("hat geklappt"))
  .catch((err) => console.log(err));

// Erstellt mehrere "Fruit"-Dokumente mit den angegebenen Eigenschaften
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

// Fügt mehrere "Fruit"-Dokumente in die Datenbank ein
// Fruit.insertMany([kiwi, orange, banana])
//   .then(() => console.log("Data inserted"))
//   .catch((err) => console.log(err));
