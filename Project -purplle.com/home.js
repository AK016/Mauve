
const closead = document.getElementById("closead");
const advertisement = document.querySelector(".advertisement");
closead.addEventListener("click", function () {
    advertisement.style.display = "none";
});

// first slideshow1 
function slideshow1(images) {
    var currentIndex = 0;
    var imgElement = document.createElement('img');
    var slideshowDiv1 = document.getElementById('slideshow1');
    slideshowDiv1.append(imgElement);
    let sec = 0;
    setInterval(function () {
        sec++;
        if (sec == 3) {
            currentIndex++;
            sec = 0;
        }
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        imgElement.src = images[currentIndex];
    }, 1000)
}
var movieImages1 = [
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1680082411_skincare-fh-header-web.gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680075624_web-banner.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680077034_swiss_beauty_craze_revised-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1680071703_1298x418-revised.gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680068943_mcaffeine_under_eye-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1679914902_pu_webhp.gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680007936_dot_-_key-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1680000720_global-beauty-1298x414.gif"
]


//   First window slideshow div starts 

var movieImages2 = [
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/307565/maybelline-new-york-lash-sensational-sky-high-waterproof-mascara-lengthening-and-volumizing-mascara-with-bamboo-exract-and-fibres-very-black-6-ml_1_display_1678336663_76640fad.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/300436/bajaj-almond-drops-hair-oil-650-ml_1_display_1607938934_994b0052.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/344344/matrix-opticare-smooth-conditioner-196-g-12-20-34_1_display_1677655146_91c49153.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/256995/tresemme-keratin-smooth-shampoo-1-ltr_3_display_1563251864_5934c3dc.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/343033/l-oreal-paris-excellence-hair-color-shade-3-get-total-repair-5-shampoo-175-ml-free-16_2_display_1673091410_2d6fde5f.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/202529/stay-quirky-i-m-done-with-you-nail-polish-remover-pads-43-g_6_display_1647235352_00253240.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/197370/lakme-sun-expert-ultra-matte-spf-40-pa-compact-7-g_3_display_1556887770_f561c73c.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/269996/purplle-natural-tress-free-wooden-comb-big_6_display_1662361862_7161282f.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/344328/l-oreal-professionnel-absolut-repair-lipidium-shampoo-300-ml-11-35-20-11-10-61_1_display_1677737005_8915b381.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/328775/bajaj-coconut-bajaj-coconut-oil-600ml_1_display_1669523936_13e2a010.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/344328/l-oreal-professionnel-absolut-repair-lipidium-shampoo-300-ml-11-35-20-11-10-61_1_display_1677737005_8915b381.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/328775/bajaj-coconut-bajaj-coconut-oil-600ml_1_display_1669523936_13e2a010.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/300766/loreal-paris-excellence-creme-black-1--92_3_display_1615290461_578bd55d.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/278695/purplle-dragon-fruit-tropical-kiss-body-yogurt-200gm_8_display_1660111337_34b0a14a.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/307266/loreal-paris-excellence-creme-natural-darkest-brown-4-46_1_display_1662988361_2cdcbaa6.jpg"
]
const windowSize = 5;
let startIndex = 0;

function slideDivs(startIndex) {
    const container = document.querySelector('#slideshow2_1');
    container.innerHTML = '';

    for (let i = startIndex; i < startIndex + windowSize && i < movieImages2.length; i++) {

        const div = document.createElement('div');

        const image = document.createElement('img');
        const title = document.createElement('h4');
        const price = document.createElement("h6")
        const desc = document.createElement('p');
        image.src = movieImages2[i];
        title.innerText = "Hair Oil and Shampoo";
        price.innerText = "₹₹₹"
        desc.innerText = "Hair Products";
        div.append(image, title, price, desc);

        container.appendChild(div);
    }
}

slideDivs(startIndex);

function next() {
    console.log("next");
    startIndex += 1;
    if (startIndex >= movieImages2.length - 4) {
        startIndex = 0;
    }
    slideDivs(startIndex);
}

function prev() {
    console.log("prev");
    startIndex -= 1;
    if (startIndex < 0) {
        startIndex = 0;
    }
    slideDivs(startIndex);
}

document.getElementById('rightArrow').addEventListener('click', next);
document.getElementById('leftArrow').addEventListener('click', prev);

//First window slideshow div ends here 




