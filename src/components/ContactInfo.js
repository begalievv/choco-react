import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <section className={styles.contactInfoSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Контакты</h2>
        
        <div className={styles.contactInfoGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className={styles.contactTitle}>Телефон</h3>
            <p className={styles.contactText}>
              <a href="tel:+71234567890">+7 (123) 456-78-90</a>
            </p>
            <p className={styles.contactText}>
              <a href="tel:+71234567891">+7 (123) 456-78-91</a>
            </p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className={styles.contactTitle}>Email</h3>
            <p className={styles.contactText}>
              <a href="mailto:info@chocolate-course.ru">info@chocolate-course.ru</a>
            </p>
            <p className={styles.contactText}>
              <a href="mailto:support@chocolate-course.ru">support@chocolate-course.ru</a>
            </p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className={styles.contactTitle}>Адрес</h3>
            <p className={styles.contactText}>
              г. Москва, ул. Шоколадная, д. 123
            </p>
            <p className={styles.contactSubtext}>
              Пн-Пт: 9:00-18:00
            </p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="fas fa-comments"></i>
            </div>
            <h3 className={styles.contactTitle}>Соцсети</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-vk"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2887834943713!2d37.618675376592335!3d55.75246998045929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1616123456789!5m2!1sru!2sru" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Карта с нашим местоположением"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;