var openButton = document.querySelector(".openbtn");
var formSearch = document.querySelector(".form-search");
openButton.addEventListener("click", function(evt)) {
    evt.preventDefault();
    if (!formSearch.classList.contains("open")) {
        formSearch.classList.add("open");
    }
    else {
        formSearch.classList.remove("open");
    }
}
