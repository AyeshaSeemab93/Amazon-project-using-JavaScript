//In its own file

//const products = 
// [
//     {
//       image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//       name: 'product-name limit-text-to-2-lines',
//       rating: {
//         stars: 4.5,
//         count: 87
//       },
//       priceCents: 1090
//     },
//     {
//       image: 'images/products/intermediate-composite-basketball.jpg',
//       name: 'Intermediate Size Basketball',
//       rating: {
//         stars: 4,
//         count: 127
//       }
//   ];




let productsHTML = ``;
products.forEach((product)=>{

  productsHTML  += `   
  <div class="product-container">
    <div class="product-image-container">
    <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${product.name}
    </div>

    <div class="product-rating-container">
     <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png"> 
      <div class="product-rating-count link-primary">
      ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
    ${product.priceCents / 100}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button data-product-id = "${product.id}" class="add-to-cart-button button-primary js-add-to-cart">
      Add to Cart
    </button>
    </div>
    
`;}
)
console.log(productsHTML);
//putting HTML in HTML file using DOM:
document.querySelector('.js-products-grid').innerHTML = productsHTML;

//adding event(JS) in button
document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>
  {
    button.addEventListener('click', ()=>
    {
      //store the productName attached(using data attribute) to the button in the cart
     const productId = button.dataset.productId;
       //check if product if already in the cart:
       let matchingItem ;
       cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
              matchingItem = cartItem;
            }
            });
       
      if(matchingItem){
        matchingItem.quantity++;
      }
      else{
      cart.push({
        productId: productId,
        quantity: 1 }); 
      }
      console.log(cart);
    });
  });




















        // <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png"> 
        // * 10 bec the images are stored with name 45 instead of 4.0, 30 instead of 3.0