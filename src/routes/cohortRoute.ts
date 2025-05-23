import express from "express";
import {
  createCohort,
  deleteCohort,
  getCohorts,
  updateTeacherRankings,
  getTeacherRankings,
} from "../controllers/cohortController";

const router = express.Router();

//@ts-ignore
router.post("/", createCohort);
//@ts-ignore
router.get("/", getCohorts);
//@ts-ignore
router.delete("/:id", deleteCohort);

// Teacher ranking routes
//@ts-ignore
router.post("/:cohortId/rankings", updateTeacherRankings);
//@ts-ignore
router.get("/:cohortId/rankings", getTeacherRankings);

export default router;
