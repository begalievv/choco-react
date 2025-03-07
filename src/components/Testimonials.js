import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: 'Этот курс изменил мою жизнь! Теперь я шоколадный гуру!',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1608652763120-59aab1d8125c.jpeg',
            name: 'Анна'
        },
        {
            id: 2,
            text: 'Шоколад стал моим хобби и работой!',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1564564244660-5d73c057f2d2.jpeg',
            name: 'Иван'
        },
        {
            id: 3,
            text: 'Не думал, что смогу так вкусно готовить!',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1589156191108-c762ff4b96ab.jpeg',
            name: 'Мария'
        },
        {
            id: 4,
            text: 'Курс просто супер! Рекомендую всем!',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1591084728795-1149f32d9866.jpeg',
            name: 'Сергей'
        },
        {
            id: 5,
            text: 'Шоколадные шедевры на раз-два!',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1595436065982-84fa400d8d8e.jpeg',
            name: 'Елена'
        },
        {
            id: 6,
            text: 'Теперь я делаю шоколад для друзей и семьи!',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1541881856704-3c4b2896c0f8.jpeg',
            name: 'Дмитрий'
        }
    ];

    return (
        <section id="reviews" className={styles.testimonialsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Отзывы</h2>

                <div className={styles.testimonialsGrid}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className={styles.testimonialItem}>
                            <p className={styles.testimonialText}>{testimonial.text}</p>
                            <div className={styles.testimonialAvatar}>
                                <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;