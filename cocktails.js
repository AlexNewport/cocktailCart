cocktailMenu = [
  {
    name: "Cranberry Mimosa",
    mainIngredients: "Craberry, lime, champagne",
    recipe: "1/4 lime, 1/2 tbsp sugar, 2 oz sweetened cranberry juice, 1/4 bottle of champagne, 3 fresh cranberries, and a small sprig of fresh rosemary",
    calories: "216",
  },
  {
    name: "Hot Buttered Rum",
    mainIngredients: "Butter, apple cider, rum, vanilla ice cream",
    recipe: "1 tbsp butter, 1 tbsp brown sugar, 1 oz vanilla ice cream, 1/4 tsp ground cinnamon, 4 oz apple cider, 2 oz rum",
    calories: "365",
  },
  {
    name: "Chocolate Martini",
    mainIngredients: "Chocolate, Irish cream, vodka",
    recipe: "1 tbsp chocolate syrup, 2 oz Bailey's Irish cream, 2 oz chocolate liquor, 2 oz Smirnoff vodka",
    calories: "411",
  },
  {
    name: "Jack Frost",
    mainIngredients: "Vodka, Prosecco, Blue Curacao, lemonade",
    recipe: "2 oz vodka, 2 oz Prosecco, 1 oz Blue Curacao, 1 oz lemonade, 12 oz ice",
    calories: "293",
  },
  {
    name: "Moscow Mule",
    mainIngredients: "Vodka, lime, ginger beer",
    recipe: "1 oz vodka, 1/2 oz fresh lime juice, 1/2 oz ginger beer",
    calories: "163",
  }
];

const setCocktailInfo = (index) => {
  $(".cocktail").eq(index).text(cocktailMenu[index].name);
  $(".cocktailLower").eq(index).text("Main ingredients: " + cocktailMenu[index].mainIngredients);
  
};

const setInfo = () => {
  jQuery.each($(".cocktailBox"), setCocktailInfo);

  $(".cocktailBox").on("click", function () {
    let cocktailIndex = $(".cocktailBox").index(this);
    $(this).find("p.cocktail").text("Calories: " + cocktailMenu[cocktailIndex].calories);
  });

  $(".cocktailBox").on("mouseover", function () {
    let cocktailIndex = $(".cocktailBox").index(this);
    $(this).find("p.cocktail").text("Recipe: " + cocktailMenu[cocktailIndex].recipe);
    $(this).find("p.cocktailLower").text("");
  });

  $(".cocktailBox").on("mouseout", function () {
    let cocktailIndex = $(".cocktailBox").index(this);
    $(this).find("p.cocktail").text(cocktailMenu[cocktailIndex].name);
    $(this).find("p.cocktailLower").text("Main ingredients: " + cocktailMenu[cocktailIndex].mainIngredients);
  });
};

$(document).ready(setInfo);
