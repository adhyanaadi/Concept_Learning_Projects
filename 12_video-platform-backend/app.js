// Why we do not use export default app
// For setting the public as our static folder.
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // Allow only the specified origin (or all)
    credentials: true, // Allow cookies & authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

export { app };
