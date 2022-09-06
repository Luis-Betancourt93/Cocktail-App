
// The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM.

document.querySelector('button').addEventListener('click', getDrink);
document.getElementById('perv').addEventListener('click', pervDrink);
document.getElementById('next').addEventListener('click', nextDrink);


let i = 0;


// Gets the API on What ever the user types in
function getDrink() {
  let drink = document.querySelector('input').value.toLocaleLowerCase();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('drinkName').innerHTML = data.drinks[i].strDrink;
    document.getElementById('cocktail').src = data.drinks[i].strDrinkThumb;
    document.getElementById('step').innerHTML = data.drinks[i].strInstructions;
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}




// Added One the the index to go to the next item on the arary
function pervDrink() {
  let drink = document.querySelector('input').value.toLowerCase();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json())
  .then(data => {
    let drinksLength = data.drinks.length;
    if (i <= -1 ) {
      getDrink();
      i = drinksLength;
      i--;
    } 
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
  getDrink();
  i --;
  console.log(i);
}

// Decreases the number of the array so it show the previous item
function nextDrink() {
  let drink = document.querySelector('input').value.toLocaleLowerCase();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json())
  .then(data => {
    let drinksLength = data.drinks.length;
    if (i < drinksLength -1 ) {
      getDrink();
      i++;
      console.log(i);
      console.log(data);
    } else{
      getDrink();
      i = 0;
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}





 




