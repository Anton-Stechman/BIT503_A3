const track         = document.querySelector('.carousel_track');
const slides        = Array.from(track.children);
const nextButton    = document.querySelector('.carousel_button--right');
const prevButton    = document.querySelector('.carousel_button--left');
const dotsNav       = document.querySelector('.carousel_nav');
const dots          = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides side-by-side
const setSlidePosition = (slide, index) => 
{
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (nextSlide) => 
{
    //const nextSlide = slides[i];
    //const amountToMove = nextSlide.style.left;
    
    console.log(nextSlide);
    //track.style.transfrom = 'translateX(' + amountToMove + ')';
}

const get_next_slide = (direction) =>
{
    const currentSlide = track.querySelector('.current-slide');
    var i = slides.indexOf(currentSlide);
    
    switch(direction)
    {
        case "right":
            {
                //move slides right
                if (i == slides.length)
                {
                    moveToSlide(slides[0]);
                }
                else
                {
                    //i++;
                   moveToSlide(currentSlide.nextElementSibling);
                }
                break;
            }
        case "left":
            {
                //move slides left
                if (i == 0)
                {
                   moveToSlide(slides[slides.length])
                }
                else
                {
                    //i--;
                   moveToSlide(currentSlide.previousElementSibling);
                }
                break;
            }
    }
}

//When user clicks right, move slides to the right
nextButton.addEventListener('click', e => get_next_slide("right"));

//When user clicks left, move slides to the left
prevButton.addEventListener('click', e => get_next_slide("left"));

//When user clicks nav indicator, slides move to that slide

