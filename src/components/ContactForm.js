import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { BASE_URL, submitContactForm } from '../api/apiService';
import styles from './ContactForm.module.css';
import Captcha from './Captcha'; // Импортируем компонент капчи

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        text: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Функция для обработки проверки капчи
    const handleCaptchaVerify = (isVerified) => {
        setIsCaptchaVerified(isVerified);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Проверяем, прошел ли пользователь капчу
        if (!isCaptchaVerified) {
            setSubmitStatus({
                success: false,
                message: 'Пожалуйста, подтвердите, что вы не робот, пройдя проверку капчи.'
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ success: false, message: '' });

        try {
            // Формируем объект данных для отправки
            const contactData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                text: formData.text,
                captchaVerified: isCaptchaVerified // Добавляем флаг проверки капчи
            };
            
            // Используем функцию из apiService для отправки формы
            const response = await submitContactForm(contactData);

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
            // Сбрасываем статус капчи
            setIsCaptchaVerified(false);
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

                    {/* Интеграция компонента капчи */}
                    <div className={styles.formGroup}>
                        <Captcha onVerify={handleCaptchaVerify} />
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting || !isCaptchaVerified}
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;