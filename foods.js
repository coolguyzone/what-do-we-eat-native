const foods = [
  {
    name: "Burgers",
    category: "burgers",
    emoji: "🍔",
    recipelink: "http://www.foodnetwork.com/recipes/alton-brown/burger-of-the-gods-recipe.html",
    recipename: "Burger Of The Gods"
  },
  {
    name: "Tacos",
    category: "mexican",
    emoji: "🇲🇽",
    recipelink: "http://www.epicurious.com/recipes/food/views/pork-carnitas-tacos",
    recipename: "Double-Pork Carnitas Tacos"
  },
  {
    name: "Chinese",
    category: "chinese",
    emoji: "🍚",
    recipelink: "http://allrecipes.com/recipe/9027/kung-pao-chicken/",
    recipename: "Kung Pao Chicken"
  },
  {
    name: "Thai",
    category: "thai",
    emoji: "🍲",
    recipelink: "http://pinchofyum.com/thai-yellow-chicken-curry-with-potatoes",
    recipename: "Yellow Chicken Curry"

  },
  {
    name: "Vietnamese",
    category: "vietnamese",
    emoji: "🍜",
    recipelink: "http://www.epicurious.com/recipes/food/views/vietnamese-sandwiches-with-five-spice-chicken-233499",
    recipename: "5-Spice Chicken Ban Mi"
  },
  {
    name: "Mexican",
    category: "mexican",
    emoji: "🇲🇽",
    recipelink: "http://allrecipes.com/recipe/213700/enchiladas-verdes/",
    recipename: "Enchiladas Verdes"
  },
  {
    name: "Burritos",
    category: "mexican",
    emoji: "🇲🇽",
    recipelink: "http://www.foodnetwork.com/recipes/jeff-mauro/carne-asada-burrito-recipe.html",
    recipename: "Carne Asada Burrito"
  },
  {
    name: "Sandwiches",
    category: "sandwiches",
    emoji: "🍞",
    recipelink: "http://allrecipes.com/recipe/219468/shooter-sandwich/",
    recipename: "Shooter Sandwich"
  },
  {
    name: "Pizza",
    category: "italian",
    emoji: "🍕",
    recipelink: "http://ciaoflorentina.com/burrata-pizza-recipe-crispy/",
    recipename: "Burrata Pizza"
  },
  {
    name: "Deep-Dish Pizza",
    category: "italian",
    emoji: "🍕",
    recipelink: "http://www.foodnetwork.com/recipes/emeril-lagasse/chicago-style-deep-dish-pizzas-recipe.html",
    recipename: "Chicago Deep-Dish"
  },
  {
    name: "Dim Sum",
    category: "chinese",
    emoji: "🇨🇳",
    recipelink: "http://www.foodnetwork.com/recipes/brian-boitano/pork-steamed-buns-recipe.html",
    recipename: "Pork Steamed Buns"
  },
  {
    name: "Sushi",
    category: "japanese",
    emoji: "🍣",
    recipelink: "http://allrecipes.com/recipe/228953/california-roll/",
    recipename: "California Roll"
  },
  {
    name: "Ramen",
    category: "japanese",
    emoji: "🍜",
    recipelink: "http://simply-delicious-food.com/pork-belly-ramen/",
    recipename: "Pork Belly Ramen"
  },
  {
    name: "Pho",
    category: "vietnamese",
    emoji: "🍜",
    recipelink: "http://www.epicurious.com/recipes/food/views/quick-pork-pho-51252620",
    recipename: "Quick Pork Pho"
  },
  {
    name: "Steak",
    category: "meat",
    emoji: "🍖",
    recipelink: "http://www.foodnetwork.com/recipes/alton-brown/pan-seared-rib-eye-recipe.html",
    recipename: "Pan Seared Rib-Eye"
  },
  {
    name: "Diner Breakfast",
    category: "breakfast",
    emoji: "🍳",
    recipelink: "http://www.food.com/recipe/cinnamon-french-toast-172268",
    recipename: "Cinnamon French Toast"
  },
  {
    name: "Mediterranean",
    category: "mediterranean",
    emoji: "🍲",
    recipelink: "http://www.thekitchn.com/recipe-beef-kofta-with-tzatziki-229327",
    recipename: "Beek Kofta"
  },
  {
    name: "Gyros",
    category: "mediterranean",
    emoji: "🍖",
    recipelink: "http://www.food.com/recipe/gyros-an-authentic-recipe-for-making-them-at-home-285900",
    recipename: "Authentic Gyros"
  },
  {
    name: "Japanese",
    category: "japanese",
    emoji: "🍱",
    recipelink: "http://www.foodnetwork.com/recipes/tyler-florence/shrimp-and-vegetable-tempura-recipe.html",
    recipename: "Shrimp And Veggie Tempura"
  },
  {
    name: "Acai Bowls",
    category: "raw",
    emoji: "🍌",
    recipelink: "http://www.familylifeinlv.com/2015/04/eat-a-rainbow-acai-bowl-recipe.html",
    recipename: "Rainbow Acai Bowl"
  },
  {
    name: "Rotisserie Chicken",
    category: "chicken",
    emoji: "🍗",
    recipelink: "http://allrecipes.com/recipe/93168/rotisserie-chicken/",
    recipename: "Rotisserie Chicken"
  },
  {
    name: "Food Court",
    category: "variety",
    emoji: "🍛",
    recipelink: "http://www.food.com/recipe/orange-julius-8589",
    recipename: "Orange Julius"
  },
  {
    name: "German",
    category: "german",
    emoji: "🇩🇪",
    recipelink: "http://allrecipes.com/recipe/78117/wienerschnitzel/",
    recipename: "Wienerschnitzel"
  },
  {
    name: "Subs",
    category: "sandwiches",
    emoji: "🍞",
    recipelink: "http://allrecipes.com/recipe/90321/meatball-sandwich/",
    recipename: "Meatball Sub"
  },
  {
    name: "Indian",
    category: "indian",
    emoji: "🇮🇳",
    recipelink: "http://www.food.com/recipe/aloo-palak-indian-potatoes-spinach-108787",
    recipename: "Aloo Palak"
  },
  {
    name: "Curry",
    category: "indian",
    emoji: "🇮🇳",
    recipelink: "http://allrecipes.com/recipe/212721/indian-chicken-curry-murgh-kari/",
    recipename: "Murgh Kari"
  },
  {
    name: "Pasta",
    category: "italian",
    emoji: "🍝",
    recipelink: "http://www.foodnetwork.com/recipes/giada-de-laurentiis/pasta-primavera-recipe.html",
    recipename: "Pasta Primavera"
  },
  {
    name: "Italian",
    category: "italian",
    emoji: "🍝",
    recipelink: "http://www.foodnetwork.com/recipes/giada-de-laurentiis/chicken-cacciatore-recipe.html",
    recipename: "Chicken Cacciatore"
  },
  {
    name: "Burmese",
    category: "chinese",
    emoji: "🍲",
    recipelink: "http://www.thegourmetgourmand.com/burmese-tea-leaf-salad/",
    recipename: "Tea Leaf Salad"
  },
  {
    name: "Jewish Deli",
    category: "deli",
    emoji: "🇮🇱",
    recipelink: "http://toriavey.com/toris-kitchen/2010/05/shiksa-blintzes/",
    recipename: "Cheese Blintz"
  },
  {
    name: "Barbecue",
    category: "meat",
    emoji: "🍖",
    recipelink: "http://allrecipes.com/recipe/92462/slow-cooker-texas-pulled-pork/",
    recipename: "Slow Cooker Pulled Pork"
  },
  {
    name: "Ribs",
    category: "meat",
    emoji: "🍖",
    recipelink: "http://www.epicurious.com/recipes/food/views/southwestern-style-baby-back-ribs-232859",
    recipename: "Southwestern Baby Back Ribs"
  },
  {
    name: "Korean",
    category: "korean",
    emoji: "🍛",
    recipelink: "http://www.epicurious.com/recipes/food/views/sweet-potato-noodles-japchae-353229",
    recipename: "Japchae"
  },
  {
    name: "African",
    category: "african",
    emoji: "🍛",
    recipelink: "http://www.epicurious.com/recipes/food/views/lamb-tagine-with-chickpeas-and-apricots-367761",
    recipename: "Lamb Tagine"
  },
  {
    name: "Fried Chicken",
    category: "chicken",
    emoji: "🍗",
    recipelink: "http://www.foodnetwork.com/recipes/patrick-and-gina-neely/neely-family-spicy-fried-chicken-recipe.html",
    recipename: "Spicy Fried Chicken"
  },
  {
    name: "Salads",
    category: "raw",
    emoji: "🍅",
    recipelink: "http://www.foodnetwork.com/recipes/food-network-kitchens/classic-cobb-salad-recipe.html",
    recipename: "Classic Cobb Salad"
  },
  {
    name: "Seafood",
    category: "seafood",
    emoji: "🐠",
    recipelink: "http://allrecipes.com/recipe/11951/linguine-with-clam-sauce/",
    recipename: "Linguine With Clam Sauce"
  },
  {
    name: "Shrimp",
    category: "seafood",
    emoji: "🍤",
    recipelink: "http://www.eatingwell.com/recipe/252316/shrimp-ceviche",
    recipename: "Shrimp Ceviche"
  },
  {
    name: "Fish",
    category: "seafood",
    emoji: "🐟",
    recipelink: "http://www.epicurious.com/recipes/food/views/pan-seared-swordfish-steaks-with-shallot-caper-and-balsamic-sauce-13647",
    recipename: "Seared Swordfish"
  },
  {
    name: "Fish N' Chips'",
    category: "seafood",
    emoji: "🐠🍟",
    recipelink: "http://www.foodnetwork.com/recipes/paula-deen/beer-battered-fish-and-chips-recipe.html",
    recipename: "Beer-Battered Fish N' Chips"
  },
  {
    name: "Pub Grub",
    category: "irish",
    emoji: "🍺🍗",
    recipelink: "http://www.irishamericanmom.com/2012/12/04/chips-and-curry-sauce/",
    recipename: "Chips And Curry Sauce"
  },
  {
    name: "Caribbean",
    category: "caribbean",
    emoji: "🇵🇷",
    recipelink: "http://cooking.nytimes.com/recipes/1016056-jerk-chicken",
    recipename: "Jerk Chicken"
  },
  {
    name: "Corn Dogs",
    category: "sausages",
    emoji: "🌽🐶",
    recipelink: "http://www.foodnetwork.com/recipes/paula-deen/homemade-mini-corn-dogs-recipe.html",
    recipename: "Mini Corn Dog"
  },
  {
    name: "French",
    category: "french",
    emoji: "🇫🇷",
    recipelink: "http://www.chow.com/recipes/10983-classic-steak-tartare",
    recipename: "Steak Tartare"
  },
  {
    name: "Spanish",
    category: "spanish",
    emoji: "🇪🇸",
    recipelink: "http://allrecipes.com/recipe/213226/tortilla-espanola/?internalSource=hub%20recipe&referringId=17846&referringContentType=recipe%20hub&clickId=cardslot%2023",
    recipename: "Tortilla Espanola"
  },
  {
    name: "Paella",
    category: "spanish",
    emoji: "🇪🇸",
    recipelink: "http://allrecipes.com/recipe/84137/easy-paella/?internalSource=hub%20recipe&referringId=17846&referringContentType=recipe%20hub&clickId=cardslot%204",
    recipename: "Easy Paella"
  },
  {
    name: "Tapas",
    category: "spanish",
    emoji: "🇪🇸",
    recipelink: "http://www.foodnetwork.com/recipes/bobby-flay/patatas-bravas-home-fries-with-roasted-tomato-aioli.html",
    recipename: "Patatas Bravas"
  },
  {
    name: "Soul Food",
    category: "soul food",
    emoji: "🍗",
    recipelink: "http://allrecipes.com/recipe/229853/catfish-po-boy/?internalSource=staff%20pick&referringId=16091&referringContentType=recipe%20hub&clickId=cardslot%203",
    recipename: "Catfish Po Boy"
  },
  {
    name: "Wings",
    category: "chicken",
    emoji: "🍗",
    recipelink: "http://www.foodnetwork.com/recipes/honey-sriracha-chicken-wings-recipe.html",
    recipename: "Honey Sriracha Wings"
  },
  {
    name: "Greek",
    category: "mediterranean",
    emoji: "🍛",
    recipelink: "http://greekfood.about.com/od/eggplant/r/moussaka.htm",
    recipename: "Moussaka With Eggplant"
  },
  {
    name: "Falafel",
    category: "mediterranean",
    emoji: "🇮🇱",
    recipelink: "https://toriavey.com/toris-kitchen/2011/01/falafel/",
    recipename: "Traditional Falafel"
  },
  {
    name: "Greasy Spoon",
    category: "breakfast",
    emoji: "☕️",
    recipelink: "http://www.foodnetwork.com/recipes/food-network-kitchens/classic-club-sandwich-recipe.html",
    recipename: "Classic Club Sandwich"
  }
]

export default foods;
