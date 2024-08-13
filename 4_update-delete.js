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

// Funktion zum Aktualisieren des Namens einer bestimmten Person
const updateSteven = async () => {
  try {
    // Aktualisiert das Dokument mit der angegebenen ID und setzt den Namen auf "Mohamed2"
    const result = await Person.updateOne(
      { _id: "66bb170c90df5dee91e62314" },
      { name: "Mohamed2" }
    );
    console.log(result); // Gibt das Ergebnis der Aktualisierung aus
  } catch (err) {
    console.log(err); // Gibt einen Fehler aus, falls einer auftritt
  } finally {
    // Schließt die Verbindung zur Datenbank
    mongoose.connection.close();
  }
};

// updateSteven();

// Funktion zum Löschen eines bestimmten "Fruit"-Dokuments
const deleteFruit = async () => {
  try {
    // Löscht das Dokument mit der angegebenen ID
    const result = await Fruit.deleteOne({ _id: "66bb0ed51d2d1b2b2cb1ec6f" });
    console.log(result); // Gibt das Ergebnis des Löschens aus
  } catch (err) {
    console.log(err); // Gibt einen Fehler aus, falls einer auftritt
  }
};

// deleteFruit();

// const johns = new Person({
//   name: "John",
//   alter: 23,
// });

// johns.save();

// Funktion zum Löschen aller "Person"-Dokumente mit dem Namen "John"
const deleteJohns = async () => {
  try {
    // Löscht alle Dokumente, die den Namen "John" haben
    const result = await Person.deleteMany({ name: "John" });
    console.log(result); // Gibt das Ergebnis des Löschens aus
  } catch (err) {
    console.log(err); // Gibt einen Fehler aus, falls einer auftritt
  } finally {
    // Schließt die Verbindung zur Datenbank
    mongoose.connection.close();
  }
};

// deleteJohns();
