import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    © 2025 Шоколадный Курс. Все права защищены.
                </div>

                <ul className={styles.footerLinks}>
                    <li className={styles.footerLink}>
                        <a href="/privacy" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
                    </li>
                    <li className={styles.footerLink}>
                        <a href="/oferta" target="_blank" rel="noopener noreferrer">Договор-оферта</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;