// Second window slideshow div starts here 
let startIndex1 = 0;
let movieImages3 = [
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680111797_flat-35-off-web.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678537488_freegift_thickstrip_mov549_web.jpg"
]

const windowSize1 = 1;

function slideDivs1(startIndex1) {
    const container1 = document.querySelector('#slideshow3_1');
    container1.innerHTML = '';

    for (let i = startIndex1; i < startIndex1 + windowSize1 && i < movieImages3.length; i++) {

        const div = document.createElement('div');

        const image = document.createElement('img');

        image.src = movieImages3[i];
        div.append(image);

        container1.appendChild(div);
    }
}
slideDivs1(startIndex1)
function next1() {
    console.log("next");
    startIndex1++;
    if (startIndex1 >= movieImages3.length) {
        startIndex1 = movieImages3.length - 1;
    }
    slideDivs1(startIndex1);
}

function prev1() {
    console.log("prev");
    startIndex1--;
    if (startIndex1 < 0) {
        startIndex1 = 0;
    }
    slideDivs1(startIndex1);
}
document.getElementById('rightArrow1').addEventListener('click', next1);
document.getElementById('leftArrow1').addEventListener('click', prev1);
// Second window slideshow div ends here 



// third window slideshow div starts here 
let startIndex2 = 0;
let movieImages4 = [
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1678529136_img_2300-2-1-1-1.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673618925_price-drop-summer-web.gif?tr=f-gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673618934_half-price-final-revised-gif-web.gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667649361_exclusive-web.gif"
]

const windowSize2 = 1;

function slideDivs2(startIndex2) {
    const container2 = document.querySelector('#slideshow4_1');
    container2.innerHTML = '';

    for (let i = startIndex2; i < startIndex2 + windowSize2 && i < movieImages4.length; i++) {

        const div = document.createElement('div');

        const image = document.createElement('img');

        image.src = movieImages4[i];
        div.append(image);

        container2.appendChild(div);
    }
}
slideDivs2(startIndex2)
function next2() {
    console.log("next");
    startIndex2++;
    if (startIndex2 >= movieImages4.length) {
        startIndex2 = movieImages4.length - 1;
    }
    slideDivs2(startIndex2);
}

function prev2() {
    console.log("prev");
    startIndex2--;
    if (startIndex2 < 0) {
        startIndex2 = 0;
    }
    slideDivs2(startIndex2);
}
document.getElementById('rightArrow2').addEventListener('click', next2);
document.getElementById('leftArrow2').addEventListener('click', prev2);
// third window slideshow div ends here 





// fourth window slideshow div starts here 

