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
              <a href="tel:+71234567890">+996 (777) 77 77 77</a>
            </p>
            <p className={styles.contactText}>
            <a href="tel:+71234567890">+996 (555) 55 55 55</a>
            </p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className={styles.contactTitle}>Email</h3>
            <p className={styles.contactText}>
              <a href="mailto:info@chocolate-course.ru">info@chocolate-course-test.kg</a>
            </p>
            <p className={styles.contactText}>
              <a href="mailto:support@chocolate-course.ru">support@chocolate-course.kg</a>
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
      </div>
    </section>
  );
}

export default ContactInfo;