let carts = document.querySelectorAll('.add-cart');


let products = [{
	name:'x3 blue',
	tag:'x3 blue ',
	price: 29999 ,
	inCart: 0
},
{
	name:'x3 purple',
	tag: 'purple',
	price: 29999 ,
	inCart: 0
},{
	name:'x3 green',
	tag:'green',
	price: 29999,
	inCart: 0
},{
	name:'x2 pro',
	tag:'x2 pro',
	price: 35999,
	inCart: 0
},{
	name:'Narzo20',
	tag:'narzo 20',
	price: 15999,
	inCart: 0
},{
	name:'x',
	tag:'x',
	price: 24999 ,
	inCart: 0
},{
	name:'7pr0',
	tag:'7pro',
	price: 19999 ,
	inCart: 0
},{
	name:'5',
	tag:'5',
	price:35999 ,
	inCart: 0
},{
	name:'5i',
	tag:'5i',
	price: 15999,
	inCart: 0
},{
	name:'5pro',
	tag:'5pro',
	price: 24999,
	inCart: 0
},{
	name:'5s',
	tag:'5s',
	price: 19999,
	inCart: 0
},{
	name:'6',
	tag:'6',
	price:35999 ,
	inCart: 0
},{
	name:'6i',
	tag:'6i',
	price: 15999,
	inCart: 0
},{
	name:'7',
	tag:'7',
	price:24999 ,
	inCart: 0
},{
	name:'7i',
	tag:'7i',
	price: 19999,
	inCart: 0
},{
	name:'Narzo10',
	tag:'Narzo10',
	price: 20999,
	inCart: 0
}]

for(let i=0;i<carts.length;i++)
{
	carts[i].addEventListener('click' , ()=>{
		cartNumbers(products[i]);
		totalCost(products[i])
	})
}
function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) {
		document.querySelector('.cart span').textContent = productNumbers;
	}
}
function cartNumbers(product){

	let productNumbers = localStorage.getItem('cartNumbers');



	productNumbers = parseInt(productNumbers);
	if (productNumbers) {
		localStorage.setItem('cartNumbers',productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers+1;
	}
	else{
		localStorage.setItem('cartNumbers',1);
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(product);

}
function setItems(product){
	let cartItems= localStorage.getItem('productsInCart');
	cartItems= JSON.parse(cartItems);

	if (cartItems != null) {

		if (cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}	
		cartItems[product.tag].inCart += 1;
	}
	else{
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}

	}

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product){

	let cartCost = localStorage.getItem('totalCost');
	
	console.log("my cartCost is ", cartCost);

	if (cartCost!= null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	}
	else{
	localStorage.setItem("totalCost", product.price);
}

}
 onLoadCartNumbers();
 displayCart();

