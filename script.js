// Carrossel de produtos
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex--;
    carouselInner.style.transform = `translateX(${currentIndex * -100}%)`;
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex++;
    carouselInner.style.transform = `translateX(${currentIndex * -100}%)`;
});

// Integração de formulário para pedidos via WhatsApp
const orderForm = document.getElementById('order-form');
const sendOrderButton = document.getElementById('send-order');

sendOrderButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const products = document.getElementById('products').value;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=55${phone}&text=Olá!%20Eu%20gostaria%20de%20fazer%20um%20pedido:%20${products}%20-%20${name}`;
    window.open(whatsappUrl, '_blank');
});