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
        const response = await fetch(apiUrl);

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
        console.log("Trivia Questions:", data);
    } catch (error) {
        loaderMessage.innerHTML = "Failed to load quiz. Please try again.";
        console.error("Failed to fetch trivia questions:", error);
    }
}


function gameLoaded() {
    fetchTriviaQuestions(20, 9, "easy", "multiple");
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

    // Reusable function to handle option selection
    function handleOptionClick(optionIndex) {
        const currentKey = stateKeys[optionIndex];
        if (selectState[currentKey]) {
            resetOptions();
            selectState[currentKey] = false;
        } else {
            resetOptions();
            elements[optionIndex].style.backgroundColor = "rgb(152, 5, 5)";

            // Update selectState
            stateKeys.forEach((key, index) => {
                selectState[key] = index === optionIndex;
            });
        }
    }

    // Add event listeners dynamically
    elements.forEach((element, index) => {
        element.addEventListener("click", () => handleOptionClick(index));
    });

    // Set question text dynamically
    const questions = ["DOG", "FISH", "HEN", "BIKE"];
    questions.forEach((question, index) => {
        const questionElement = document.querySelector(`#q${index + 1}`);
        questionElement.innerHTML = question;
    });
}

document.addEventListener("DOMContentLoaded", gameLoaded)