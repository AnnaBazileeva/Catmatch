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

How to Run This Project Locally:
Step1: Download the Repository
git clone https://github.com/your-username/catmatch.git
cd catmatch

Step 2: Install Dependencies
npm install
This installs: react, react-router-dom, vite, other required packages

Step 3: Get an API Key from TheCatAPI
Go to https://thecatapi.com/
Click Sign Up (or log in if you already have an account).
Go to your Dashboard and copy your API Key.

Step 4: Create a .env File
In the root of your project (next to package.json), create a file called: .env
Paste this into it: VITE_API_KEY=your_api_key_here and replace your_api_key_here with the actual key you got from TheCatAPI.

Step 5: Run the App
Start the development server: npm run dev
You should see a message like: Local:   http://localhost:5173/ Open that link in your browser.

Step 6: Troubleshooting
If you see a blank page or errors in the console, double-check your .env file and make sure your API key is valid. Restart the server after creating or updating .env



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