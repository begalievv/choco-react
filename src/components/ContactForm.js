import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { BASE_URL, submitContactForm } from '../api/apiService';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        text: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ success: false, message: '' });

        try {
            const response = await fetch(`${BASE_URL}/api/Contact/AddContact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    text: formData.text
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server response:', response.status, errorText);
                throw new Error('Ошибка сервера');
            }

            const data = await response.json();
            setSubmitStatus({
                success: true,
                message: 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
            });

            // Сбрасываем форму
            setFormData({
                name: '',
                email: '',
                phone: '',
                text: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                success: false,
                message: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Свяжитесь с нами</h2>

                {submitStatus.message && (
                    <div className={`${styles.statusMessage} ${submitStatus.success ? styles.successMessage : styles.errorMessage}`}>
                        {submitStatus.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Телефон"
                            className={styles.input}
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <textarea
                            name="text"
                            placeholder="Сообщение"
                            className={styles.textarea}
                            value={formData.text}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                    </button>
                </form>

                <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon}>
                        <FaFacebook />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                        <FaTwitter />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                        <FaInstagram />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                        <FaTiktok />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;