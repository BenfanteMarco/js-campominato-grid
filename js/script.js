// Funziona che crea la singola cell
function createCell(num){
    const element = document.createElement('div');
    element.classList.add('square');

    element.innerText = num;

    return element;
}

// Creo funzione che mi genera la grid
function createNewGrid(){
    const newGrid = document.getElementById('grid');
    newGrid.innerHTML = '';
}

const generaGriglia = document.getElementById('play');
generaGriglia.addEventListener('click', createNewGrid);

// Recupero l'elemento che contienela griglia
const grid = document.getElementById('grid');

// Eseguo un for
for(let i=0; i<100; i++){
    let square = createCell(i+1);

    square.addEventListener('click', function(){
        this.classList.toggle('clicked');
    })

    grid.appendChild(square);
}