var movieImages5 = [
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/287362/neutrogena-ultra-sheer-spf50-30ml-20-21-20-19_2_display_1671087611_7b2e3c85.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/322726/dot-and-key-night-reset-retinol-ceramide-sleep-treatment-cream_8_display_1660022318_73e21a19.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/283957/lakme-insta-liner-water-resistant-eyeliner-9-ml-14_8_display_1676354936_7f5fb91e.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/296956/dermdoc-damage-recovery-night-cream-with-2-percentage-kojic-acid-50-gm_10_display_1679890436_64245398.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/296270/blue-heaven-festive-make-up-kit-fair-tone-combo-medium-tone-350-g_1_display_1677499176_da7369d1.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/263922/faces-canada-color-balm-12hr-moisture-for-dry-chapped-lips-vitamin-e-spf-15-rose-petal-rose-03-24-48-g_1_display_1639981893_5f87c9eb.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/291491/aqualogica-glow-dewy-sunscreen_1_display_1651051165_4aa80766.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/336283/alps-goodness-peach-and-niacinamide-brightening-gel-body-lotion-290-ml-best-body-lotion-for-summer-lightweight-body-lotion-gel-body-lotion-silicone-free-body-lotion-no-sulphates-no-parabens-vegan_1_display_1674202856_8e15c8e7.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/125354/l-a-girl-pro-coverage-hd-foundation-fair-28-ml-70_1_display_1675148030_1046abfc.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/320139/cuffs-n-lashes-x-shystyles-the-shystyles-palette-12-color-mini-palette-lip-and-cheek-tint_1_display_1663822271_7381e771.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/325065/biotique-fruit-brightening-lip-balm-12g_1_display_1666080558_72b75907.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/259394/alps-goodness-fenugreek-biotin-and-redensyl-anti-hairfall-conditioner-200-ml_15_display_1667570393_b24a4636.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/263514/ny-bae-eye-love-volumizing-mascara-8ml_6_display_1670390591_8241b50b.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/246372/the-face-shop-rice-water-bright-cleansing-foam-150-ml-17_10_display_1632397642_43e84219.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/220344/purplle-true-jewel-24k-gold-primer-20-ml-52_1_display_1673004163_b24333a5.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/271587/simple-kind-to-skin-refreshing-facial-wash-150-ml-1-14-15_10_display_1651649100_d8629ead.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/263514/ny-bae-eye-love-volumizing-mascara-8ml_6_display_1670390591_8241b50b.jpg"
]
const windowSize3 = 5;
let startIndex3 = 0;
function slideDivs3(startIndex3) {
    const container3 = document.querySelector('#slideshow5_1');
    container3.innerHTML = '';

    for (let i = startIndex3; i < startIndex3 + windowSize3 && i < movieImages5.length; i++) {

        const div = document.createElement('div');

        const image = document.createElement('img');
        const title = document.createElement('h4');
        const price = document.createElement("p")
        const desc = document.createElement('h5');
        image.src = movieImages5[i];
        title.innerText = "Makeup Kits and Lipsticks";
        price.innerText = "$$$"
        desc.innerText = "Skin Care Products";
        div.append(image, title, price, desc);

        container3.appendChild(div);
    }
}
slideDivs3(startIndex3);
function next3() {
    console.log("next");
    startIndex3 += 1;
    if (startIndex3 >= movieImages5.length - 4) {
        startIndex3 = 0;
    }
    slideDivs3(startIndex3);
}
function prev3() {
    console.log("prev");
    startIndex3 -= 1;
    if (startIndex3 < 0) {
        startIndex3 = 0;
    }
    slideDivs3(startIndex3);
}
document.getElementById('rightArrow3').addEventListener('click', next3);
document.getElementById('leftArrow3').addEventListener('click', prev3);
// fourth window slideshow div ends here 





// fifth window slideshow div starts here 
var movieImages6 = [
    "https://media6.ppl-media.com/tr:w-512,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678436967_conditioner-10.5x.jpg",
    "https://media6.ppl-media.com/tr:w-512,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678436965_shampoo0.5x.jpg",
    "https://media6.ppl-media.com/tr:w-512,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678436963_hair-mask0.5x.jpg",
    "https://media6.ppl-media.com/tr:w-512,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678436959_hair-serum0.5x.jpg",
    "https://media6.ppl-media.com/tr:w-512,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678436958_hair-oil0.5x.jpg",
    "https://media6.ppl-media.com/tr:w-512,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678436956_hair-color0.5x.jpg",
]
const windowSize4 = 4;
let startIndex4 = 0;
function slideDivs4(startIndex4) {
    const container4 = document.querySelector('#slideshow6_1');
    container4.innerHTML = '';
    for (let i = startIndex4; i < startIndex4 + windowSize4 && i < movieImages6.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages6[i];
        div.append(image);
        container4.appendChild(div);
    }
}
slideDivs4(startIndex4);
function next4() {
    console.log("next");
    startIndex4 += 1;
    if (startIndex4 >= movieImages6.length - 3) {
        startIndex4 = 0;
    }
    slideDivs4(startIndex4);
}
function prev4() {
    console.log("prev");
    startIndex4 -= 1;
    if (startIndex4 < 0) {
        startIndex4 = 0;
    }
    slideDivs4(startIndex4);
}
document.getElementById('rightArrow4').addEventListener('click', next4);
document.getElementById('leftArrow4').addEventListener('click', prev4);
// fifth window slideshow div ends here 




// tsixth window slideshow div starts here 
let startIndex5 = 0;
let movieImages7 = [
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680093120_m-a-c_studio_fix-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680007538_wella_professionals-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680092903_schwarzkopf_professional_peptides-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680093481_esteelauder-2596x836.jpeg"
]
const windowSize5 = 1;
function slideDivs5(startIndex5) {
    const container5 = document.querySelector('#slideshow7_1');
    container5.innerHTML = '';
    for (let i = startIndex5; i < startIndex5 + windowSize5 && i < movieImages5.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages7[i];
        div.append(image);
        container5.appendChild(div);
    }
}
slideDivs5(startIndex5)
function next5() {
    console.log("next");
    startIndex5++;
    if (startIndex5 >= movieImages5.length) {
        startIndex5 = movieImages5.length - 1;
    }
    slideDivs5(startIndex5);
}
function prev5() {
    console.log("prev");
    startIndex5--;
    if (startIndex5 < 0) {
        startIndex5 = 0;
    }
    slideDivs5(startIndex5);
}
document.getElementById('rightArrow5').addEventListener('click', next5);
document.getElementById('leftArrow5').addEventListener('click', prev5);
// sixth window slideshow div ends here 





