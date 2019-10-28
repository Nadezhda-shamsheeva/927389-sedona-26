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
    if (document.getElementById("arrival").value == "" || document.getElementById("departure").value == "" || document.getElementById("adults").value == "" || document.getElementById("children").value == "" ) {
        e.preventDefault();
        submit.classList.add("animate");
        return false;
    } 
    else {
        return true;
    }
});
formSearch.addEventListener('change', function (e) {
    submit.classList.remove("animate");
});