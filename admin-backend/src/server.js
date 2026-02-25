require("dotenv").config();

const { createApp } = require("./app");
const { connectDB } = require("./config/db");

const PORT = Number(process.env.PORT || 5001);

async function start() {
  await connectDB();

  const app = createApp();

  app.listen(PORT, () => {
    console.log(`Admin backend running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});