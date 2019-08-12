var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Cars.findAll({})
    .then(response => {
      res.render("index", {
        cars: response,
        
      });
    })
    .catch(err => {
      console.log(err)
    });
  });
  app.post("/api/cars", (req, res) => {
    db.Cars.create({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price
    })
    .then(response => {
      // console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  })
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Cars.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       car: dbExample
  //     });
  //   });
  // });
};
