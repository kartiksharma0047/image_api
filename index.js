import loader from "./loader.js";
import picture from "./picture.js";

const input = document.querySelector("input");
const output = document.querySelector(".output");
input.onchange = () => {
    if (input.value != "") {
        loader();
        fetch("https://jsonplaceholder.typicode.com/photos/" + input.value)
            .then((resolve) => { return resolve.json() })
            .then((data) => { 
                console.log(data);
                picture(data.url, data.title); 
            });
        
    };
}