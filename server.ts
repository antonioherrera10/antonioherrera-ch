import express from "express";
import next from "next";
import { parse } from "url";

const dev = process.env.NODE_ENV !== "production";
const hostname = "0.0.0.0";
const port = 3000;

// Initialize Next.js app in programmatic mode
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    // Proxy all requests directly to the Next.js request handler
    server.all(/.*/, (req, res) => {
      const parsedUrl = parse(req.url!, true);
      handle(req, res, parsedUrl);
    });

    server.listen(port, hostname, () => {
      console.log(`> Full-stack Next.js production server ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start programmatic Next.js server:", err);
    process.exit(1);
  });
