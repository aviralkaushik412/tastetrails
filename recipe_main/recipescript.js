// const API = "f2224d9a1fd0422b83c20333e78ce565";
// const API2 = "45118ccd96ae4956b7280a0f79a3a79d";
// const API3 = "5c85d7aff6654e90aeff54aec037f250";
const API = "894aaa254c334b47ba0fb7a98901b810"; //done new
const API2 = "bd39c52c16ff4f66934148f2e2ccc28b"; // done new
const API3 = "cb39df2e966d4ec9943b623c8731cf60"; // done new

// 62b8f268317d4d89b84d50ee5b584cc5
// f2224d9a1fd0422b83c20333e78ce565
// 

const URL = "https://api.spoonacular.com/recipes/"
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('recipeId');
const recipename = urlParams.get('recipeName');
const title = document.getElementById("logoforlist");
const imageid = urlParams.get('image')
title.innerHTML = recipename;
const image = document.getElementById("imagebg");
// image.src = imageid;


window.addEventListener("load", () => OnLoad(recipeId));

// async function OnLoad(recipeId) {
//     const result = await fetch(`${URL}${recipeId}/information?&apiKey=${API}&includeNutrition=false`);
//     const data = await result.json();
//     BindData(data.results);
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
// OnLoad(recipeId);
async function OnLoad(){

    try {
        const response = await fetch(`${URL}${recipeId}/ingredientWidget.json?&apiKey=${API}`);
        const response2 = await fetch(`${URL}${recipeId}/information?&apiKey=${API2}`);
        const response3 = await fetch(`${URL}${recipeId}/nutritionWidget.json?&apiKey=${API3}`);





        if (response2.ok) {
            const data2 = await response2.json();
            console.log(data2);
            
            const responses = data2.analyzedInstructions;
            // Assuming responseData is the array you received from the API containing one object
const data = responses[0];

if (data && data.steps && data.steps.length > 0) {
    const stepsArray = data.steps;
    const recipeDiv = document.querySelector('.recipe');

    stepsArray.forEach(step => {
        const stepDiv = document.createElement('div');
        const stepNumber = document.createElement('h3');
        const stepDescription = document.createElement('p');

        stepNumber.textContent = `Step ${step.number}`;
        stepDescription.textContent = step.step;

        stepDiv.appendChild(stepNumber);
        stepDiv.appendChild(stepDescription);

        recipeDiv.appendChild(stepDiv);
    });
            const dietsData = data2.diets;
            const summary = data2.summary;
            const nutrientsColumn = document.querySelector('.nutrients-column');
            const summaryColumn = document.querySelector('.summary');
            nutrientsColumn.innerHTML = '';
            summaryColumn.innerHTML = '';
            summaryColumn.innerHTML = summary;
            dietsData.forEach(diet => {
                const listItem = document.createElement('li');
                listItem.textContent = " ‣  " + diet;
                nutrientsColumn.appendChild(listItem);
            });
} else {
    console.log("No steps data found.");
}

            const imagelink = document.getElementById("imagebg");
            imagelink.src = data2.image;
            
        } else {
            console.error('Failed to fetch nutritional information:', response.statusText);
        }
        if (response.ok) {
            const data1 = await response.json();
            console.log(data1); // ingredient
            // const imagelink = document.getElementById("imagebg");
            // imagelink.src = data.image;
            const table = document.querySelector('table');

            data1.ingredients.forEach((ingredient, index) => {
                    const row = document.createElement('tr');

                    const ingredientNameCell = document.createElement('td');
                    ingredientNameCell.textContent = `${index + 1}. ${ingredient.name}`;
                    row.appendChild(ingredientNameCell);

                    const ingredientAmountCell = document.createElement('td');
                    ingredientAmountCell.textContent = `${ingredient.amount.metric.value} ${ingredient.amount.metric.unit} `;
                    row.appendChild(ingredientAmountCell);

                    table.appendChild(row);
                });
                

            
        } else {
            console.error('Failed to fetch nutritional information:', response.statusText);
        }
        if(response3.ok){
            const data3 = await response3.json();
            const nutrientsContainer = document.querySelector('.nutrients');

            data3.nutrients.forEach(nutrient => {
                const nutrientElement = document.createElement('p');
                const nutrientText = `${nutrient.name}       :        ${nutrient.amount} ${nutrient.unit} : ${nutrient.percentOfDailyNeeds}% of daily need`;
                nutrientElement.textContent = nutrientText;
                nutrientsContainer.appendChild(nutrientElement);
            });
            console.log(data3);
        }
    } catch (error) {
        console.error('Error fetching nutritional information:', error);
    }
};