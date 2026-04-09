// Handles request related to movies 
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {getHome,getAllMovies,getMovieById,addMovie,updateMovie,deleteMovie} = require("../controllers/movieController");

const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();
// get home : it will return a welcome message
router.get("/",  getHome);
// it will return all the  movies in the dataset
router.get("/movies",getAllMovies);
// get the movie details by id
router.get("/movies/:id",getMovieById );
// adding a new movie to dataset (only admin can add)
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
// updating the movie details by id (only admin can add)
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
// deleting the movie by id (only admin can add)
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);

module.exports = router;