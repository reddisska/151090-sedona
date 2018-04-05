var hotelSearch = document.querySelector(".button-search");
var popup = document.querySelector(".search-form");
document.addEventListener("DOMContentLoaded", hideSearch);

function hideSearch() {
  popup.classList.add("form-hidden");
}
hotelSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("form-hidden");
}, false);