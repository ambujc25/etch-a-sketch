const container = document.getElementById("container");

function makeRows(rows,cols){
    container.style.setProperty('--rows',rows);
    container.style.setProperty('--columns',cols);    

    for(i=0; i<rows*cols; i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };

};

makeRows(16,16);

function color_grid(){
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((c) => {
        c.addEventListener('mouseover', (e)=> {
            c.style.cssText = "background-color:" + random_color();
        });
    });
}

color_grid();

const button = document.querySelector('button');

button.addEventListener('click',(e) => {
    const cells = document.querySelectorAll(".grid-item");
    
    cells.forEach((c) => {
        c.style.cssText = "background-color:white";
    });

    let row = prompt("Enter number of rows: ");
    let column = prompt("Enter number of columns: ");

    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
    
    makeRows(row,column);
    color_grid();
});

function random_color(){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return hue;
}