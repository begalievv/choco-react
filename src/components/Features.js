import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  // Оставляем только первые три карточки: Уроки, Практика и Обратная связь
  const features = [
    {
      id: 1,
      title: 'Уроки',
      description: 'Погрузитесь в мир шоколадного искусства!',
      image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1618257963164-399348eedb23.jpeg',
      link: '#more'
    },
    {
      id: 2,
      title: 'Практика',
      description: 'Создайте свои шедевры под руководством экспертов!',
      image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1582570675095-9b679953577e.jpeg',
      link: '#more'
    },
    {
      id: 5,
      title: 'Обратная связь',
      description: 'Консультации от создателя курса для всех!',
      image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1599599810769-bcde5a160d32.jpeg',
      link: '#contact'
    }
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Что вас ждет</h2>
        <p className={styles.sectionSubtitle}>5 уроков, 5 практик и бонусы!</p>
        
        <div className={styles.featuresRow}>
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