$(document).ready(function () {
    const flowersSlider = new Swiper('.flowers-slider', {
        // Oпциональные параметры
        loop: true,
        slidesPerView: 6,
        // Управление с клавиатуры
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        // Стрелки навигации
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            320:{
                slidesPerView:2,

            },
            480:{
                slidesPerView:3,

            },
            576:{
                slidesPerView:4,

            },
            992:{
                slidesPerView:6,

            }
        }


    });
    const reviewsSlider = new Swiper('.reviews-slider', {
        // Oпциональные параметры
        loop: true,
        slidesPerView: 1,

        // Стрелки навигации
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Управление с клавиатуры
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

    });
    $("#show-more").on('click',function () {
        $.fancybox.open([
            {
                src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
                opts : {
                    caption : 'First caption',
                    thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
                }
            },
            {
                src  : 'https://source.unsplash.com/0JYgd2QuMfw/240x160',
                opts : {
                    caption : 'Second caption',
                    thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
                }
            }
        ], {
            loop : false,
            thumbs:{
                autostart: true
            }
        });
    });
    $("#counter-button-plus1").on('click',function () {
        let num = parseInt(document.getElementById("input_count1").value)
        
    })
});
