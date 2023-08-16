# MovieLand App

MovieLand is a simple web application that allows users to search for movies using the OMDB API and display their information.

## Features

- Search for movies using a title keyword.
- Display a list of movies with their details.
- Responsive design for a seamless experience on different devices.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/felender7/MovieLand.git

   ```

2. Navigate to the project directory:

   ```sh
   cd MovieLand

   ```

3. Install the dependencies:

   ```sh
   npm install

   ```

4. Create an account on OMDB[(https://www.omdbapi.com/apikey.aspx)] API to obtain an API key.

5. Replace "YOUR_API_KEY" in App.js with your actual OMDB API key:

   ```sh
   const API_URL = "http://www.omdbapi.com/?apikey=YOUR_API_KEY";

   ```

6. Start the development server::

   ```sh
   npm start

   ```

7. Usage:

   1. Enter a movie title in the search input.
   2. Click the search icon or press Enter to search for movies.
   3. View the list of movies and their details

8. Technologies Used
   React
   OMDB API
   CSS
9. Acknowledgements
   OMDB API: Used for fetching movie data.
   Icons made by Freepik from Flaticon.
