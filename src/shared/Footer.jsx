import styles from '../styles/Footer.module.css';
import logo from "../assets/ctd-square-1-1.png"


const Footer = () => (
    <footer className={styles.footer}>
        <p>© 2025 CatMatch. Made with 🐾 by Anna Bazileeva</p>
        <p>React final project  <img src={logo} alt="CatMatch logo" className={styles.logo} />
            <a href="https://github.com/AnnaBazileeva/Catmatch" target="_blank" rel="noreferrer">
                CTD
            </a> school
        </p>
    </footer>
);

export default Footer;
