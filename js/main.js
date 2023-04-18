$(document).ready(function(){
    
    $(".feature [class^='feature-item-']").addClass("d-none");
    $("[class^='tab-button-'].active").parents("[class^='feature-item-']").css('display', 'flex');
    $("[class^='tab-button-']").click(function() {
        var currentFeatureClass = ".feature-item-" + $(this).attr('class').charAt(11);
        var currentButtonClass = ".tab-button-" + $(this).attr('class').charAt(11);
        $("[class^='tab-button-']").removeClass('active');
        $("[class^='feature-item-']").css('display', 'none');
        $(currentFeatureClass).css('display', 'flex').find($(currentButtonClass)).addClass('active');
    });

    $(".nav-mobile-button").click(function(){
        $("header nav").slideToggle("slow");
      });

});
