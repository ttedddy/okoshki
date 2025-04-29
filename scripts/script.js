const filterItems = document.querySelectorAll('.windows-filter li');
const windowItems = document.querySelectorAll('.window');
const windowsContent = document.getElementById('windows-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    windowItems.forEach((window) => {
      if (
        filterText === 'все сапы' ||
        window.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        window.style.display = 'flex';
      } else {
        window.style.display = 'none';
      }
    });

    windowsContent.scrollIntoView({ behavior: 'instant' });
  };
});

// Получаем все необходимые элементы один раз
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const orderButton = document.getElementById('order-action');


// Массив объектов с полями и их валидаторами
const fields = [
  {
    field: nameInput,
    pattern: /^[А-Яа-яЁёA-Za-z\s]+$/,
    // message: 'Введите корректное имя',
  },
  {
    field: phoneInput,
    pattern: /^[0-9]+$/,
    minLength: 10, // добавляем проверку минимальной длины
    // message: 'Введите номер в формате +7-XXX-XXX-XX-XX',
  },
];

// Функция проверки одного поля
function validateField(fieldObj) {
  const value = fieldObj.field.value.trim();

  // Для телефона добавляем проверку длины
  if (fieldObj.field === phoneInput) {
    if (value.replace(/[^\d]/g, '').length < fieldObj.minLength) {
      fieldObj.field.style.borderColor = 'red';
      return false;
    }
  }

  if (fieldObj.pattern.test(value)) {
    fieldObj.field.style.borderColor = '#ffffff';
    return true;
  } else {
    fieldObj.field.style.borderColor = 'red';
    return false;
  }
}

// Обработчик нажатия кнопки
orderButton.addEventListener('click', function (e) {
  e.preventDefault();

  let isValid = true;

  // Проходим по всем полям
  fields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  if (isValid) {
    alert('Спасибо за заявку! Мы скоро свяжемся с вами');

    // Очищаем все поля
    fields.forEach((field) => {
      field.field.value = '';
      field.field.style.borderColor = '#d4d4d4';
    });
  }
});

// Кнопка передачи данных о сапе в форму бронирования
const windowOrderButton = document.getElementById('window-order-action');
// Получаем поле window
const windowInput = document.getElementById('window');

function showTitle() {
  // Получаем h4 напрямую по родительским элементам
  const h4Element = document.querySelector('.window > .window-details > h4');

  // Получаем текст заголовка
  const titleText = h4Element.textContent;

  // Устанавливаем значение в input
  windowInput.value = titleText;
};
