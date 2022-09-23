console.log("hi i am hostinger");

// for hamburger menu
$('.icon').click(function(){
    $('i#menu').toggleClass("fa-x");
});


// add class when load
$(document).ready(function(){
  if(window.scrollY==0){
    $("#nav").addClass("transparent");
  }
});

// add class when scroll
$(window).scroll(function(){
  if(window.scrollY==0){
    $("#nav").addClass("transparent");
  }else{
    $("#nav").removeClass("transparent");
  }
});



// #### to stop default behaviors of a tag in nav menu who have nested menu
$(".show+a").click(function(event){
  event.preventDefault();
});


// hide new version warning.
$("#hide-n-v").click(function(event){
  $("#new-version").addClass("hide");
});

