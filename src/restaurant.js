const createRestaurantHomePage =() =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("pageContent");

    const image = document.createElement("img");
    image.src= "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.height = "600";
    pageContent.appendChild(image);

    const headLine = document.createElement("h1");
    headLine.textContent = "Welcome to our restaurant!"
    pageContent.appendChild(headLine);

    const moto = document.createElement("p");
    moto.textContent = "We serve the best food in town. Come and taste!";
    pageContent.appendChild(moto);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage