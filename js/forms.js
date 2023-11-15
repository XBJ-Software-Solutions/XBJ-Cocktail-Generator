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


// function handleSelection(event) {
//   let userSelection = event.target.value;

//   // Check if the ingredient is already in the selectedIngredients array
//   let existingIngredientIndex = selectedIngredients.findIndex(
//     (ingredient) => ingredient.name === userSelection
//   );

//   // If the ingredient is already selected, remove it; otherwise, add it
//   if (existingIngredientIndex !== -1) {
//     selectedIngredients.splice(existingIngredientIndex, 1);
//   } else {
//     for (let i = 0; i < allIngredients.length; i++) {
//       if (userSelection === allIngredients[i].name) {
//         let userIngredient = allIngredients[i];
//         selectedIngredients.push(userIngredient);
//       }
//     }
//   }

//   removeRecipe();
// }



function handleSelection(event) {
  let userSelection = event.target.value;
  //new
  // selectedIngredients = [];
  for (let i = 0; i < allIngredients.length; i++) {
    if (userSelection === allIngredients[i].name) {
      let userIngredient = allIngredients[i];
      selectedIngredients.push(userIngredient);
    }
  }
  removeRecipe();
}

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

  for (let i = 0; i < imageArray.length; i++) {
    if (selectedIngredients[0].name === imageArray[i].alt) {
      drinkImage.src = imageArray[i].src;
      drinkImage.alt = imageArray[i].alt;
    }
  }
}

baseSelector.addEventListener("change", handleSelection);
citrusSelector.addEventListener("change", handleSelection);
bitterSelector.addEventListener("change", handleSelection);
sweetSelector.addEventListener("change", handleSelection);

// function renderRecipe() {
//   let recipeDisplay = document.getElementById("recipe");
//   let recipeText = "Here you go! Mix ";
  
//   for (let i = 0; i < selectedIngredients.length; i++) {
//     recipeText += `${selectedIngredients[i].volume} ${selectedIngredients[i].unitOfMeasure} of ${selectedIngredients[i].name}`;

//     if (i < selectedIngredients.length - 1) {
//       recipeText += ", ";
//     } else {
//       recipeText += ". Stir over ice and pour into a chilled cocktail glass. Enjoy!";
//     }
//   }

//   recipeDisplay.textContent = recipeText;
// }




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
  recipeEnjoy.textContent = "Stir over ice and pour into a chilled cocktail glass. Enjoy! ";
  list.appendChild(recipeEnjoy);

  document.getElementById("cocktail").style.display = "block";

  // recipeDisplay.textContent = `Here you go! Mix ${selectedIngredients[0].volume} ${selectedIngredients[0].unitOfMeasure} of ${selectedIngredients[0].name}, ${selectedIngredients[1].volume} ${selectedIngredients[1].unitOfMeasure} of ${selectedIngredients[1].name}, ${selectedIngredients[2].volume} ${selectedIngredients[2].unitOfMeasure} of ${selectedIngredients[2].name}, and ${selectedIngredients[3].volume} ${selectedIngredients[3].unitOfMeasure} of ${selectedIngredients[3].name}. Stir over ice and pour into a chilled cocktail glass. Enjoy!`;
}

function removeRecipe() {
  let recipeDisplay = document.getElementById("recipe");
  if (recipeDisplay.textContent.trim() !== "") {
    recipeDisplay.textContent = "";
  }
  if (drinkImage.src.trim() !== "") {
    drinkImage.src = "";
    drinkImage.alt = "";
  }
  if (recipeHeading.textContent.trim() !== "") {
    recipeHeading.textContent = "";
  }
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
  }
});
