# Software Requirements

## Vision

```
Minimum Length: 3-5 sentences
What is the vision of this product?
What pain point does this project solve?
Why should we care about your product?
```

Your digital bartender will guide you to crafting the perfect cocktail. Choose a base spirit, plus additional ingredients and your bartender will present you with a recipe to help you create a tasty drink. It is perfect for those that have a decent starter liquor cabinet, but don't know any cocktail recipes, this website will help you learn how to make a balanced cocktail. A cocktail generator provides users with the opportunity to discover new and creative drink combinations

## Scope (In/Out)

```
- IN - What will your product do
- Describe the individual features that your product will do.
- High overview of each. Only need to list 4-5
- Example:
  - The web app will provide information to the users about all the different Cat Cafe’s in the area
  - The web app will provide both walking and driving directions to each of the destinations
  - Users will be able to “Star” their favorite shops.
  - Each shop will contain reviews of the customer’s experiences
- OUT - What will your product not do.
  - These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things. Example: My website will never turn into an IOS or Android app.
```

- IN: What will your product do
  - The web app will provide ideas for ingredients to make a cocktail
  - The web app will provide the amount needed of each ingredient for that cocktail to be balanced
  - The web app will display an image after your cocktail is complete to provide the user with a sense of wonder and accomplishment

- OUT: What will your product not do.
  - The web app will not let user input their own volumes of ingredients
  - The web app will not let you enter additional ingredients that are not provided in the 


### Minimum Viable Product vs

1. What will your MVP functionality be?
    - An interactive webpage with dropdown ingredient lists. After selecting your ingredients, the app will display a recipe, show an image of a cocktail, and name your drink.


### Stretch Goals

1. What stretch goals are you going to aim for?
    - Change static volumes to adjustable volumes with an algorithm 
    - Add local storage to create a virtual liquor cabinet that remembers the last drink created
    - Add additional hover features for each ingredient in the list



## Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

1. A user can select ingredients from four drop down menus of a base, citrous, bitter, and sweet component.
1. A user can then submit the form containing final four preferred ingredients.
1. A user can read a description about each ingredient
1. A user will be able to receive a displayed recipe.


### Data Flow

>Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

1. Users will visit the website and are instructed to choose their preferences out of four dropdowns with different categories.
1. From there, the user will hit submit and the web app will dynamically load a recipe and picture for the user based on their choices from the dropdown.
1. After the user takes note of the recipe. They are able to navigate to the about us page and read the foundations of XBJ Software Solutions and each member's role in the project.
