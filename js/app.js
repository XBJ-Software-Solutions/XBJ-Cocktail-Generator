let nameArray = [];
let recipeHeading = document.getElementById('recipeHeading');
function DrinkName(name){
  this.name = name;
  nameArray.push(this.name);
}

let nameGenerator = function(){
  let pickRandomName = function(){
    return Math.floor(Math.random() * (10 - 0 ));
  }
  let randomNumber = pickRandomName();
  let randomName = nameArray[randomNumber];
  console.log(randomName);
  recipeHeading.textContent = randomName;
  let generatedName = [randomName];
}

new DrinkName('Midnight Mirage');
new DrinkName('Tropical Serenity');
new DrinkName('Velvet Sunset');
new DrinkName('Sapphire Fizz');
new DrinkName('Enchanted Elixir');
new DrinkName('Citrus Bliss');
new DrinkName('Mystic Mule');
new DrinkName('Raspberry Breeze');
new DrinkName('Moonlit Mojito');
new DrinkName('Starry Sangria');

