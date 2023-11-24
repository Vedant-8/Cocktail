import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 8080;
const API_URL = "https://thecocktaildb.com/api/json/v1/1/random.php";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/", async(req, res) => {
   const cocktail = await axios.get(API_URL);
   const cocktailData = cocktail.data.drinks[0];
   const drink = cocktailData.strDrink;
   const glass = cocktailData.strGlass;
   const image = cocktailData.strDrinkThumb;
   const category = cocktailData.strCategory;
   
   // Filter out non-null strIngredient values
   const ingredients = Object.entries(cocktail.data.drinks[0])
   .filter(([key, value]) => key.startsWith('strIngredient') && value !== null)
   .map(([key, value]) => value);

   const instructions = cocktailData.strInstructions;
    
   res.render("index.ejs", {
    drink: drink,
    glass: glass,
    image: image,
    category: category,
    ingredients: ingredients,
    instructions: instructions,
   });
});

app.post("/", async(req, res) => {
   const cocktail = await axios.get(API_URL);
   const cocktailData = cocktail.data.drinks[0];
   const drink = cocktailData.strDrink;
   const glass = cocktailData.strGlass;
   const image = cocktailData.strDrinkThumb;
   const category = cocktailData.strCategory;
   
   // Filter out non-null strIngredient values
   const ingredients = Object.entries(cocktail.data.drinks[0])
   .filter(([key, value]) => key.startsWith('strIngredient') && value !== null)
   .map(([key, value]) => value);

   const instructions = cocktailData.strInstructions;
    
   res.render("index.ejs", {
    drink: drink,
    glass: glass,
    image: image,
    category: category,
    ingredients: ingredients,
    instructions: instructions,
   });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);    
});