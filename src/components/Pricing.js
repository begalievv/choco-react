import React, { useState } from 'react';
import styles from './Pricing.module.css';
import PaymentModal from './PaymentModal';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      title: 'Самостоятельное обучение',
      price: '5000₽',
      description: 'Учитесь в своем темпе с доступом к материалам курса.',
      image: 'images/tarif1.jpg',
      isBestseller: false
    },
    {
      id: 2,
      title: 'Консультация с автором',
      price: '10000₽',
      description: 'Получите советы от мастера шоколадного дела.',
      image: 'images/tarif2.jpg',
      isBestseller: true
    }
  ];

  const openPaymentModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    // Предотвращаем прокрутку страницы при открытом модальном окне
    document.body.style.overflow = 'hidden';
  };

  const closePaymentModal = () => {
    setIsModalOpen(false);
    // Возвращаем прокрутку страницы
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="tariffs" className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Выберите свой тариф</h2>
        
        <div className={styles.pricingGrid}>
          {pricingPlans.map(plan => (
            <div key={plan.id} className={styles.pricingCard}>
              {plan.isBestseller && (
                <div className={styles.bestsellerChip}>Хит продаж</div>
              )}
              <img 
                src={plan.image} 
                alt={plan.title} 
                className={styles.pricingImage} 
              />
              <div className={styles.pricingContent}>
                <h3 className={styles.pricingTitle}>{plan.title}</h3>
                <div className={styles.pricingPrice}>{plan.price}</div>
                <p className={styles.pricingDescription}>{plan.description}</p>
                <button 
                  className={styles.pricingButton}
                  onClick={() => openPaymentModal(plan)}
                >
                  Купить сейчас
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isModalOpen && selectedPlan && (
        <PaymentModal 
          isOpen={isModalOpen}
          onClose={closePaymentModal}
          plan={selectedPlan}
        />
      )}
    </section>
  );
}

export default Pricing;