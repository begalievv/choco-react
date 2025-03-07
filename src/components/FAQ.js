import React from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
    const faqItems = [
        {
            id: 1,
            question: 'Что включает курс?',
            answer: 'Курс включает 5 уроков, 5 практик и бонусы!'
        },
        {
            id: 2,
            question: 'Каковы тарифы на обучение?',
            answer: 'Тарифы: самостоятельное обучение, консультация и оборудование.'
        },
        {
            id: 3,
            question: 'Когда начнется курс?',
            answer: 'Курс стартует 4 февраля 2025 года!'
        },
        {
            id: 4,
            question: 'Есть ли возврат средств?',
            answer: 'Возврат средств возможен в течение 14 дней.'
        },
        {
            id: 5,
            question: 'Как записаться на курс?',
            answer: 'Просто нажмите кнопку "Записаться"!'
        }
    ];

    return (
        <section id="faq" className={styles.faqSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>

                <div className={styles.faqList}>
                    {faqItems.map(item => (
                        <div key={item.id} className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>{item.question}</h3>
                            <p className={styles.faqAnswer}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;