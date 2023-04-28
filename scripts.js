const ScrollListener = ()=>{
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('#header').addClass('second-line__fixed');
        }
        else {
            $('#header').removeClass('second-line__fixed');
        }
    });
}
ScrollListener()