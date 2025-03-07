import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  // Обновленные карточки: 4 штуки с новыми заголовками
  const features = [
    {
      id: 1,
      title: 'УРОКИ',
      description: 'Базовая теория для старта в профессию',
      image: 'images/uroki.jpg',
      link: '#contact'
    },
    {
      id: 2,
      title: 'ПРАКТИКА',
      description: 'Практика по закреплению материала',
      image: 'images/practice.jpg',
      link: '#contact'
    },
    {
      id: 3,
      title: 'БОНУСЫ',
      description: 'Эксклюзивные материалы и рецепты',
      image: 'images/bonus.jpg',
      link: '#contact'
    },
    {
      id: 4,
      title: 'ОБРАТНАЯ СВЯЗЬ',
      description: 'Чат консультаций Мастера',
      image: 'images/svyaz.jpg',
      link: '#contact'
    }
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>О чем курс?</h2>
        <p className={styles.sectionSubtitle}>Вас ждет:</p>
        
        <div className={styles.featuresGrid}>
          {features.map(feature => (
            <div key={feature.id} className={styles.featureCard}>
              <img 
                src={feature.image} 
                alt={feature.title} 
                className={styles.featureImage} 
              />
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <a href={feature.link} className={styles.featureButton}>
                  Узнать больше
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;