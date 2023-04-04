
let cartarray = JSON.parse(localStorage.getItem("cartarray"))
console.log(cartarray);

let ecooomuser = JSON.parse(localStorage.getItem("ecooomuser"))
console.log(ecooomuser);

if (ecooomuser==[] || ecooomuser== null) {
    window.location.href="login.html"
}

let quantity = 1
let me = document.getElementById("show")
let porarray = []
fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        porarray = json
        for (let index = 0; index < json.length; index++) {
            const element = json[index];

            me.innerHTML += `<button class="pro" data-bs-toggle="modal" data-bs-target="#staticBackdrop2 "  onclick="content(${index})">
                                    <div class="divofimgpro">
                                        <img class="proimg" src="${element.image}" alt="">
                                    </div>
                                    <p class="protitle"><b>${element.title}</b></p>
                                     <p class="proprice">$ ${element.price}</p>
                                     <p class="proprice"><b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.rating.rate}</p>
                                    
                                </button>`

        }

    }
    )


function allitem() {
    document.getElementById("productsheadtitle").innerHTML = "All items"
    // console.log(porarray);
    me.innerHTML = ""

    for (let index = 0; index < porarray.length; index++) {
        const element = porarray[index];

        me.innerHTML += `<button class="pro" data-bs-toggle="modal" data-bs-target="#staticBackdrop2 " onclick="content(${index})">
                                    <div class="divofimgpro">
                                        <img class="proimg" src="${element.image}" alt="">
                                    </div>
                                    <p class="protitle"><b>${element.title}</b></p>
                                     <p class="proprice">$ ${element.price}</p>
                                     <p class="proprice"><b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.rating.rate}</p>
                                    
                                </button>`
    }

}
function men() {
    document.getElementById("productsheadtitle").innerHTML = "Men's clothing"
    // console.log(porarray);
    me.innerHTML = ""

    for (let index = 0; index < porarray.length; index++) {
        const element = porarray[index];

        if (element.category != "men's clothing") {
            continue
        } else {
            me.innerHTML += `<button class="pro" data-bs-toggle="modal" data-bs-target="#staticBackdrop2 " onclick="content(${index})">
                                    <div class="divofimgpro">
                                        <img class="proimg" src="${element.image}" alt="">
                                    </div>
                                    <p class="protitle"><b>${element.title}</b></p>
                                     <p class="proprice">$ ${element.price}</p>
                                     <p class="proprice"><b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.rating.rate}</p>
                                    
                                </button>`
        }

    }

}
function jew() {
    document.getElementById("productsheadtitle").innerHTML = "Jewelery"

    // console.log(porarray);
    me.innerHTML = ""

    for (let index = 0; index < porarray.length; index++) {
        const element = porarray[index];

        if (element.category != "jewelery") {
            continue
        } else {
            me.innerHTML += `<button class="pro" data-bs-toggle="modal" data-bs-target="#staticBackdrop2 " onclick="content(${index})">
                                    <div class="divofimgpro">
                                        <img class="proimg" src="${element.image}" alt="">
                                    </div>
                                    <p class="protitle"><b>${element.title}</b></p>
                                     <p class="proprice">$ ${element.price}</p>
                                     <p class="proprice"><b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.rating.rate}</p>
                                    
                                </button>`
        }

    }

}
function ele() {
    document.getElementById("productsheadtitle").innerHTML = "Electronics"

    // console.log(porarray);
    me.innerHTML = ""

    for (let index = 0; index < porarray.length; index++) {
        const element = porarray[index];

        if (element.category != "electronics") {
            continue
        } else {
            me.innerHTML += `<button class="pro" data-bs-toggle="modal" data-bs-target="#staticBackdrop2 " onclick="content(${index})">
                                    <div class="divofimgpro">
                                        <img class="proimg" src="${element.image}" alt="">
                                    </div>
                                    <p class="protitle"><b>${element.title}</b></p>
                                     <p class="proprice">$ ${element.price}</p>
                                     <p class="proprice"><b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.rating.rate}</p>
                                    
                                </button>`
        }

    }

}
function wom() {
    document.getElementById("productsheadtitle").innerHTML = "Women's clothing"

    // console.log(porarray);
    me.innerHTML = ""

    for (let index = 0; index < porarray.length; index++) {
        const element = porarray[index];

        if (element.category != "women's clothing") {
            continue
        } else {
            me.innerHTML += `<button class="pro" data-bs-toggle="modal" data-bs-target="#staticBackdrop2 " onclick="content(${index})">
                                    <div class="divofimgpro">
                                        <img class="proimg" src="${element.image}" alt="">
                                    </div>
                                    <p class="protitle"><b>${element.title}</b></p>
                                     <p class="proprice">$ ${element.price}</p>
                                     <p class="proprice"><b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.rating.rate}</p>
                                    
                                </button>`

        }

    }

}
function searchbut() {
    document.getElementById("productsheadtitle").innerHTML = "related items";
    me.innerHTML = "";
    let searchInput = document.getElementById("searchinput").value;
    let searched = porarray.filter(item => item.category.includes(searchInput) || item.description.includes(searchInput) || item.title.includes(searchInput));

    for (let index = 0; index < porarray.length; index++) {
        const element = porarray[index];
        if (searched.includes(element)) {
            me.innerHTML += `<button class="pro" data-bs-toggle="modal" data-bs-target="#staticBackdrop2 " onclick="content(${index})">
                        <div class="divofimgpro">
                            <img class="proimg" src="${element.image}" alt="">
                        </div>
                        <p class="protitle"><b>${element.title}</b></p>
                         <p class="proprice">$ ${element.price}</p>
                         <p class="proprice"><b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.rating.rate}</p>
                    </button>`;
        }
    }
}

