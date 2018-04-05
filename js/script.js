var hotelSearch = document.querySelector(".button-search");
var popup = document.querySelector(".search-form");

hotelSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("form-hidden");
}, false);