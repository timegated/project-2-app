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
    res.render("index")
  
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
