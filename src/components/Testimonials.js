import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    // Работы участниц (изображения)
    const testimonialImages = [
        {
            id: 1,
            image: 'images/1.jpg',
            alt: 'Шоколадная работа 1'
        },
        {
            id: 2,
            image: 'images/2.jpg',
            alt: 'Шоколадная работа 2'
        },
        {
            id: 3,
            image: 'images/3.jpg',
            alt: 'Шоколадная работа 3'
        },
        {
            id: 4,
            image: 'images/4.jpg',
            alt: 'Шоколадная работа 4'
        },
        {
            id: 5,
            image: 'images/5.jpg',
            alt: 'Шоколадная работа 5'
        },
        {
            id: 6,
            image: 'images/6.jpg',
            alt: 'Шоколадная работа 6'
        },
        {
            id: 7,
            image: 'images/7.jpg',
            alt: 'Шоколадная работа 7'
        },
        {
            id: 8,
            image: 'images/8.jpg',
            alt: 'Шоколадная работа 8'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // Автоматическая смена слайдов
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonialImages.length]);

    // Переключение на предыдущий слайд
    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialImages.length - 1 : prevIndex - 1));
    };

    // Переключение на следующий слайд
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialImages.length);
    };

    // Выбор конкретного слайда
    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    // Обработчики для свайпа на мобильных устройствах
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide();
        }
        if (touchStart - touchEnd < -50) {
            prevSlide();
        }
    };

    return (
        <section id="reviews" className={styles.testimonialsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Работы и отзывы участниц курса</h2>
                <div className={styles.decorativeLine}></div>

                <div 
                    className={styles.carouselContainer}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevSlide}>
                        &lt;
                    </button>
                    
                    <div className={styles.carouselSlides}>
                        {testimonialImages.map((item, index) => (
                            <div 
                                key={item.id}
                                className={`${styles.carouselSlide} ${activeIndex === index ? styles.active : ''}`}
                                style={{ transform: `translateX(${100 * (index - activeIndex)}%)` }}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.alt} 
                                    className={styles.testimonialImage}
                                />
                            </div>
                        ))}
                    </div>
                    
                    <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextSlide}>
                        &gt;
                    </button>
                </div>

                <div className={styles.carouselDots}>
                    {testimonialImages.map((_, index) => (
                        <button 
                            key={index} 
                            className={`${styles.carouselDot} ${activeIndex === index ? styles.activeDot : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;