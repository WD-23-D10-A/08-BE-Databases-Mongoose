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
  // Einbettung eines "Fruit"-Schemas als Lieblingsfrucht der Person
  favouriteFruit: fruitSchema,
});

const Person = new mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 10,
  review: "ok",
});

// Funktion zum Erstellen einer neuen Person und Speichern in der Datenbank
const createPerson = async () => {
  // Erstellt ein neues "Person"-Dokument mit der Lieblingsfrucht Ananas
  const person = new Person({
    name: "Amy",
    age: 19,
    favouriteFruit: pineapple,
  });

  try {
    // Speichert die Ananas und die Person in der Datenbank
    await pineapple.save();
    const result = await person.save();
    console.log(result); // Gibt das gespeicherte Person-Dokument aus
  } catch (err) {
    console.log(err); // Gibt einen Fehler aus, falls einer auftritt
  } finally {
    // Schließt die Verbindung zur Datenbank
    mongoose.connection.close();
  }
};

// createPerson();

const banana = new Fruit({
  name: "banana",
  rating: 10,
  review: "banana",
});

// Funktion zum Aktualisieren der Lieblingsfrucht einer bestimmten Person
const updateSteven = async () => {
  try {
    // Speichert die Banane in der Datenbank
    await banana.save();
    // Aktualisiert das Dokument der Person mit der angegebenen ID und setzt die Lieblingsfrucht auf Banane
    const res = await Person.updateOne(
      { _id: "66bb1015576e301c1b16914c" },
      { favouriteFruit: banana }
    );
    console.log(res); // Gibt das Ergebnis der Aktualisierung aus
  } catch (err) {
    console.log(err); // Gibt einen Fehler aus, falls einer auftritt
  } finally {
    // Schließt die Verbindung zur Datenbank
    mongoose.connection.close();
  }
};

updateSteven();
