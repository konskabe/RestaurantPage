const createMenu= ()=>{
    const content = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.classList.add("pageContent");

    const heading = document.createElement('h1');
    heading.textContent = "A la carte Menu";

    menu.appendChild(
        createMenuItem(
            "BeefSteak",
            "spicy grilled filet steak tenderloin"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Goulash",
            "Slow Cooked Beef Goulash With Paprika Potatoes"
        )
    );
    
    content.appendChild(menu);
}

const createMenuItem = (name, description) => {
    const menuItem = document.createElement ("div");
    menuItem.classList.add("menuItem");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `images/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    
    return menuItem;
}

export default createMenu