const row_container = document.querySelector(".container");
console.log(row_container);
row_container.addEventListener("click", (e) => {
    console.log("I am getting Clicked");
    let element = e.target;
    if (!element) return;
    const elementId = element.id;
    console.log(elementId);
    const val = parseInt(document.getElementById("increment").value) || 0;
    if (elementId === 'add') {
        const number = parseInt(document.getElementById("number").textContent) + val;
        document.getElementById("number").textContent = number;
    } else if (elementId === 'subtract') {
        const number = parseInt(document.getElementById("number").textContent) - val;
        document.getElementById("number").textContent = number;
    }
    else if (elementId === 'reset') {
        document.getElementById("number").textContent = 0;
    }

});
