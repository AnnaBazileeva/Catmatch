import {useState, useEffect, useCallback} from 'react';
import {Routes, Route,  useNavigate} from "react-router-dom";
import Home from "./src/pages/HomePage.jsx";
import About from "./src/pages/About.jsx";
import Header from './src/shared/Header.jsx';
import NotFound from "./src/pages/NotFound.jsx"
import './App.css';
import './src/styles/fonts.css';
import Footer from "./src/shared/Footer.jsx";
import ResultPage from "./src/pages/ResultPage.jsx";


const App = () => {
    const [breedList, setBreedList] = useState([]);
    const [image, setImage] = useState(null);
    const [catBreed, setCatBreed] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [history, setHistory] = useState(() => {
        const stored = localStorage.getItem('uploadHistory');
        return stored ? JSON.parse(stored) : [];
    });
    const navigate = useNavigate();

    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        localStorage.setItem('uploadHistory', JSON.stringify(history));
    }, [history]);


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
            const newEntry = {
                id: Date.now(),
                image: imageUrl,
                breed: randomBreed.name
            };
            setHistory(prev => [...prev, newEntry]);
            setIsLoading(false);
            navigate('/result', {
                state: {
                    breed: randomBreed,
                    userImage: imageUrl,
                },
            });
        }, 1500);
    }, [breedList, navigate]);

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem('uploadHistory');
    };

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
                                history={history}
                                clearHistory={clearHistory}
                            />
                        }
                    />
                    <Route path="/result" element={<ResultPage />} />
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
