console.log("connected to main.js");

// array used to track all the food categories
// TASK 1
// [X]Add more categories to the CATEGORY array
// [X]Test that each works with the fetch request
const CATEGORY = ["Starter","Beef", "Chicken", "Lamb", "Pasta",
"Pork", "Seafood", "Vegetarian", "Vegan", "Side", "Dessert"];

// select element that will store our category options
let categories = document.getElementById("category");

// how our category options are stored
for (let i = 0; i < CATEGORY.length; i++) {
  let option = document.createElement("option");
  option.text = CATEGORY[i];
  categories.appendChild(option);
}

let mealsList = document.getElementById("mealsList");

function getFetch() {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories.value}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // the line below clears the HTML each time a new category is requested, so that the items don't stack each time
      mealsList.innerHTML = "";

      // per category that is received in the data object,
      // there is a meals array
      // we will use the meals array to access individual meals
      for (let i = 0; i < data.meals.length; i++) {
        let container = document.createElement("div");
        let itemHeader = document.createElement("h1");

        itemHeader.innerText = data.meals[i].strMeal;

        let img = document.createElement("img");
        img.classList.add("foodItem")
        img.src = data.meals[i].strMealThumb;

        container.classList.add("mealContainer");
        mealsList.appendChild(container);

        container.appendChild(itemHeader);
        container.appendChild(img);


        console.log(data.meals);

        // use the example above to complete TASK 2
        // TASK 2
        // 1) [] add a header to the container
        // 2) add an image to the container UNDER the header
        // ex: "Broccoli & Stilton soup", followed by a picture of
        // broccoli & stilton soup
        // ... add code here
      }

      return data;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
