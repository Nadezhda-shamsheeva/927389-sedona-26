var formSearch = document.getElementById("search-form");
document.getElementById("openbtn").addEventListener("click", function () {
    if (!formSearch.classList.contains("open")) {
        formSearch.classList.add("open");
    }
    else {
        formSearch.classList.remove("open");
    }
});
var submit = document.getElementById("send");
submit.addEventListener("click", function (e) {
    if (document.getElementById("arrival").value == "" || document.getElementById("departure").value == "" || document.getElementById("adults").value == "" || document.getElementById("children").value == "") {
        e.preventDefault();
        formSearch.classList.add("animate");
        setTimeout(function () {
            formSearch.classList.remove("animate");
        }, 1000);
        return false;
    }
    else {
        return true;
    }
});
formSearch.addEventListener('change', function (e) {
    formSearch.classList.remove("animate");
});