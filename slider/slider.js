$(document).ready(function () {
    let sliderPosition = 0;
    const sliderTrack = $('.slider-track');
    const img = $('.img');

    const imgWidth = img.width()
    const sliderButtonPrev = $('.arrow-left');
    const sliderButtonNext = $('.arrow-right');

    const sliderButtons=()=>{
        if(sliderPosition === 0){
            sliderButtonPrev.hide();
        }else{
            sliderButtonPrev.show();
        }
        if(sliderPosition === imgWidth * -3){
            sliderButtonNext.hide();
        }else{
            sliderButtonNext.show();
        }
    }
    sliderButtons()

    sliderButtonPrev.on('click', function () {
        sliderPosition += imgWidth;
        sliderButtons()
        sliderTrack.css('transform', `translateX(${sliderPosition}px`)
    })
    sliderButtonNext.on('click', function () {
        sliderPosition -= imgWidth;
        sliderButtons()

        sliderTrack.css('transform', `translateX(${sliderPosition}px`)
    })
})
//modalStyles
$(document).ready(function ($) {
    $('.popup-open').click(function () {
        $('.popup-fade').fadeIn();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function (e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
});

//
/*$(document).ready(function () {
    let sliderPosition = 0;
    const sliderContainer = $('.slider-container');
    const sliderTrack = $('.slider-track');
    const sliderItem = $('.slider-item');
    const img = $('.img');

    const imgWidth = img.width()
    const sliderItemWidth = sliderItem.width();
    const sliderContainerWidth = sliderContainer.width();
    const sliderTrackWidth = imgWidth * sliderItemWidth;
debugger
    const sliderButtonPrev = $('.arrow-left');
    const sliderButtonNext = $('.arrow-right');

    sliderButtonPrev.on('click', function () {
        sliderPosition += sliderItemWidth;
        if (sliderPosition > 0) {
            debugger
            sliderPosition = 0;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    })
    sliderButtonNext.on('click', function () {
        sliderPosition -= sliderItemWidth;
        if (sliderPosition < -sliderTrackWidth) {
            debugger
            sliderPosition = -sliderTrackWidth;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    })
    const sliderButtons=()=>{
        if(sliderPosition === 0){
            sliderButtonPrev.hide();
        }else{
            sliderButtonPrev.show();
        }
        if(sliderPosition === sliderContainerWidth){
            sliderButtonPrev.hide();
        }else{
            sliderButtonPrev.show();
        }
    };
    sliderButtons();
})*/

/*$(document).ready(function($) {
    // Клик по ссылке "Закрыть".
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    // Клик по фону, но не по окну.
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
});*/
/*
$(document).ready(function () {
    let sliderPosition = 0;

    const sliderContainer = $('.slider-container');
    const sliderTrack = $('.slider-track');
    const sliderItem = $('.slider-item');
    const img = $('.img');

    const imgWidth = img.width()
    const sliderItemWidth = sliderItem.width();
    const sliderContainerWidth = sliderContainer.width();
    const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth;

    const sliderButtonPrev = $('.arrow-left');
    const sliderButtonNext = $('.arrow-right');

    sliderButtonPrev.on('click', function () {
        sliderPosition += imgWidth;
        if (sliderPosition > 0) {
            sliderPosition = 0;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`)
    })
    sliderButtonNext.on('click', function () {
        sliderPosition -= sliderItemWidth * -1;
        if (sliderPosition < -sliderTrackWidth ) {
            debugger
            sliderPosition -= sliderTrackWidth * -1;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`)
    })
})*/
