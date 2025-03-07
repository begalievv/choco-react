import React from 'react';
import styles from './News.module.css';

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: 'Запуск нового курса по шоколаду',
            date: '4 февраля 2025',
            description: 'Не упустите шанс стать шоколадным мастером! Запись открыта!',
            image: 'images/1.jpg',
        },
        {
            id: 2,
            title: 'Бонусы для первых студентов',
            date: '4 февраля 2025',
            description: 'Первые 50 студентов получат эксклюзивные бонусы!',
            image: 'images/2.jpg',
        },
        {
            id: 3,
            title: 'Секреты шоколадного мастерства',
            date: '4 февраля 2025',
            description: 'Узнайте секреты от лучших шоколатье!',
            image: 'images/3.jpg',
        },
        {
            id: 4,
            title: 'Консультации с создателем курса',
            date: '4 февраля 2025',
            description: 'Получите консультацию от эксперта! Записывайтесь сейчас!',
            image: 'images/4.jpg',
        }
    ];

    return (
        <section className={styles.newsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Новости шоколадного курса</h2>

                <div className={styles.newsGrid}>
                    {newsItems.map(item => (
                        <div key={item.id} className={styles.newsCard}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className={styles.newsImage}
                            />
                            <div className={styles.newsContent}>
                                <h3 className={styles.newsTitle}>{item.title}</h3>
                                <p className={styles.newsDate}>{item.date}</p>
                                <p className={styles.newsDescription}>{item.description}</p>
                                <a href="#signup" className={styles.newsButton}>
                                    Записаться
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News;