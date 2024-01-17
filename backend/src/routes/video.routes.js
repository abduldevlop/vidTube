import { Router } from "express";
import {
  SearchVides,
  addVideo,
  addViewVideo,
  deleteVideo,
  getByTagVideos,
  getVideo,
  randomeVideos,
  subChannelVideos,
  trendVideos,
  updateVideo,
} from "../controllers/video.controllers.js";
const router = Router();

// create a video
router.route("/addvideo").post(addVideo);

// upadet a video
router.route("/update/:videoId").put(updateVideo);

// delete a video
router.route("/delete/:videoId").delete(deleteVideo);

// get a video
router.route("/find/:videoId").get(getVideo);

// add view a video
router.route("/view/:videoId").post(addViewVideo);

// get trands videos
router.route("/trendsVideos").get(trendVideos);

// get tags videos
router.route("/tagsVideos").get(getByTagVideos);

// get random videos
router.route("/randomVideos").get(randomeVideos);

// get subcribe channel videos
router.route("/subVideos").get(subChannelVideos);

// get seacrch videos
router.route("/seacrchVideos").get(SearchVides);
export default router;