//   seventh window slideshow div starts 
var movieImages8 = [
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/335470/cetaphil-gentle-skin-cleanser-125-ml-83_2_display_1679830354_8f770477.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/255024/pond-s-bright-beauty-spot-less-glow-serum-infused-with-hyaluronic-acid-vitamin-b3-gluta-boost-c-30ml_4_display_1631682024_45bf0529.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/323178/nature-s-essence-radiance-boosting-serum-with-24k-liquid-gold-30ml_1_display_1665577785_db6d9e60.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/323398/earth-rhythm-2-percentage-salicylic-acid-sebum-control-serum-15ml_1_display_1671097054_601c3e2c.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/278289/3-percentage-vitamin-c-3-percentage-peptide-and-3-percentagecaffeine-eye-cream-with-mandarin-15-ml_1_display_1644750313_8bb64b5f.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/300658/round-lab-1025-dokdo-cleanser-40-ml-korean-skin-care_6_display_1677053919_cc502eb6.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/201698/mamaearth-hydragel-indian-sunscreen-spf-50-with-aloe-vera-and-raspberry-for-sun-protection-50-g_1_display_1653048915_163c1135.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/290009/cetaphil-bright-healthy-radiance-night-cream-50-ml-48_6_display_1655285709_38edd10a.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/295654/nyle-naturals-triple-floral-body-cream-for-long-lasting-moisturization-of-normal-skin-with-goodness-of-lotus-lily-rose-200-ml_1_display_1674108777_b89c0fa0.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/231694/debelle-bio-cellulose-sheet-mask-firming-collagen-pomegranate-and-goji-berry-tighten-and-tone-skin_1_display_1615789249_d4f9d6bd.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/317574/mamaearth-ubtan-natural-face-wash-for-dry-skin-with-turmeric-and-saffron-for-tan-removal-and-skin-brightning-100-ml_10_display_1581057835_f66663f0.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/305417/nature-s-essence-anti-pigmentation-serum-with-10-percentage-niacinamide-30-ml_1_display_1672821511_87bb30ba.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/323393/earth-rhythm-10-percentage-azelaic-acid-skin-brightening-face-serum-30ml_1_display_1662107329_37d5bce2.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/338616/cetaphil-gentle-skin-cleanser-125-ml-71_2_display_1679830401_68c9859a.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/338616/cetaphil-gentle-skin-cleanser-125-ml-71_2_display_1679830401_68c9859a.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/323401/earth-rhythm-clear-skin-vitamin-c-bio-retinol-salicylic-acid-and-hyaluronic-acid-15ml_1_display_1671097030_fcdad643.jpg"
]
const windowSize6 = 5;
let startIndex6 = 0;
function slideDivs6(startIndex6) {
    const container6 = document.querySelector('#slideshow8_1');
    container6.innerHTML = '';
    for (let i = startIndex6; i < startIndex6 + windowSize6 && i < movieImages8.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h4');
        const price = document.createElement("h6")
        const desc = document.createElement('p');
        image.src = movieImages8[i];
        title.innerText = "Herbal Products";
        price.innerText = "₹₹₹"
        desc.innerText = "Ayurvedic Products";
        div.append(image, title, price, desc);
        container6.appendChild(div);
    }
}
slideDivs6(startIndex6);
function next6() {
    console.log("next");
    startIndex6 += 1;
    if (startIndex6 >= movieImages8.length - 4) {
        startIndex6 = 0;
    }
    slideDivs6(startIndex6);
}
function prev6() {
    console.log("prev");
    startIndex6 -= 1;
    if (startIndex6 < 0) {
        startIndex6 = 0;
    }
    slideDivs6(startIndex6);
}
document.getElementById('rightArrow6').addEventListener('click', next6);
document.getElementById('leftArrow6').addEventListener('click', prev6);
//sventh window slideshow div ends here 




