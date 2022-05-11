// $(document).ready(function() {
//     $nav = $('.nav');
//     $toggleCollapse = $('.toggle-collapse');
//     $toggleCollapse.click(function() {
//         $nav.toggleClass('collapse-menu');
//     })
// })



// $(document).ready(function() {
//         $nav = $('.nav-header');
//         $toggleCollapse = $('.nav-btn');
//         $toggleCollapse.click(function() {
//             $nav.toggleClass('collapse');
//         })
//     })



// $(document).ready(function() {
//     $nav = $('.nav');
//     $toggleCollapse = $('.toggle-collapse');
//     $toggleCollapse.click(function() {
//         $nav.toggleClass('collapse');
//     })
// })



//  -------  Nav BAR -----------------//


let getElement = (selector) => {
    let element = document.querySelector(selector)
    if (element) return element
    throw Error(
        `Please double`
    )
}

let links = getElement('.nav-items')
let linksSocialIcons = getElement('.nav-social-icon')
let navBtn = getElement('.nav-btn')

navBtn.addEventListener('click', () => {
    links.classList.toggle('collapse')
    linksSocialIcons.classList.toggle('collapse-social')
});

//  -------  Nav BAR -----------------//