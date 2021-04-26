$(document).ready(function(){
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

    $('.carousel2').owlCarousel({
        margin: 20,
        loop: true,
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
                items: 2,
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

    let themeDots = document.getElementsByClassName('theme-dot');


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

    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right'
    });
});