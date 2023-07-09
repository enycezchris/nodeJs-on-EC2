const express = require("express");
const app = express();

const PORT = 80 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
