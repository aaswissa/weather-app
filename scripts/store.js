var addToWishList = document.querySelector('#add-to-wishlist');
var wishlistItem = document.querySelector('#wishlist-item');
var wishlist = document.querySelector('#wishlist');
addToWishList.addEventListener('submit', function (event) {

	event.preventDefault();

	if (wishlistItem.value = false) return;
	wishlist.appendChild(card);
	localStorage.setItem('wishlistItems', wishlist.innerHTML);

}, false);

var saved = localStorage.getItem('wishlistItems');

if (saved) {
	wishlist.innerHTML = saved;
}