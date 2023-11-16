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
    ingredientOption.classList.add("tooltip");
    
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

function handleSelection(event) {
  let userSelection = event.target.value;
  for (let i = 0; i < allIngredients.length; i++) {
    if (userSelection === allIngredients[i].name) {
      let userIngredient = allIngredients[i];
      selectedIngredients.push(userIngredient);
    };
  };
  console.log(selectedIngredients);
};

// commented out lines is an attempt to limit base spirit selections to one
// function handleBaseSelection(event) {
//   let userSelection = event.target.value;
//   let selectedBaseTwice = selectedIngredients.find(ingredient => ingredient.type === 'base');

//   // Check if a base has already been selected
//   if (selectedBaseTwice) {
//     alert('You may only select one base spirit. Please reselect the base spirit you would like to use.');
//     event.target.value = '';
//     // dropDownBase.reset();
//   } else {
//   for (let i = 0; i < allIngredients.length; i++) {
//     if (userSelection === allIngredients[i].name) {
//       let userIngredient = allIngredients[i];
//       if (selectedIngredients.some(ingredient => ingredient.type !== 'base'))
//       selectedIngredients.push(userIngredient);
//     }
//   }
//   console.log(selectedIngredients);
//   removeRecipe();
//   }
// }

// Render Image function
let imageArray = [];
function renderImage() {
  let baseIndex = selectedIngredients.find(ingredient => ingredient.type === 'base');
  console.log(baseIndex);
  let ImageMap = function (src, alt) {
    this.src = src;
    this.alt = alt;
    imageArray.push(this);
  };

  let tequilaImage = new ImageMap("img/tequila.jpg", "Tequila");
  let rumImage = new ImageMap("img/rum.jpg", "Rum");
  let whiskeyImage = new ImageMap("img/whiskey.jpg", "Whiskey");
  let ginImage = new ImageMap("img/gin.jpg", "Gin");
  
    if (selectedIngredients.some(ingredient => ingredient.type === 'base')) {
      console.log(selectedIngredients);
      drinkImage.src  = (`img/${baseIndex.name.toLowerCase()}.jpg`);
      console.log(drinkImage.src);
      drinkImage.alt  = `${baseIndex.name}`;
    }
}
  

baseSelector.addEventListener("change", handleSelection);
citrusSelector.addEventListener("change", handleSelection);
bitterSelector.addEventListener("change", handleSelection);
sweetSelector.addEventListener("change", handleSelection);

let totalVol = 4.0
let ratioVol = 1.0
function volumeCalc() {
  let selectedVol = 0
  for (let i=0; i < selectedIngredients.length; i++) {
    selectedVol += selectedIngredients[i].volume;
  };
  console.log (selectedVol);
  ratioVol = totalVol / selectedVol;
  console.log (ratioVol);
}

function renderRecipe() {
  let list = document.getElementById("recipeList");
  let recipeGreet = document.createElement("p");
  recipeGreet.textContent = "Here you go! Mix: ";
  list.appendChild(recipeGreet);
  // let typeRatio = 1;
  // if 
  
  for (let i=0; i <selectedIngredients.length; i++ ){
    let li = document.createElement("li");
    li.textContent= `${selectedIngredients[i].volume * ratioVol} ${selectedIngredients[i].unitOfMeasure} of ${selectedIngredients[i].name}`;
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
  volumeCalc();
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
