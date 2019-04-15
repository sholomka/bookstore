module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        return res.json(101, {
            message: "Please log in to view this resource",
        });
    }
};