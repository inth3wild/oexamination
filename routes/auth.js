var router = require("express").Router();
const { check, validationResult } = require("express-validator");
const {
  signup,
  signin,
  signout,
  isSignedIn,
  changepswd,
  isAuthenticated,
} = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "Minimum password length is 8 characters").isLength({
      min: 8,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "Minimum password length is 8 characters").isLength({
      min: 8,
    }),
  ],
  signin
);

router.get("/signout", isSignedIn, isAuthenticated, signout);

router.put(
  "/changepassword/:userId",
  [
    check("password", "Minimum password length is 8 characters").isLength({
      min: 8,
    }),
  ],
  getUserById,
  isSignedIn,
  isAuthenticated,
  changepswd
);

module.exports = router;
