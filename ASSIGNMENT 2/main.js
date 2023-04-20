function dishes(recipe, ingredients) {
    const numberOfDishes = [];
    
    for (let ingredient in recipe) {
      if (!ingredients.hasOwnProperty(ingredient)) {
        return 0;
      }
      // butun obyekti yoxluyuruq ve sayi her hansi arraya elave edirik
      const number = Math.floor(ingredients[ingredient] / recipe[ingredient]);
      numberOfDishes.push(number);
    }

    // en kicik say tapilir ve return edilir
    const min = Math.min(...numberOfDishes);
    
    return min;
  }

console.log(dishes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) ); //2
console.log(dishes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); //0