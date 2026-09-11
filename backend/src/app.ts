import cors from "cors";
import express from "express";
import helmet from "helmet";
import { pinoHttp } from "pino-http";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import portfolioRouter from "./routes/portfolio.routes.js";
import profileRouter from "./routes/profile.routes.js";
import summaryRouter from "./routes/portfolioSummary.routes.js";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.CLIENT_ORIGIN }));
app.use(express.json({ limit: "1mb" }));
app.use(pinoHttp());

app.get("/health", (_req, res) => {
  res.json({ success: true, data: { status: "ok" } });
});
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/portfolio", summaryRouter);
app.use("/api/v1", portfolioRouter);
app.use(notFoundHandler);
app.use(errorHandler);
