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
var sec = 15; //Delay Between Slides - CAN EDIT
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
    window.setTimeout(function() { hideScrollButton(); }, 1500);
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
                    direction = "left";
                }
                break;
            }
        case "left":
            {
                if (i < 1)
                {
                    i = slides.length - 1;
                    direction = "right";
                }
                else
                {
                    i--;
                }
                break;
            }
    }
    showScrollButton(direction);
    moveSlides(i);    
}

//When user clicks right, move slides to the right
nextButton.addEventListener('click', function() { window.clearTimeout(timer); hideScrollButton(); get_next_slide("right")});

//When user clicks left, move slides to the left
prevButton.addEventListener('click', function() { window.clearTimeout(timer);hideScrollButton(); get_next_slide("left");});

//TODO:
//When user clicks nav indicator, slides move to that slide
const dotNavigation = (nextIndex) => 
{
    geCurrentSlide();
    hideScrollButton();
    
    if (nextIndex > i)
    {
        showScrollButton("right");
    }
    else if (nextIndex < i)
    {
        showScrollButton("left");
    }
    
    i = nextIndex;
    
    if (dots[i] != currentDot)
    {
        moveSlides(i);
    }
}

const clickDot = (dot, index) =>
{
    dot.addEventListener('click', function() { window.clearTimeout(timer); dotNavigation(dots.indexOf(dot));});
}

dots.forEach(clickDot);


window.onload = () =>
{
    timer = window.setTimeout(function() { get_next_slide("right"); }, delay);
}