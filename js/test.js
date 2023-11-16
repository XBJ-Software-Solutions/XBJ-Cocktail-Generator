"use strict";

let ingredientsForm = document.getElementById("ingredientsForm");
let drinkImage = document.getElementById("recipeImage");

let selectedIngredients = [];

let base = document.getElementById("dropDownBase");
let citrus = document.getElementById("dropDownCitrus");
let bitter = document.getElementById("dropDownBitter");
let sweet = document.getElementById("dropDownSweet");

function populateDropdown(dropdown, allIngredients) {
  dropdown.innerHTML = "";
  let blankOption = document.createElement("option");
  blankOption.textContent = "";
  dropdown.appendChild(blankOption);

  for (let i = 0; i < allIngredients.length; i++) {
    let ingredientName = allIngredients[i].name;
    let ingredientOption = document.createElement("option");
    ingredientOption.textContent = ingredientName;
    ingredientOption.title = allIngredients[i].description || "";
    
    dropdown.appendChild(ingredientOption);
  }
}
populateDropdown(base, baseSpirits);
populateDropdown(citrus, citrusIngredients);
populateDropdown(bitter, bitterIngredients);
populateDropdown(sweet, sweetIngredients);

let baseSelector = document.getElementById("dropDownBase");
let citrusSelector = document.getElementById("dropDownCitrus");
let bitterSelector = document.getElementById("dropDownBitter");
let sweetSelector = document.getElementById("dropDownSweet");

// commented out lines are starting to attempt to limit base spirit selections to one
function handleSelection(event) {
  let userSelection = event.target.value;
  // let selectedBase = selectedIngredients.find(ingredient => ingredient.type === 'base');

  // Check if a base has already been selected
  // if (selectedBase) {
  //   alert('You may only select one base spirit. Your selection has been changed.');
  //   event.target.value = '';
  // } else {
  for (let i = 0; i < allIngredients.length; i++) {
    if (userSelection === allIngredients[i].name) {
      let userIngredient = allIngredients[i];
      // if (selectedIngredients.some(ingredient => ingredient.type !== 'base'))
      selectedIngredients.push(userIngredient);
    }
  }
  console.log(selectedIngredients);
  removeRecipe();
  }
// }

// Render Image function
let imageArray = [];
function renderImage() {
  let ImageMap = function (src, alt) {
    this.src = src;
    this.alt = alt;
    imageArray.push(this);
  };

  let tequilaImage = new ImageMap("img/tequila.jpg", "Tequila");
  let rumImage = new ImageMap("img/rum.jpg", "Rum");
  let whiskeyImage = new ImageMap("img/whiskey.jpg", "Whiskey");
  let ginImage = new ImageMap("img/gin.jpg", "Gin");

  
  // for (let i = 0; i < imageArray.length; i++) {
    if (selectedIngredients.some(ingredient => ingredient.type === 'base')) {
      let baseIndex = selectedIngredients.findIndex(ingredient => ingredient.type === 'base');
      drinkImage.src = imageArray[baseIndex].src;
      drinkImage.alt = imageArray[baseIndex].alt;
    }
    // if (selectedIngredients[0].name === imageArray[i].alt) {
}
  

baseSelector.addEventListener("change", handleSelection);
citrusSelector.addEventListener("change", handleSelection);
bitterSelector.addEventListener("change", handleSelection);
sweetSelector.addEventListener("change", handleSelection);

let totalVol = 4.0
function volumeCalc() {
  for (let i=0; i < selectedIngredients.length; i++) {
    
  }
}
function renderRecipe() {
  // let recipeDisplay = document.getElementById("recipe");
  let list = document.getElementById("recipeList");
  let recipeGreet = document.createElement("p");
  recipeGreet.textContent = "Here you go! Mix: ";
  list.appendChild(recipeGreet);

  for (let i=0; i <selectedIngredients.length; i++ ){
    let li = document.createElement("li");
    li.textContent= `${selectedIngredients[i].volume} ${selectedIngredients[i].unitOfMeasure} of ${selectedIngredients[i].name}`;
    list.appendChild(li);
  }
  let recipeEnjoy = document.createElement("p");

  if (selectedIngredients.some(ingredient => ingredient.type === 'citrus')) {
    recipeEnjoy.textContent = 'Shake over ice and pour through hawthorne strainer into a chilled cocktail glass. Enjoy!';
    list.appendChild(recipeEnjoy);
  } else {
    recipeEnjoy.textContent = 'Stir over ice and pour into a chilled cocktail glass. Enjoy!';
    list.appendChild(recipeEnjoy);
  }
  document.getElementById("cocktail").style.display = "block";
}  

function removeRecipe() {
  let recipeList = document.getElementById("recipeList");
  let recipeImage = document.getElementById("recipeImage");
  let recipeHeading = document.getElementById("recipeHeading");
  let cocktailSection = document.getElementById("cocktail");

  recipeList.innerHTML = "";
  recipeImage.src = "";
  recipeImage.alt = "";
  recipeHeading.textContent = "";

  cocktailSection.style.display = "none";
}

ingredientsForm.addEventListener("click", function () {
  removeRecipe();
});

ingredientsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  ingredientsForm.reset();
  dropDownBase.focus();

  renderRecipe();
  nameGenerator();
  renderImage();
  if (selectedIngredients.length !== 0) {
    selectedIngredients = [];
  };  if (imageArray.length !== 0) {
    imageArray = [];
  }
});







// function removeRecipe() {
//   let cocktail = document.getElementById("cocktail");
//   while (list.firstChild) {
//     list.removeChild(list.firstChild);
//   }
//   if (drinkImage.src.trim() !== "") {
//     drinkImage.src = "";
//     drinkImage.alt = "";
//   }
//   if (recipeHeading.textContent.trim() !== "") {
//     recipeHeading.textContent = "";
//   }
 
// }

ingredientsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  ingredientsForm.reset();
  dropDownBase.focus();

  renderRecipe();
  nameGenerator();
  renderImage();
  if (selectedIngredients.length !== 0) {
    selectedIngredients = [];
  };
  if (imageArray.length !== 0) {
    imageArray = [];
  }
});
