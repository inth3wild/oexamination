var router = require("express").Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const {
  getUserById,
  getUser,
  updateUser,
  getUsers,
  getUserUpcomingExam,
  getUserAttainedExam,
} = require("../controllers/user");

router.param("userId", getUserById);

// Get user
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

// Get all users
router.get("/all/user/:userId", isSignedIn, isAuthenticated, getUsers);

// Update user
router.post("/user/:userId", isSignedIn, isAuthenticated, updateUser);

// Get user upcoming exam
router.get(
  "/user/upcomingexam/:userId",
  isSignedIn,
  isAuthenticated,
  getUserUpcomingExam
);

// Get user attained exam
router.get(
  "/user/examattained/:userId",
  isSignedIn,
  isAuthenticated,
  getUserAttainedExam
);

module.exports = router;
