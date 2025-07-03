import React from 'react';
import styles from '../styles/UploadHistory.module.css';

const UploadHistory = ({ history, onClear }) => {
    if (!history?.length) return null;

    return (
        <div className={styles.historySection}>
            <h3>Upload History</h3>
            <button className={styles.clearButton} onClick={onClear}>
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
    );
};

export default UploadHistory;
