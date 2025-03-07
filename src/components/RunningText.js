import React from 'react';
import styles from './RunningText.module.css';

const RunningText = () => {
    return (
        <section className={styles.runningTextSection}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <span className={styles.text}>
                        Поддержка сообщества и практические занятия
                    </span>
                    <span className={styles.separator}>*</span>
                    <span className={styles.text}>
                        Интерактивные уроки по шоколадному искусству
                    </span>
                    <span className={styles.separator}>*</span>
                    <span className={styles.text}>
                        Поддержка сообщества и практические занятия
                    </span>
                    <span className={styles.separator}>*</span>
                    <span className={styles.text}>
                        Интерактивные уроки по шоколадному искусству
                    </span>
                </div>
            </div>
        </section>
    );
}

export default RunningText;