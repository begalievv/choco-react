import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Спасибо за подписку!');
        setEmail('');
    };

    return (
        <section id="signup" className={styles.newsletterSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Подпишитесь на наш шоколадный мир!</h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="test@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Подписаться
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;