import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <a href="#top" className={styles.navbarBrand}>
          <div className={styles.navbarLogo}>
            <img src="https://r.mobirisesite.com/1166961/assets/images/photo-1626697556651-67ebdcb8cbd6.jpeg" alt="Шоколад логотип" />
          </div>
          <span className={styles.navbarCaption}>Шоколад</span>
        </a>
        
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="#course" className={styles.navLink}>Курс</a>
          </li>
          <li className={styles.navItem}>
            <a href="#tariffs" className={styles.navLink}>Тарифы</a>
          </li>
          <li className={styles.navItem}>
            <a href="#reviews" className={styles.navLink}>Отзывы</a>
          </li>
        </ul>
      </div>
      
      <a href="#signup" className={styles.signupButton}>Записаться сейчас</a>
    </nav>
  );
}

export default Navbar;