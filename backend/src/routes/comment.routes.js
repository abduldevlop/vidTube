import { Router } from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.controllers.js";
const router = Router();

// add comment
router.route("/addComment").post(addComment);

// delete comment
router.route("/delete/:commentId").delete(deleteComment);

// add comment
router.route("/find/:vidoeId").get(getComments);
export default router;
