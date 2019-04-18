$('.active-gallery-carousel').owlCarousel({
    items: 2,
    // autoplay: 2500,
    loop: true,
    margin: 30,
    nav: true,
    navText: [ "<img src='img/cprev.png'>", "<img src='img/cnext.png'>" ],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 1
        },
        575: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 2
        },
        1680: {
            items: 2
        }
    }
});