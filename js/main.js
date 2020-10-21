
'use strict';

(function () {

    var header = document.querySelector('header');
    var headerContent = header.querySelector('.header_content');
    var aboutMe = document.querySelector('.aboutMe');
    var skills = document.querySelector('.skills');
    var skillsText = skills.querySelector('.skills_text');


        $(window).scroll(function () {
            var long = $(window).scrollTop();
            if (long > headerContent.offsetTop+5) {
                headerContent.classList.add('header_fixed');
                console.log(skills.offsetTop + skills.offsetHeight);
            } else {
                headerContent.classList.remove('header_fixed');
            }
            if (long + aboutMe.offsetHeight >= aboutMe.offsetTop + aboutMe.offsetHeight ) {
                 skillsText.classList.add('skills_text_animation');
            }
        });
    
})();