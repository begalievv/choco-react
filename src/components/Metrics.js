import React from 'react';
import styles from './Metrics.module.css';

const Metrics = () => {
    return (
        <section className={styles.metricsSection}>
            <div className={styles.container}>
                <div className={styles.metricsGrid}>
                    <div className={styles.metricItem}>
                        <div className={styles.metricNumber}>5</div>
                        <div className={styles.metricTitle}>Уроков шоколада</div>
                    </div>

                    <div className={styles.metricItem}>
                        <div className={styles.metricNumber}>2</div>
                        <div className={styles.metricTitle}>Тарифа на выбор</div>
                    </div>

                    <div className={styles.metricItem}>
                        <div className={styles.metricNumber}>10</div>
                        <div className={styles.metricTitle}>Бонусов для вас</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Metrics;