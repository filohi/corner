const variables = {
    hamburger: document.querySelector('.hamburger'),
    mobileNav: document.querySelector('.mobile_nav'),
    body: document.querySelector('body'),
    marginRight: document.querySelector('.margin_right'),
    gallery: document.querySelector('.gallery_wrap'),
    pricelist: document.querySelector('.pricelist'),
    reviews: document.querySelector('.reviews'),
    contact: document.querySelector('.contact'),
    map: document.querySelector('.map')
}

dropdown_menu = (v) => {
    drop = () => {
        v.mobileNav.classList.toggle('margin_right')
        v.body.classList.toggle('hidden')
        v.hamburger.children[0].classList.toggle('spanA')
        v.hamburger.children[1].classList.toggle('spanB')
        v.hamburger.children[2].classList.toggle('spanC')
        Array.from(v.hamburger.children).forEach(e => {
            if(e.classList.contains('backgroundGrey'))
                e.classList.remove('backgroundGrey')
    })
    }
    
    v.mobileNav.addEventListener('click', () => {
        drop()
    })
    v.hamburger.addEventListener('click', () => {
        drop()
    })

}

dropdown_menu(variables)


window.onscroll = () => {
    if((window.pageYOffset > variables.gallery.offsetTop && window.pageYOffset < variables.reviews.offsetTop) 
    || (window.pageYOffset > variables.pricelist.offsetTop && window.pageYOffset < variables.contact.offsetTop)
    || (window.pageYOffset > variables.map.offsetTop)){
        Array.from(variables.hamburger.children).forEach(e => {
                e.classList.add('backgroundGrey')
        })
    }else {
        Array.from(variables.hamburger.children).forEach(e => {
            e.classList.remove('backgroundGrey')
    })
    }
}