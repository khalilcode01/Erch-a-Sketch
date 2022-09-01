let container = document.querySelector('.container');
function makeGrid(coll, row){
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
makeGrid(4,4);
let div = document.getElementsByClassName('coll');
for(let i = 0; i < div.length; i++) {
  div[i].addEventListener("mouseover", function() {
    div[i].setAttribute('style', 'background-color: black;')
  })
}
