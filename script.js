let cartEle = document.querySelectorAll('.add-cart');
let cartItem = document.querySelector('.cart span'); 
console.log("cart",cartEle)

const products = [
    {
        name:'Grey T-Shirt',
        tag:'grey t-shirt',
        price:15,
        cartItem:0
    },
    {
        name:'Black T-Shirt',
        tag:'black t-shirt',
        price:20,
        cartItem:0
    },
    {
        name:'Black Hoddie',
        tag:'black hoodie',
        price:25,
        cartItem:0
    },  {
        name:'Grey Hoddie',
        tag:'grey hoodie',
        price:23,
        cartItem:0
    },  {
        name:'Brown Hoddie',
        tag:'brown hoodie',
        price:23,
        cartItem:0
    }

]



for(let i=0;i<cartEle.length;i++){
    cartEle[i].addEventListener('click',(e)=>{
        addToCart(e,products[i])
        totalPrice(products[i])
    })
}

// whenever the page loads invoking the function to render
// totalCartItem from local storage
function onLoadGetCartNumbers(){
    let cartNumber = parseInt(localStorage.getItem('cartNumber'))
    if(cartNumber){
        cartItem.textContent = cartNumber; 
    }
} 

onLoadGetCartNumbers();


function addToCart(e,item){
    e.preventDefault();
    // the item we are getting from the localStorage is a string
    // inorder to convert string to a number we use parseInt    
    let cartNumber = parseInt(localStorage.getItem('cartNumber'))
 // here we checking if the cartNumber already exist in the cart
 // if it exists we increment the cartNumber by 1.else set it to 1.

    if(cartNumber){
        localStorage.setItem('cartNumber',cartNumber+1)
        cartItem.textContent = cartNumber+1;
    }else{
    localStorage.setItem('cartNumber',1);
    cartItem.textContent = 1;
    }

    setItemToLs(item)
}

function setItemToLs(item){
// checking items already persist in the local storage
// and converting JSON format to a object format
let cartItems = JSON.parse(localStorage.getItem('cartItem'))
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
localStorage.setItem('cartItem',JSON.stringify(cartItems))
 
}

function totalPrice(item){
    console.log("item",item)
    let cartPrice = localStorage.getItem('totalPrice')

    
    if(cartPrice !==null){
        cartPrice = parseInt(cartPrice)
        localStorage.setItem('totalPrice',cartPrice+item.price)
    }else{
        localStorage.setItem('totalPrice',item.price)
    }


}