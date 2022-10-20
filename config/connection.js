// connection LEVI-JUST BASE CODE, MAY NEED MODIFIED
const { connect, connection } = require('mongoose');

connect('mongodb://localhost/usersPosts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
