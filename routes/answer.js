var router = require("express").Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

const { getUserById } = require("../controllers/user");
const { getExamById } = require("../controllers/exam");
const {
  getAnswerById,
  createAnswer,
  editAnswer,
  getAnswerByhost,
  getAnswerByCandidate,
  exitAnswer,
  getAllAnswerOfExam,
  getAnswerOfCandidate,
} = require("../controllers/answer");

router.param("userId", getUserById);
router.param("examId", getExamById);
router.param("answerId", getAnswerById);

// Create Answer
router.get(
  "/answer/:userId/:examId",
  isSignedIn,
  isAuthenticated,
  createAnswer
);

// Edit answer
router.put(
  "/answer/:userId/:examId/:answerId",
  isSignedIn,
  isAuthenticated,
  editAnswer
);

// Exit answer
router.put(
  "/answer/exit/:userId/:examId/:answerId",
  isSignedIn,
  isAuthenticated,
  exitAnswer
);

// Get all answers for exam
router.get(
  "/host/answers/:userId/:examId",
  isSignedIn,
  isAuthenticated,
  getAllAnswerOfExam
);

// Get answers for candidate
router.post(
  "/candidate/answer/:userId/:examId",
  isSignedIn,
  isAuthenticated,
  getAnswerOfCandidate
);

module.exports = router;
