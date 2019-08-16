// Need to control the difference between what an anonymous user sees and what a registered/logged in user sees.
const db = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 10
module.exports = (app) => {
  app.get('/login', (req, res) => {
    res.render('login')
  })
  app.post('/login', (req, res) => {
    db.Users.findOne({
      where: {
        username: req.body.username
      }
    }).then(user => {
      if (!user) {
        res.redirect('/')
      } else {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (result === true) {
            res.redirect('models')
          } else {
            res.send('Incorrect Password')
            
          }
          console.log(result)
          
        })
      }
    })
  })
  app.get('/signup', (req, res) => {
    res.render('signup')
  })

  app.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      db.Users.create({
        username: req.body.username,
        password: hash
      }).then(data => {
        if (data) {
          res.redirect('/models')
        }
      })
    })
  })
}
