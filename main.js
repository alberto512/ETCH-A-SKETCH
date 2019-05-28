var nombre1, nombre2, nombre;
var numero = 16;
var container_grid, container_squares;
var red, green, blue;
var color = false;

/*Create buttons*/
var container_buttons = document.createElement("div");
container_buttons.setAttribute("id","buttons");
document.body.appendChild(container_buttons);

var button_clear = document.createElement("button");
button_clear.setAttribute("id","button_clear");
button_clear.addEventListener("click", resetColor);
button_clear.innerText = "Limpiar";
container_buttons.appendChild(button_clear);

var button_changeColor = document.createElement("button");
button_changeColor.setAttribute("id","button_changeColor");
button_changeColor.addEventListener("click", changeButtonColor);
if(color){
  button_changeColor.innerText = "Random color";
}else{
  button_changeColor.innerText = "Black";
}
container_buttons.appendChild(button_changeColor);

var button_changeGrid = document.createElement("button");
button_changeGrid.setAttribute("id","button_changeGrid");
button_changeGrid.addEventListener("click", changeGrid);
button_changeGrid.innerText = "Change grid";
container_buttons.appendChild(button_changeGrid);

createGrid();

/*Change the color of the divs*/
function changeColor(){
  if(color){
    red = Math.random() * (256 - 0) + 0;
    green = Math.random() * (256 - 0) + 0;
    blue = Math.random() * (256 - 0) + 0;
    event.target.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  }else{
    event.target.style.backgroundColor = "black";
  }
}

/*Create the color variable when the user clicks the button*/
function changeButtonColor(){
  if(color){
    color = false;
    button_changeColor.innerText = "Black";
  }else{
    color = true;
    button_changeColor.innerText = "Random color";
  }
}

/*Reset the color of the grid*/
function resetColor(){
  var variable = document.querySelectorAll('.div');
  variable.forEach((i) => { i.style.backgroundColor = 'white' });
}

/*Replace the grid*/
function changeGrid(){
  var newGrid = prompt("Escribe el numero de cuadros");
  numero = newGrid;
  document.body.removeChild(container_grid);
  createGrid();
}

/*Create the grid*/
function createGrid(){
  /*Create the container*/
  container_grid = document.createElement("div");
  container_grid.setAttribute("id","grid");
  document.body.appendChild(container_grid);

  /*Create the grid*/
  container_squares = document.createElement("div");
  container_squares.setAttribute("id", "squares");
  container_squares.style.cssText = `grid-template-columns: repeat(${numero}, 1fr);`;
  container_grid.appendChild(container_squares);
  createSquares();
}

/*Create the squares*/
function createSquares(){
  for(var i=0;i<numero;i++){
    nombre1 = "Row " + i;
    for(var j=0;j<numero;j++){
      var div = document.createElement("div");
      nombre2 = " Column " + j;
      nombre = nombre1 + nombre2;
      div.setAttribute('title', nombre);
      div.setAttribute('class',"div");
      div.addEventListener("mouseover", changeColor);
      container_squares.appendChild(div);
    }
  }
}
