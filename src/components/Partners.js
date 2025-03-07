import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
    const partners = [
        {
            id: 1,
            name: 'Partner 1',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1596622723231-b20320c7346b.jpeg'
        },
        {
            id: 2,
            name: 'Partner 2',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1529612700005-e35377bf1415.jpeg'
        },
        {
            id: 3,
            name: 'Partner 3',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1502828331539-51c709e80300.jpeg'
        },
        {
            id: 4,
            name: 'Partner 4',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1681415851723-dca11d0ec9a6.jpeg'
        },
        {
            id: 5,
            name: 'Partner 5',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1617727553252-65863c156eb0.jpeg'
        },
        {
            id: 6,
            name: 'Partner 6',
            image: 'https://r.mobirisesite.com/1166961/assets/images/photo-1554463529-e27854014799.jpeg'
        }
    ];

    return (
        <section className={styles.partnersSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Наши партнеры</h2>

                <div className={styles.partnersGrid}>
                    {partners.map(partner => (
                        <div key={partner.id} className={styles.partnerLogo}>
                            <img
                                src={partner.image}
                                alt={partner.name}
                                className={styles.partnerImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;