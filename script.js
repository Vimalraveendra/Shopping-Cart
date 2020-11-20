let cartEle = document.querySelectorAll('.add-cart');
let cartItem = document.querySelector('.cart span'); 

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

// whenever the page loads invoking the function to render
// totalCartItem
function onLoadingCartNumber(){
    let cartNumber = parseInt(localStorage.getItem('cartNumber'))
    if(cartNumber){
        cartItem.textContent = cartNumber; 
    }
} 

onLoadingCartNumber();

for(let i=0;i<cartEle.length;i++){
    cartEle[i].addEventListener('click',(e)=>{
        addToCart(e,products[i])
    })
}

function addToCart(e,item){
    e.preventDefault();
   
   
    // the item we are getting from the localStorage is a string
    // inorder to convert string to a number we use parseInt    
    let cartNumber = parseInt(localStorage.getItem('cartNumber'))

    if(cartNumber){
        localStorage.setItem('cartNumber',cartNumber+1)
        cartItem.textContent = cartNumber+1;
    }else{
    localStorage.setItem('cartNumber',1);
    cartItem.textContent = 1;
    }

    setItem(item)
}

function setItem(item){
// checking items already persist in the local storage
// and converting JSON format to a object format
let cartItems = JSON.parse(localStorage.getItem('cartItem'))
console.log("Cartitem",cartItems)
if(cartItems !==null){
cartItems[item.tag].cartItem +=1;
}else{
item.cartItem =1;
cartItems = {
     [item.tag]:item
 }

}
localStorage.setItem('cartItem',JSON.stringify(cartItems))
 
}