import { v4 as uuidv4 } from "uuid";

let custom_message = document.querySelector(".custom-message");

if(custom_message){
    custom_message.innerHTML = `generated id: ${uuidv4()}`;
    custom_message.style.color = "red";
}