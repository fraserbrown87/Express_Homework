//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');


const express = require('express')
const filmsRouter = new express.Router();

// INDEX
filmsRouter.get("/", function(req, res){
  res.json({data: films});
})

// CREATE
filmsRouter.post('/', function(req, res){
  films.push(req.body.film);
  res.json({data: films});
});

// SHOW
filmsRouter.get('/:id', function(req, res){
  console.log(req.params.id);
  console.log(films[req.params.id]);

  res.json(films[req.params.id]);
});

filmsRouter.put('/:id/addReview', function(req, res){
  //console.log({data: films[req.params.id]}["data"])
  var film = new Film({data: films[req.params.id]}["data"]);
  //console.log(film);
  var review = new Review({
    comment: "It's Great!",
    rating: 80,
    author: "Fraser"
  });
  film.addReview(review);
  console.log(film);
  films[req.params.id] = film;
  //console.log(films[req.params.id])
  res.json(films[req.params.id]);
});

// UPDATE
filmsRouter.put('/', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

// DESTROY
filmsRouter.delete('/', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});



module.exports = filmsRouter;
