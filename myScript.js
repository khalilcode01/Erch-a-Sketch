let container = document.querySelector('.container');
let interface = document.querySelector('.interface');
let button = document.createElement('button');
button.innerHTML = 'clear';
interface.appendChild(button);
makeGrid(8);
let div = document.getElementsByClassName('coll');
    for(let i = 0; i < div.length; i++) {
    div[i].addEventListener("mouseover", function() {
        div[i].setAttribute('style', 'background-color: red;')
    })
    }
function listen(coll){
    makeGrid(coll);
    let div = document.getElementsByClassName('coll');
    for(let i = 0; i < div.length; i++) {
    div[i].addEventListener("mouseover", function() {
        div[i].setAttribute('style', 'background-color: red;')
    })
    }
}
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
button.addEventListener('click', function removeGrid() {
    let remover = document.querySelectorAll('.row');
    for(i = 0; i < remover.length; i++){
        container.removeChild(remover[i]);
    }
    listen(8);
})