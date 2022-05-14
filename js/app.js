//  -------  Nav BAR [PURE JS] -----------------//


// let getElement = (selector) => {
//     let element = document.querySelector(selector)
//     if (element) return element
//     throw Error(
//         `Please double`
//     )
// }

// let links = getElement('.nav-links')
// let linksSocialIcons = getElement('.nav-social-link')
// let navBtn = getElement('.nav-btn')

// navBtn.addEventListener('click', () => {
//     links.classList.toggle('collapse')
//     linksSocialIcons.classList.toggle('collapse-social')
// });    

//  ---- X ---  Nav BAR [PURE JS]--------- X ---//



//  -------  Nav BAR [ jQuery ]------------//

$(document).ready(function() {
        $nav = $('.nav-links');
        $linksSocialIcons = $('.nav-social-link')
        $navBtn = $('.nav-btn');

        $navBtn.click(function() {
            $nav.toggleClass('collapse');
            $linksSocialIcons.toggleClass('collapse-social');
        })
    })
    //  ---- X ---  Nav BAR [ jQuery ]--------- X ---//



// ----------owl carousel---------------

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 2,
    dots: false,
    nav: true,
    //    nav: true,--->>>this help for css
    navText: [$('.owl-nav-prev'), $('.owl-nav-next')],
});


// -- X --------owl carousel------ X ---