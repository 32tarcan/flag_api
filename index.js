const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const countries = require("./countries");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/country/:name", (req, res) => {
  try {
    const name = req.params.name.toLowerCase();
    const flag = countries[name];
    if (flag) {
      res.json({ flagUrl: flag });
    } else {
      res.status(404).json({ error: "Country not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => console.log("API is running on PORT " + PORT));
