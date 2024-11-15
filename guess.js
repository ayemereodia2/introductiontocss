const selectState = {
    answerOne: false,
    answerTwo: false,
    answerThree: false,
    answerFour: false,
};


// Function to fetch trivia questions with dynamic parameters
async function fetchTriviaQuestions(amount, category, difficulty, type) {
    // Base API URL
    const loadingView = document.querySelector("#loading-view");
    const quizContainer = document.querySelector("#main-container-view");
    const loaderMessage = document.querySelector("#loader-message");

    const baseUrl = "https://opentdb.com/api.php";

    // Create URLSearchParams to build query string dynamically
    const params = new URLSearchParams({
        amount: amount.toString(),
        category: category.toString(),
        difficulty: difficulty,
        type: type,
    });

    // Combine base URL with query parameters
    const apiUrl = `${baseUrl}?${params.toString()}`;
    console.log(apiUrl);

    try {
        // Fetch data from the API
        loadingView.style.display = "block";
        const response = await fetch("questions.json");

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // hide loader
        loadingView.style.display = "none";

        // show main container
        quizContainer.style.display = "flex";
        
        /*
        display: flex;
        flex-direction: column;
        align-items:center;
        */

        // Parse and log the response JSON
        const data = await response.json();
        return data.results;

        console.log("Trivia Questions:", questionCollection);
    } catch (error) {
        loaderMessage.innerHTML = "Failed to load quiz. Please try again.";
        console.error("Failed to fetch trivia questions:", error);
    }
}

function enableNextButton(){
    const nextButton  = document.querySelector("#next-button")
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "aquamarine";
}

function disableNextButton(){
    const nextButton  = document.querySelector("#next-button")
    nextButton.disabled = true;
    nextButton.style.backgroundColor = "rgb(216, 220, 219)";
}

let currentQuestionIndex = 0;
let score = 0;
async function gameLoaded() {

    const nextButton  = document.querySelector("#next-button")

    nextButton.addEventListener("click", ()=>{
        if (currentQuestionIndex < questionCollection.length) {
            currentQuestionIndex++;
            updateQuestionView();
            resetOptions();
        } else {
            alert(`Quiz complete! You scored: ${score}/20` )
            console.log("Quiz finished!");
        }
    });

    const questionCollection = await fetchTriviaQuestions(20, 9, "easy", "multiple");
        const options = {
            optionOne: document.querySelector("#select-one"),
            optionTwo: document.querySelector("#select-two"),
            optionThree: document.querySelector("#select-three"),
            optionFour: document.querySelector("#select-four"),
        };
    
        // Array to map state keys to elements
        const stateKeys = Object.keys(selectState);
        const elements = Object.values(options);
    
        // Reusable function to reset all options
        function resetOptions() {
            elements.forEach((el) => {
                el.style.backgroundColor = "rgb(242, 242, 245)";
            });
        }

        function selectedOption(optionIndex){
            const questionElement = document.querySelector(`#q${optionIndex + 1}`);
            const scoreLabel = document.querySelector("#score-p");

            console.log(questionElement.textContent);
            let correctAnswer = questionCollection[currentQuestionIndex]["correct_answer"];
            if(correctAnswer === questionElement.textContent)
            {
                score++;
                console.log(score);
            }
        }
    
        // Reusable function to handle option selection
        function handleOptionClick(optionIndex) {
            const currentKey = stateKeys[optionIndex];
            if (selectState[currentKey]) {
                resetOptions();
                selectState[currentKey] = false;
                disableNextButton();
            } else {
                enableNextButton();
                resetOptions();
                elements[optionIndex].style.backgroundColor = "rgb(152, 5, 5)";
    
                // Update selectState
                stateKeys.forEach((key, index) => {
                    selectState[key] = index === optionIndex;
                });
                
            }

            selectedOption(optionIndex)
        }

          // Add event listeners dynamically
          elements.forEach((element, index) => {
            element.addEventListener("click", () => handleOptionClick(index));
        });

        function updateQuestionView(){
            console.log("updating view");
        // Set question text dynamically
        
        let questionTitle = questionCollection[currentQuestionIndex]["question"];
        document.querySelector("#main-heading-question").innerHTML = questionTitle;
    
        let questions = questionCollection[currentQuestionIndex]["incorrect_answers"];
        let correctAnswer = questionCollection[currentQuestionIndex]["correct_answer"];
    
        questions.push(correctAnswer);
    
        questions.forEach((question, index) => {
            const questionElement = document.querySelector(`#q${index + 1}`);
            questionElement.innerHTML = question;
        });
        disableNextButton()
    }
    updateQuestionView();
    disableNextButton();
}

document.addEventListener("DOMContentLoaded", gameLoaded)