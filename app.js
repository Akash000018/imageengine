const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");

const accessKey = "-0l22hnYCqomsJY2ToywZm_iCt5dOO1lY4KPqQ3_0Ew"
let keyword = "";
let page = 1;
async function serachImage() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    });
    showmorebtn.style.display = "block";
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    serachImage();
}); 

showmorebtn.addEventListener("click",()=>{
    page++;
    serachImage();
})