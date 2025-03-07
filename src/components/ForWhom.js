import React from 'react';
import styles from './ForWhom.module.css';

const ForWhom = () => {
  return (
    <section className={styles.forWhomSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Для кого курс?</h2>
        
        <div className={styles.forWhomContent}>
          <p className={styles.forWhomText}>
            Этот курс подходит и для новичков, и для тех, у кого уже есть опыт работы с шоколадом.
            <br />Его успешно проходили и ученики с 0, и шоколатье с 8-летним опытом работы.
          </p>
        </div>
        
        <h3 className={styles.programTitle}>Программа в деталях</h3>
        
        {/* Модуль 1 - текст слева, картинка справа */}
        <div className={styles.modulesContainer}>
          <div className={styles.module}>
            <h4 className={styles.moduleTitle}>Модуль 1</h4>
            <p className={styles.moduleDescription}>Научимся выбирать шоколад, разберемся с составом, инструментами, формами, условиями работы.</p>
            <ul className={styles.moduleList}>
              <li>Рынок шоколада: группы, бренды, сорта.</li>
              <li>Состав шоколада и на что он влияет.</li>
              <li>Оптимальное содержание какао.</li>
              <li>Кувертюры. Содержание какао-масла. Текучесть шоколада.</li>
              <li>Как выбрать шоколад.</li>
              <li>Инструменты для работы с шоколадом.</li>
              <li>Формы. Уход за формами. О блеске шоколада.</li>
              <li>Оборудование: для дома и цеха.</li>
              <li>Температурный режим в помещении.</li>
              <li>Условия хранения шоколада и изделий из него.</li>
              <li>Влажность. Сахарное и жировое поседение.</li>
            </ul>
          </div>
          
          <div className={styles.moduleImage}>
            <img src="https://r.mobirisesite.com/1166961/assets/images/photo-1623000850229-ad83232ea6c7.jpeg" alt="Работа с шоколадом" />
          </div>
        </div>
        
        {/* Модуль 2 - картинка слева, текст справа */}
        <div className={styles.modulesContainer}>
          <div className={styles.moduleImage}>
            <img src="https://r.mobirisesite.com/1166961/assets/images/photo-1582570675095-9b679953577e.jpeg" alt="Темперирование шоколада" />
          </div>
          
          <div className={styles.module}>
            <h4 className={styles.moduleTitle}>Модуль 2</h4>
            <p className={styles.moduleDescription}>Узнаем о темперировании буквально все. Выберем свой способ, разберем частые ошибки и начнем темперировать как pro.</p>
            <ul className={styles.moduleList}>
              <li>Зачем нам темперирование. Разница темперированного и нетемперированного шоколада.</li>
              <li>Химия процесса. Полиморфизм. 6 форм кристаллов какао-масла. Точки плавления. Желанная V форма. Оптимальная температура охлаждения: почему не сработала логика.</li>
              <li>3 стратегии темперирования. Методы темперирования. 3 главных принципа любого метода темперирования.</li>
              <li>Микрокристаллы и скимание.</li>
              <li>Классический метод темперирования на столе или бане - теория.</li>
              <li>Метод посева: капли, микрио, шелк. Теория и практика. Обуление темперирования.</li>
              <li>Метод темперирования в микроволновке. Теория и практика.</li>
              <li>Перекристаллизация шоколада.</li>
              <li>Частые проблемы при темперировании и их причины.</li>
            </ul>
          </div>
        </div>
        
        {/* Модуль 3 - текст слева, картинка справа */}
        <div className={styles.modulesContainer}>
          <div className={styles.module}>
            <h4 className={styles.moduleTitle}>Модуль 3</h4>
            <p className={styles.moduleDescription}>Научимся делать и декорировать классные плитки, мендианты и слабы.</p>
            <ul className={styles.moduleList}>
              <li>Плитка шоколада: принципы работы и охлаждения.</li>
              <li>Частые ошибки с плитками. Ровная внешняя поверхность без разводов.</li>
              <li>Сроки хранения шоколада без начинок.</li>
              <li>Обработка орехов и сухофруктов.</li>
              <li>Кандурин.</li>
              <li>Декор плиток, практика: более 10 техник декора плитки шоколада, в том числе уже готовой и вынутой из формы.</li>
              <li>Мендианты, формы для них. Практика: как сделать их без форм.</li>
              <li>Открытые "ленивые" конфеты.</li>
              <li>Слабы.</li>
              <li>Бонус: флорентийское печенье без печенья, вариация для коробочки мендиантов.</li>
            </ul>
          </div>
          
          <div className={styles.moduleImage}>
            <img src="https://r.mobirisesite.com/1166961/assets/images/photo-1621939514649-280e2ee25f60.jpeg" alt="Декорирование шоколада" />
          </div>
        </div>
        
        {/* Модуль 4 - картинка слева, текст справа */}
        <div className={styles.modulesContainer}>
          <div className={styles.moduleImage}>
            <img src="https://r.mobirisesite.com/1166961/assets/images/photo-1604514813560-1e4f5726db65.jpeg" alt="Шоколадные трюфели" />
          </div>
          
          <div className={styles.module}>
            <h4 className={styles.moduleTitle}>Модуль 4</h4>
            <p className={styles.moduleDescription}>Разберем всю теорию ганаша и конфетных начинок на самом высоком и подробном уровне.</p>
            <ul className={styles.moduleList}>
              <li>Жировые и водные начинки.</li>
              <li>Эмульсия. Ингредиенты ганаша и их роль. Эмульгаторы.</li>
              <li>Стабильная эмульсия. Расслоение ганаша: причины и решения. Холодный и горячий метод.</li>
              <li>Пересчет рецепта на другой шоколад.</li>
              <li>Активность воды. Понятия свободной и связанной воды.</li>
              <li>Сроки хранения. Гигиена.</li>
              <li>Как сделать очищенное масло.</li>
              <li>Относительная влажность для конфет с начинками. Миграция влаги.</li>
              <li>Сахара и роль каждого.</li>
              <li>Использование алкоголя в начинке.</li>
              <li>Уровень кислотности.</li>
              <li>Заморозка конфет.</li>
              <li>Формула сбалансированного ганаша. % какао-масла в рецептах трюфелей.</li>
              <li>Ароматизация ганаша. Ароматизация шоколада.</li>
              <li>Удачные сочетания для шоколада с фруктами/ягодами/специями.</li>
            </ul>
          </div>
        </div>
        
        {/* Модуль 5 - текст слева, картинка справа */}
        <div className={styles.modulesContainer}>
          <div className={styles.module}>
            <h4 className={styles.moduleTitle}>Модуль 5</h4>
            <p className={styles.moduleDescription}>Сделаем 14 рецептов потрясающих трюфелей, корпусных и нарезных конфет, и драже. + сборник бонусных рецептов!!</p>
            <ul className={styles.moduleList}>
              <li>12 рецептов трюфелей, нарезных конфет, корпусных конфет и мармелада. Прекристаллизация начинки.</li>
              <li>Однослойные и двуслойные начинки.</li>
              <li>Глазирование трюфелей.</li>
              <li>Шаблон для нарезных конфет.</li>
              <li>Нарезка и глазирование нарезных конфет.</li>
              <li>Корпусы для корпусных конфет.</li>
              <li>Заполнение начинки.</li>
              <li>Закрывание дна корпусных конфет: 2 способа.</li>
              <li>Вынимаем из формы.</li>
              <li>Готовые корпусы для трюфелей: плюсы и минусы.</li>
              <li>Драже: технология и 2 рецепта</li>
              <li>Результат работы.</li>
              <li>В общей сложности больше 20 потрясающих рецептов</li>
            </ul>
          </div>
          
          <div className={styles.moduleImage}>
            <img src="https://r.mobirisesite.com/1166961/assets/images/photo-1588195538326-c5b1e9f80a1b.jpeg" alt="Шоколадные конфеты" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;