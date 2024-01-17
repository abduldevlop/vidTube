import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import cors from "cors";
import coookieParser from "cookie-parser";

import { errorHandler } from "./middlewares/errorHandler.middleware.js";

// express middlewares
app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);
// get assets on public foldere
app.use(express.static("public"));

// cors and cookieParser
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(coookieParser()); // cookie get for CRUD operarion
app.use(errorHandler); // for errors handle middleware

// ROUTES IMPORTS
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import videoRoutes from "./routes/video.routes.js";
import commentRoutes from "./routes/comment.routes.js";

// DEFINE ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/comment", commentRoutes);

export { app };
