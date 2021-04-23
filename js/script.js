$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
    // theme script
    let theme = localStorage.getItem('theme');

    if(theme == null){
        setTheme('light')
    }else{
        setTheme(theme)
    }

    let themeDots = document.getElementsByClassName('theme-dot')


    for (var i=0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
            let mode = this.dataset.mode
            setTheme(mode)
        })
    }

    function setTheme(mode){
        if(mode == 'first-color'){
            document.getElementById('theme-style').href = 'css/first-color.css'
        }

        if(mode == 'second-color'){
            document.getElementById('theme-style').href = 'css/second-color.css'
        }
        
        if(mode == 'third-color'){
            document.getElementById('theme-style').href = 'css/third-color.css'
        }
        localStorage.setItem('theme', mode)
    }
});