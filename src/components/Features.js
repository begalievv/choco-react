import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Уроки',
      description: 'Погрузитесь в мир шоколадного искусства!',
      image: 'images/1.jpg',
      link: '#more'
    },
    {
      id: 2,
      title: 'Практика',
      description: 'Создайте свои шедевры под руководством экспертов!',
      image: 'images/2.jpg',
      link: '#more'
    },
    {
      id: 3,
      title: 'Бонусы',
      description: 'Получите секретные рецепты и советы от мастеров!',
      image: 'images/3.jpg',
      link: '#more'
    },
    {
      id: 4,
      title: 'Тарифы',
      description: 'Выберите подходящий вариант для себя!',
      image: 'images/4.jpg',
      link: '#tariffs'
    },
    {
      id: 5,
      title: 'Обратная связь',
      description: 'Консультации от создателя курса для всех!',
      image: 'images/5.jpg',
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