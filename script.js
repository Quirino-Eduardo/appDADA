// Carrossel de produtos
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0)? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1)? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

// Integração de formulário para pedidos via WhatsApp
const orderForm = document.getElementById('order-form');
const sendOrderButton = document.getElementById('send-order');

sendOrderButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const products = document.getElementById('products').value;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5511962507584&text=Olá!%20Eu%20gostaria%20de%20fazer%20um%20pedido:%20${products}%20-%20${name}%20-%20Telefone:%20${phone}`;
    window.open(whatsappUrl, '_blank');
});

// Função para adicionar ao carrinho
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.carousel-item');
        const productName = product.querySelector('h2').textContent;
        const productDescription = product.querySelector('p').textContent;
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${productDescription}`;
        document.getElementById('cart').appendChild(cartItem);
    });
});

// Adicionar telefone celular ao header
const headerPhone = document.createElement('p');
headerPhone.textContent = '(11) 96250-7584';
headerPhone.classList.add('header-phone');
document.querySelector('.banner').appendChild(headerPhone);

// Ajustar 'header-title' para tela de celular
const headerTitle = document.querySelector('.header-title');
headerTitle.style.fontSize = '18px';
headerTitle.style.lineHeight = '1.2';