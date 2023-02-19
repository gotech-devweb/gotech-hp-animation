$('.owl-carousel').owlCarousel({
    autoplay: true, // Tự động chuyển slide
    dots: false, // Hiển thị chấm chỉ số slide
    nav: false, // Hiển thị nút điều khiển trái/phải
    loop: true, // Cho phép lặp lại slide
    speed: 500, // Tốc độ chuyển đổi slide
    items: 1, // Số slide hiển thị trên màn hình
    margin: 10, // Khoảng cách giữa các slide
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        768: {
            items: 1,
            nav: false,
            loop: true
        }
    }
});

$(function () {

    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('#scrollToTop').fadeIn();
        }else{
            $('#scrollToTop').fadeOut();
        }
    });

    $('#scrollToTop').bind("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 1200);
        return false;
    });
});