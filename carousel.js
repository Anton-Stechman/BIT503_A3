const track         = document.querySelector('.carousel_track');
const slides        = Array.from(track.children);
const nextButton    = document.querySelector('.carousel_button--right');
const prevButton    = document.querySelector('.carousel_button--left');
const dotsNav       = document.querySelector('.carousel_nav');
const dots          = Array.from(dotsNav.children);
const slideWidth    = slides[0].getBoundingClientRect().width;

//arrange the slides side-by-side
const setSlidePosition = (slide, index) => 
{
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

//Move Slides
var i = 0;
var currentSlide;
var currentDot;
var sec = 25; //Delay Between Slides - CAN EDIT
const delayMultiplier = 1000; //DO NOT EDIT
var delay = sec * delayMultiplier;
var timer;
var canScroll = false;

//Get The Current Slide & Dot Navigation Button
const geCurrentSlide = () => 
{
    currentSlide    = track.querySelector('.current-slide');
    currentDot      = dotsNav.querySelector('.current-slide');
}

//Move To The Next Slide & Dot Navigation Button
const moveSlides = (i) =>
{
    geCurrentSlide();

    var curState;
    var nextSlide           = slides[i];
    var nextDot             = dots[i];
    const amountToMove      = nextSlide.style.left;
    track.style.transform   = 'translateX(-' + amountToMove + ')'; 

    nextDot.classList.add('current-slide');
    nextSlide.classList.add('current-slide');

    currentDot.classList.remove('current-slide');
    currentSlide.classList.remove('current-slide');
    
    timer = window.setTimeout(function() { get_next_slide("right"); }, delay);
}

//Get The Next Slide & Dot Navigation Button
const get_next_slide = (direction) =>
{        
    switch(direction)
    {
        case "right":
            {
                if (i < slides.length - 1)
                {
                    i++;
                }
                else
                {
                    i = 0;
                }
                break;
            }
        case "left":
            {
                if (i < 1)
                {
                    i = slides.length - 1;
                }
                else
                {
                    i--;
                }
                break;
            }
    }

    moveSlides(i);    
}

//When user clicks right, move slides to the right
nextButton.addEventListener('click', function() { window.clearTimeout(timer); get_next_slide("right"); canScroll = false;});

//When user clicks left, move slides to the left
prevButton.addEventListener('click', function() { window.clearTimeout(timer); get_next_slide("left"); canScroll = false;});

//TODO:
//When user clicks nav indicator, slides move to that slide
const dotNavigation = (nextIndex) => 
{
    i = nextIndex;
    moveSlides(i);
}

const clickDot = (dot, index) =>
{
    dot.addEventListener('click', function() { window.clearTimeout(timer); dotNavigation(dots.indexOf(dot)); canScroll = false;});
}

dots.forEach(clickDot);


window.onload = (function() 
{    
    timer = window.setTimeout(function() { get_next_slide("right"); }, delay);
    
    //Set Some Styling With jQuery
    $('.carousel_track').css("transition-duration", "1.5s");
    $("h1").css("font-size", "1.5em");
    $("h2").css("font-size", "1.1em");
    
    
});