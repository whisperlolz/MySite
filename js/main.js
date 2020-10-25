
'use strict';

(function () {

    let header = document.querySelector('header');
    let headerTop = header.querySelector('.header_top');
    let headerContent = header.querySelector('.header_content');
    let aboutMe = document.querySelector('.aboutMe');
    let skills = document.querySelector('.skills');
    let skillsText = skills.querySelector('.skills_text');
    let projects = document.querySelector('.projects');
    let contact = document.querySelector('footer')
    let menu = document.querySelector('.menu');
    let hamburger = menu.querySelector('.hamburger');
    let hamburgerMenu = document.querySelector('.hamburger_menu');
    let hamburgerMenuActive = document.querySelector('.hamburger_menu_active');


        $(window).scroll(function () {
            let long = $(window).scrollTop();
            if (long > headerContent.offsetTop+5) {
                headerContent.classList.add('header_fixed');
            } else {
                headerContent.classList.remove('header_fixed');
            }
            if (long + aboutMe.offsetHeight >= aboutMe.offsetTop + aboutMe.offsetHeight ) {
                 skillsText.classList.add('skills_text_animation');
            }
        });
     

    
    let siteNav = function (etc, content){
        $(etc).click(function () {
            console.log(content.offsetTop + ' ' + header.offsetHeight + ' ' + headerTop.offsetHeight);
            let b = content.offsetTop - header.offsetHeight - headerTop.offsetHeight + 20;
            window.scrollTo(0, b);
            
        });    
    };

    menu.querySelector('.hamburger_wrapper').onclick = function () {
        hamburgerMenu.classList.toggle('hamburger_menu_active');
        hamburger.classList.toggle('hamburger_active');
    };
    
    // $(aboutMe).click(function () {
    //     hamburgerMenu.classList.remove('hamburger_menu_active');
    // });
    
    siteNav('#aboutMe', aboutMe);
    siteNav('#skills', skills);
    siteNav('#projects', projects);
    siteNav('#contacts', contact);
    

    
    
})();