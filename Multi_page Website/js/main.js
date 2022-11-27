// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scroller', window.scrollY > 0);
    const strip = document.querySelector('.strip');
    strip.classList.toggle('redStrip', window.scrollY > 0);

    document.body.classList.toggle('scrollBar', window.scrollY > 0)
})

// Show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',  () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})


// function(faq) = faq =>
// function() = () =>

// show/hide nav menu

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', ()=> {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    closeBtn.addEventListener('click', ()=> {
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'inline-block'
    })
    menuBtn.style.display = 'none';
})

// active pages change
