CatMatch is a playful web application where users upload a picture of themselves to discover which cat breed they resemble the most. The app uses TheCatAPI to fetch breed information and images, providing a fun, visual result for each user.


Features
Upload an image and get "matched" with a random cat breed
Fetches cat breed list and images from [TheCatAPI](https://thecatapi.com/)
Clean routing with React Router
Responsive layout with styled components

Project Structure
/src
/assets
  /fonts
    /images
/features
- CatBreedResult.jsx
- UserForm.jsx
/pages
- About.jsx
- HomePage.jsx
- NotFound.jsx
- ResultPage.jsx
/shared
- Card.jsx
- Footer.jsx
- Header.jsx
/styles
- *.module.css
- App.jsx
- App.css
- main.jsx


Package
`react-router-dom`  Routing between pages
`vite`              Fast frontend bundler
`@vite/env`        Use of environment variables
`TheCatAPI`        For cat breed data and breed images

Tech Stack
Frontend: React (Vite), React Router 
Styling: CSS Modules
API: [TheCatAPI](https://thecatapi.com/)

API Usage
Breeds Endpoint:
GET https://api.thecatapi.com/v1/breeds

Breed Image Search:
GET https://api.thecatapi.com/v1/images/search?breed_ids={breed_id}&api_key={API_KEY}

All breed image calls require an API key in the query string.



Author
Made by Anna Bazileeva, final React project Jay class CTD school, 2025