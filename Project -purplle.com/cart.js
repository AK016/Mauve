const closead = document.getElementById("closead");
const advertisement = document.querySelector(".advertisement");
closead.addEventListener("click", function () {
    advertisement.style.display = "none";
});

let cart = JSON.parse(localStorage.getItem("cartlist")) || [];


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

let count = document.querySelector("#count")
count.innerText = cart.length
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
        btn.style.width = "90%"
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





let checkpin = document.querySelector("#checkpin")
let checkagain = document.querySelector("#checkagain")
let hoverpincode = document.querySelector("#hoverpincode")
let pincode = document.querySelector("#pin_in")
let pincodediv = document.querySelector(".pincode")
checkpin.addEventListener("click", function () {
    if (pincode.value == "") {
        alert("Enter a valid pincode")
    }
    else {
        pincode.style.display = "none"
        hoverpincode.innerText = "Get it in 2days"
        hoverpincode.style.display = "block"
        checkpin.style.display = "none"
        checkagain.style.display = "block"
        // pincodediv.style.display="flex"
    }
})

checkagain.addEventListener("click", function () {
    hoverpincode.style.display = "none"
    checkagain.style.display = "none"
    pincode.style.display = "block"
    checkpin.style.display = "block"
    pincodediv.style.display = "flex"
})



// coupons here 
let viewoffers = document.querySelector("#viewoffers")
let hoveroffers = document.querySelector("#hoveroffers")
viewoffers.addEventListener("click", function () {
    hoveroffers.style.display = "block"
})

let closeoffers = document.querySelector("#closecoupon")
closeoffers.addEventListener("click", function () {
    hoveroffers.style.display = "none"
})
// coupons here 


// products display in cart
let container = document.querySelector(".products")
let tbody = document.querySelector("tbody")
display(cart)

function display(data) {
    container.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div")
        card.style.backgroundColor = "white"
        card.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px"

        let divimage = document.createElement("div")
        divimage.setAttribute("class", "divimage")
        let image = document.createElement("img");
        image.src = data[i].image_link
        divimage.append(image)

        let divdetails = document.createElement("div")
        divdetails.setAttribute("class", "divdetails")
        let name = document.createElement("h2")
        let brand = document.createElement("h5")
        let price = document.createElement("h6")
        let incre = document.createElement("button")
        let quant = document.createElement("p")
        let decre = document.createElement("button")
        let remove = document.createElement("button")
        let quanty = document.createElement("div")
        quanty.setAttribute("id", "quanty")

        name.innerText = data[i].name
        brand.innerText = data[i].brand
        price.innerText = data[i].price + "$"

        incre.innerText = "+"
        incre.setAttribute("id", "incre")
        incre.addEventListener("click", function () {
            data[i].QUANTITY++;
            quant.innerText = data[i].QUANTITY
            localStorage.setItem("cartlist", JSON.stringify(data))
            display(cart)
        })

        decre.setAttribute("id", "incre")
        decre.addEventListener("click", function () {
            if (data[i].QUANTITY > 1) {
                data[i].QUANTITY--;
                quant.innerText = data[i].QUANTITY
                localStorage.setItem("cartlist", JSON.stringify(data))
                display(cart)
            }
        })



        quant.innerText = data[i].QUANTITY

        decre.innerText = "-"
        decre.setAttribute("id", "decre")

        remove.innerText = "Remove"
        remove.setAttribute("id", "remove")
        remove.addEventListener("click", function () {
            data.splice(i, 1)
            localStorage.setItem("cartlist", JSON.stringify(data))
            count.innerText = cart.length
            display(data);
        })

        quanty.append(incre, quant, decre)
        divdetails.append(name, brand, price, quanty, remove)
        card.append(divimage, divdetails)
        container.append(card)
    }
    let totalprice = document.querySelector("#pricecount")
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += +data[i].price * +data[i].QUANTITY
        total.toFixed(2);
    }
    total.toFixed(2);
    totalprice.innerText = total + "$";

}
// products display in cart


// ordersuccessful 
let placeorder = document.querySelector("#placeorder")
let ordersuccessful = document.querySelector("#ordersuccessful")
placeorder.addEventListener("click", function () {
    if (container.innerHTML != "") {
        placeorder.style.display = "none"
        ordersuccessful.style.display = "block"
    }
})

let orderclose = document.querySelector("#orderclose")
orderclose.addEventListener("click", function () {
    localStorage.clear("cartlist")
    container.innerHTML = ""
    ordersuccessful.style.display = "none"
    
    window.location.href = "./index.html";
})

