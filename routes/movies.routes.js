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

router.get("/movies/:id", (req, res) => {
  Movie.findOne({ title })
    .populate("cast")
    .then((allCast) => {
      res.render("movies/movie-details", { allCast });
    })
    .catch((error) => console.log(error));
});

router.post("/movies/:id/delete", (req, res) => {
  Movie.findByIdAndDelete(Id)
    .then(() => res.redirect("/movies"))
    .catch((error) => console.log(error));
});

router.post("/movies/:id/edit", (req, res) => {
  Movie.findOne(Id);
  Celebrity.find()
    .then(() => res.render("/movies/edit-movie"))
    .catch((error) => console.log(error));
});

router.post("/movies/:id", (req, res) => {
  const { title, genre, plot, cast } = req.body;

  Movie.update({ title })
    .then(() => res.redirect("/movies"))
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
