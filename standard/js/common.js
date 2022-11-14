$(document).ready(function() {
    // 전체 메뉴 toggle
    $('.tit .btn').click(function (e) {
        e.preventDefault(); // a 태그 링크 이동 막기
        // if($('#cont_nav').css('display') == 'none') {
        //    $('#cont_nav').css('display', 'block');
        //    $(this).addClass('on');
        // } else {
        //    $('#cont_nav').css('display', 'none');
        //    $(this).removeClass('on');
        // }

        // // $('#cont_nav').css('display', 'block');
        // // $('#cont_nav').show();
        // // $('#cont_nav').fadeIn();
        // // $('#cont_nav').slideDown();
        // // $('#cont_nav').toggle();
        // // $('#cont_nav').slideToggle();
        $('#cont_nav').toggle();
        $(this).toggleClass('on');
    });

    // 슬릭슬라이드 배너
    $('.ban').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });

    // 슬릭슬라이드 갤러리
    $('.gallery_img').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    $('.play').click(function () {
        $('.gallery_img').slick('slickPlay');
    });
    $('.pause').click(function () {
        $('.gallery_img').slick('slickPause');
    });
    $('.prev').click(function () {
        $('.gallery_img').slick('slickPrev');
    });
    $('.next').click(function () {
        $('.gallery_img').slick('slickNext');
    });
    
    // 탭메뉴(웹접근성 준수)
    var $tab_list = $('.tab_menu');
    $tab_list.find('ul ul').hide();
    $tab_list.find('li.active > ul').show();

    function tabMenu(e) {
        e.preventDefault();
        var $this = $(this);
        $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
    }
    $tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu);

    // 레이어 팝업
    $('.layer').click(function (e) {
        e.preventDefault();
        $('#layer').fadeIn();
        $('#bg').css('display', 'block');
    });
    $('.close').click(function(e) {
    e.preventDefault();
    $('#layer').fadeOut();
    $('#bg').css('display', 'none');
    });
    
    // 윈도우 팝업
    $('.window').click(function (e) {
        e.preventDefault();
        window.open('popup.html', 'popup', 'width= 700, height=560, left=50, top=100')
    })
    // 라이트박스
    $(".lightgallery").lightGallery({
        thumbnail: true,
        autoplay: true,
        pause: 3000,
        progressBar: true
    });
});



// 스크롤이 몇 퍼센트 움직였는지 확인
// var percent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
// console.log(percent);