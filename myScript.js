const container = document.getElementsByClassName('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
for (r = 0; r < 16; r++) {
    let row = document.createElement('div');
    container.appendChild(row).className = 'gridRow'; 
}
for (i = 0; i < rows.length; i++) 
    for (j = 0; j < 16; j++){
        let newCell = document.createElement('div');
        rows[j].appendChild(newCell).className = 'cell';
    }


    