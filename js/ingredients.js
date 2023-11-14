baseSpirits = [];
citrusIngredients = [];
bitterIngredients = [];
sweetIngredients = [];

function Ingredient(type, name, sourLevel, bitterLevel, sweetLevel, unitOfMeasure, volume) {
    this.type = type;
    this.name = name;
    this.sourLevel = sourLevel;
    this.bitterLevel = bitterLevel;
    this.sweetLevel = sweetLevel;
    this.unitOfMeasure = unitOfMeasure;
    this.volume = volume;
    if (type === 'base') {
        baseSpirits.push(this); 
    };
    if (type === 'citrus') {
        citrusIngredients.push(this);
    };
    if (type === 'bitter') {
        bitterIngredients.push(this);
    };
    if (type === 'sweet') {
        sweetIngredients.push(this);
    };
}

const whiskey = new Ingredient ('base', 'whiskey', 0, 0, 0, 'ounces', 2.0);
const gin = new Ingredient ('base', 'gin', 0, 0, 0, 'ounces', 2.0);
const tequila = new Ingredient ('base', 'tequila', 0, 0, 0, 'ounces', 2.0);
const rum = new Ingredient ('base', 'rum', 0, 0, 0, 'ounces', 2.0);
const lemon = new Ingredient ('citrus', 'lemon', 0, 0, 0, 'ounces', 1.0);
const lime = new Ingredient ('citrus', 'lime', 0, 0, 0, 'ounces', 1.0);
const orange = new Ingredient ('citrus', 'orange', 0, 0, 0, 'ounces', 1.0);
const agnostura = new Ingredient ('bitter', 'agnostura bitters', 0, 0, 0, 'dashes', 1.0);
const campari = new Ingredient ('bitter', 'campari', 0, 0, 0, 'ounces', 1.0);
const aperol = new Ingredient ('bitter', 'aperol', 0, 0, 0, 'ounces', 1.0);
const cynar = new Ingredient ('bitter', 'cynar', 0, 0, 0, 'ounces', 1.0);
const simple = new Ingredient ('sweet', 'simple syrup', 0, 0, 0, 'ounces', 1.0);
const sweetVermouth = new Ingredient ('sweet', 'sweet vermouth', 0, 0, 0, 'ounces', 1.0);
const dryVermouth = new Ingredient ('sweet', 'dry vermouth', 0, 0, 0, 'ounces', 1.25);
const honey = new Ingredient ('sweet', 'honey syrup', 0, 0, 0, 'ounces', 0.75);

console.log (baseSpirits);
console.log (citrusIngredients);
console.log (bitterIngredients);
console.log (sweetIngredients);
