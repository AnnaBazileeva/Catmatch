import React, { useState } from 'react';
import styles from "../styles/UserForm.module.css"

const UploadForm = ({ onSubmit }) => {
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!imageFile) {
            setError("Please upload an image");
            return;
        }
        setError('');
        onSubmit(imageFile);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
            <div className={styles.fileWrapper}>
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className={styles.inputFile}/>
            </div>
            <button type="submit" className={styles.submitButton}>Analyze</button>
            </div>
            {error && <p className={styles.errorText}>{error}</p>}
        </form>
    );
};

export default UploadForm;