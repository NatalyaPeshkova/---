// слайдер
$('.sliders').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500,
    arrows:false,
    speed:3000
});

// открытие и закрытие модального окна 
let openModalButton = document.getElementById('openModal');
let closeModalButton = document.querySelector('.close');
let modalWindow = document.querySelector('.modal');


function openModal() {
    modalWindow.style.display = 'block';
}

function closeModal() {
    modalWindow.style.display = 'none';
}

// добавление товаров в корзину 
let cartCounter = document.getElementById('cart-counter');
let toCart = document.querySelectorAll('.add-to-cart');
let itemCount = 0;

function addToCart() {
    itemCount++;
    cartCounter.textContent = itemCount;
}

toCart.forEach(function(icon){
    icon.addEventListener('click', addToCart);
})

