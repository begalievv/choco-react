import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* Видео-контейнер с локальным видео */}
      <div className={styles.videoContainer}>
        <video 
          className={styles.videoBackground} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/chocolate-background.mp4" type="video/mp4" />
          {/* Можно добавить резервные форматы если нужно */}
          {/* <source src="/videos/chocolate-background.webm" type="video/webm" /> */}
          Ваш браузер не поддерживает видео тег.
        </video>
      </div>

      {/* Затемнение для видео */}
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