//   eight window slideshow div starts 
var movieImages9 = [
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804439_gv-ubtan-powder_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804226_teeth-whitening_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804430_gv-lip-sleeping-mask_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804418_gv-insta-glow-night-cream_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804459_nourishing-ingredients-for-dry-skin_9x16__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804034_gv-ubtan-foaming-face-wash_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804449_makeup-removal-routine_9x16__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804396_all-about-chemical-exfoliation_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804375_3-ways-to-use-glycolic-acid_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804052_gv-ubtan-insta-glow-face-mask_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672803840_bs_ag-papaya_vitamin-c-aha9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804061_gv-vitamin-c-glow-face-wash_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804183_skincare-sandwich-method-_-new-to-retinol_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804406_gv-gold-sheet-mask_9x16-__with-play.jpg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1672804470_papaya-sheet-mask_9x16-__with-play.jpg",

]
const windowSize7 = 5;
let startIndex7 = 0;
function slideDivs7(startIndex7) {
    const container7 = document.querySelector('#slideshow9_1');
    container7.innerHTML = '';
    for (let i = startIndex7; i < startIndex7 + windowSize7 && i < movieImages9.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages9[i];
        div.append(image);
        container7.appendChild(div);
    }
}
slideDivs7(startIndex7);
function next7() {
    console.log("next");
    startIndex7 += 1;
    if (startIndex7 >= movieImages9.length - 4) {
        startIndex7 = 0;
    }
    slideDivs7(startIndex7);
}
function prev7() {
    console.log("prev");
    startIndex7 -= 1;
    if (startIndex7 < 0) {
        startIndex7 = 0;
    }
    slideDivs7(startIndex7);
}
document.getElementById('rightArrow7').addEventListener('click', next7);
document.getElementById('leftArrow7').addEventListener('click', prev7);
//eight window slideshow div ends here 




//   ninth window slideshow div starts 
var movieImages10 = [
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1679750740_kanvar-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680093782_insight-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680089239_loreal-web.jpeg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680092531_garnier-web.jpeg"

]
const windowSize8 = 1;
let startIndex8 = 0;
function slideDivs8(startIndex8) {
    const container8 = document.querySelector('#slideshow10_1');
    container8.innerHTML = '';
    for (let i = startIndex8; i < startIndex8 + windowSize8 && i < movieImages10.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages10[i];
        div.append(image);
        container8.appendChild(div);
    }
}
slideDivs8(startIndex8);
function next8() {
    console.log("next");
    startIndex8 += 1;
    if (startIndex8 >= movieImages10.length) {
        startIndex8 = movieImages10.length - 1;
    }
    slideDivs8(startIndex8);
}
function prev8() {
    console.log("prev");
    startIndex8 -= 1;
    if (startIndex8 < 0) {
        startIndex8 = 0;
    }
    slideDivs8(startIndex8);
}
document.getElementById('rightArrow8').addEventListener('click', next8);
document.getElementById('leftArrow8').addEventListener('click', prev8);
//nith window slideshow div ends here 




