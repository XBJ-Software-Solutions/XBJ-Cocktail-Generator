"use strict";

let ingredientsForm = document.getElementById("ingredientsForm");
let drinkImage = document.getElementById("recipeImage");
let selectedIngredients = [];
let baseSelector = document.getElementById("dropDownBase");
let citrusSelector = document.getElementById("dropDownCitrus");
let bitterSelector = document.getElementById("dropDownBitter");
let sweetSelector = document.getElementById("dropDownSweet");

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
};

populateDropdown(baseSelector, baseSpirits);
populateDropdown(citrusSelector, citrusIngredients);
populateDropdown(bitterSelector, bitterIngredients);
populateDropdown(sweetSelector, sweetIngredients);

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
baseSelector.addEventListener("change", handleSelection);
citrusSelector.addEventListener("change", handleSelection);
bitterSelector.addEventListener("change", handleSelection);
sweetSelector.addEventListener("change", handleSelection);

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
