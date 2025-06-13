import {useEffect, useState} from 'react';
import "../styles/CatBreedResult.css"

const CatBreedResult = ({breed, userImage}) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            if (!breed?.id) return;
            try {
                const response = await fetch(
                    `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}&api_key=YOUR_API_KEY`
                );
                const data = await response.json();
                setImageUrl(data[0]?.url || "");
            } catch (err) {
                console.error("Image fetch error", err);
            }
        };
        fetchImage();
    }, [breed]);
    if (!breed)
        return <p>No breed selected.</p>;

    return (
        <div className="catbreed-container">
            <h2>You look like a {breed.name}</h2>
            <div className="catbreed-images">
                {imageUrl ? (
                    <img src={imageUrl} alt={breed.name} className="cardresult"/>
                )}
                {imageUrl ? (
                    <img src={imageUrl} alt={breed.name} className="cardresult" />
                ) : (

                    <p>No image available</p>
                )}
            </div>
            <p>{breed.description}</p>
        </div>
    );
};
export default CatBreedResult;