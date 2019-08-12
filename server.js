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

