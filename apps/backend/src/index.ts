import express from "express";
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (_, res) => {
  res.send("Backend is running!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
