document.getElementById("openbtn").addEventListener("click", function() {
    var formSearch = document.getElementById("search-form");

    if (!formSearch.classList.contains("open")) {
        formSearch.classList.add("open");
    }
    else {
        formSearch.classList.remove("open");
    }
});

