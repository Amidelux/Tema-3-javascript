//TEMA 3 JAVASCRIPT - OBJECTS

//EX.1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function adaugaReteta (titlu, portii, ingrediente) {
    let result = {
        titlu: titlu,
        portii: portii,
        ingrediente: ingrediente
    }
    return result;
}

console.log(adaugaReteta("Pizza", 3, ["sunca", "cas", "ketchup"]))

console.log("\n\n")

//EX.2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

let object = { a: 1, b: 2 }

function removeProperty(object, property) {
  const result = {...object};
  delete result [property];
  return result;
}

console.log(removeProperty(object, 'b'))
//console.log(object)

console.log("\n\n")

//EX.3. Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), 
//      autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).

let books = [
    {
      titlu: "Conversations with God",
      autor: "Neale Donald Walsch",
      esteCitita: true
    },
    {
      titlu: "Hobbitul",
      autor: "J.R.R. Tolkien",
      esteCitita: false
    }]
  
  console.log(books)

  if (books.esteCitita === false) {
    console.log("Ai citit deja 'Hobbitul' de J.R.R. Tolkien")
  } else {
    console.log("Trebuie să citești 'Hobbitul' de J.R.R. Tolkien")
  }
 /////////
  function afisareDetaliiCarte(carte) {
    const carteDetaliu = `${carte.titlu} de ${carte.autor}`;
  
    console.log(carteDetaliu)

    if (carte.esteCitita) {
      console.log(`Ai citit deja ${carteDetaliu}`)
    } else {
      console.log(`Trebuie sa citesti ${carteDetaliu}`)
    }
  }

  function listaDeCarti(input) {
    input.forEach(afisareDetaliiCarte);
  }

   const listaCarti = [
    { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
    { titlu: "Carte 2", autor: "Autor 2", esteCitita: false },
]

  listaDeCarti(listaCarti);
  