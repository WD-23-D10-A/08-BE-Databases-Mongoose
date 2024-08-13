# 08-BE-Databases-Mongoose

## Intro to Mongoose

-   Mongoose Dokus [hier.](https://mongoosejs.com/docs/)

Vor den Ferien haben wir uns eine Möglichkeit angesehen, wie unsere Node.js-App mit der MongoDB-Datenbank zusammenarbeiten kann. Und das war durch die Verwendung des nativen MongoDB-Treibers. Sie haben gesehen, wie mühsam es war, etwas sehr Einfaches zu tun. In der Mongo-Shell waren es drei oder vier Zeilen Befehle und durch die Verwendung des nativen Treibers wurden daraus 20, 30 Zeilen Code. Und ein großer Teil davon war das Hinzufügen von Validierungscode und das Schreiben von Boilerplate oder einfach nur die Verbindung zum MongoDB-Server. Aus diesem Grund verwenden die meisten Node-Entwickler, die mit MonoDB arbeiten, ein Paket namens Mongoose und das ist ein sogenannter ODM oder Object Document Mapper. Das Hauptziel dieses Frameworks ist es, das Schreiben von Validierungscode zu vereinfachen, das Schreiben von Boilerplate für die Geschäftslogik zu vereinfachen und den Code einfach kürzer und einfacher zu machen. Alles, was wir bisher mit dem MongoDB-Treiber gemacht haben, müssen wir bei der Verwendung von Mongoose im Grunde nur noch schreiben:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

## FYI

### ES15 (NodeJS)

```js
const mongoose = require('mongoose');
```

dann mongoose.connect verwenden

### ES16 (import/export)

```js
import * as mongoose from `mongoose`;
```
dann mongoose.connect verwenden

oder

```js
import {connect} from `mongoose`;
```

connect ohne mongoose. verwenden

## back to topic

Wir benötigen das Mongoose-Paket, stellen eine Verbindung zur Datenbank her und erstellen eine neue Datenbank, falls sie noch nicht existiert. Und dann erstellen wir ein neues Modell für die Darstellung unserer Daten. Dies ist der einzige neue Teil und wir werden ihn im Detail durchgehen. Und mit diesem neuen Modell erstellen wir ein neues Dokument. Und dann speichern wir einfach unser Modell in der MongoDB-Datenbank. Es ist also wesentlich kürzer.


Schauen wir uns also an, wie wir Mongoose verwenden können, um unsere Obstdatenbank viel einfacher zu machen.

Entweder verwenden Sie weiterhin Mongod/Mongoose oder laden Sie einen Kompass herunter, der alle Ihre eigenen Datenbanken entfernt.

Nimm die fruits.json und lade sie in eine neue fruitsDB in compass hoch.


Jetzt sind wir bereit, zurück in unsere app.js zu gehen und wir werden den gesamten Code ändern und statt des nativen MongoDB-Treibers Mongoose verwenden.

Das Wichtigste zuerst: Wir müssen Mongoose benötigen/importieren.

Aber wenn Sie sich erinnern, haben wir es noch nicht mit NPM installiert. Gehen Sie also zum Terminal und stellen Sie sicher, dass Sie sich immer noch in Ihrem fruits-Projekt befinden, und installieren Sie das mongoose-Paket mit npm install.

Sobald das erledigt ist, können wir uns dem nächsten Ziel zuwenden, nämlich der Verbindung zu unserer MongoDB-Datenbank.

```js
mongoose.connect("mongodb://127.0.0.1:27017");
```

Damit wird der Port angegeben, über den wir auf unseren MongoDB-Datenbankserver zugreifen können. Und dann müssen wir nur noch einen weiteren Schrägstrich an das Ende setzen und können den Namen der Datenbank angeben, die wir erstellen oder mit der wir uns verbinden wollen.

```js
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
```

Es wird also eine Verbindung zu unserem MongoDB-Server hergestellt, und dann wird nach einer Datenbank namens fruitsDB gesucht, und wenn diese nicht existiert, wird diese brandneue Datenbank erstellt. Und das ersetzt unseren gesamten vorherigen Code.