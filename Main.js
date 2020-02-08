const siteNav       = document.querySelector('.siteNav');
const navButtons    = Array.from(siteNav.children); 


var currentPage;
const page_iframe = document.querySelector('.pageFrame');

const getCurrentPage = () =>
{
    currentPage = siteNav.querySelector('.navButton-selected');
}
//Load Page On button Click
const loadPage = (button) =>
{
    getCurrentPage();
    var i = navButtons.indexOf(button);
    var pageToLoad = "homePage.html";
    
    switch(i)
    {
        case 1: //home
            {
                pageToLoad = "homePage.html";
                $(document).prop('title', 'Home | Kaiapoi Town')
                break;
            }        
        case 2: //blog
            {
                pageToLoad = "test1.html"
                $(document).prop('title', 'Blog | Kaiapoi Town')
                break;
            }
        case 3: //activities
            {
                pageToLoad = "test2.html"
                $(document).prop('title', 'Activities | Kaiapoi Town')
                break;
            }
        case 4: //accomodation
            {
                pageToLoad = "homePage.html"
                $(document).prop('title', 'Accomodation | Kaiapoi Town')
                break;
            }
        case 5: //where to eat
            {
                pageToLoad = "test1.html"
                $(document).prop('title', 'Food | Kaiapoi Town')
                break;
            }
    }

    if (i > 0 && button != currentPage) //0 is List Title
    {
        button.classList.add('navButton-selected');
    
        currentPage.classList.remove('navButton-selected');

        $('.pageFrame').attr('src', pageToLoad);
    }
    //load page
}

//Add Listeners to Site nav buttons
const buttonListeners = (button, index) =>
{
    button.addEventListener('click', function() { loadPage(button);});
}
navButtons.forEach(buttonListeners);

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


