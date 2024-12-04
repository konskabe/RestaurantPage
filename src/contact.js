function createContact(){
    const content = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.classList.add("pageContent");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = '📞 999 999 999';
    contact.appendChild(phoneNumber);

    const address = document.createElement("p");
    address.textContent = "🏠 1996 Eleftheroupoli, Kavala, Greece";
    contact.appendChild(address);

    const form = document.createElement("form");
    form.classList.add("contectForm");

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Enter your email";
    form.appendChild(emailInput);

    const phoneInput = document.createElement("input");
    phoneInput.type = "number";
    phoneInput.placeholder = "Enter your phone number";
    form.appendChild(phoneInput);

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.placeholder = "Send us an email here";
    form.appendChild(textInput);

    contact.appendChild(form);

    content.appendChild(contact);

}


export default createContact