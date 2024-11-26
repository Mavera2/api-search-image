const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const input = document.querySelector("#searchinput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchbutton");
const clearButton = document.querySelector("#clearbutton");
const imageList = document.querySelector(".imagelist-wrapper");

runEvent();
function runEvent() {
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}
function clear() {
    input.value = "";
   // Array.from(imageList.children).forEach((child) => child.remove())
   imageList.innerHTML="";
}
function search(e) {

    const value = input.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,
        {
            methor: "GET",
            headers: {
                Authorization: "Client-ID yM_DIMwAzEp1725qQ00_cQJYyVQyxZZp1LUpbgC2uC4",

            }
        }).then((res) => res.json())
        .then((data) => {
            Array.from(data.results).forEach((image) => {
                // console.log(image.urls.small);
                addImage(image.urls.small);
            })
        })
        .catch((err) => console.log(err));
    e.preventDefault();
}

function addImage(url) {
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = '400';
    img.width = '400';
    div.append(img);
    imageList.append(div);
}