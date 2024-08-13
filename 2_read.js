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

// Asynchrone Funktion, um ein bestimmtes "Fruit"-Dokument aus der Datenbank abzurufen
const getFruit = async () => {
  try {
    // Findet das "Fruit"-Dokument mit der angegebenen ID
    const apple = await Fruit.find({ _id: "66bb0eb995e4654185a2e72f" });
    console.log(apple); // Gibt das gefundene Dokument aus
  } catch (err) {
    console.log(err); // Gibt einen Fehler aus, falls einer auftritt
  } finally {
    // Schließt die Verbindung zur Datenbank
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

// Asynchrone Funktion, um alle "Fruit"-Dokumente aus der Datenbank abzurufen und deren Namen auszugeben
const getNames = async () => {
  try {
    // Findet alle "Fruit"-Dokumente in der Datenbank
    const fruits = await Fruit.find();
    // Gibt den Namen jeder Frucht aus
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
