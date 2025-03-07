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
      image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1551578657-a7e74acb0135.jpeg'
    },
    {
      id: 2,
      title: 'Консультация с автором',
      price: '10000₽',
      description: 'Получите советы от мастера шоколадного дела.',
      image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1565889673146-8e4d54300269.jpeg'
    },
    // {
    //   id: 3,
    //   title: 'Включенное обучение',
    //   price: '15000₽',
    //   description: 'Полный доступ к урокам и практикам с поддержкой.',
    //   image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1623284060556-37e5ff559dd3.jpeg'
    // },
    // {
    //   id: 4,
    //   title: 'Бонусный пакет',
    //   price: '2000₽',
    //   description: 'Дополнительные рецепты и секреты от шефа.',
    //   image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1526081715791-7c538f86060e.jpeg'
    // }
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