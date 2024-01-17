import mongoose, { Schema } from "mongoose";

const videoSchema = Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    videoTitle: {
      type: String,
      required: true,
    },
    VideoDecs: {
      type: String,
      required: true,
    },
    thumbnale: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
