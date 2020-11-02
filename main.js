$('.navbar-toggler').click(function(){ 
    $('#display_advance').toggle('1000'); 
    icon = $(this).find("i"); 
    icon.toggleClass("fas fa-bars fas fa-times") 
})