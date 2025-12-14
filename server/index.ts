import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  app.get("/api/screenshot", async (req, res) => {
    try {
      const { url } = req.query;
      if (!url || typeof url !== "string") {
        return res.status(400).json({ error: "URL parameter required" });
      }

      const screenshotUrl = `https://image.thum.io/get/png/width=600/height=400/crop=1200/${encodeURIComponent(url)}`;
      const response = await fetch(screenshotUrl);

      if (!response.ok) {
        throw new Error(`Screenshot service error: ${response.statusText}`);
      }

      const buffer = await response.arrayBuffer();
      res.setHeader("Content-Type", "image/png");
      res.setHeader("Cache-Control", "public, max-age=86400");
      res.send(Buffer.from(buffer));
    } catch (error) {
      console.error("Screenshot error:", error);
      res.status(500).json({
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate screenshot",
      });
    }
  });

  return app;
}
