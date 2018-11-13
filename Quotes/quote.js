function init () {
    const API_LINK = "https://api.adviceslip.com/advice";
    const quoteContainer = document.querySelector(".quoteContainer");
    const promise = fetch(API_LINK);
    
    promise 
    .then (function (response) {
        return response.json();
    })
    .then(function(data) {
        const p = document.createElement("p");
        
        p.classList.add("quote");
        p.textContent = data.slip.advice;
        quoteContainer.appendChild(p);
    })
}

init();