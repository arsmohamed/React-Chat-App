const express = require("express");
const cors = require("cors"); // for calling calls from any different origin 
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      {headers: {"private-key": "94f00e84-d497-4e12-9dcc-48dec102d6e2"}}
    )
    return res.status(r.status).json(r.data)
  } catch(e) {

  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);