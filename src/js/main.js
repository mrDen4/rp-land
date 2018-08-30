//Кнопка заказать звонок
$('.header__burger').on('click', function() {
    $('.menu').toggleClass('menu--active');
});

$('.item__link').on('click', function() {
    $('.menu').toggleClass('menu--active');
});

$('.menu__exit').on('click', function() {
    $('.menu').toggleClass('menu--active');
});

//Кнопка записаться на консультацию
$('.hero__btn').on('click', function() {
    $('.modal__card').toggleClass('modal__card--active');
    $('.bg__modal').toggleClass('bg__modal--active');
});

//Кнопка записаться на консультацию
$('.bonus__btn').on('click', function() {
    $('.modal__card-bonus').toggleClass('modal__card-bonus--active');
    $('.bg__modal').toggleClass('bg__modal--active');
});

//Выход из popup
$('.bg__modal').on('click', function() {
    $('.modal__card').removeClass('modal__card--active');
    $('.modal__card-bonus').removeClass('modal__card-bonus--active');
    $('.bg__modal').removeClass('bg__modal--active');
});

$('.modal__exit').on('click', function() {
    $('.modal__card').removeClass('modal__card--active');
    $('.modal__card-bonus').removeClass('modal__card-bonus--active');
    $('.bg__modal').removeClass('bg__modal--active');
});