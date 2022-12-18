// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
// all your routes here
router.get("/celebrities", (req, res, next) => {
  res.render("celebrities/celebrities");
});

app.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

app.post("/celebrities/createm", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase }).catch((error) =>
    console.log(error)
  );
  if (error) {
    res.render("celebrities/new-celebrity");
  } else {
    res.redirect("celebrities/celebrities");
  }
});

module.exports = router;
