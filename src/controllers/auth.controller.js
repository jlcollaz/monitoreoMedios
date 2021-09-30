const authCtrl = {};

const passport = require('passport');
import pool from "../database";

authCtrl.getCanvas = async (req, res) => {
    const data = await pool.query("SELECT mes, veces FROM (select date_format(links.date, '%Y-%m') as mes, sum(links.count_id) as veces from links group by date_format(links.date, '%Y-%m') ORDER BY mes) as table2;");
    console.log(data);
    res.send(data);
};

authCtrl.renderSignUp = (req, res) => {
    res.render('auth/signup');
};

authCtrl.signUp = passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
});

authCtrl.renderSignIn = (req, res, next) => {
    res.render('auth/signin');
};

authCtrl.signIn = passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
});

authCtrl.logout = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = authCtrl;