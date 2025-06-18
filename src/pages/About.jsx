import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>About CatMatch</h1>
            <p>
                <strong>CatMatch</strong> is a fun and lighthearted web application that matches your face with a cat breed! Just upload a photo, and the app will randomly select a cat breed that <em>“looks like you”</em> — based on pure feline intuition, not machine learning 😺
            </p>
            <p>
                Whether you're a cat lover, curious explorer, or just here for a good laugh, CatMatch will brighten your day with adorable results and fun breed facts.
            </p>

            <h2 className={styles.subtitle}>Key Features:</h2>
            <ul className={styles.list}>
                <li>Upload your own photo</li>
                <li>Discover a random cat breed match</li>
                <li>See a cute cat image and learn about the breed</li>
                <li>Simple and user-friendly design</li>
            </ul>

            <p>
                This app was built with <strong>React</strong> and powered by <a href="https://thecatapi.com" target="_blank" rel="noopener noreferrer" className={styles.link}>TheCatAPI</a>.
            </p>

            <p className={styles.footer}>
                Author: Anna Bazileeva
            </p>
        </section>
    );
};

export default About;
