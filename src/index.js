import loadPage from "./pageLoad.js"
import { loadMenu } from "./pageLoad.js";
import { loadContact } from "./pageLoad.js";
import createRestaurantHomePage from "./restaurant.js";
import "./style.css";

loadPage();

const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const contactButton = document.querySelector("#contactButton");

homeButton.addEventListener("click", ()=>{
    clearContent();
    createRestaurantHomePage();
})

menuButton.addEventListener("click", ()=>{
    clearContent();
    loadMenu();
})

contactButton.addEventListener("click", ()=>{
    clearContent();
    loadContact();
})

function clearContent(){
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".pageContent");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}