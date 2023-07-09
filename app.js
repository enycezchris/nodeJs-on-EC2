const express = require("express");
const app = express();

const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`listening on port ${PORT}`);
});
