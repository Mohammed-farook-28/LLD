

const inputBox = document.querySelector(".search");

const suggestionBox = document.querySelector(".suggestion");
async function firstCall(e){
    const val = e.target.value;
     suggestionBox.innerHTML = "";
    if(val.length > 0){
       
        const countries = await getSuggestion(val);
        if(countries.length > 0){
            getPopulated(countries);
        }
    }
}
let timerId = null ;
function debounc(fn, timer) {
    return function(e) {
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(e);
            timerId = null;
        }, timer);
    }
}

inputBox.addEventListener("input", debounc(firstCall , 300));
let curFetch = null;
async function getSuggestion(value){
    if(curFetch != null){
        curFetch.abort();
    }
    
    const abtController =  new AbortController();
    curFetch = abtController;
    

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${value}` , {
            signal:abtController.signal
        });

        curFetch = null;
        const countries = await response.json();
         
        return countries;


    } catch (error) {
        console.error("Countries not Found");
        return [];
    }

}
function getPopulated(countries) {  
    suggestionBox.innerHTML = "";
    
    const frag = document.createDocumentFragment();
    for (let i = 0; i < countries.length; i++) {
        const name = countries[i].name.common;
        const li = document.createElement("li");
        li.textContent = name;
        frag.appendChild(li);
    }
    suggestionBox.appendChild(frag);
}