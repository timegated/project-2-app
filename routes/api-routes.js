const db = require('../models')

module.exports = (app) => {
  app.get('/', (req, res) => {
    db.Cars.findAll({})
    .then(data => {
      let carObject = {cars:data}
      console.log(carObject)
      res.render('index', carObject)
    })
    .catch(err => {
      console.log(err)
    })
     
    
  })
  app.post('/api/cars', (req, res) => {
    db.Cars.create({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price
    }).then(data => {
      // console.log(data)
    })
    // console.log(req.body)
  })
}
