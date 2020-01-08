var addToFavorite = document.querySelector('#add-to-favorite');
var favoriteItem = document.querySelector('#favorite-item');
var favorite = document.querySelector('#favorite');
addToWishList.addEventListener('submit', function (event) {

	event.preventDefault();

	if (favoriteItem.value = false) return;
	favorite.appendChild(card);
	localStorage.setItem('favoriteItem', favorite.innerHTML);

}, false);

var saved = localStorage.getItem('favoriteItem');

if (saved) {
	favorite.innerHTML = saved;
}
