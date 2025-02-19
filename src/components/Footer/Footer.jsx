import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p className={styles.title}>© 2025 Выборы президента школы</p>
            <p className={styles.name}>Сайт разработан Московкиной В.А.</p>
        </footer>
    );
};

export default Footer;
