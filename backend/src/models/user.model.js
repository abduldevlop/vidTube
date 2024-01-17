import mongoose, { Schema } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profile: {
      type: String,
    },
    cover: {
      type: String,
    },
    subscribers: {
      type: [String],
    },
    subscribeChannel: {
      type: [String],
    },
    google: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
