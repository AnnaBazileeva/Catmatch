import {useState, useEffect, useCallback} from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./src/pages/HomePage.jsx";
import About from "./src/pages/About.jsx";
import Header from './src/shared/Header.jsx';
import NotFound from "./src/pages/NotFound.jsx"
import './App.css';
import './src/styles/fonts.css';
import Footer from "./src/shared/Footer.jsx";


const App = () => {
    const [breedList, setBreedList] = useState([]);
    const [image, setImage] = useState(null);
    const [catBreed, setCatBreed] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const res = await fetch('https://api.thecatapi.com/v1/breeds');
                const data = await res.json();
                setBreedList(data);
            } catch (err) {
                setError('Failed to load breed list');
            }
        };
        fetchBreeds();
    }, []);

    const handleAnalyze = useCallback((file) => {
        setIsLoading(true);
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);

        setTimeout(() => {
            const randomBreed = breedList[Math.floor(Math.random() * breedList.length)];
            setCatBreed(randomBreed);
            setIsLoading(false);
        }, 1500);
    }, [breedList]);

    useEffect(() => {
        return () => {
            if (image) URL.revokeObjectURL(image);
        };
    }, [image]);


    return (
        <div className="layout">
            <Header/>
            <main className="mainContent">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                handleAnalyze={handleAnalyze}
                                isLoading={isLoading}
                                error={error}
                            />
                        }
                    />
                    <Route
                        path="/about"
                        element={<About/>}
                    />
                    <Route
                        path="*"
                        element={<NotFound/>}
                    />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
