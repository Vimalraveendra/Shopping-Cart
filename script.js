const cartEle = document.querySelectorAll('.add-cart');
const cartItemEl = document.querySelector('.cart span'); 
const itemsEl = document.getElementById('items')
const itemsContainerEl = document.querySelector('.items-container')


const products = [
    {
        name:'Black T-Shirt',
        tag:'black t-shirt',
        price:12,
        cartItem:0
    },
    {
        name:'Grey T-Shirt',
        tag:'grey t-shirt',
        price:15,
        cartItem:0
    },
    {
        name:'Black Shirt',
        tag:'black shirt',
        price:25,
        cartItem:0
    },  {
        name:'Red T-Shirt',
        tag:'red t-shirt ',
        price:20,
        cartItem:0
    },  {
        name:'Blue Shirt',
        tag:'blue shirt',
        price:24,
        cartItem:0
    },
    {
        name:'Stripe Shirt',
        tag:'stripe shirt',
        price:25,
        cartItem:0
    },  {
        name:'White T-Shirt',
        tag:'white t-shirt',
        price:22,
        cartItem:0
    },
    {
        name:'Check Shirt',
        tag:'check shirt',
        price:26,
        cartItem:0
    },
    


]


// iterating over the array of cartElm(in our case there are 8 cartItem button)
for(let i=0;i<cartEle.length;i++){
    cartEle[i].addEventListener('click',()=>{
        addToCart(products[i])
        totalPrice(products[i])
    })
}

// whenever the page loads, invoking the function to render
// totalCartItem from local storage
function onLoadGetCartNumbers(){
    let cartNumber = parseInt(localStorage.getItem('cartNumber'))
    if(cartNumber){
        cartItemEl.textContent = cartNumber; 
    }
} 

onLoadGetCartNumbers();


function addToCart(item){
    // the item we are getting from the localStorage is a string
    // inorder to convert string to a number we use parseInt    
    let cartNumber = parseInt(localStorage.getItem('cartNumber'))
 // here we checking if the cartNumber already exist in the cart
 // if it exists we increment the cartNumber by 1.else set it to 1.

    if(cartNumber){
        localStorage.setItem('cartNumber',cartNumber+1)
        cartItemEl.textContent = cartNumber+1;
    }else{
    localStorage.setItem('cartNumber',1);
    cartItemEl.textContent = 1;
    }

    setItemToLs(item)
}

function setItemToLs(item){
// checking items already persist in the local storage
// and converting JSON format to a object format
let cartItems = JSON.parse(localStorage.getItem('cartItem'))

//  if cartItems already in our local storage
if(cartItems !==null){
    if(cartItems[item.tag]===undefined){
        cartItems={
            ...cartItems,
            [item.tag]:item
        }
    }
cartItems[item.tag].cartItem +=1;
}else{
item.cartItem =1;
cartItems = {
     [item.tag]:item
 }

}
//  converting object format to JSON format & 
// setting the items to the local storage
localStorage.setItem('cartItem',JSON.stringify(cartItems))
 
}

function totalPrice(item){
    
    let cartPrice = localStorage.getItem('totalPrice')
    console.log("cartPrice", cartPrice)
    //  if cartPrice already in our local storage
    if(cartPrice !==null){
        console.log("cart",cartPrice)
        cartPrice = parseInt(cartPrice)
        localStorage.setItem('totalPrice',cartPrice+item.price)
    }else{
        localStorage.setItem('totalPrice',item.price)
    }
 
}

function showCartItems(){
    let cartItems = localStorage.getItem('cartItem')
    cartItems= JSON.parse(cartItems)
   
  
    if(cartItems && itemsContainerEl){  

      Object.values(cartItems).map(item=>{
          //  to add more cartItems
            itemsEl.innerHTML += `
            <div class ="products">
            <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./assets/${item.tag}.png", alt="red-shirt">
            <h2 class="name">${item.name}</h2>
            </div>
            <div class="price">${item.price}</div>  
            <div class="quantity">
            <ion-icon name="caret-forward-circle-outline"></ion-icon>
            ${item.cartItem}
            <ion-icon name="caret-back-circle-outline"></ion-icon>
            </div>  
            <div class="total">${item.cartItem* item.price}</div>
            </div>
         
          `

      })  
       
    }
}

showCartItems()
