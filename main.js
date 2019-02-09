var titleInput = document.getElementById("title");
var noteInput = document.getElementById("note");
var favSelect = document.getElementById("fav-select");
var fav = document.getElementById("fav");
var p = new URLSearchParams(window.location.search);
titleInput.value = p.get("title");
document.title = titleInput.value;
favSelect.value = p.get("fav") || "yellow";
fav.href = favSelect.value + ".png";
noteInput.value = p.get("note");
function makeURL() {
    return location.origin + location.pathname
        + "?title=" + encodeURIComponent(titleInput.value)
        + "&fav=" + encodeURIComponent(favSelect.value)
        + "&note=" + encodeURIComponent(noteInput.value);
}
titleInput.oninput = function (e) {
    document.title = titleInput.value;
    history.replaceState({}, "", makeURL());
};
favSelect.oninput = function (e) {
    fav.href = favSelect.value + ".png";
    history.replaceState({}, "", makeURL());
};
noteInput.oninput = function (e) {
    history.replaceState({}, "", makeURL());
};
