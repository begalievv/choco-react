import React, { useState, useEffect } from 'react';
import styles from './Captcha.module.css';

const Captcha = ({ onVerify }) => {
    const [captchaText, setCaptchaText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState('');
    
    // Генерирует случайный текст для капчи
    const generateCaptchaText = () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };
    
    // Обновляет капчу с новым текстом
    const refreshCaptcha = () => {
        setUserInput('');
        setIsVerified(false);
        setError('');
        setCaptchaText(generateCaptchaText());
    };
    
    // Генерирует капчу при первом рендере
    useEffect(() => {
        refreshCaptcha();
    }, []);
    
    // Проверяет ввод пользователя
    const verifyCaptcha = () => {
        if (userInput.toLowerCase() === captchaText.toLowerCase()) {
            setIsVerified(true);
            setError('');
            onVerify(true);
        } else {
            setError('Неправильный код. Попробуйте еще раз.');
            setIsVerified(false);
            onVerify(false);
            refreshCaptcha();
        }
    };
    
    // Обрабатывает изменение ввода
    const handleChange = (e) => {
        setUserInput(e.target.value);
        if (e.target.value.length === captchaText.length) {
            // Автоматически проверяем после ввода всех символов
            setTimeout(() => {
                if (e.target.value.toLowerCase() === captchaText.toLowerCase()) {
                    setIsVerified(true);
                    setError('');
                    onVerify(true);
                } else {
                    setError('Неправильный код. Попробуйте еще раз.');
                    setIsVerified(false);
                    onVerify(false);
                    refreshCaptcha();
                }
            }, 300);
        }
    };
    
    return (
        <div className={styles.captchaContainer}>
            <div className={styles.captchaContent}>
                <div className={styles.captchaImageContainer}>
                    <div className={styles.captchaImage}>
                        {captchaText.split('').map((char, index) => (
                            <span 
                                key={index} 
                                style={{
                                    transform: `rotate(${Math.random() * 30 - 15}deg)`,
                                    fontSize: `${Math.random() * 6 + 18}px`,
                                    marginRight: '3px',
                                    display: 'inline-block',
                                    fontFamily: Math.random() > 0.5 ? 'cursive' : 'monospace',
                                    color: `hsl(${Math.random() * 360}, 70%, 40%)`
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                    <button 
                        type="button" 
                        className={styles.refreshButton}
                        onClick={refreshCaptcha}
                        title="Обновить капчу"
                    >
                        ↻
                    </button>
                </div>
                
                <div className={styles.captchaInputContainer}>
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleChange}
                        placeholder="Введите код с картинки"
                        className={styles.captchaInput}
                        required
                    />
                    
                    {error && <div className={styles.error}>{error}</div>}
                    {isVerified && <div className={styles.success}>Капча успешно пройдена!</div>}
                </div>
            </div>
        </div>
    );
};

export default Captcha;