const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

 function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
    
 }

 function destructivelyRemoveLastCat() {
    cats.pop(-1);
    
 }
  function destructivelyRemoveFirstCat() {
    cats.shift(0);
    
  }

  function appendCat(Broom) {
    return [...cats, Broom];
    
  }

  function prependCat(Arnold) {
    return [Arnold, ...cats];
}

function removeLastCat() {
   return cats.slice(0, -1);
    
}

function removeFirstCat() {
    return cats.slice(1);
    
}