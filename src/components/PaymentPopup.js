// components/PaymentPopup.js
import React from 'react';
import styles from './PaymentPopup.module.css';

const PaymentPopup = ({ plan, onClose }) => {
    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <h2>Оплата тарифа</h2>
                <p><strong>{plan.title}</strong></p>
                <p>Цена: {plan.price}</p>
                <form>
                    <label>Номер карты</label>
                    <input type="text" placeholder="**** **** **** ****" required />
                    <label>Срок действия</label>
                    <input type="text" placeholder="MM/YY" required />
                    <label>CVC</label>
                    <input type="text" placeholder="***" required />
                    <button type="submit">Оплатить</button>
                </form>
                <button onClick={onClose} className={styles.closeButton}>Закрыть</button>
            </div>
        </div>
    );
};

export default PaymentPopup;