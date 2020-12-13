$(document).ready(function () {
 // Qui le icone che abbiamo definito nella milestone 1
  class Icon {
    constructor(name, prefix, type, family){
      this.name = name;
      this.prefix =  prefix;
      this.type = type;
      this.family = family;
    }
  }

  const icons = [
    new Icon ('cat', 'fas', 'fa-cat', 'animals'),
    new Icon ('crow', 'fas', 'fa-crow', 'animals'),
    new Icon ('dog', 'fas', 'fa-dog', 'animals'),
    new Icon ('dove', 'fas', 'fa-dove', 'animals'),
    new Icon ('dragon', 'fas', 'fa-dragon', 'animals'),
    new Icon ('horse', 'fas', 'fa-horse', 'animals'),
    new Icon ('hippo', 'fas', 'fa-hippo', 'animals'),
    new Icon ('fish', 'fas', 'fa-fish', 'animals'),
    new Icon ('carrot', 'fas', 'fa-carrot', 'vegetables'),
    new Icon ('apple-alt', 'fas', 'fa-apple-alt', 'vegetables'),
    new Icon ('lemon', 'fas', 'fa-lemon', 'vegetables'),
    new Icon ('pepper-hot', 'fas', 'fa-pepper-hot', 'vegetables'),
    new Icon ('user-astronaut', 'fas', 'fa-user-astronaut', 'user'),
    new Icon ('user-graduate', 'fas', 'fa-user-graduate', 'user'),
    new Icon ('user-ninja', 'fas', 'fa-user-ninja', 'user'),
    new Icon ('user-secret', 'fas', 'fa-user-secret', 'user'),
  ];
  
  const contenitore = document.getElementById('icons');



// definiamo dei colori per le icone (blue, orange, purple)
  const blue = '#0000FF';
  const orange = '#FFA500';
  const purple = '#800080';

  //aggiungiamo dei colori usando una funzione

  const newIcons = icons.map (element => {
        if (element.family === "animals"){
            var color = blue;
        } else if (element.family === "vegetables"){
            var color = orange;
        } else {
            var color = purple;
        }
        let newObj = {...element, color: color};

        return newObj
  });
  console.log(newIcons);

  
  //inseriamo le icone colorate nel container
  printIcons (newIcons, contenitore);

  function printIcons(array, selector) {
    array.forEach((element) => {
      const { name, prefix, type, color } = element;
      selector.innerHTML += `
        <div>
          <i class="${prefix} ${type}" style="color:${color}"></i>
          <div class="title">${name.toUpperCase()}</div>
        </div>`;
    });
  }

});
/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.