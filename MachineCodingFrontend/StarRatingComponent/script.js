const star_container = document.querySelector(".star_container");
const star_elements = document.querySelectorAll(".star");
const star_count = document.querySelector('#count');
let selectedRating = 0;



if (star_container) {
    star_container.addEventListener('mouseover', (e) => {
        const element = e.target;
        const rating = parseInt(element.getAttribute("rating"));
        highlightStars(rating);
    });

    star_container.addEventListener('mouseout', () => {
        highlightStars(selectedRating);
    });

    star_container.addEventListener('click', (e) => {
        const element = e.target;   
        selectedRating = parseInt(element.getAttribute("rating"));
        highlightStars(selectedRating);
        star_count.textContent = selectedRating;
    });
}
function highlightStars(rating) {
    for (let idx = 0; idx < star_elements.length; idx++) {
        if (idx < rating) {
            star_elements[idx].classList.add('red');
        } else {
            star_elements[idx].classList.remove('red');
        }
    }
}