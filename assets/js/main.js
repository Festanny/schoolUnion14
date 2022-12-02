(function($) {
    $(window).resize(function() {
        size()
    });
    size()
    function size() {
        $('header .header nav .menuText .topmenuBig > .submenu .submenuP').width($('.container').width())
        $('header .header nav .submenuL3 .submenu3 .submenu3-1 .line').width(($('body').width() - $('.container').width()) / 2)
        $('header .header nav .submenuL3 .submenu3').css({
            'top': $('header .header nav .menuText .topmenuBig > .submenu .submenu2').height()
        })
    }
    setTimeout(function() {
        $('header .header nav .submenuL3 .submenu3').css({
            'top': $('header .header nav .menuText .topmenuBig > .submenu .submenu2').height()
        })
    }, 10)
    $('.offcanvas#mobMenu .topmenu li .nextOpen > a').on('click', function() {
        console.log($(this).parent('.nextOpen').next('.submenu').toggleClass('open'))
    })
})(jQuery);