//   tenth window slideshow div starts 
var movieImages11 = [
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/322344/carmesi-disposable-period-panties-xl-xxl_1_display_1669283226_4b32f0a8.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/275748/ny-bae-pro-contour-and-bronze-deep-brown-01-4g_6_display_1671104709_5e075d25.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/285915/dermdoc-hyaluronic-acid-and-vitamin-e-moisturizing-gel-body-lotion-normal-to-oily-skin-200-ml_1_display_1679911903_5f894e55.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/276827/good-vibes-foot-mask-rosehip-20-ml_9_display_1659531089_72ae3645.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/314133/facescanada-comfy-matte-lip-color-any-day-now-04-1-2ml_12_display_1671005949_d2d586ad.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/292401/good-vibes-brightening-face-serum-vitamin-c-30ml_1_display_1656940992_e68b610c.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/315067/good-vibes-cherry-moisture-rich-red-tinted-lip-balm-spf-15-4-2-g_6_display_1665984229_ca38924e.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/285961/ny-bae-3-in-1-primer-foundation-serum-cool-vanilla-02-30-ml_1_display_1669367087_69ad187c.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/314140/facescanada-comfy-matte-lip-color-fixed-it-for-you-11-1-2ml_12_display_1671006095_250f85c7.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/314135/facescanada-comfy-matte-lip-color-hope-this-helps-06-1-2ml_12_display_1671006305_505a7066.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/288618/purplle-tinted-glory-hydrating-face-primer-30-gm_10_display_1666080504_0fde0327.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/289960/ny-bae-serum-lipstick-violet-waters-15-4-2-g_3_display_1669107942_53b9cac2.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/275750/ny-bae-pro-contour-and-bronze-light-brown-03-4g_6_display_1671104742_4c0d54fd.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/314134/facescanada-comfy-matte-lip-color-never-mind-05-1-2ml_12_display_1671006423_a634c84e.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/315065/good-vibes-rose-hydrating-pink-tinted-lip-balm-spf-15-4-2-g_1_display_1665984095_d86e8027.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/289962/ny-bae-serum-lipstick-brown-bay-17-4-2-g_3_display_1669715828_621e1691.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/315068/good-vibes-berry-nourishing-lip-balm-spf-15-4-2-g_1_display_1665984252_808a48de.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/314137/facescanada-comfy-matte-lip-color-for-the-win-08-1-2ml_12_display_1671006176_977a35b8.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/288486/ny-bae-eye-love-eyeshadow-palette-light-and-bright-01_10_display_1671177927_d36b9ed7.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/314139/facescanada-comfy-matte-lip-color-just-so-you-know-10-1-2ml_12_display_1671006356_dffb48d5.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/288617/purplle-make-a-splash-hydrating-face-primer-30-gm_10_display_1666080485_b4b5b808.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/278695/purplle-dragon-fruit-tropical-kiss-body-yogurt-200gm_8_display_1660111337_34b0a14a.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/289959/ny-bae-serum-lipstick-mauve-mist-14-4-2-g_3_display_1669108042_a755de23.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/314131/facescanada-comfy-matte-lip-color-getting-ready-02-1-2ml_12_display_1671006244_3ca49e0c.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/289952/ny-bae-serum-lipstick-grape-sprinkle-07-4-2-g_6_display_1671529206_d1b63d8f.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/290109/purplle-sun-blur-papaya-and-camu-camu-sunscreen-spf40-50-gm_11_display_1666973359_749b7689.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/289947/ny-bae-serum-lipstick-nude-puddle-02-4-2-g_3_display_1669108861_32b7413f.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/285965/ny-bae-3-in-1-primer-foundation-serum-cool-mocha-08-30-ml_2_display_1669284379_13411203.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/314141/facescanada-comfy-matte-lip-color-no-big-deal-12-1-2ml_7_display_1671006482_c64299da.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/315066/good-vibes-peach-softening-orange-tinted-lip-balm-spf-15-4-2-g_1_display_1665984157_604b788f.jpg"
]
const windowSize9 = 5;
let startIndex9 = 0;
function slideDivs9(startIndex9) {
    const container9 = document.querySelector('#slideshow11_1');
    container9.innerHTML = '';
    for (let i = startIndex9; i < startIndex9 + windowSize9 && i < movieImages11.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h4');
        const price = document.createElement("h6")
        const desc = document.createElement('p');
        image.src = movieImages11[i];
        title.innerText = "Beauty Care";
        price.innerText = "Free"
        desc.innerText = "Don't ask me!";
        div.append(image, title, price, desc);
        container9.appendChild(div);
    }
}
slideDivs9(startIndex9);
function next9() {
    console.log("next");
    startIndex9 += 1;
    if (startIndex9 >= movieImages9.length - 4) {
        startIndex9 = 0;
    }
    slideDivs9(startIndex9);
}
function prev9() {
    console.log("prev");
    startIndex9 -= 1;
    if (startIndex9 < 0) {
        startIndex9 = 0;
    }
    slideDivs9(startIndex9);
}
document.getElementById('rightArrow9').addEventListener('click', next9);
document.getElementById('leftArrow9').addEventListener('click', prev9);
//tenth window slideshow div ends here 



