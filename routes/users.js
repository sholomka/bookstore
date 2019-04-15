const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login',  function handleLocalAuthentication(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) return next(err);
        if (!user) {
            return res.json(403, {
                message: "no user found",
                error: info
            });
        }

        // Manually establish the session...
        req.login(user, function(err) {
            if (err) return next(err);
            return res.json({
                message: 'user authenticated',
                user: user
            });
        });

    })(req, res, next);
});

// Logout Handle
router.get('/logout', (req, res) => {
    req.logout();

    return res.json({
        message: 'you are logged out'
    });
});

module.exports = router;