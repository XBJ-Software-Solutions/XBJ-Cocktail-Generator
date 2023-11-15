"use strict";

let ingredientsForm = document.getElementById("ingredientsForm");
let drinkImage = document.getElementById("recipeImage");

let selectedIngredients = [];

let base = document.getElementById("dropDownBase");
let citrus = document.getElementById("dropDownCitrus");
let bitter = document.getElementById("dropDownBitter");
let sweet = document.getElementById("dropDownSweet");

function populateDropdown(dropdown, ingredientArray) {
  let blankOption = document.createElement("option");
  blankOption.textContent = "";
  dropdown.appendChild(blankOption);

  for (let i = 0; i < ingredientArray.length; i++) {
    let ingredientName = ingredientArray[i].name;
    let ingredientOption = document.createElement("option");
    ingredientOption.textContent = ingredientName;
    ingredientOption.title = ingredientArray[i].description || '';
    dropdown.appendChild(ingredientOption);
    console.log(ingredientOption.title)
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
  console.log(userSelection);
  for (let i = 0; i < allIngredients.length; i++) {
    if (userSelection === allIngredients[i].name) {
      let userIngredient = allIngredients[i]
      selectedIngredients.push(userIngredient);
    };
  };
  console.log(selectedIngredients);
  removeRecipe();
};

// Render Image function
let imageArray = [];
function renderImage() {
  let ImageMap = function (src, alt) {
    this.src = src;
    this.alt = alt;

    imageArray.push(this);
  }

  let tequilaImage = new ImageMap("img/tequila.jpg", "Tequila");
  let rumImage = new ImageMap("img/rum.jpg", "Rum");
  let whiskeyImage = new ImageMap("img/whiskey.jpg", "Whiskey");
  let ginImage = new ImageMap("img/gin.jpg", "Gin");
  console.log(imageArray);

  for (let i = 0; i < imageArray.length; i++) {
    if (selectedIngredients[0].name === imageArray[i].alt) {
      drinkImage.src = imageArray[i].src;
      drinkImage.alt = imageArray[i].alt;
    }
    console.log(drinkImage.src);
  }
}

baseSelector.addEventListener("change", handleSelection);
citrusSelector.addEventListener("change", handleSelection);
bitterSelector.addEventListener("change", handleSelection);
sweetSelector.addEventListener("change", handleSelection);

function renderRecipe() {
  let recipeDisplay = document.getElementById("recipe");
  recipeDisplay.textContent = `Here you go! Mix ${selectedIngredients[0].volume} ${selectedIngredients[0].unitOfMeasure} of ${selectedIngredients[0].name}, ${selectedIngredients[1].volume} ${selectedIngredients[1].unitOfMeasure} of ${selectedIngredients[1].name}, ${selectedIngredients[2].volume} ${selectedIngredients[2].unitOfMeasure} of ${selectedIngredients[2].name}, and ${selectedIngredients[3].volume} ${selectedIngredients[3].unitOfMeasure} of ${selectedIngredients[3].name}. Stir over ice and pour into a chilled cocktail glass. Enjoy!`;
}

function removeRecipe() {
  let recipeDisplay = document.getElementById("recipe");
  if (recipeDisplay.textContent.trim() !== "") {
    recipeDisplay.textContent = "";
  };
  if (drinkImage.src.trim() !== "") {
    drinkImage.src = "";
    drinkImage.alt = "";
  };
  if (recipeHeading.textContent.trim() !== "") {
    recipeHeading.textContent = "";
  };
}

ingredientsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  ingredientsForm.reset();
  dropDownBase.focus();

  renderRecipe();
  nameGenerator();
  renderImage();
  selectedIngredients = [];
  if (imageArray.length !== 0) {
    imageArray = [];
    console.log(imageArray);
  }
  console.log(selectedIngredients);
}
);
