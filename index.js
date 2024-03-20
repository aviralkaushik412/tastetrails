// const API = "994d3ddcc55d420b88769e76bb2526fd"; // FINISHHED
// const API = "7d1d605822344f73ab46376724c3f624"; // 2nd api
// const API = "47ecb09922784fb39e3939467b056435"; // 3nd api

// const URL = "https://api.spoonacular.com/recipes/complexSearch?";
// const URL2 = "https://api.spoonacular.com/recipes/";

// const searchbtn = document.getElementById("searchButton");
// const searchInput = document.getElementById("searchInput");

// window.addEventListener("load", () => OnLoad("healthy veg food"));

// searchbtn.addEventListener("click", () => {
//     const text = searchInput.value.trim();
//     OnLoad(text);
// });

// async function OnLoad(text) {
//     const result = await fetch(`${URL}apiKey=${API}&query=${text}&addRecipeNutrition=true&number=10`);
//     const data = await result.json();
//     console.log(data);
//     BindData(data.results);
// }

// async function getnutriInformation(recipe_id, cardClone) {
//     try {
//         const result = await fetch(`${URL2}${recipe_id}/nutritionWidget.json?apiKey=${API}`);
//         if (result.status === 200) {
//             const data = await result.json();
//             const nutritionInfo = {
//                 calories: data.nutrients[0].amount,
//                 carbs: data.nutrients[3].amount,
//                 fat: data.nutrients[1].amount,
//                 protein: data.nutrients[10].amount,
//             };
//             updateNutritionalInfo(cardClone, nutritionInfo);
//         } else {
//             console.error(`Failed to fetch nutritional information for recipe ID: ${recipe_id}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// function updateNutritionalInfo(cardClone, nutritionInfo) {
//     const cal = cardClone.querySelector("#cal");
//     const carb = cardClone.querySelector("#carb");
//     const fat = cardClone.querySelector("#fat");
//     const prot = cardClone.querySelector("#prot");

//     cal.textContent = nutritionInfo.calories;
//     carb.textContent = nutritionInfo.carbs;
//     fat.textContent = nutritionInfo.fat;
//     prot.textContent = nutritionInfo.protein;
// }

// async function fillData(cardClone, result) {
//     const title = cardClone.querySelector("#news-title");
//     const image = cardClone.querySelector("#news-img");
//     const hovertitle = cardClone.querySelector("#hovtitle");
//     const titleofhover = cardClone.querySelector("#titleofhover");
//     const cal = cardClone.querySelector("#cal");
//     const carb = cardClone.querySelector("#carb");
//     const fat = cardClone.querySelector("#fat");
//     const prot = cardClone.querySelector("#prot");
//     const recipe_id = result.id;
//     try {
//         // const response = await fetch(`${URL}${result.id}/nutritionWidget.json?apiKey=${API}`);
//         const response = await fetch(`${URL}apiKey=${API}&query=${text}&addRecipeNutrition=true&number=10`);
//         if (response.ok) {
//             const data = await response.json();
//             const nutritionInfo = {
//                 calories: data.nutrients[0].amount,
//                 carbs: data.nutrients[3].amount,
//                 fat: data.nutrients[1].amount,
//                 protein: data.nutrients[10].amount,
//             };

//             cal.textContent = nutritionInfo.calories;
//             carb.textContent = nutritionInfo.carbs;
//             fat.textContent = nutritionInfo.fat;
//             prot.textContent = nutritionInfo.protein;
//         } else {
//             console.error('Failed to fetch nutritional information:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error fetching nutritional information:', error);
//     }

//     hovertitle.innerHTML = result.title;
//     // const cal = cardClone.querySelector("#cal");
//     // cal.innerHTML= result.title;
//     image.src = result.image;
//     title.innerHTML = result.title;
//     titleofhover.innerHTML = result.title;

//     // getnutriInformation(recipe_id, cardClone);

//     // cardClone.addEventListener('mouseover', () => {
//     // });
// }

// function BindData(results) {
//     const Cardcontainer = document.getElementById("main-content");
//     const template = document.getElementById("template-box");
//     Cardcontainer.innerHTML = '';

//     results.forEach(result => {
//         if (!result.image) return;
//         const CardClone = template.content.cloneNode(true);
//         fillData(CardClone, result);
//         Cardcontainer.appendChild(CardClone);
//     });
// }



const API = "e6e3241c66b04c35bbf65c0c57acdb94";
// const API2 = "2e4dc4f7d3b24118b6fbcb614697a226";
const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const URL2 = "https://api.spoonacular.com/recipes/";
const URL3 = "https://api.spoonacular.com/recipes/";

const searchbtn = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

window.addEventListener("load", () => OnLoad("healthy veg food"));

searchInput.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        // Get the trimmed value of the search input
        const text = searchInput.value.trim();
        // Call the OnLoad function with the trimmed text
        OnLoad(text);
    }
});
 
async function OnLoad(text) {
    const result = await fetch(`${URL}apiKey=${API}&query=${text}&number=50`);
    const data = await result.json();
    BindData(data.results);
}

// async function getnutriInformation(recipe_id, cardClone) {
//     try {
//         const result = await fetch(`${URL2}${recipe_id}/nutritionWidget.json?apiKey=${API}`);
//         if (result.status === 200) {
//             const data = await result.json();
//             const nutritionInfo = {
//                 calories: data.nutrients[0].amount,
//                 carbs: data.nutrients[3].amount,
//                 fat: data.nutrients[1].amount,
//                 protein: data.nutrients[10].amount,
//             };
//             updateNutritionalInfo(cardClone, nutritionInfo);
//         } else {
//             console.error(`Failed to fetch nutritional information for recipe ID: ${recipe_id}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// function updateNutritionalInfo(cardClone, nutritionInfo) {
//     const cal = cardClone.querySelector("#cal");
//     const carb = cardClone.querySelector("#carb");
//     const fat = cardClone.querySelector("#fat");
//     const prot = cardClone.querySelector("#prot");

