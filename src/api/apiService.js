/**
 * API сервис для взаимодействия с бэкендом
 */

// URL базового API
export const BASE_URL = 'https://localhost:7126'; // Пустая строка для относительных URL в том же домене

/**
 * Отправка данных контактной формы
 * @param {Object} contactData - Данные формы
 * @returns {Promise} - Промис с результатом запроса
 */
export const submitContactForm = async (contactData) => {
  try {
    // Проверяем, прошел ли пользователь капчу
    if (!contactData.captchaVerified) {
      throw new Error('Капча не подтверждена');
    }

    // const response = await fetch(`${BASE_URL}/api/Contact/AddContact`, {
      const response = await fetch(`https://n8n.tech-demo.su/webhook/chocolate-contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Server error response:', errorData);
      throw new Error('Ошибка отправки данных');
    }

    return response;
  } catch (error) {
    console.error('API Error: ', error);
    throw error;
  }
};

/**
 * Обработка платежа
 * @param {Object} paymentData - Данные для оплаты
 * @returns {Promise} - Промис с результатом запроса
 */
export const processPayment = async (paymentData) => {
  try {
    const response = await fetch(`${BASE_URL}/Payment/ProcessPayment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка обработки платежа');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error: ', error);
    throw error;
  }
};

/**
 * Отправка email для подписки
 * @param {string} email - Email адрес для подписки
 * @returns {Promise} - Промис с результатом запроса
 */
export const subscribeToNewsletter = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/Newsletter/Subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Ошибка подписки');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error: ', error);
    throw error;
  }
};

// Другие методы API могут быть добавлены по мере необходимости