//   eleventh window slideshow div starts 
var movieImages12 = [
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/300654/round-lab-1025-dokdo-toner-50-ml-korean-skin-care_6_display_1677053997_d323ae56.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/294106/i-dew-care-bright-side-up-brightening-vitamin-c-serum_12_display_1665985324_151298d6.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/304858/gubb-derma-roller-for-face-and-hair-regrowth-0-5-mm-micro-needles-skin-treatment-of-scars-anti-ageing-wrinkles-pink_9_display_1635573139_c74ab609.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/221628/belora-paris-leave-no-evidence-liquid-matte-lipstick-21-rusty-orange_1_display_1675160900_ba005cca.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/327197/cavinkare-salon-in-a-box-de-tan-avocado-and-fruit-aha-suitable-for-sensitive-skin-tan-removal-cream-for-glowing-and-radiant-skin-no-bleach-150-ml_2_display_1662981221_93267747.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/136706/gubb-usa-styling-brush-with-pin-elite-range_2_display_1650866282_5397e4bf.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/308970/arabian-scent-by-next-scented-body-spray-200-ml-for-men-and-women_1_display_1676782307_595ddc05.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/327196/cavinkare-salon-in-a-box-de-tan-tamarind-and-curd-suitable-for-all-skin-types-tan-removal-face-pack-for-glowing-and-radiant-skin-no-bleach-150-ml_2_display_1662978043_5265bb13.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/300658/round-lab-1025-dokdo-cleanser-40-ml-korean-skin-care_6_display_1677053919_cc502eb6.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/294135/i-dew-care-silicone-mask-brush_9_display_1665985163_3e899773.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/341074/next-english-leather-fusion-and-lavender-air-freshener-spray-220ml-each_1_display_1676782430_bbe2363f.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/284492/belora-paris-long-kiss-mulberry-kiss_1_display_1647249351_56c9d9ea.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/294109/i-dew-care-juicy-kitten-purifying-power-green-serum_9_display_1665985202_7327955b.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/212576/gubb-vent-hair-brush-with-pin-elite-range_1_display_1650872873_aa5e18f4.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/308962/next-golden-oud-scent-long-lasting-eau-de-perfume-for-men-and-women-100ml_1_display_1676782378_5feef269.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/310382/belora-paris-world-matte-popsicles-018-delhi-diva_1_display_1657020278_91ad1b0d.jpg"
]
const windowSize10 = 5;
let startIndex10 = 0;
function slideDivs10(startIndex10) {
    const container10 = document.querySelector('#slideshow12_1');
    container10.innerHTML = '';
    for (let i = startIndex10; i < startIndex10 + windowSize10 && i < movieImages12.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h4');
        const price = document.createElement("h6")
        const desc = document.createElement('h6');
        image.src = movieImages12[i];
        title.innerText = "Beauty Tools";
        price.innerText = "Free"
        desc.innerText = "Will let you know once you place the order";
        div.append(image, title, price, desc);
        container10.appendChild(div);
    }
}
slideDivs10(startIndex9);
function next10() {
    console.log("next");
    startIndex10 += 1;
    if (startIndex10 >= movieImages12.length - 4) {
        startIndex10 = 0;
    }
    slideDivs10(startIndex10);
}
function prev10() {
    console.log("prev");
    startIndex10 -= 1;
    if (startIndex10 < 0) {
        startIndex10 = 0;
    }
    slideDivs10(startIndex10);
}
document.getElementById('rightArrow10').addEventListener('click', next10);
document.getElementById('leftArrow10').addEventListener('click', prev10);
//eleventh window slideshow div ends here 





//   12th window slideshow div starts here
var movieImages13 = [
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680082365_minimalist_bodycare-2596x836.jpeg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679921869_biotique_sara_scrub-2596x836-3.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680082096_mcaffeine_under_eye-2596x836-1.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1679929351_aqualogica_glowing_skin-2596x836.jpeg"

]
const windowSize11 = 1;
let startIndex11 = 0;
function slideDivs11(startIndex11) {
    const container11 = document.querySelector('#slideshow13_1');
    container11.innerHTML = '';
    for (let i = startIndex11; i < startIndex11 + windowSize11 && i < movieImages13.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages13[i];
        div.append(image);
        container11.appendChild(div);
    }
}
slideDivs11(startIndex11);
function next11() {
    console.log("next");
    startIndex11 += 1;
    if (startIndex11 >= movieImages13.length-1) {
        startIndex11 = movieImages13.length - 1;
    }
    slideDivs11(startIndex11);
}
function prev11() {
    console.log("prev");
    startIndex11 -= 1;
    if (startIndex11 < 0) {
        startIndex11 = 0;
    }
    slideDivs11(startIndex11);
}
document.getElementById('rightArrow11').addEventListener('click', next11);
document.getElementById('leftArrow11').addEventListener('click', prev11);
//12th window slideshow div ends here 






