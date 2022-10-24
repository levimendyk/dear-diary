// connection LEVI-JUST BASE CODE, MAY NEED MODIFIED
const { connect, connection } = require("mongoose");

connect(process.env.MONGODB_URI || "mongodb://localhost/usersPosts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
