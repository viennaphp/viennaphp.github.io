$(function(){
    $('nav li a').click(function(e){
        scrollToPage($(this).attr('href'));
        e.preventDefault();
    });

    function scrollToPage(page){
        $("html,body").animate(
            {scrollTop: $(page).offset().top - $('nav.top-bar').first().height() - 10 }, 
            600
        );
    }
});
