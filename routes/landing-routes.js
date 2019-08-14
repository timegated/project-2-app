const db = require('../models')
const nhtsa = require('nhtsa')
const carNames = require('car-names')
const models = require('car-models')




module.exports = (app) => {
  app.get('/', (req, res) => {
   
      res.render('models')
   
    })
    app.get('/models', (req, res) => {
       db.Cars.findAll({})
    .then(data => {
      let carObject = {cars:data}
      console.log(carObject)
      res.render('models', carObject)
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

  app.get('/api/info', (req,res) => {
      nhtsa.getAllMakes()
      .then(result => {
         res.json(result.data.Results)
    })
  })

  app.get('/api/carnames', (req, res) => {
      const allNames = carNames.all
      res.json(allNames)
  })

  app.get('/api/carmodels', (req, res) => {
      res.json(models.all())
  })

}
