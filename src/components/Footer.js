import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    © 2025 Шоколадный Курс. Все права защищены.
                </div>

                <ul className={styles.footerLinks}>
                    <li className={styles.footerLink}>
                        <a href="#">Политика</a>
                    </li>
                    <li className={styles.footerLink}>
                        <a href="#">Условия</a>
                    </li>
                    <li className={styles.footerLink}>
                        <a href="#contact">Контакты</a>
                    </li>
                    <li className={styles.footerLink}>
                        <a href="#">Поддержка</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;