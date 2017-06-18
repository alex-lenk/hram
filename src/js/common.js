$(document).ready(function () {
    $(".navbar-toggle").click(
        function () {
            $('.menu').toggleClass("menu-active");
        }
    );
    $(".header-search").click(
        function () {
            $('.header-search').addClass("header-search-enabled");
        }
    );

    $(function(){
        $('#to-top-btn').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('body').offset().top }, 1000);
            e.preventDefault();
        });
    });
});
