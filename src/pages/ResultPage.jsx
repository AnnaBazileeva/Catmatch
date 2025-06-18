import CatBreedResult from "../features/CatBreedResult";
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "../styles/CatBreedResult.module.css"

const ResultPage = () => {
const { state } = useLocation();
const navigate = useNavigate();

const breed = state?.breed;
const userImage = state?.userImage;

if (!breed || !userImage) {
    return (
        <div>
            <p>Oops! No result to display.</p>
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
}
    return (
    <div>
        <CatBreedResult breed={breed} userImage={userImage} />
        <div className={styles.centerButton}>
        <button onClick={() => navigate('/')} className={styles.btn}>Try again</button>
        </div>
    </div>
);
};

export default ResultPage