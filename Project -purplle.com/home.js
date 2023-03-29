
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


//   second slideshow2 starts 
function slideshow2(images) {
    var currentIndex = 0;
    var imgElement = document.createElement('img');
    var slideshowDiv2 = document.getElementById('slideshow2_1');
    slideshowDiv2.append(imgElement);
    let sec = 0;
    setInterval(function () {
        var slideIndex=0
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > images.length) { slideIndex = 1 }
        for (i = slideIndex - 1; i < slideIndex + 4; i++) {
            if (images[i]) {
                images[i].style.display = "block";
            }
        }
    }, 3000)
}
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

window.addEventListener("load", function () {
    slideshow1(movieImages1);
    slideshow2(movieImages2)
});


let makeup=document.querySelector(".makeup")
makeup.addEventListener("onmouseenter",function(){
    let makeup1=document.querySelector("#makeup1")
    makeup1.style.display="block"
})

