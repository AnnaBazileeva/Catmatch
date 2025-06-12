import { useState, useEffect, useCallback } from 'react';
import UploadForm from './components/UserForm';
import Card from './components/Card';
import CatBreedResult from './components/CatBreedResult';

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
        setImage(URL.createObjectURL(file));

        
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
        <div style={{ padding: '2rem' }}>
            <h1>Cat Breed Matcher</h1>
            <UploadForm onSubmit={handleAnalyze} />
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {catBreed && (
                <Card>
                    <CatBreedResult breed={catBreed} />
                </Card>
            )}
        </div>
    );
};

export default App;
