const express = require("express");
const db = require("./config/connection.js");
const routes = require("./routes");
const app = express();
const port = 3001;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(routes);

// Starting the Mongo connection once db open port
db.once("open", () => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
