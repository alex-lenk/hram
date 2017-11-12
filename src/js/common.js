$(document).ready(function () {
    $(".navbar-toggle").click(
        function () {
            $('.menu').toggleClass("menu-active");
        }
    );

    $(function () {
        $('#to-top-btn').on('click', function (e) {
            $('html,body').stop().animate({scrollTop: $('body').offset().top}, 1000);
            e.preventDefault();
        });
    });

// BEGIN: Открытие и закрытие поисковой панели в шапке сайта
    var searchTop = $('.search-top'),
        searchTopClose = $('.search-top-close'),
        searchTopOpened = 'search-top-opened';

    $('.search-top-icon').on('click', function () {
        if (searchTop.hasClass(searchTopOpened)) {
            searchTop.removeClass(searchTopOpened);
        } else {
            searchTop.addClass(searchTopOpened);
        }
    });

    searchTopClose.on('click', function () {
        searchTop.removeClass(searchTopOpened);
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.search-top').length)
            return;
        searchTop.removeClass(searchTopOpened);
        event.stopPropagation();
    });
// END
});
