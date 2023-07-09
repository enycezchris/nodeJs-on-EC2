const express = require("express");
const app = express();

const jsonObj = { title: "Hello World!", description: "EC2 Node App!" };

const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.json(jsonObj);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`listening on port ${PORT}`);
});
