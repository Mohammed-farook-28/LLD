const doubleHolder = document.querySelector("#doubleHolder");

doubleHolder.addEventListener("click", (e) => {
    if (e.target.classList.contains('double')) {
        e.target.remove();
        for (let i = 0; i < 2; i++) {
            const newButton = document.createElement("button");
            newButton.className = "double";
            newButton.textContent = "double";
            doubleHolder.appendChild(newButton);
        }
    }
});
