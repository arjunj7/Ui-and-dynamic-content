let aj = document.querySelector("#text-input");
let btn = document.querySelector("button");
let nj = document.querySelector(".feedback");
let list = document.querySelector("ul");

// this function runs when btn is clicked


function addItem() {
    
    // create element
    let li = document.createElement("li");
    
    if(aj.value){

        console.log(aj.value);
        li.textContent = '‣' + `\n` + aj.value;
        list.appendChild(li);
        aj.value = "";
        aj.focus();
        
    } else{
        
        nj.textContent = 'Nothing entered in the paragraph';
        
    }
    // add content to the element
    
    
    // append element to the DOM
    
}

// make addRandomNumber listening for click on btn
btn.addEventListener("click", addItem);