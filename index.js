let gData = []
const getGiphy = async() => {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?q=nasa&api_key=nhMLRC5rGF3a0aQk6HtRYkZeXg8rdciJ&limit=12")
    const data = await response.json();
    gData = await data.data;
    await showData(gData);
    console.log(data);
}

const showData = (data) => {
    let a = document.getElementById("api-data");
    data.forEach(element => {
        let html = `
            <div class="col-md-3">
                <div class="card" style="width: 100;">
                    <img src="${element.images.original.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <a href="#" onclick="document.location.href='${element.url}'" class="btn btn-warning col-md">Detail</a>
                    </div>
                </div>
            </div>
        `;
        a.innerHTML += html;
    });
}

getGiphy();