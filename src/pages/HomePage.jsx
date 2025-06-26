import React from 'react';
import UploadForm from '../features/UserForm.jsx';
import UploadHistory from "../features/UploadHistory.jsx";
import styles from "../styles/HomePage.module.css";

const Home = ({handleAnalyze, isLoading, error, history, clearHistory}) => (
    <div className={styles.homeContainer}>
        <h2 className={styles.title}>Find your cat match!</h2>
        <p className={styles.instruction}>
            Upload a selfie or portrait photo to discover which cat breed looks like you! 🐱
        </p>
        <UploadForm onSubmit={handleAnalyze}/>
        {isLoading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}

        <UploadHistory history={history} onClear={clearHistory}/>
    </div>
);

export default Home;
