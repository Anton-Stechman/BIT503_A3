const set_jQueryStyling = () => 
{
    hideScrollButton();
    $("h1").css("font-size", "1.5em");
    $("h2").css("font-size", "1.1em");
    $('.carousel_track').css("transition-duration", "1.5s"); 
}

const hideScrollButton = () => 
{
    $('.carousel_button').css("color", "transparent");
}
const showScrollButton = (direction) => 
{   
    switch(direction)
    {
        case "right": 
            {
                $('.carousel_button--right').css("color", "white");
                break;
            }
        case "left":
            {
                $('.carousel_button--left').css("color", "white");
                break;
            }
    }
}

window.onload = () => 
{
    set_jQueryStyling();
    timer = window.setTimeout(function() { get_next_slide("right"); }, delay);
}