//   13th window slideshow div starts here
var movieImages14 = [
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680152819_the_face_shop-1130x540.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1679728158_sugar-1130x540.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1679728156_o3-1130x540.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680152818_dot_-_key-1130x540.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680075999_wow.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1679728155_mac-1130x540.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680076497_mamaearth-1130x540-1.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680076480_mac-1.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680004837_mac.jpeg",
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680004528_swiss_beauty-1130x540.jpeg",

]
const windowSize12 = 5;
let startIndex12 = 0;
function slideDivs12(startIndex12) {
    const container12 = document.querySelector('#slideshow14_1');
    container12.innerHTML = '';
    for (let i = startIndex12; i < startIndex12 + windowSize12 && i < movieImages14.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages14[i];
        div.append(image);
        container12.appendChild(div);
    }
}
slideDivs12(startIndex12);
function next12() {
    console.log("next");
    startIndex12 += 1;
    if (startIndex12 >= movieImages14.length-4) {
        startIndex12 = 0;
    }
    slideDivs12(startIndex12);
}
function prev12() {
    console.log("prev");
    startIndex12 -= 1;
    if (startIndex12 < 0) {
        startIndex12 = 0;
    }
    slideDivs12(startIndex12);
}
document.getElementById('rightArrow12').addEventListener('click', next12);
document.getElementById('leftArrow12').addEventListener('click', prev12);
//13th window slideshow div ends here 






//   14th window slideshow div starts here
var movieImages15 = [
   "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1680084917_colorbar_skin_2596x836.jpeg",
   "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1679734587_blue_heaven_without_model-2596x836.jpeg",
   "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679734667_colorbar-2596x836.jpeg",
   "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680088231_fiama-2596x836.jpeg"

]
const windowSize13 = 1;
let startIndex13 = 0;
function slideDivs13(startIndex13) {
    const container13 = document.querySelector('#slideshow15_1');
    container13.innerHTML = '';
    for (let i = startIndex13; i < startIndex13 + windowSize13 && i < movieImages15.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages15[i];
        div.append(image);
        container13.appendChild(div);
    }
}
slideDivs13(startIndex13);
function next13() {
    console.log("next");
    startIndex13 += 1;
    if (startIndex13 >= movieImages15.length-4) {
        startIndex13 = movieImages15.length-1;
    }
    slideDivs13(startIndex13);
}
function prev13() {
    console.log("prev");
    startIndex13 -= 1;
    if (startIndex13 < 0) {
        startIndex13 = 0;
    }
    slideDivs13(startIndex13);
}
document.getElementById('rightArrow13').addEventListener('click', next13);
document.getElementById('leftArrow13').addEventListener('click', prev13);
//14th window slideshow div ends here 







//   14th window slideshow div starts here
var movieImages16 = [
   "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679669227_dot_-_key-320x480.png",
   "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679669227_faces_canada-320x480.png",
   "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679669226_ny_bae-320x480.png",
   "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679669226_stayq-320x480.png",
   "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679669225_purplle-320x480.png",
   "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679669224_good_vibes-320x480.png",
   "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1679669224_alps_goodness-320x480.png",
]
const windowSize14 = 5;
let startIndex14 = 0;
function slideDivs14(startIndex14) {
    const container14 = document.querySelector('#slideshow16_1');
    container14.innerHTML = '';
    for (let i = startIndex14; i < startIndex14 + windowSize14 && i < movieImages16.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages16[i];
        div.append(image);
        container14.appendChild(div);
    }
}
slideDivs14(startIndex14);
function next14() {
    console.log("next");
    startIndex14 += 1;
    if (startIndex14 >= movieImages16.length-4) {
        startIndex14 = 0;
    }
    slideDivs14(startIndex14);
}
function prev14() {
    console.log("prev");
    startIndex14 -= 1;
    if (startIndex14 < 0) {
        startIndex14 = 0;
    }
    slideDivs14(startIndex14);
}
document.getElementById('rightArrow14').addEventListener('click', next14);
document.getElementById('leftArrow14').addEventListener('click', prev14);
//14th window slideshow div ends here 



// scroll up button 
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#scrollupbtn");
    window.onscroll = function () { scrollfun(); };
    function scrollfun(e) {
        if (document.body.scrollTop > window.innerHeight * 4 || document.documentElement.scrollTop > window.innerHeight * 4) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});













































window.addEventListener("load", function () {
    slideshow1(movieImages1);
    // slideDivs1(movieImages3)
});


