
const btnMenu = document.querySelector('.btn-mobile');
const header = document.querySelector('.header')
const link = document.querySelectorAll('a:link')

btnMenu.addEventListener('click', function () {
    header.classList.toggle('open-nav')
})

link.forEach(i => i.addEventListener('click', function (e) {
    e.preventDefault();
    const href = i.getAttribute('href')
    console.log(href);

    if (href === '#') {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({
            behavior: "smooth"
        })
    }
    if (i.classList.contains('main-nav-link')) {
        header.classList.toggle('open-nav')
    }
}))

const sectionHero = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
    function (entire) {
        const ob = entire[0];
        console.log(ob);
        if (!ob.isIntersecting) document.body.classList.add('sticky')

        if (ob.isIntersecting) document.body.classList.remove('sticky')

    }
    , {
        root: null,
        threshold: 0,
        rootMargin: '-80px'
    });
obs.observe(sectionHero)