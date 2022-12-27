/*
12/21/2022
Decided to scrap the previous scripts.
I improved by learning jQuery, and then redesigning my icon scrolling function
*/


/*
This function ensures that the navigation bar icons correlate to the current page
*/
$(document).ready(function(){ // once the page is loaded
    $(document).scroll(function() { //when the page scrolls
        pages = document.getElementsByClassName("page");
        links = document.getElementsByClassName("navlink");
        for(var i = 0; i < 6; i++){ // there are 6 pages, easier to manually input
            links[i].className = links[i].className.replace(" current", "") //resets app pages
            if(checkVisible(pages[i]) == true){ // checks current page and sets it to current
                links[i].className+= " current";
            }
        }
    });
});

/*
credit to Brien Foss https://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
This function does a basic check to see if the chosen element is on the screen
*/
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect(); //gets the bounding box of the element
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    //gets the height of the viewport, prioritizes largest height
    var rectHeight = rect.height * .25;
    // changes the area of the screen being measured, used for animation smoothness
    return !(rect.bottom - rectHeight < 0 || rect.top - viewHeight + rectHeight >= 0);
    // returns elements whose coordinates are not outside of the screen height
  }


// copies phone number to clipboard
    $(document).ready(function(){
        $("#phone").click(function(){// when the element is clicked
            //copy phone number to clipboard
            navigator.clipboard.writeText("(970)-318-9469").then(() => {
                //send an alert depending on success or failure
                alert("Copied the text: (970)-318-9469");
              }, () => {
                alert("failed to copy the text: (970)-318-9469");
              });{
            };
        })
    });

//copies email to clipboard
// identical to above except different text
    $(document).ready(function(){
        $("#email").click(function(){
            navigator.clipboard.writeText("booglebeaste@gmail.com").then(() => {
                alert("Copied the text: booglebeaste@gmail.com");
              }, () => {
                alert("failed to copy the text: booglebeaste@gmail.com");
              });{
            };
        })
    });


        $("#menu").ready(function(){ // runs if menu is ready
            menu = document.getElementById("menu"); //gets menu element
            menu.className += "loaded"; // adds loaded class, triggering animation
        })