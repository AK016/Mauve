const closead = document.getElementById("closead");
const advertisement = document.querySelector(".advertisement");
closead.addEventListener("click", function () {
    advertisement.style.display = "none";
});



/* slideshow1 starts here  */
var movieImages1 = [
    "https://media6.ppl-media.com/mediafiles/ecomm/misc/1679654211_faces_web_hp-4.jpg",
    "https://media6.ppl-media.com/mediafiles/ecomm/misc/1677822455_swiss_beauty-_love-2596x836.jpeg",

]
const windowSize1 = 1;
let startIndex1 = 0;
function slideDivs1(startIndex1) {
    const container1 = document.querySelector('#slideshow1');
    container1.innerHTML = '';
    for (let i = startIndex1; i < startIndex1 + windowSize1 && i < movieImages1.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = movieImages1[i];
        div.append(image);
        container1.appendChild(div);
    }
}
slideDivs1(startIndex1);
function next1() {
    console.log("next");
    startIndex1 += 1;
    if (startIndex1 >= movieImages1.length) {
        startIndex1 = movieImages1.length - 1;
    }
    slideDivs1(startIndex1);
}
function prev1() {
    console.log("prev");
    startIndex1 -= 1;
    if (startIndex1 < 0) {
        startIndex1 = 0;
    }
    slideDivs1(startIndex1);
}
document.getElementById('rightArrow1').addEventListener('click', next1);
document.getElementById('leftArrow1').addEventListener('click', prev1);
/* slideshow1 ends here  */


/* slideshow2 starts here  */
var movieImages2 = [
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/285881/insight-3-in-1-long-lasting-primer-30ml-67_2_display_1630212475_7b05bb98.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/270504/ny-bae-primer-white-15g-12_10_display_1677751757_1a0479c7.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/220344/purplle-true-jewel-24k-gold-primer-20-ml-52_1_display_1673004163_b24333a5.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/206610/colorbar-cosmetics-flawless-finish-primer-30ml-ffp001_2_display_1599304855_7a10b52e.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/296270/blue-heaven-festive-make-up-kit-fair-tone-combo-medium-tone-350-g_1_display_1677499176_da7369d1.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/238793/ny-bae-face-primer-48_10_display_1678257652_8bfe1132.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/320443/blue-heaven-flawless-make-up-base-primer-16ml-35_1_display_1672810965_960754f4.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/156926/sugar-the-base-of-glory-pore-minimizing-primer-30-ml_2_display_1628588510_1eb6ab16.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/265824/colorbar-perfect-match-primer-new-perfect-match-primer-30-ml-15_1_display_1663749364_f811af8f.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/250565/ny-bae-pro-primer-orange-color-correcting-face-primer-15-ml_6_display_1677751810_bf4db48c.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-@@mediafiles@mailers@banners@1659451450_new-tag.png,ow-115,ofo-top_right,dpr-2/static/img/product/288618/purplle-tinted-glory-hydrating-face-primer-30-gm_10_display_1666080504_0fde0327.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/245520/insight-pore-minimizer-primer-10ml-48_1_display_1664187742_a289f48d.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/295515/mac-fix-13ml_1_display_1656579064_40f145e7.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-@@mediafiles@mailers@banners@1659451450_new-tag.png,ow-115,ofo-top_right,dpr-2/static/img/product/288617/purplle-make-a-splash-hydrating-face-primer-30-gm_10_display_1666080485_b4b5b808.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/293973/cuffs-n-lashes-makeup-mixer-revive-and-mix-20-ml_1_display_1651795597_c66e0566.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/294841/swiss-beauty-real-makeup-base-highlighting-primer-golden-tint-30-ml_1_display_1590792804_76c827a5.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/179797/faces-canada-ultime-pro-primerizer-primer-moisturizer-30-g_1_display_1657866844_8b301d99.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/320450/blue-heaven-studio-perfection-primer-30-g_3_display_1622163985_8f216d41.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/113660/faces-ultime-pro-perfecting-primer-30-ml_3_display_1612710865_06e0f21c.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/256233/daily-life-forever52-all-matte-base-primer-30gm_1_display_1632215176_7fdfdfc7.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/271961/ny-bae-matte-face-primer-for-oily-skin-13-gm_6_display_1674198444_9c865d58.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/256121/mars-pore-cure-primer-30ml_1_display_1672056215_c09cacc0.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/297952/m-a-c-mini-mac-prep-prime-fix-sized-to-go-prep-prime-fix-sized-to-go-30-ml_1_display_1649825276_99b63b74.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/296551/swiss-beauty-real-makeup-base-highlighting-primer-3-30-ml_1_display_1599734728_0ac26d37.jpg"
]
const windowSize2 = 4;
let startIndex2 = 0;
function slideDivs2(startIndex2) {
    const container2 = document.querySelector('#slideshow2');
    container2.innerHTML = '';

    for (let i = startIndex2; i < startIndex2 + windowSize2 && i < movieImages2.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "mydiv")
        const image = document.createElement('img');
        const title = document.createElement('h4');
        const price = document.createElement("p")
        const desc = document.createElement('h5');
        image.src = movieImages2[i];
        title.innerText = "Makeup Kits and Lipsticks";
        price.innerText = "299"
        desc.innerText = "Primers";
        let btn = document.createElement("button");
        btn.innerText = "Add to cart"
        btn.style.width = "100%"
        btn.style.height = "40px"
        btn.style.backgroundColor = "#004d40"
        btn.style.fontSize = "25px"
        btn.style.cursor = "pointer"
        btn.setAttribute("class", "hide")
        div.append(image, title, price, desc, btn);
        container2.appendChild(div);
    }
}
slideDivs2(startIndex2);
function next2() {
    console.log("next");
    startIndex2 += 1;
    if (startIndex2 >= movieImages2.length - 2) {
        startIndex2 = 0;
    }
    slideDivs2(startIndex2);
}
function prev2() {
    console.log("prev");
    startIndex2 -= 1;
    if (startIndex2 < 0) {
        startIndex2 = 0;
    }
    slideDivs2(startIndex2);
}
document.getElementById('rightArrow2').addEventListener('click', next2);
document.getElementById('leftArrow2').addEventListener('click', prev2);
/* slideshow2 ends here  */



