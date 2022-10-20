const express = require("express");
const mongodb = require("mongodb").MongoClient;

const app = express();
const port = 3001;

// Connects to the database  LEVI-Need to add the databasename inside this URI
const connectionStringURI = `mongodb://127.0.0.1:27017/numbersDB`;

let db;

// Starting the Mongo connection LEVI-NEED TO ADJUST THE DB ETC.
mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    db.collection("numberList").deleteMany({});
    db.collection("numberList").insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log("Data inserted");
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);
