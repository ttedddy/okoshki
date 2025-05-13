// Пример простого JavaScript для анимации
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  const serviceCards = document.querySelectorAll('.service-card');
  
  // Добавляем анимацию при наведении
  productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
  card.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0)';
  });
  });
  
  serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
  card.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0)';
  });
  });
 });
 
