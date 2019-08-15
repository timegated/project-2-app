const db = require('../models')
// Need dummy data.
// create and read methods working
// Need delete and update.

module.exports = (app) => {

  // Home page - Currently for adding cars
  app.get('/', (req, res) => {

    res.render('landing')
  })

   

  app.get('/addcar', (req, res) => {
    res.render('addcar')
  });
  // Delete vehicles from inventory
  app.put('/models/:id', (req, res) => {
    db.Cars.update({
      status: true
    }, {
      where: req.body.id
    }).then(data => {
      console.log(data)
    })
  })
  app.delete('/models/:id', (req, res) => {

    db.Cars.destroy({
      where: {
        id: req.params.id
      }

    });
  });
  // Displaying all cars added to the database
  app.get('/models', (req, res) => {
    console.log("get models");
    db.Cars.findAll({})
      .then(data => {
        const carObject = { cars: data }
        console.log(carObject)
        res.render('models', carObject)
      })
      .catch(err => {
        console.log(err)
      })
  })
  // Form for adding new cars to database
  app.post('/api/cars', (req, res) => {
    db.Cars.create({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      image: req.body.image,
      price: req.body.price,
      mileage: req.body.mileage,
      description: req.body.description,
      status: false
    }).then(data => {
      // console.log(data)
    })
    // console.log(req.body)
  })

}
