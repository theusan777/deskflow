import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ status: "Health check successful!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "Health check successful!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