/* slideshow3 starts here  */
var movieImages3 = [
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/294842/swiss-beauty-real-makeup-base-highlighting-primer-3-30-ml_1_display_1599734728_0ac26d37.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/295515/mac-fix-13ml_1_display_1656579064_40f145e7.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/220344/purplle-true-jewel-24k-gold-primer-20-ml-52_1_display_1673004163_b24333a5.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/285881/insight-3-in-1-long-lasting-primer-30ml-67_2_display_1630212475_7b05bb98.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/177244/lakme-absolute-under-cover-gel-face-primer-30-g_1_display_1565351964_a3d491e5.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/267827/ny-bae-eye-makeup-primer-15g_6_display_1673508524_4166f712.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/294841/swiss-beauty-real-makeup-base-highlighting-primer-golden-tint-30-ml_1_display_1590792804_76c827a5.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/245520/insight-pore-minimizer-primer-10ml-48_1_display_1664187742_a289f48d.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/296549/swiss-beauty-real-makeup-base-highlighting-primer-natural-tint-30-ml_1_display_1590792783_75d33aec.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/322400/maybelline-new-york-fit-me-primer-matte-poreless-1_1_display_1634979766_9f28dfb9.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/320450/blue-heaven-studio-perfection-primer-30-g_3_display_1622163985_8f216d41.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/156926/sugar-the-base-of-glory-pore-minimizing-primer-30-ml_2_display_1628588510_1eb6ab16.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/271961/ny-bae-matte-face-primer-for-oily-skin-13-gm_6_display_1674198444_9c865d58.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/267828/ny-bae-eye-brightening-primer-15g_5_display_1673508510_b7dd0ba1.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/271960/ny-bae-dewy-face-primer-for-dry-skin-13-gm_6_display_1674198279_202cde6a.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/250565/ny-bae-pro-primer-orange-color-correcting-face-primer-15-ml_6_display_1677751810_bf4db48c.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/238793/ny-bae-face-primer-48_10_display_1678257652_8bfe1132.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/206610/colorbar-cosmetics-flawless-finish-primer-30ml-ffp001_2_display_1599304855_7a10b52e.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/320443/blue-heaven-flawless-make-up-base-primer-16ml-35_1_display_1672810965_960754f4.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/325279/ny-bae-primer-gold-15g-39_7_display_1677751676_a0d56225.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/325279/ny-bae-primer-gold-15g-39_7_display_1677751676_a0d56225.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/296270/blue-heaven-festive-make-up-kit-fair-tone-combo-medium-tone-350-g_1_display_1677499176_da7369d1.jpg",
    "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-purplle_exclusive_base_1__1__BytKq6D4b.png,ofo-top_right,dpr-2/static/img/product/270504/ny-bae-primer-white-15g-12_10_display_1677751757_1a0479c7.jpg",
    "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/265824/colorbar-perfect-match-primer-new-perfect-match-primer-30-ml-15_1_display_1663749364_f811af8f.jpg"
]
const windowSize3 = 4;
let startIndex3 = 0;
function slideDivs3(startIndex3) {
    const container3 = document.querySelector('#slideshow3');
    container3.innerHTML = '';

    for (let i = startIndex3; i < startIndex3 + windowSize3 && i < movieImages3.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "mydiv")
        const image = document.createElement('img');
        const title = document.createElement('h4');
        const price = document.createElement("p")
        const desc = document.createElement('h5');
        image.src = movieImages3[i];
        title.innerText = "Makeup Kits and Lipsticks";
        price.innerText = "599"
        desc.innerText = "Primers";
        let btn = document.createElement("button");
        btn.innerText = "Add to cart"
        btn.style.width = "100%"
        btn.style.height = "40px"
        btn.style.backgroundColor = "#004d40"
        btn.style.fontSize = "25px"
        btn.style.cursor = "pointer"
        btn.setAttribute("class", "hide")
        btn.addEventListener("click", function () {
            // console.log(data[i])
            let checkitem = cart.findIndex(function (ele) { return ele.id === data[i].id })
            if (checkitem >= 0) {
                alert("Product already exist in cart")
            }
            else {
                cart.push({ ...data[i], QUANTITY: 1 })
                localStorage.setItem("cartlist", JSON.stringify(cart))
                alert("Product added to cart")
                count.innerText = cart.length
                display(data)
            }
        })
        div.append(image, title, price, desc, btn);
        container3.appendChild(div);
    }
}
slideDivs3(startIndex3);
function next3() {
    console.log("next");
    startIndex3 += 1;
    if (startIndex3 >= movieImages3.length - 3) {
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
/* slideshow3 ends here  */


// allproducts grid starts here 
let cart = JSON.parse(localStorage.getItem("cartlist")) || [];
let total = [];

//price filter
let mini = document.querySelector("#low")
let maxi = document.querySelector("#up")
let fil = document.querySelector("#pricebtn")
fil.addEventListener("click", function () {
    let lowP = +(mini.value) || 0
    let highP = +(maxi.value) || 0
    let filtered = total.filter(function (ele) {
        let price = +(ele.price)
        return price >= lowP && price <= highP
    })
    display(filtered);
})
//price filter

//product type filter
let pfilter = document.querySelector("#pfilter")
pfilter.addEventListener("change", function () {
    if (pfilter.value == "") {
        display(total)
    }
    else {
        let temp = total.filter(function (ele) {
            if (pfilter.value == ele.product_type) {
                return true
            }
        })
        display(temp);
    }
})
//product type filter



//category type filter
let catfilter = document.querySelector("#category")
catfilter.addEventListener("change", function () {
    if (catfilter.value == "") {
        display(total)
    }
    else {
        let temp = total.filter(function (ele) {
            if (catfilter.value == ele.category) {
                return true
            }
        })
        display(temp);
    }
})
//category type filter



//color type filter
let colorFilter = document.querySelector("#color")
colorFilter.addEventListener("change", () => {
    if (colorFilter.value == "") {
        display(total)
    }
    else {
        let temp = total.filter(function (ele) {
            // console.log(typeof(colorFilter.value+"yes"))
            for (let i = 0; i < ele.product_colors.length; i++) {
                // console.log((ele.product_colors[i].colour_name.split(" ").join("")))
                if (colorFilter.value == ele.product_colors[i].colour_name) {
                    return true;
                }
            }
        })
        display(temp)
    }
});
//color type filter







let api = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
let site = fetch(api)
site.then(function (data) {
    return data.json();
})
    .then(function (data) {
        // console.log(data[2]);
        display(data)
        total = data
    })
    .catch(function (i) {
        console.log(i);
    })
let count = document.querySelector("#count")
count.innerText = cart.length
function display(data) {
    let box = document.querySelector(".grid1");
    box.innerHTML = "";
    for (let i = 0; i < data.length; i++) {

        let card = document.createElement("div")
        card.setAttribute("class", "cartdiv")
        let image = document.createElement("img")
        let Name = document.createElement("h4")
        let brand = document.createElement("h5")
        let price = document.createElement("h6")
        let des = document.createElement("p")
        let category = document.createElement("p")
        let ptype = document.createElement("p")
        let cartbtn = document.createElement("button")

        image.src = data[i].image_link
        Name.innerText = data[i].name
        brand.innerText = data[i].brand
        price.innerText = data[i].price
        des.innerText = data[i].description
        category.innerText = data[i].category
        ptype.innerText = data[i].product_type


        cartbtn.style.width = "100%"
        cartbtn.style.height = "40px"
        cartbtn.style.backgroundColor = "#004d40"
        cartbtn.style.fontSize = "25px"
        cartbtn.style.cursor = "pointer"
        cartbtn.setAttribute("class", "hide")
        cartbtn.innerText = "Add to Cart"
        cartbtn.style.textAlign = "center"
        cartbtn.addEventListener("click", function () {
            // console.log(data[i])
            let checkitem = cart.findIndex(function (ele) { return ele.id === data[i].id })
            if (checkitem >= 0) {
                alert("Product already exist in cart")
            }
            else {
                cart.push({ ...data[i], QUANTITY: 1 })
                localStorage.setItem("cartlist", JSON.stringify(cart))
                alert("Product added to cart")
                count.innerText = cart.length
                display(data)
            }
        })
        card.append(image, Name, brand, price, category, ptype, cartbtn);
        box.append(card)
    }
}
// allproducts grid ends here 




//search functionality
let Search = document.getElementById("search_nav");
let slideshow1 = document.querySelector(".slideshow1")
let slideshow2 = document.querySelector(".slideshow2")
let slideshow3 = document.querySelector(".slideshow3")
let leftArrow1 = document.querySelector("#leftArrow1")
let rightArrow1 = document.querySelector("#rightArrow1")
let leftArrow2 = document.querySelector("#leftArrow2")
let rightArrow2 = document.querySelector("#rightArrow2")
let leftArrow3 = document.querySelector("#leftArrow3")
let rightArrow3 = document.querySelector("#rightArrow3")
Search.addEventListener("input", function () {
    let searchterm = Search.value.toLowerCase();
    if (searchterm === "") {
        display(total);
        slideshow1.style.display = "block"
        slideshow2.style.display = "block"
        slideshow3.style.display = "block"
        leftArrow1.style.display = "block"
        rightArrow1.style.display = "block"
        leftArrow2.style.display = "block"
        rightArrow2.style.display = "block"
        leftArrow3.style.display = "block"
        rightArrow3.style.display = "block"
    }
    else {
        let slideshow1 = document.querySelector(".slideshow1")
        let slideshow2 = document.querySelector(".slideshow2")
        let slideshow3 = document.querySelector(".slideshow3")
        let leftArrow1 = document.querySelector("#leftArrow1")
        let rightArrow1 = document.querySelector("#rightArrow1")
        let leftArrow2 = document.querySelector("#leftArrow2")
        let rightArrow2 = document.querySelector("#rightArrow2")
        let leftArrow3 = document.querySelector("#leftArrow3")
        let rightArrow3 = document.querySelector("#rightArrow3")
        slideshow1.style.display = "none"
        slideshow2.style.display = "none"
        slideshow3.style.display = "none"
        leftArrow1.style.display = "none"
        rightArrow1.style.display = "none"
        leftArrow2.style.display = "none"
        rightArrow2.style.display = "none"
        leftArrow3.style.display = "none"
        rightArrow3.style.display = "none"
        let results = total.filter(function (el) {
            if (el.name.toLowerCase().includes(searchterm)) {
                return true
            }
        })
        display(results);
    }
})
//search functionality



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

