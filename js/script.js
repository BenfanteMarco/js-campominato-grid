// Funziona che crea la singola cell
function createCell(){
    const element = document.createElement('div');
    element.classList.add('square');

    element.addEventListener('click', function(){
        this.classList.toggle('clicked');
    })
    return element;
}

// Recupero l'elemento che contienela griglia
const grid = document.getElementById('grid');

// Eseguo un for
for(let i=0; i<100; i++){
    let square = createCell();
    grid.appendChild(square);
}