var db = require("../models");

module.exports = (app) => {

  app.post('/api/vehicles', (req, res) => {
    db.Cars.create({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price
    }).then(data => {
      // console.log(data)
    }).catch(err => {
      console.log(err)
    })
    console.log(req.body)
  })

  app.get("/", function(req, res) {

    db.Cars.findAll({})
    .then(data => {
      res.render("index", {
        cars: data,
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
      console.log(response.dataValues)
    })
    .catch(err => {
      console.log(err)
    })
    // console.log(req.body.datavalues)
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
