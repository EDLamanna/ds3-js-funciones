const azul = document.querySelector("#azul");
const rojo = document.querySelector("#rojo");
const verde = document.querySelector("#verde");
const amarillo = document.querySelector("#amarillo");

const pintar = (ref, color = "black") => {
  const div = document.querySelector(`#` + ref);
  div.style.backgroundColor = color;
};

azul.addEventListener("click", () => {
  pintar("azul", "black");
});

rojo.addEventListener("click", () => {
  pintar("rojo", "black");
});

verde.addEventListener("click", () => {
  pintar("verde", "black");
});

amarillo.addEventListener("click", () => {
  pintar("amarillo", "black");
});



const agregarElemento = (id) => {
  nuevoDiv = document.createElement("div");
  nuevoDiv.id = id;
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.width = "200px";
  document.body.appendChild(nuevoDiv);
};

let Colores = "";
const divKey = document.querySelector("#key");

document.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") {
    colores = "pink";
    divKey.style.backgroundColor = colores;
  }
  if (event.key === "s" || event.key === "S") {
    colores = "orange";
    divKey.style.backgroundColor = colores;
  }
  if (event.key === "d" || event.key === "D") {
    colores = "skyBlue";
    divKey.style.backgroundColor = colores;
  }
  if (event.key === "q" || event.key === "Q") {
    agregarElemento("morado");
    colores = "purple";
    morado.style.backgroundColor = colores;
  }
  if (event.key === "w" || event.key === "W") {
    agregarElemento("gris");
    colores = "grey";
    gris.style.backgroundColor = colores;
  }
  if (event.key === "e" || event.key === "E") {
    agregarElemento("cafe");
    colores = "rgb(139,69,19    )";
    cafe.style.backgroundColor = colores;
  }
});
