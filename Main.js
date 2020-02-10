const siteNav       = document.querySelector('.siteNav');
const navButtons    = Array.from(siteNav.children); 
const external      = document.querySelector('.external');
const externalBtn   = Array.from(external.children);
const page_iframe   = document.querySelector('.pageFrame');

var bgColour = $('#colorPicker').attr('value');
var currentPage;
var showPicker = false;

const getCurrentPage = () =>
{
    currentPage = siteNav.querySelector('.navButton-selected');
    
    if (currentPage == null)
    {
        currentPage = external.querySelector('.navButton-selected')
    }
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
        case 2: //gallery
            {
                pageToLoad = "gallery.html"
                $(document).prop('title', 'Gallery | Kaiapoi Town')
                break;
            }
        case 3: //activities
            {
                pageToLoad      = "attractions.html"
                $(document).prop('title', 'Activities | Kaiapoi Town')
                break;
            }
        case 4: //accomodation
            {
                pageToLoad = "accomodation.html"
                $(document).prop('title', 'Accomodation | Kaiapoi Town')
                break;
            }
        case 5: //where to eat
            {
                pageToLoad = "food.html"
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

const nav_to_external_site = (i) =>
{

        if (i == 0) // Waimak District Council Website
        {
            window.open('https://www.waimakariri.govt.nz/home','_blank');
        }
       else if(i == 1)// Kaiapoi Wikipedia Page
        {
            getCurrentPage();
            if (externalBtn[i] == currentPage)
            {
                window.open('https://en.wikipedia.org/wiki/Kaiapoi', '_blank');    
            }
            else
            {
                externalBtn[i].classList.add('navButton-selected');
                currentPage.classList.remove('navButton-selected');
                $('.pageFrame').attr('src',"https://en.wikipedia.org/wiki/Kaiapoi");
            }
        }
        else // Kaiapoi I-Site Website
        {
            getCurrentPage();
            
            if (externalBtn[i] == currentPage)
            {
                window.open('https://www.visitwaimakariri.co.nz/', '_blank');    
            }
            else
            {
                externalBtn[i].classList.add('navButton-selected');
                currentPage.classList.remove('navButton-selected');
                $('.pageFrame').attr('src',"https://www.visitwaimakariri.co.nz/");
            }
        }
}

const externalButtonListeners = (button, index) =>
{
    button.addEventListener('click',function () {nav_to_external_site(index)});
}
externalBtn.forEach(externalButtonListeners);

function changeBgColour()
{
    bgColour = $('#colorPicker').val();
    
    if (bgColour != null)
    {
        $("body").css('background-color', bgColour);
    }
    else
    {
        $("body").css('background-color', 'black');
    }
    if (showPicker)
    {    
        showPicker = false;
        window.alert("Background Colour Has Been Changed!");
    }
    showColorPicker();
}

function pickerButton()
{

    if (showPicker)
    {
        showPicker = false;
    }
    else
    {
        showPicker = true;
    }
    
    showColorPicker();
}

const showColorPicker = () =>
{
    if (showPicker)
    {
        //show colour picker
        $('#colorPicker').css('visibility', 'visible');
    }
    else
    {
        //hide colour picker
        $('#colorPicker').css('visibility', 'hidden');
    }
}

const set_jQueryStyling = () => 
{
    hideScrollButton();
    //general Styling with jQuery
    $("h1").css("font-size", "1.5em");
    $("h2").css("font-size", "1.1em");
    $('.carousel_track').css("transition-duration", "1.5s"); 
    $('.ad_track').css("transition-duration", "2.5s");
    $("button").css('cursor','pointer');
    showColorPicker();
    changeBgColour();

    //check if user is on mobile
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
    {

        //scale down carousel
        $('.ad_image').css('object-fit', 'contain');
        $('.ad-carousel').css('width','40%');
        $('.pageFrame').css('width', 'auto');
        $('.pageFrame').css('height', '300px');
        $('.panel').css('width', '15%');
    }
    else
    {
        //scale up carousels
        $('.ad_image').css('object-fit', 'fill');
        $('.ad-carousel').css('height', '110px');
        $('.ad-carousel').css('width','25%');
    }
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
    var waitTime = window.setTimeout(function() { moveToNextAd(0);}, 2000)
}


