
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
const nhtsa = require("nhtsa")
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8000;

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./models")

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/htmlroutes.js')(app)



db.sequelize.sync({force:true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server works listening on ${PORT}`)
    })
})



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
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Works! Listening on Port ${PORT}`);
  });
});

module.exports = app;

