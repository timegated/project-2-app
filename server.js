require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
const nhtsa = require("nhtsa")
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// nhtsa.getMakesForManufacturer('Toyota')
// .then(results => {
//   for(let item in results.data) {
//     console.log(results.data[item][1])
//   }
  
// })
// .catch(err => {
//   console.log(err)
// })
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Works! Listening on Port ${PORT}`);
  });
});

module.exports = app;
