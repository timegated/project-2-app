//Need to control the difference between what an anonymous user sees and what a registered/logged in user sees.
const db = require('../models')
module.exports = (app) => {
    app.get('/login', (req,res) => {
        res.render('login')
    });

    app.get('/signup', (req, res) => {
        res.render('signup')
    });

    app.post('/signup', (req, res) => {
        db.Users.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(data => {
            res.redirect('/models')
        })
    });

}