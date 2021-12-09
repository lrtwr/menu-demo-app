
  $('.lt-submenu a').on("click", function(e){
    if($(this).next('span').css("display")=="block"){
     $(this).next('span').toggle();
    }
    else{
     $(this).parent().parent().find('span').hide();
   $(this).parent().parent().parent().find('span').hide();
   $(this).next('span').toggle();
    }
    e.stopPropagation();
    e.preventDefault();
  });
  $('.dropdown-item').on("click", function(e){
   $('.lt-submenu a').next('span').hide();
  });


