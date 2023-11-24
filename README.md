# Cocktail
This repository contains a simple web application built with Express.js that fetches a random cocktail from TheCocktailDB API and displays its details. The project utilizes the Express.js framework for server-side development and Axios for making HTTP requests.

# Installation
1. Clone the repository: git clone https://github.com/your-username/cocktail-project.git

2. Navigate to the project directory: cd cocktail-project

3. Install dependencies: npm install

# Usage
1. Run the application: npm start 

2. Open your web browser and go to http://localhost:8080 to view the application.

# Project Structure

index.js: The main server file that sets up the Express application, defines routes, and starts the server.

public: Contains static assets (e.g., stylesheets, images) that can be served by the application.

views: Holds the EJS templates for rendering HTML pages.

# Dependencies

Express.js: A web application framework for Node.js.

Axios: A promise-based HTTP client for making requests to the CocktailDB API.

Body Parser: Middleware to handle HTTP POST requests and extract the form data.

# Routes

GET /: Fetches a random cocktail from the CocktailDB API and renders the cocktail details using the EJS template.

POST /: Similar to the GET route, it fetches and renders a new random cocktail.

# Template

views/index.ejs: EJS template for rendering the cocktail details on the web page.

# Configuration

port: The server runs on port 8080 by default. You can change this in the index.js file.

# Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Feel free to open issues for any bugs, enhancements, or feature requests.
