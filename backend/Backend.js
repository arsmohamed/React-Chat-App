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
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: {"private-key": "ea592bca-e6e9-4376-bcf7-ea5d0cf12ece"}}
    )
    // console.log(res.status(r.status).json(r.data))
    return res.status(r.status).json(r.data)
  } catch(e) {
    console.log(res.status(e.response).json(e.response.data))
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);