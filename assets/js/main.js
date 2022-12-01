$('header .header nav .menuText .topmenuMain').hover(
    function() {
        $( this ).find(' > .submenu').fadeIn()
    }, function() {
        $( this ).find(' > .submenu').fadeOut()
    }
)
$(window).resize(function() {
    size()
});
size()
function size() {
    $('header .header nav .menuText .topmenuBig > .submenu .submenuP').width($('.container').width())
    $('header .header nav .menuText .topmenuBig > .submenu .submenuP .tile').width(($('body').width() - $('.container').width()) / 2)
}
