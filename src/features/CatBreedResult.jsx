import {useEffect, useState} from 'react';
import styles from "../styles/CatBreedResult.module.css"

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
        <div className={styles.catbreedcontainer}>
            <div className={styles.titleRow}>
                <h2>Your Match:</h2>
            <h2>You look like a {breed.name}</h2>
            </div>
            <div className={styles.catbreedimages}>
                {userImage && (
                    <img src={userImage} alt="Uploaded" className={styles.cardresult}/>
                )}
                {imageUrl ? (
                    <img src={imageUrl} alt={breed.name} className={styles.cardresult} />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <p className={styles.description}>{breed.description}</p>
        </div>
    );
};
export default CatBreedResult;