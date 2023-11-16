"use strict";

let ingredientsForm = document.getElementById("ingredientsForm");
let drinkImage = document.getElementById("recipeImage");
let selectedIngredients = [];
let baseSelector = document.getElementById("dropDownBase");
let citrusSelector = document.getElementById("dropDownCitrus");
let bitterSelector = document.getElementById("dropDownBitter");
let sweetSelector = document.getElementById("dropDownSweet");
let selectedBaseIngredient = [];

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

function handleBaseSelection(event) {
  console.log(selectedBaseIngredient);
  let userSelection = event.target.value;
  if (selectedBaseIngredient.length == 0)
    for (let i = 0; i < baseSpirits.length; i++) {
      if (userSelection === baseSpirits[i].name) {
        let userIngredient = baseSpirits[i];
        selectedBaseIngredient.push(userIngredient);
        selectedIngredients.push(userIngredient);
      };
    } else {
    alert('Apologies, but you may only select one base spirit. This cocktail will use the first base Spirit you chose.');
    selectedIngredients.splice();
    // dropDownBase.reset();
    event.target.value = selectedBaseIngredient[0].name;
  };
  console.log(selectedIngredients);
};

baseSelector.addEventListener("change", handleBaseSelection);
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
