import { Router } from "express";
import {
  deleteUser,
  dislike,
  getUser,
  likeVideo,
  subscibChannel,
  unsubscibChannel,
  updateUser,
} from "../controllers/user.controllers.js";
const router = Router();

// get a user
router.route("/find/:userId").get(getUser);

// update a user
router.route("/update/:userId").put(updateUser);

// delelte a user
router.route("/delete/:userId").delete(deleteUser);

// subscibe a channel
router.route("/sub/:channelUserId").put(subscibChannel);

// unsubscibe a channel
router.route("/unsub/:channelUserId").put(unsubscibChannel);

// like a video
router.route("/like/:videoId").put(likeVideo);

// dislike a video
router.route("/dislike/:videoId").put(dislike);
export default router;
