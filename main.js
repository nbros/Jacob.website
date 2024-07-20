// @ts-check

// map des images indiquant pour chaque image si elle doit être affichée en portrait(h) ou paysage(w)
const images = {
    1: "h",
    2: "w",
    3: "h",
    4: "h",
    5: "h",
    6: "h",
    7: "w",
    8: "h",
    9: "h",
    10: "h",
    11: "h",
    12: "h",
    13: "w",
    14: "h",
};

const wrapper = document.getElementById('swiper-wrapper');
if (!wrapper) {
    throw "Swiper wrapper not found";
}

for (const [i, dir] of Object.entries(images)) {
    // construit les <div class="swiper-slide"><img src='img/xxx.jpg' width='100%'></div>
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    const img = document.createElement('img');
    img.src = `img/${i}.jpg`;
    if (dir === 'h') {
        img.style.height = '100%';
    } else {
        img.style.width = '100%';
    }
    slide.appendChild(img);
    wrapper.appendChild(slide);
}

// @ts-ignore
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    spaceBetween: 8,
});