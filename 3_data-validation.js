const mongoose = require("mongoose");

main().catch((err) => console.error(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}

// Definiert das Schema für die "Fruit"-Dokumente in der MongoDB-Datenbank mit Validierung
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name defined"], // Name ist erforderlich, Fehlermeldung wenn nicht definiert
  },
  rating: {
    type: Number,
    min: [1, "can't be lower than 1"], // Mindestbewertung ist 1, Fehlermeldung wenn niedriger
    max: [10, "can't be higher than 10"], // Höchstbewertung ist 10, Fehlermeldung wenn höher
    required: [true, "no rating defined"], // Bewertung ist erforderlich, Fehlermeldung wenn nicht definiert
  },
  review: String,
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "great",
});

fruit.save();
