/*
12/21/2022
Decided to scrap the previous scripts.
I improved by learning jQuery, and then redesigning my icon scrolling function
*/

$(document).ready(function(){
    $(document).scroll(function() {
        pages = document.getElementsByClassName("page");
        links = document.getElementsByClassName("link");
        for(var i = 0; i < 6; i++){
            links[i].className = links[i].className.replace(" current", "")
            if(checkVisible(pages[i]) == true){
                // $(pages[i]).css("background-color", "green");
                //pages[i].className += " current";
                links[i].className+= " current";
            }
        }
    });
});

// credit to Brien Foss https://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var rectHeight = rect.height * .25;
    return !(rect.bottom - rectHeight < 0 || rect.top - viewHeight + rectHeight >= 0);
  }


// copies phone number to clipboard
    $(document).ready(function(){
        $("#phone").click(function(){
            navigator.clipboard.writeText("(970)-318-9469").then(() => {
                alert("Copied the text: (970)-318-9469");
              }, () => {
                alert("failed to copy the text: (970)-318-9469");
              });{
            };
        })
    });
//copies email to clipboard
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