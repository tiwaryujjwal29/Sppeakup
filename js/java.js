// JavaScript Document
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count'); 
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
});


$(document).ready(function() {

$('.owl-carousel').owlCarousel({
mouseDrag:false,
loop:true,
margin:2,
nav:true,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:3
}
}
});

$('.owl-prev').click(function() {
$active = $('.owl-item .item.show');
$('.owl-item .item.show').removeClass('show');
$('.owl-item .item').removeClass('next');
$('.owl-item .item').removeClass('prev');
$active.addClass('next');
if($active.is('.first')) {
$('.owl-item .last').addClass('show');
$('.first').addClass('next');
$('.owl-item .last').parent().prev().children('.item').addClass('prev');
}
else {
$active.parent().prev().children('.item').addClass('show');
if($active.parent().prev().children('.item').is('.first')) {
$('.owl-item .last').addClass('prev');
}
else {
$('.owl-item .show').parent().prev().children('.item').addClass('prev');
}
}
});

$('.owl-next').click(function() {
$active = $('.owl-item .item.show');
$('.owl-item .item.show').removeClass('show');
$('.owl-item .item').removeClass('next');
$('.owl-item .item').removeClass('prev');
$active.addClass('prev');
if($active.is('.last')) {
$('.owl-item .first').addClass('show');
$('.owl-item .first').parent().next().children('.item').addClass('prev');
}
else {
$active.parent().next().children('.item').addClass('show');
if($active.parent().next().children('.item').is('.last')) {
$('.owl-item .first').addClass('next');
}
else {
$('.owl-item .show').parent().next().children('.item').addClass('next');
}
}
});

});



'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //Slides in slider
    const slides = document.querySelectorAll('.slider__item');
    //Slider body
    const slider = document.querySelector('.slider');
    //Arrow right
    const right = document.querySelector('.slider__next');
    //Arrow left
    const left = document.querySelector('.slider__prev');
    
    //Dynamic nav dots
    const dotsWrapper = document.createElement('ol'),
          dots=[];
    
    dotsWrapper.classList.add('dots');
    slider.append(dotsWrapper);

    //Сreating the number of dots to match the slides
    for(let i = 0; i<slides.length;i++){
        const dot = document.createElement('li');
        //Data attribute for navigation in future
        dot.setAttribute('data-slide', i+1);
        dot.classList.add('dot');
        //First slide and first dot
        if(i==0){
            dot.style.opacity = 1;
        }
        dotsWrapper.append(dot);
        dots.push(dot);
    }
    
  //variable for showing slide
    let slideIndex = 1;

    showSlieds(slideIndex);

  //function for changing opacity
    function getOpacityShow(dots){
        dots.forEach(dot=>dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }
    
    function nextSlide(){
        showSlieds(slideIndex+=1);
    }

    function prevSlide(){
        showSlieds(slideIndex-=1);
    }

    function showSlieds(n) {
        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n<1){
            slideIndex = slides.length;
        }

        slides.forEach((element)=>{
            element.style.display = "none";
        })

        dots.forEach((dot)=>{
            dot.style.opacity= 0.5;
        })

        slides[slideIndex-1].style.display = "block";
        getOpacityShow(dots);
    }

 //Event Listeners
    right.addEventListener('click', nextSlide);
    left.addEventListener('click', prevSlide);
    dots.forEach(dot=>{
        dot.addEventListener('click',(e)=>{
            let slideTo = e.target.getAttribute('data-slide');
            slideIndex = slideTo;
            showSlieds(slideIndex);
        });
    });
});
