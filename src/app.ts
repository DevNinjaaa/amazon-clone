import helmet from "helmet";
import passport from "passport";
import { json } from "body-parser";
import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.use(json());

app.use(express.json());

app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  })
);

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/*", (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

export default app;
