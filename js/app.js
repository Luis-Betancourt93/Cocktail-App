
// The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM.

document.querySelector('button').addEventListener('click', getDrink);
document.getElementById('perv').addEventListener('click', pervDrink);
document.getElementById('next').addEventListener('click', nextDrink);


let i = 0;

function pervDrink() {
  getDrink();
  i --;
  console.log(i);
}
    
function nextDrink() {
  getDrink();
  i ++;
  console.log(i);    
}


function getDrink() {
  let drink = document.querySelector('input').value
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('drinkName').innerHTML = data.drinks[i].strDrink;
    document.getElementById('cocktail').src = data.drinks[i].strDrinkThumb;
    document.getElementById('step').innerHTML = data.drinks[i].strInstructions;
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("Please enter a valid cocktail");
  })
}
 




