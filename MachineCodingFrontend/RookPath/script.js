const checkBox = document.querySelectorAll('.checkbox');
const checkBoxContainer = document.querySelector('.board');

if(checkBoxContainer) {
    checkBoxContainer.addEventListener('click',(e)=>{
        const element = e.target;
        console.log(element);
        if(!element)return ;
        const elementId =  parseInt(element.getAttribute("id"));
        boardRefresh();
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
         [-1, 0],
        [0 , -1],
        [0 , 1],
        [1 , 0]
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

function boardRefresh() {
  for (let i = 0; i < checkBox.length; i++) {
    const box = checkBox[i];
    const boxId = Number(box.getAttribute("id"));
    const rowId = Number(box.parentNode.getAttribute("id")); 
    if (isNaN(boxId) || isNaN(rowId)) continue;
    if (rowId % 2 == 0) {
      if (boxId % 2 != 0) {
        checkBox[i].style.backgroundColor = "white";
      } else {
        checkBox[i].style.backgroundColor = "black";
      }
    } else {
      if (boxId % 2 == 0) {
        checkBox[i].style.backgroundColor = "white";
      } else {
        checkBox[i].style.backgroundColor = "black";
      }
    }
  }
}