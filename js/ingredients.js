"use strict";

let baseSpirits = [];
let citrusIngredients = [];
let bitterIngredients = [];
let sweetIngredients = [];
let allIngredients = [];


let ingredientDescriptions = [
    'Provides a robust and complex foundation with its rich, oaky notes, imparting warmth and depth to the cocktail',

    "Infuses the drink with a crisp and botanical character, lending a refreshing and herbal complexity to the overall flavor profile",
    
    "Imparts a vibrant and agave-forward taste, adding a touch of sweetness and a subtle earthiness to the cocktail",
    
    "Brings a tropical and molasses sweetness, contributing to a smooth and rounded flavor profile with hints of caramel and spice",
    
    "Offers a bright and zesty acidity that balances the sweetness and enhances the overall freshness of the cocktail",
    
    "Adds a tangy and invigorating kick, elevating the drink with a burst of citrusy brightness",
    
    "Introduces a sweet and aromatic undertone, contributing a mellow citrus complexity to the cocktail",
    
    "Imparts a well-rounded and aromatic flavor, enhancing the depth and complexity of the cocktail with subtle herbal and spiced notes",
    
    "Provides a bitter and citrusy profile, balancing sweetness and adding a vibrant red hue to the drink",
    
    "Brings a bittersweet and orange-flavored element, offering a light and refreshing contrast to the other ingredients",
    
    "Introduces a unique bitterness with artichoke undertones, contributing a complex and herbal layer to the cocktail",
    
    "Sweetens the drink evenly, smoothing out any harsh edges and providing a well-balanced sweetness",
    
    "Infuses a rich and herbal sweetness, complementing the base spirit with nuanced botanical and spiced notes",
    
    "Adds a dry and herbaceous quality, balancing sweetness and contributing a subtle complexity to the cocktail",
    
    "Imparts a distinct honeyed sweetness, lending a smooth and velvety texture while introducing a natural and floral note to the overall flavor",
  ];
  


function Ingredient(type, name, sourLevel, bitterLevel, sweetLevel, unitOfMeasure, volume, description) {
    this.type = type;
    this.name = name;
    this.sourLevel = sourLevel;
    this.bitterLevel = bitterLevel;
    this.sweetLevel = sweetLevel;
    this.unitOfMeasure = unitOfMeasure;
    this.volume = volume;
    this.description = description;
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
    allIngredients.push(this);
}

const whiskey = new Ingredient('base', 'Whiskey', 0, 0, 0, 'ounces', 2.0, ingredientDescriptions[0]);
const gin = new Ingredient('base', 'Gin', 0, 0, 0, 'ounces', 2.0, ingredientDescriptions[1]);
const tequila = new Ingredient('base', 'Tequila', 0, 0, 0, 'ounces', 2.0, ingredientDescriptions[2]);
const rum = new Ingredient('base', 'Rum', 0, 0, 0, 'ounces', 2.0, ingredientDescriptions[3]);
const lemon = new Ingredient('citrus', 'Lemon', 0, 0, 0, 'ounces', 1.0, ingredientDescriptions[4]);
const lime = new Ingredient('citrus', 'Lime', 0, 0, 0, 'ounces', 1.0, ingredientDescriptions[5]);
const orange = new Ingredient('citrus', 'Orange', 0, 0, 0, 'ounces', 1.0, ingredientDescriptions[6]);
const agnostura = new Ingredient('bitter', 'Agnostura Bitters', 0, 0, 0, 'dashes', 1.0, ingredientDescriptions[7]);
const campari = new Ingredient('bitter', 'Campari', 0, 0, 0, 'ounces', 1.0, ingredientDescriptions[8]);
const aperol = new Ingredient('bitter', 'Aperol', 0, 0, 0, 'ounces', 1.0, ingredientDescriptions[9]);
const cynar = new Ingredient('bitter', 'Cynar', 0, 0, 0, 'ounces', 1.0, ingredientDescriptions[10]);
const simple = new Ingredient('sweet', 'Simple Syrup', 0, 0, 0, 'ounces', 1.0, ingredientDescriptions[11]);
const sweetVermouth = new Ingredient('sweet', 'Sweet Vermouth', 0, 0, 0, 'ounces', 1.0, ingredientDescriptions[12]);
const dryVermouth = new Ingredient('sweet', 'Dry Vermouth', 0, 0, 0, 'ounces', 1.25, ingredientDescriptions[13]);
const honey = new Ingredient('sweet', 'Honey Syrup', 0, 0, 0, 'ounces', 0.75, ingredientDescriptions[14]);


console.log (baseSpirits);
console.log (citrusIngredients);
console.log (bitterIngredients);
console.log (sweetIngredients);
console.log (allIngredients);