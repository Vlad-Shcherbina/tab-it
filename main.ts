const titleInput = <HTMLInputElement>document.getElementById("title")
const noteInput = <HTMLTextAreaElement>document.getElementById("note")
const favSelect = <HTMLSelectElement>document.getElementById("fav-select")
const fav = <HTMLLinkElement>document.getElementById("fav")

const p = new URLSearchParams(window.location.search)

titleInput.value = p.get("title")
document.title = titleInput.value || "tab-it"

favSelect.value = p.get("fav") || "yellow"
fav.href = favSelect.value + ".png"

noteInput.value = p.get("note")

function makeURL() {
    return location.origin + location.pathname
    + "?title=" + encodeURIComponent(titleInput.value)
    + "&fav=" + encodeURIComponent(favSelect.value)
    + "&note=" + encodeURIComponent(noteInput.value)
}

titleInput.oninput = (e) => {
    document.title = titleInput.value || "tab-it"
    history.replaceState({}, "", makeURL())
}

favSelect.oninput = (e) => {
    fav.href = favSelect.value + ".png"
    history.replaceState({}, "", makeURL())
}

noteInput.oninput = (e) => {
    history.replaceState({}, "", makeURL())
}
