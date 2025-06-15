import {useState, useEffect, useCallback} from 'react';
import {Routes, Route} from "react-router-dom";
import UploadForm from './features/UserForm.jsx';
import Card from './shared/Card';
import CatBreedResult from './features/CatBreedResult.jsx';
import About from "./pages/About.jsx";
import Header from './shared/Header.jsx';
import NotFound from "./pages/NotFound.jsx"
import '../App.css';
import './styles/fonts.css';


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
        <div style={{padding: '2rem'}}>
            <Header/>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="centeredSection">
                                {!catBreed && <UploadForm onSubmit={handleAnalyze}/>}
                                {isLoading && <p>Loading...</p>}
                                {error && <p style={{color: 'red'}}>{error}</p>}
                                {catBreed && (
                                    <Card>
                                        <div className="container">
                                            <CatBreedResult breed={catBreed} userImage={image}/>
                                        </div>
                                    </Card>
                                )}
                            </div>
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
                            </div>
                            );
                        };

export default App;
