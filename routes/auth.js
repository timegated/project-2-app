module.exports = (app) => {
    app.get('/login', (req,res) => {
        res.render('auth')
    })
    app.get('/signup', (req, res) => {
        res.render('signup')
    })
}