function content(i) {
    console.log(i);
    document.getElementById("content").innerHTML = `  <div class="procartspace1">
                                                         <div class="divofimgprocart1">
                                                            <img class="proimgcart1" src="${porarray[i].image}" alt="">
                                                        </div>
                                                        <div class="procaldiv1">
                                                            <p class="protitlecart1"><b>${porarray[i].title}</b></p>
                                                            <p class="propricecart1"><b>Description:</b> ${porarray[i].description}</p>
                                                            <p class="propricecart1"><b>Price:</b> $ ${porarray[i].price}</p>
                                                            <p class="proprice"><b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${porarray[i].rating.rate}</p>
                                                            <button type="button" data-bs-dismiss="modal" onclick="addot(${i})" class="probuy btn btn-warning">add to cart</button>
                                                        </div>
                                                    </div> 
                                                </div>`
}

function cartmodal() {
    // console.log();
    if (cartarray.length == 0) {
        document.getElementById("cartcontent").innerHTML = `<b>NO ITEM IN CART</b>`
    } else {

        console.log(cartarray);
        document.getElementById("cartcontent").innerHTML = ""
        totalpriceofgoods()
        for (let index = 0; index < cartarray.length; index++) {
            const element = cartarray[index];
            document.getElementById("cartcontent").innerHTML += `  <div class="procartspace12">
                                                         <div class="divofimgprocart12">
                                                            <img class="proimgcart12" src="${element.prod.image}" alt="">
                                                        </div>
                                                        <div class="procaldiv12">
                                                            <p class="protitlecart12"><b>${element.prod.title}</b></p>
                                                            <p class="propricecart12">
                                                                <b>Price:</b> $ ${element.prod.price} &nbsp&nbsp
                                                            <b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.prod.rating.rate}
                                                            </p>
                                                            <div class="procal12init" >
                                                           
                                                                <div class="procalbutaddrem">
                                                                     <button class="btn btn-primary" onclick="addtopro(${index})">+</button>
                                                                        <p class="shownumofpro2" id="${index}">quantity: ${element.quantity} totalprice:${element.quantity * element.prod.price} </p>
                                                                    <button class="btn btn-primary" onclick="removefrompro(${index})">-</button>
                                                                </div>
                                                                
                                                                <button class="btn btn-warning" onclick="removefromcart(${index})">remove</button>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div><hr>`

        }
        document.getElementById("checkoutspace").innerHTML = `
                                                                 <div class="checkdiv">
                                                                 <div class="checkoutbuttonholde">
                                                                              <button class="checkoutbut" onclick="pay(${totalprice})">Check out</button>
                                                                                 </div>
                                                             <p class="checkouttotal"> Total price:$ ${totalprice} </p>
                                                             </div>`
    }
}


