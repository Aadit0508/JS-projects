const searchbar = document.getElementById('searchbar');
const input = document.getElementById('enter');
const search = document.getElementById('search');
const showmore = document.getElementById('Show');
const results = document.querySelector('.results'); 

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = input.value;
    const accesskey = "B1iU9BQWzgAwEVHrylp2w9r03lnPHsFuBv1FbqUo3aw";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

    const response = await fetch(url).then(response => response.json());
    console.log(response);

    if (response.results.length > 0) {
        response.results.forEach(response => {
            const image = document.createElement('img');
            image.src = response.urls.small;
            results.appendChild(image);
        });
    } else {
        console.log("No results found.");
    }
}

search.addEventListener('click', (e) => {
    results.innerHTML = "";
    e.preventDefault();
    page = 1;
    searchImages();
});

showmore.addEventListener('click',(e)=>{
    e.preventDefault();
    page++;
    searchImages()
})
