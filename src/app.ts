import express from "express";
import helmet from "helmet";
import noCache from "nocache";
import cors from "cors";
import * as dotenv from "dotenv";

// import { apiVersion } from "./constants";

import { errorHandler, notFoundHandler } from "./middleware/error.middleware";

import StoreInterface from "./types-and-interfaces/store.interface";

declare module "express" {
  interface Request {
    store?: StoreInterface;
  }
}

dotenv.config();

const app = express();

app.use(cors());
app.use(noCache());
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.end("Works!!");
});

// handle unhandled rejections

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
