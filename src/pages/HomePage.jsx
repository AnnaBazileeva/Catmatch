import React from 'react';
import UploadForm from '../features/UserForm.jsx';
import styles from "../styles/HomePage.module.css";

const Home = ({ handleAnalyze, isLoading, error, history, clearHistory }) => (
    <div className={styles.homeContainer}>
        <h2 className={styles.title}>Find your cat match!</h2>
        <p className={styles.instruction}>
            Upload a selfie or portrait photo to discover which cat breed looks like you! 🐱
        </p>
        <UploadForm onSubmit={handleAnalyze} />
        {isLoading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}

        {history?.length > 0 && (
            <div className={styles.historySection}>
                <h3>Upload History</h3>
                <button className={styles.clearButton} onClick={clearHistory}>
                    Clear History
                </button>
                <div className={styles.historyGrid}>
                    {history.map((item) => (
                        <div key={item.id} className={styles.historyItem}>
                            <img src={item.image} alt="Uploaded" className={styles.historyImage} />
                            <p className={styles.historyText}>{item.breed}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);

export default Home;
