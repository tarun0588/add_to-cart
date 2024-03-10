let productItemList = document.querySelector(".productItemList");
let cartItemList = document.querySelector(".box");
let para =document.querySelector(".oneTimeshow");
let totalPrice = document.querySelector(".totalPrice")

function changequantity(e , count){
    e.target.parentNode.children[1].innerText = count
    let productName =  e.target.parentNode.parentNode.children[0].innerText;
    Products.forEach((prod) => {
        if(prod.name === productName){
            prod.count = count;
        }
    });

     // Update the carts
    cartItemList.innerHTML = "";
    let total = 0;

    Products.forEach((ele)=>{
        if(ele.count > 0){
            let div = document.createElement("div");
            div.innerHTML = `
            <div >${ele.name}</div><div class="price"><div>${ele.count}</div>
            <div>x</div><div>${ele.price}</div></div>`
            div.classList.add('cartItem')
            cartItemList.appendChild(div);

            total += ele.count * ele.price
            totalPrice.innerHTML= ` Total :- ${total}`
        }
    })
 
console.log(cartItemList.children.length);

    if (cartItemList.children.length === 0) {
        let para = document.createElement("p")
        para.innerHTML = `No Product added to the cart`;
        para.style.fontSize ='18px'
        para.style.padding = '5rem 2rem'
        cartItemList.appendChild(para);
           totalPrice.innerHTML= ` Total :- 0/-`;
      }
}

productItemList.addEventListener('click', (e)=>{

    let count = 0;

    if(e.target.innerText ==="+"){
        count = Number(e.target.parentNode.children[1].innerText)
        count++
        changequantity(e, count)
    }else if(e.target.innerText ==="-"){
        count = Number(e.target.parentNode.children[1].innerText)
       if(count > 0){
        count--;
        changequantity(e, count)
       }else{
        alert("you can't remove this item");
       }  
    }
})

function showproductList(){
    Products.forEach((e)=>{
        let div = document.createElement("div");

        div.innerHTML = `
        <div class="Name">${e.name}</div>
        <div class="rate">$${e.price}</div>
        <div class="addorremoveBtn"> 
            <span class="minus">-</span><p class="quantity">0</p><span class="plus">+</span>
        </div>
        `
        div.classList.add("productstyle")
        productItemList.appendChild(div);
    })
}
window.onload = showproductList();