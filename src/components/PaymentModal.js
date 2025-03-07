import React, { useState } from 'react';
import styles from './PaymentModal.module.css';
import { BASE_URL } from '../api/apiService';

export function generateGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

const PaymentModal = ({ isOpen, onClose, plan }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVC: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Форматирование номера карты (добавление пробелов каждые 4 цифры)
        if (name === 'cardNumber') {
            const formattedValue = value
                .replace(/\s/g, '')
                .replace(/\D/g, '')
                .replace(/(\d{4})(?=\d)/g, '$1 ')
                .trim()
                .slice(0, 19); // Максимум 16 цифр + 3 пробела

            setFormData({ ...formData, [name]: formattedValue });
            return;
        }

        // Форматирование срока действия (MM/YY)
        if (name === 'cardExpiry') {
            const cleanValue = value.replace(/\D/g, '');
            let formattedValue = cleanValue;

            if (cleanValue.length > 2) {
                formattedValue = `${cleanValue.slice(0, 2)}/${cleanValue.slice(2, 4)}`;
            }

            setFormData({ ...formData, [name]: formattedValue });
            return;
        }

        // Форматирование CVC (только цифры, максимум 3)
        if (name === 'cardCVC') {
            const formattedValue = value.replace(/\D/g, '').slice(0, 3);
            setFormData({ ...formData, [name]: formattedValue });
            return;
        }

        // Форматирование номера телефона
        if (name === 'phone') {
            const formattedValue = value
                // .replace(/\D/g, '')
                // .replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5')
                // .replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, '+$1 ($2) $3-$4')
                // .replace(/^(\d{1})(\d{3})(\d{3})$/, '+$1 ($2) $3')
                // .replace(/^(\d{1})(\d{3})$/, '+$1 ($2')
                // .replace(/^(\d{1})$/, '+$1');

            setFormData({ ...formData, [name]: formattedValue });
            return;
        }

        // Обычное обновление для остальных полей
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ success: false, message: '' });

        try {
            // Здесь будет запрос к API для обработки платежа
            const response = await fetch(BASE_URL + '/Payment/ProcessPayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    cardNumber: formData.cardNumber.replace(/\s/g, ''),
                    cardExpiry: formData.cardExpiry,
                    cardCVC: formData.cardCVC,
                    planId: plan.id,
                    planName: plan.title,
                    planPrice: 0
                }),
            });

            if (response.ok) {
                setSubmitStatus({
                    success: true,
                    message: 'Платеж успешно обработан! Спасибо за покупку.'
                });

                // Очистка формы
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    cardNumber: '',
                    cardExpiry: '',
                    cardCVC: ''
                });

                // Закрытие модального окна через 3 секунды после успешной оплаты
                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                const errorData = await response.json();
                setSubmitStatus({
                    success: false,
                    message: errorData.message || 'Произошла ошибка при обработке платежа. Пожалуйста, попробуйте снова.'
                });
            }
        } catch (error) {
            console.error('Error processing payment:', error);
            setSubmitStatus({
                success: false,
                message: 'Произошла ошибка при обработке платежа. Пожалуйста, проверьте соединение и попробуйте снова.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <h2 className={styles.modalTitle}>Оформление заказа</h2>

                <div className={styles.planDetails}>
                    <h3 className={styles.planTitle}>{plan.title}</h3>
                    <p className={styles.planPrice}>{plan.price}</p>
                </div>

                {submitStatus.message && (
                    <div className={`${styles.statusMessage} ${submitStatus.success ? styles.successMessage : styles.errorMessage}`}>
                        {submitStatus.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className={styles.paymentForm}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName">ФИО</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className={styles.input}
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Иванов Иван Иванович"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@mail.ru"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Телефон</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+996 (XXX) XX-XX-XX"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="cardNumber">Номер карты</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                className={styles.input}
                                value={formData.cardNumber}
                                onChange={handleChange}
                                placeholder="XXXX XXXX XXXX XXXX"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="cardExpiry">Срок действия</label>
                            <input
                                type="text"
                                id="cardExpiry"
                                name="cardExpiry"
                                className={styles.input}
                                value={formData.cardExpiry}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="cardCVC">CVC</label>
                            <input
                                type="text"
                                id="cardCVC"
                                name="cardCVC"
                                className={styles.input}
                                value={formData.cardCVC}
                                onChange={handleChange}
                                placeholder="XXX"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Обработка...' : 'Оплатить'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentModal;