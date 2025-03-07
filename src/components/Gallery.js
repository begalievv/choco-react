import React, { useEffect, useRef } from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
    // Изображения из предоставленного макета
    const chocolateItems = [
        {
            id: 1,
            image: '/images/chocolate-bars.jpg', // Путь к изображению шоколадных плиток с соусом
            alt: 'Шоколадные плитки с соусом'
        },
        {
            id: 2,
            image: '/images/chocolate-bonbons.jpg', // Путь к изображению цветных шоколадных конфет
            alt: 'Разноцветные шоколадные конфеты'
        },
        {
            id: 3,
            image: '/images/chocolate-pops.jpg', // Путь к изображению шоколадных шариков на палочке
            alt: 'Шоколадные конфеты на палочке'
        },
        {
            id: 4,
            image: '/images/dark-chocolate.jpg', // Путь к изображению темного шоколада
            alt: 'Тёмный шоколад'
        }
    ];

    const galleryRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        if (!trackRef.current || !galleryRef.current) return;

        // Переменная для отслеживания смещения
        let scrollOffset = 0;

        // Функция, которая будет вызываться при прокрутке страницы
        const handleScroll = () => {
            // Получаем информацию о положении галереи
            const rect = galleryRef.current.getBoundingClientRect();

            // Проверяем, видима ли галерея в окне просмотра
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Вычисляем, насколько далеко мы прокрутили галерею
                // Нормализуем значение от 0 до 1, где 0 - это когда секция только 
                // появляется снизу, а 1 - когда секция исчезает вверху
                const scrollProgress = 1 - (rect.bottom / (window.innerHeight + rect.height));

                // Определяем максимальное смещение (ширина всех элементов минус ширина контейнера)
                const maxScrollDistance = trackRef.current.scrollWidth - galleryRef.current.clientWidth;

                // Вычисляем новое смещение
                scrollOffset = scrollProgress * maxScrollDistance;

                // Применяем трансформацию
                trackRef.current.style.transform = `translateX(-${scrollOffset}px)`;
            }
        };

        // Регистрируем обработчик прокрутки
        window.addEventListener('scroll', handleScroll);

        // Вызываем функцию сразу для установки начального положения
        handleScroll();

        // Очищаем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section ref={galleryRef} id="gallery-section" className={styles.gallerySection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Наши шедевры</h2>

                <div className={styles.galleryScroll}>
                    <div ref={trackRef} className={styles.galleryTrack}>
                        {/* Дублируем изображения для создания бесконечного эффекта */}
                        {[...Array(3)].map((_, index) => (
                            chocolateItems.map(item => (
                                <div key={`${index}-${item.id}`} className={styles.galleryItem}>
                                    <img src={item.image} alt={item.alt} />
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;