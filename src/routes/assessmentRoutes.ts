import express from "express";
import {
  createAssessmentSession,
  getAssessmentSessions,
  getAssessmentSessionById,
  getActiveAssessmentSessions,
  updateAssessmentSession,
  deleteAssessmentSession,
} from "../controllers/assessmentSessionController";

const router = express.Router();

// ✅ Create a new assessment session
//@ts-ignore
router.post("/assessment-sessions", createAssessmentSession);

// ✅ Get all assessment sessions
//@ts-ignore
router.get("/assessment-sessions", getAssessmentSessions);

// ✅ Get assessment session by ID
//@ts-ignore
router.get("/assessment-sessions/:id", getAssessmentSessionById);

// ✅ Get active assessment sessions
//@ts-ignore
router.get("/active-assessment-sessions", getActiveAssessmentSessions);

// ✅ Update an assessment session
//@ts-ignore
router.put("/assessment-sessions/:id", updateAssessmentSession);

// ✅ Delete an assessment session
//@ts-ignore
router.delete("/assessment-sessions/:id", deleteAssessmentSession);

export default router;
