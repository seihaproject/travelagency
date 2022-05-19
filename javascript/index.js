
let searchBtn = document.querySelector('#search-btn')
let searchbar = document.querySelector('.search-bar-container')
let formBtn = document.querySelector('#login-btn')
let formClose = document.querySelector('#form-close');
let loginForm = document.querySelector('.login-form-container')
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let btnvideo = document.querySelectorAll('.vid-btn')
window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times')
    searchbar.classList.remove('active');


}
menu.addEventListener('click',()=>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active')



});
searchBtn.addEventListener('click', () =>{

    searchBtn.classList.toggle('fa-times')
    searchbar.classList.toggle('active');



});

formBtn.addEventListener('click',()=>{
loginForm.classList.add('active');

})
formClose.addEventListener('click',()=>{
loginForm.classList.remove('active')

})

btnvideo.forEach(btn=>{

    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
       // btn.classList.add('active');
        var src=btn.getAttribute('data-src');
        document.querySelector('#video-slide').src = src;


    })
})

var swiper = new Swiper('.review-slider',{
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,

    },
    breakpoints: {
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }


})

var swiper = new Swiper('.brand-slider',{
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,

    },
    breakpoints: {
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }


})