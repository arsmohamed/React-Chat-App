const express = require("express");
const cors = require("cors"); // for calling calls from any different origin 

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  console.log(req)
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);