function addot(index) {

    if (cartarray == null) {
        cartarray = []
        cartarray.push({
            prod: porarray[index],
            quantity: 1,
            onepriceofit: porarray[index].price,
            priceofit: porarray[index].price * quantity
        })
        localStorage.setItem("cartarray", JSON.stringify(cartarray))
    } else {

        let checkcart = cartarray.find((productid) => productid.prod.id == porarray[index].id)
        if (checkcart) {
            alert("item already in cart")
        } else {
            cartarray.push({
                prod: porarray[index],
                quantity: 1,
                onepriceofit: porarray[index].price,
                priceofit: porarray[index].price * quantity
            })
            console.log(cartarray);
        }
        localStorage.setItem("cartarray", JSON.stringify(cartarray))
    }


    totalpriceofgoods()
}
function removefromcart(index) {

    cartarray.splice(index, 1)
    localStorage.setItem("cartarray", JSON.stringify(cartarray))
    // console.log();
    if (cartarray.length == 0) {
        document.getElementById("cartcontent").innerHTML = `<b>NO ITEM IN CART</b>`
        document.getElementById("checkoutspace").innerHTML = ""
    } else {
        totalpriceofgoods()
        console.log(cartarray);
        document.getElementById("cartcontent").innerHTML = ""
        for (let index = 0; index < cartarray.length; index++) {
            const element = cartarray[index];
            document.getElementById("cartcontent").innerHTML += `  <div class="procartspace12">
              <div class="divofimgprocart12">
               <img class="proimgcart12" src="${element.prod.image}" alt="">
           </div>
           <div class="procaldiv12">
               <p class="protitlecart12"><b>${element.prod.title}</b></p>
               <p class="propricecart12">
                   <b>Price:</b> $ ${element.prod.price} &nbsp&nbsp
               <b>rating:</b> <span class="material-symbols-outlined  tyytty">star</span> ${element.prod.rating.rate}
               </p>
               <div class="procal12init" >
              
                   <div class="procalbutaddrem">
                        <button class="btn btn-primary" onclick="addtopro(${index})">+</button>
                           <p class="shownumofpro2" id="${index}">quantity: ${element.quantity} totalprice:${element.quantity * element.prod.price} </p>
                       <button class="btn btn-primary" onclick="removefrompro(${index})">-</button>
                   </div>
                   
                   <button class="btn btn-warning" onclick="removefromcart(${index})">remove</button>
               </div>
           </div>
       </div> 
   </div><hr>`

        }
        document.getElementById("checkoutspace").innerHTML = `
                                                                 <div class="checkdiv">
                                                                 <div class="checkoutbuttonholde">
                                                                              <button class="checkoutbut" onclick="pay(${totalprice})">Check out</button>
                                                                                 </div>
                                                             <p class="checkouttotal"> Total price:$ ${totalprice} </p>
                                                             </div>`
    }


}

let counts = []



function addtopro(i) {
    cartarray[i].quantity++;
    cartarray[i].priceofit = cartarray[i].onepriceofit * cartarray[i].quantity;
    console.log(cartarray);
    document.getElementById(i).innerHTML = `quantity: ${cartarray[i].quantity} totalprice:${cartarray[i].quantity * cartarray[i].prod.price}`;
    totalpriceofgoods()
    document.getElementById("checkoutspace").innerHTML = `
                                                                 <div class="checkdiv">
                                                                 <div class="checkoutbuttonholde">
                                                                              <button class="checkoutbut" onclick="checkout()">Check out</button>
                                                                                 </div>
                                                             <p class="checkouttotal"> Total price:$ ${totalprice} </p>
                                                             </div>`
    localStorage.setItem("cartarray", JSON.stringify(cartarray))
}


function removefrompro(i) {
    if (cartarray[i].quantity <= 0) {
        cartarray[i].quantity = 0
        cartarray[i].priceofit = cartarray[i].onepriceofit * cartarray[i].quantity
        console.log(cartarray);
        document.getElementById(i).innerHTML = `quantity: ${cartarray[i].quantity} totalprice:${cartarray[i].quantity * cartarray[i].prod.price}`;
    } else {
        cartarray[i].quantity--
        cartarray[i].priceofit = cartarray[i].onepriceofit * cartarray[i].quantity
        console.log(cartarray);
        document.getElementById(i).innerHTML = `quantity: ${cartarray[i].quantity} totalprice:${cartarray[i].quantity * cartarray[i].prod.price}`;
    }
    totalpriceofgoods()

    document.getElementById("checkoutspace").innerHTML = `
                                                                 <div class="checkdiv">
                                                                 <div class="checkoutbuttonholde">
                                                                              <button class="checkoutbut" onclick="checkout()">Check out</button>
                                                                                 </div>
                                                             <p class="checkouttotal"> Total price:$ ${totalprice} </p>
                                                             </div>`
    localStorage.setItem("cartarray", JSON.stringify(cartarray))
}
let totalprice = 0;

function totalpriceofgoods() {
    // Initialize totalprice to 0
    totalprice = 0
    for (let index = 0; index < cartarray.length; index++) {
        const element = cartarray[index];
        // console.log(cartarray[index].priceofit);
        totalprice += parseFloat(cartarray[index].priceofit); // Add up priceofit as a number
    }
    localStorage.setItem("cartarray", JSON.stringify(cartarray))

    console.log(totalprice);
}
totalpriceofgoods()

function pay(price) {
    // console.log(cartarray);
    // for (let index = 0; index < cartarray.length; index++) {
    //     const element = cartarray[index];
    //     if (cartarray[index].quantity>0) {
    //         cartarray[index].splice(index,1)
    //     }
    //     console.log(cartarray);
    // }
//    setTimeout(() => {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-8e80a03382c18207ade494db306e7eee-X",
        tx_ref: "titanic-48981487343MDI0NzMx",
        amount: price,
        currency: "USD",
        payment_options: "card, mobilemoneyghana, ussd",
        redirect_url: "dashbord.html",

        customer: {
            email: ecooomuser.email
        },
        customizations: {
            title: "JIJA",
            description: "Payment for goods",
        },
    });
//    }, 10000);
}


