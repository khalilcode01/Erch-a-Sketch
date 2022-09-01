let container = document.querySelector('.container');
let interface = document.querySelector('.interface');
let button = document.createElement('button');
interface.appendChild(button);
button.addEventListener('click',() =>{
    let value = prompt('Add value', '16');
    removeGrid();
    makeGrid(value);
    
    let div = document.getElementsByClassName('coll');
    for(let i = 0; i < div.length; i++) {
    div[i].addEventListener("mouseover", function() {
        div[i].setAttribute('style', 'background-color: black;')
    })
    }

})
function makeGrid(coll) {
    for(i = 0; i < coll; i++){
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for(u = 0; u < coll; u++){
            let coll = document.createElement('div');
            coll.setAttribute('class', 'coll');
            row.appendChild(coll);
        }
    }
}
function removeGrid() {
    let remover = document.querySelectorAll('.row');
    for(i = 0; i < remover.length; i++){
        container.removeChild(remover[i]);
    }
}
