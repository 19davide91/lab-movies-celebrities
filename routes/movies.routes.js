// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");

// all your routes here
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      res.render("movies/movies", { allMovies });
    })
    .catch((error) => console.log(error));
});

router.get("/movies/create", (req, res) => {
  res.render("movies/new-movie");
});

router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body;

  Movie.create({ title, genre, plot, cast })
    .then(() => res.redirect("/movies"))
    .catch((error) => {
      console.log(error);
      res.render("movies/new-movie");
    });
});

module.exports = router;