//     cal.textContent = nutritionInfo.calories;
//     carb.textContent = nutritionInfo.carbs;
//     fat.textContent = nutritionInfo.fat;
//     prot.textContent = nutritionInfo.protein;
// }
const h1 = document.getElementById("unhealthy");
const h2 = document.getElementById("bev");
const h3 = document.getElementById("chn");
const h4 = document.getElementById("pf");
const h5 = document.getElementById("osf");
function restartAnimation() {
    text.classList.remove('animt'); // Re-add animation class
    // text.classList.remove('textpopup'); // Remove animation class
    void text.offsetWidth; // Trigger reflow
    text.classList.add('animt');
}

h1.addEventListener('click', ()=> {
    // foodplater.src = "IMAGES/unhealthy.png"; 
    // text.textContent = "Fast Food";  
    OnLoad("mexican");
});
h2.addEventListener('click', ()=> {
    OnLoad("drinks");
});
h3.addEventListener('click', ()=> {
    // foodplater.src = "IMAGES/chinese.png"; 
    // text.textContent = "Chinese Dishes"; 
    // restartAnimation(); 
    OnLoad("chinese"); 
});
h4.addEventListener('click', ()=> {
    // foodplater.src = "IMAGES/unhealthy.png"; 
    // text.textContent = "Protein Rich";   
    // restartAnimation();
    OnLoad("protein");
});
h5.addEventListener('click', ()=> {
    // foodplater.src = "IMAGES/unhealthy.png";   
    // text.textContent = "Oils and Fats"; 
    OnLoad("pizza");
});


async function fillData(cardClone, result) {
    const title = cardClone.querySelector("#news-title");
    const image = cardClone.querySelector("#news-img");
    const hovertitle = cardClone.querySelector("#hovtitle");
    const titleofhover = cardClone.querySelector("#titleofhover");
    const idofhover = cardClone.querySelector("#idofhover");
    const cal = cardClone.querySelector("#cal");
    const carb = cardClone.querySelector("#carb");
    const fat = cardClone.querySelector("#fat");
    const prot = cardClone.querySelector("#prot");
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Update like count
    const likeCountElement = document.getElementById('likeCount');
    if (likeCountElement) {
        likeCountElement.textContent = getRandomNumber(50, 100);
    }
    
    // Update dislike count
    var dislikeCountElement = document.getElementById('dislikeCount');
    if (dislikeCountElement) {
        dislikeCountElement.textContent = getRandomNumber(0, 20);
    }
    // const mainrecipename = document.getElementById("logoforlist");
    // const response2 = await fetch(`${URL3}${result.id}/ingredientWidget.json?apiKey=${API}`);
    //     // const makana = await fetch
    //     const data2 = await response2.json();
    //     console.log(data2);
    

    try {
        const response = await fetch(`${URL2}${result.id}/information?apiKey=${API2}&includeNutrition=false`);
        if (response.ok) {
            const data = await response.json();
            const nutritionInfo = {
                calories: data.nutrients[0].amount,
                carbs: data.nutrients[3].amount,
                fat: data.nutrients[1].amount,
                protein: data.nutrients[10].amount,
            };

            cal.textContent = nutritionInfo.calories;
            carb.textContent = nutritionInfo.carbs;
            fat.textContent = nutritionInfo.fat;
            prot.textContent = nutritionInfo.protein;
            
        } else {
            console.error('Failed to fetch nutritional information:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching nutritional information:', error);
    }

    hovertitle.innerHTML = result.title;
    image.src = result.image;
    title.innerHTML = result.title;
    titleofhover.innerHTML = result.title;
    idofhover.innerHTML = result.id;
    // mainrecipename.innerHTML= result.title;
    const button = document.getElementById("main-content")
    // cardClone.addEventListener("click", async () => {
    //     try {
    //         // Extract the recipe ID from the result
    //         const recipeId = result.id;
    //         const title = result.title;
            

    //         // Redirect the user to explore.html with the recipe ID as a query parameter
    //         window.location.href = `./recipe_main/recipeinfo.html?recipeId=${recipeId}&title=${title}`;
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // })
    const cards = document.querySelectorAll(".content");

    // Loop through each card and add click event listener
    cards.forEach(card => {
        card.addEventListener("click", async () => {
            try {
                // Find the elements containing recipe information within the card
                const titleElement = card.querySelector(".title strong");
                const recipeId = card.querySelector(".title #idofhover").textContent.trim();
                const recipeName = card.querySelector(".title #titleofhover").textContent.trim(); // Assuming the title contains the recipe ID

                // Redirect the user to explore.html with the recipe ID as a query parameter
                window.location.href = `./recipe_main/recipeinfo.html?recipeId=${recipeId}&recipeName=${encodeURIComponent(recipeName)}`;
            } catch (error) {
                console.error("Error:", error);
            }
        });
    });
};
function redirectToNewPage() {
    window.location.href = './recipe_main/momo.html'; // Change 'new_page.html' to the desired HTML file
}


function BindData(results) {
    const Cardcontainer = document.getElementById("main-content");
    const template = document.getElementById("template-box");
    Cardcontainer.innerHTML = '';

    results.forEach(result => {
        if (!result.image) return;
        const CardClone = template.content.cloneNode(true);
        fillData(CardClone, result);
        Cardcontainer.appendChild(CardClone);
    });
}


