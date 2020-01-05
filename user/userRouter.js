const router = require("express").Router();

const Users = require("./userModel.js");
const restricted = require("../auth/restrictedMiddleware.js");

router.get("/", restricted, checkRole("admin"), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function checkRole(role) {
  return function(req, res, next) {
    if (req.token && role === req.token.role) {
      next();
    } else {
      res
        .status(403)
        .json({ message: `You have no power here, you must be an ${role}` });
    }
  };
}

module.exports = router;
