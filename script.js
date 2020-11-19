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
        name:'Grey T-Shirt',
        tag:'grey t-shirt',
        price:15,
        cartItem:0
    },
    {
        name:'Grey T-Shirt',
        tag:'grey t-shirt',
        price:15,
        cartItem:0
    },  {
        name:'Grey T-Shirt',
        tag:'grey t-shirt',
        price:15,
        cartItem:0
    }

]

function onLoadingCartNumber(){
    let cartNumber = parseInt(localStorage.getItem('cartNumber'))
    if(cartNumber){
        cartItem.textContent = cartNumber; 
    }
} 

onLoadingCartNumber();

for(let i=0;i<cartEle.length;i++){
    cartEle[i].addEventListener('click',addToCart)
}

function addToCart(e){
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
}