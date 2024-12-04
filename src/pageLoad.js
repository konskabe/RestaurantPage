import createRestaurantHomePage from "./restaurant.js"
import createMenu from "./menu.js";
import createContact from "./contact.js";

export default function initialLoad(){
    createRestaurantHomePage();
}

export function loadMenu(){
    createMenu();
}

export function loadContact(){
    createContact();
}





