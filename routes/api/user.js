const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('../../passport')
const Book = require('../../models/Book');

//skldjfsdfjoe


router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password, email } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                email: email
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

// This is a middleware. 
// This checks to make sure the user is logged in
// before allowing them to continue to the page 

    // **** This should be put in every get request in this file
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        // if the user is not logged in, redirect them to signup
        res.redirect('/signup');
    }
module.exports = router