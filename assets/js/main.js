$(document).ready(function() {
    $('.your-class').slick({

    });
});

// Sticky
const header = document.querySelector('.header-section');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
})

// Scroll header active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

// Show menu on mobile
const showMenu = (toggeId, navId) => {
    const toggle = document.querySelector(toggeId),
        nav = document.querySelector(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.add('show-menu');
        })
    }
}

showMenu('.nav-menu-toogle ', '.nav__menu');
// Remove menu on mobile
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.querySelector('.nav__menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
//============= SCROLL TO TOP =============//
const scrollTop = document.getElementById('scroll-top');
if (scrollTop) {
    function scrollTop() {
        const scrollTop = document.getElementById('scroll-top');
        if (this.scrollY >= 560) scrollTop.classList.add('show-top');
        else scrollTop.classList.remove('show-top')
    }
    window.addEventListener('scroll', scrollTop);
}

// Tabs
const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.price-item');


const tabActive = document.querySelector('.tab-item.active');

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function() {
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.price-item.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
});

// Collapse
const toggles = document.getElementsByClassName('faq-toggle');
let contentDiv = document.getElementsByClassName('faq-content');
let icons = document.getElementsByClassName('faq-icon');


for (let i = 0; i < toggles.length; i++) {
    console.log(contentDiv[i].style.height, contentDiv[i].scrollHeight);
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + 'px';
            toggles[i].style.color = '#2500f9';
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        } else {
            contentDiv[i].style.height = '0px';
            toggles[i].style.color = '#242f51';
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }
        for (let j = 0; j < contentDiv.length; j++) {
            if (i !== j) {
                contentDiv[j].style.height = '0px';
                toggles[j].style.color = '#242f51';
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    })

}

// Slick

$(document).ready(function() {
    $('.brand-img-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});