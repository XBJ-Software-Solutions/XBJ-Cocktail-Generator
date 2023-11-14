let ingredientsForm = document.getElementById('ingredientsForm');
let inputs = document.querySelectorAll('option');
let selectedIngredients = [];


for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function(event) {
      console.log(event.target.name, event.target.value);
      if (event.target.value === allIngredients[].name) { 
        selectedIngredients.push(this);
      };
    });
  };


  function renderRecipe () {
    let recipeDisplay = document.getElementById('something');
    let recipeElement = document.createElement('p');
    
    recipeElement.textContent = `Here you go! Mix ${selectedIngredients[0].volume}${selectedIngredients[0].unitofMeasure} of ${selectedIngredients[0].name}, ${selectedIngredients[1].volume}${selectedIngredients[1].unitofMeasure} of ${selectedIngredients[1].name}, and ${selectedIngredients[2].volume}${selectedIngredients[2].unitofMeasure} of ${selectedIngredients[2].name}. Stir over ice and pour into a chilled cocktail glass. Enjoy!`
    recipeDisplay.appendChild(recipeElement);
  }


  ingredientsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    ingredientsForm.reset();
    // base.focus();
    renderRecipe();
    // renderImage(); this function hasn't been made yet
    }
  );