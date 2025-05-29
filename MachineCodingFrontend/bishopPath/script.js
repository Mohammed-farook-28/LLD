const checkBox = document.querySelectorAll('.checkBox');
const checkBoxContainer = document.querySelector('.board');

if(checkBoxContainer) {
    checkBoxContainer.addEventListener('click',(e)=>{
        const element = e.target;
        console.log(element);
        const elementId =  parseInt(element.getAttribute("id"));
        makeRed(elementId);
    });
}

function makeRed(elementId) {
    const toMakecolor = new Set();
    toMakecolor.add(elementId);

    function getRowCol(id) {
        const row = Math.floor((id - 1) / 8);
        const col = (id - 1) % 8;
        return [row, col];
    }

    function getId(row, col) {
        return row * 8 + col + 1;
    }

    const [startRow, startCol] = getRowCol(elementId);

    const dir = [
        [-1, -1], 
        [-1, 1],
        [1, -1],
        [1, 1] 
    ];

    for (const [dr, dc] of dir) {
        let r = startRow + dr;
        let c = startCol + dc;
        while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            toMakecolor.add(getId(r, c));
            r += dr;
            c += dc;
        }
    }

    for (let val of toMakecolor) {
        const box = document.getElementById(val);
        if (box) {
            box.style.backgroundColor = 'red';
        }
    }
}