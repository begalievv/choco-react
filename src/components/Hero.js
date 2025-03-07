import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* Фоновое изображение через CSS */}
      <div className={styles.backgroundContainer}></div>

      {/* Затемнение для изображения */}
      <div className={styles.overlay}></div>

      {/* Контент */}
      <div className={styles.contentContainer}>
        <div className={styles.contentWrap}>
          <h1 className={styles.title}>
            Шоколадный Курс
          </h1>
          <p className={styles.description}>
            Научитесь создавать шоколад как настоящий мастер!
          </p>
          <a href="#features" className={styles.startButton}>
            Начать обучение
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;