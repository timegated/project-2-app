// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Cars.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });


//   //Create a new example
//   app.post("/api/cars", function(req, res) {
//     db.Cars.create({
//       make: req.body.make,
//       model: req.body.model,
//       year: req.body.year,
//       price: req.body.price
//     })
//     .then(response => {
//       // console.log(response)
//     })
//     .catch(err => {
//       console.log(err)
//     })
  
//   });

//   Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Examples.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };

