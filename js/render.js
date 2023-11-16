"use strict";

let imageArray = [];
let totalVol = 4.0;
// let recipeVolRatio = 1.0;
let baseRatio = 1.0;
let citrusRatio = 1.0;
let bitterRatio = 1.0;
let sweetRatio = 1.0;

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
    };
};


// function ratioVolCalc() {
//   let selectedVol = 0
//   for (let i=0; i < selectedIngredients.length; i++) {
//     selectedVol += selectedIngredients[i].volume;
//   };
//   recipeVolRatio = totalVol / selectedVol;
// };

function typeRatioCalc() {
    // ratioVolCalc();
    let selectedTypes = {};
    for (let i = 0; i < selectedIngredients.length; i++) {
      let type = selectedIngredients[i].type;
      selectedTypes[type] = (selectedTypes[type] || 0) + 1;
    }
    baseRatio = ((1 / selectedIngredients.length) / selectedTypes.base) * totalVol;
    console.log(baseRatio);
    citrusRatio = ((1 / selectedIngredients.length) / selectedTypes.citrus) * totalVol;
    bitterRatio = ((1 / selectedIngredients.length) / selectedTypes.bitter) * totalVol;
    sweetRatio = ((1 / selectedIngredients.length) / selectedTypes.sweet) * totalVol;
};
  

function roundToNearest(value, nearest) {
    return Math.round(value / nearest) * nearest;
}

function renderRecipe() {
    let list = document.getElementById("recipeList");
    let recipeGreet = document.createElement("p");
    recipeGreet.textContent = "Here you go! Mix: ";
    list.appendChild(recipeGreet);
    // ratioVolCalc();
    typeRatioCalc();
  
    for (let i=0; i <selectedIngredients.length; i++ ){
        let li = document.createElement("li");
        if (selectedIngredients[i].type === 'base') {
            let roundedVolume = roundToNearest(selectedIngredients[i].volume * baseRatio, 0.25);
            li.textContent= `${roundedVolume} ${selectedIngredients[i].unitOfMeasure} of ${selectedIngredients[i].name}`;
            list.appendChild(li);
        };
        if (selectedIngredients[i].type === 'citrus') {
            let roundedVolume = roundToNearest(selectedIngredients[i].volume * citrusRatio, 0.25);
            li.textContent= `${roundedVolume} ${selectedIngredients[i].unitOfMeasure} of ${selectedIngredients[i].name}`;
            list.appendChild(li);
        };
        if (selectedIngredients[i].type === 'bitter' && selectedIngredients[i].name != 'Agnostura Bitters') {
            let roundedVolume = roundToNearest(selectedIngredients[i].volume * bitterRatio, 0.25);
            li.textContent= `${roundedVolume} ${selectedIngredients[i].unitOfMeasure} of ${selectedIngredients[i].name}`;
            list.appendChild(li);
        };
        if (selectedIngredients[i].name === 'Agnostura Bitters') {
            let roundedVolume = Math.round(2 * bitterRatio);
            li.textContent= `${roundedVolume} ${selectedIngredients[i].unitOfMeasure} of ${selectedIngredients[i].name}`;            
            list.appendChild(li);
        };
        if (selectedIngredients[i].type === 'sweet') {
            let roundedVolume = roundToNearest(selectedIngredients[i].volume * sweetRatio, 0.25);
            li.textContent= `${roundedVolume} ${selectedIngredients[i].unitOfMeasure} of ${selectedIngredients[i].name}`;
            list.appendChild(li);
        };
    };
    let recipeEnjoy = document.createElement("p");  
        if (selectedIngredients.some(ingredient => ingredient.type === 'citrus')) {
        recipeEnjoy.textContent = 'Shake over ice and pour through hawthorne strainer into a chilled cocktail glass. Enjoy!';
        list.appendChild(recipeEnjoy);
        } else {
        recipeEnjoy.textContent = 'Stir over ice and pour into a chilled cocktail glass. Enjoy!';
        list.appendChild(recipeEnjoy);
        }
    document.getElementById("cocktail").style.display = "block";
};

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
    };
});