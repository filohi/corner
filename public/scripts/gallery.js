const vars = {
    body: document.querySelector('body'),
    nav: document.querySelector('nav'),
    cross: document.querySelector('.cross'),
    gallery: document.querySelector('.gallery'),
    galleryImages: Array.from(document.querySelectorAll('.rest img')),
    galleryMain: document.querySelector('.main_img'),
    selected: Array.from(document.querySelectorAll('.selected')),
    arrows: Array.from(document.querySelectorAll('.arrow'))
}

gallery = vars => {
    //function select
    //remove all classes of selected and add to target
    //show selected to main
    select = (target) => {
        vars.galleryImages.forEach(e => {
            e.classList.remove('selected')
            e.style.animation = ''
        })
        target.classList.add('selected')
        target.parentElement.scrollLeft = target.offsetLeft - target.width
        vars.galleryMain.src = target.src;
        target.style.animation = 'border 1s forwards'
    }

    vars.galleryImages.forEach(e => {
        e.addEventListener('click', () => {
            select(event.target)
        })
    })

    //trigger select on arrow click
    vars.arrows.forEach(e => {
        e.parentElement.addEventListener('click', () => {
            //fetch selected
            let current = document.querySelector('.selected')

            //check what arrow triggered event
            //select next in direction
            if(e.id == 'arrow_left' && current.previousElementSibling == null)
                select(vars.galleryImages[vars.galleryImages.length -1])
            else if(e.id == 'arrow_left')
                select(current.previousElementSibling)
            else if(e.id == 'arrow_right' && current.nextElementSibling == null)
                select(vars.galleryImages[0])
            else
                select(current.nextElementSibling)
        })
    })
}

gallery(vars)

toggleGallery = vars => {
    vars.gallery.classList.toggle('gallery_zoomed')
    vars.body.classList.toggle('hidden')

    vars.galleryMain.classList.toggle('gallery_zoomed_main')
    vars.galleryImages.forEach(e => {
        e.classList.toggle('gallery_zoomed_rest')
    })
    vars.cross.classList.toggle('grid')
    window.scrollTo(0,vars.galleryMain.getBoundingClientRect().y - vars.nav.offsetHeight)

    if(document.querySelector('.gallery').parentElement.classList.contains('photos')){
        document.querySelector('.rest').classList.toggle('rest_photos')
        document.querySelector('.current').classList.toggle('noborder')
        vars.arrows.forEach(e => {
            e.parentElement.classList.toggle('flex')
        })
    }
}

if(vars.galleryMain){
    vars.galleryMain.addEventListener('click', () => {
        toggleGallery(vars)
    })
}
if(vars.cross){
    vars.cross.addEventListener('click', () => {
        toggleGallery(vars)
    })
}

