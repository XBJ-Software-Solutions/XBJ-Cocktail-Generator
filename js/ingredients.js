baseSpirits = [];
citrusIngredients = [];
bitterIngredients = [];
sweetIngredients = [];

function Ingredients(type, name, sourLevel, bitterLevel, sweetLevel, unitOfMeasure, volume) {
    this.type = type;
    this.name = name;
    this.sourLevel = sourLevel;
    this.bitterLevel = bitterLevel;
    this.sweetLevel = sweetLevel;
    this.unitOfMeasure = unitOfMeasure;
    this.volume = volume;
    if (type = 'base') {
        baseSpirits.push(this); 
    };
    if (type = 'citrus') {
        citrusIngredients.push(this);
    };
    if (type = 'bitter') {
        bitterIngredients.push(this);
    };
    if (type = 'sweet') {
        sweetIngredients.push(this);
    }
}


Rum