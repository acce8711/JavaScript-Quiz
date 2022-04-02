// array that contains the correct answer for each question
let correctAnswers = ["Twinkies","Roasted Seaweed","Bugles","Veggie Straws","Milano"];

// function that hides the div that prompts the user to play and displasy the first quiz question
// if user takes the quiz again, the function styles any elemnts that were restyled during the quiz
function start(qNumber) {
    //getting the div that contain elements that prompt the user to start quiz and hiding that div
    document.getElementsByClassName("startDiv")[0].style.display = "none";
    //getting the first question div and making it appear
    document.getElementsByClassName("container")[qNumber].style.display = "flex";

    //following code in this function is mainly for when user takes the quiz again
    //creating a variable that contains an array with the correct answers outputs for each question div
    let scoreText = document.getElementsByClassName("answerDisplay");
    //looping through all of the corect answer outputs diaplayed on each of the question divs
    for (let i=0;i<scoreText.length;i++) {
        //hiding the correct asnwer output on each of the question divs
        scoreText[i].style.display = "none";
    }

    //for loop that loops through a block of code 5 times and styling each question div
    for (let i=0;i<5;i++) {
        document.getElementsByClassName("container")[i].style.pointerEvents = "all";
        document.getElementsByClassName("container")[i].style.position = "absolute";
        document.getElementsByClassName("container")[i].style.border = "4px solid rgb(25, 25, 48)";
        document.getElementsByClassName("container")[i].style.borderRadius = "10px";
    }
}


//function that calls the function that counts the score and the function that goes to next div
function next(answer, qNumber) {
    scoreCount(answer,qNumber);
    nextQuestion(qNumber);
}

//setting the score variable to 0
let score = 0;
//fucntion that checks whether answer is correct, adjusts the score if it is
//function also outputs the correct answer on to the question div
function scoreCount(answer,qNumber) {
    //checking if user answer equals to the answer in the correctAnswers array
    if (answer==correctAnswers[qNumber-1]) {
        //incrementing score
        score++;
        //displaying correct asnwer and user answer on the question div
        document.getElementsByClassName("answerDisplay")[qNumber-1].style.display = "block";
        document.getElementsByClassName("answerDisplay")[qNumber-1].innerHTML = "Chosen answer: "+ answer + "<br> Correct!";
    }
    //else statement if user answer does not equal to the answer in the correctAnswers array
    else {
        //displaying correct asnwer and user answer on the question div
        document.getElementsByClassName("answerDisplay")[qNumber-1].style.display = "block";
        document.getElementsByClassName("answerDisplay")[qNumber-1].innerHTML = "Chosen answer: "+ answer + "<br> Correct answer: " + correctAnswers[qNumber-1];
    }
}

//function that hides current question div and displays the next div
function nextQuestion(qNumber) {
    //checking if the qNumber is equal to 5
    if (qNumber==5) {
        //calling the function that will end the quiz
        end(qNumber)  
    }
    //if qNumber is not equal to 5
    else {
        //refrenced how to hide current div and display new one from Youtube (Bee Coder, 2021)
        //hiding the current questions div
        document.getElementsByClassName("container")[qNumber-1].style.display = "none";
        //displaying the next question div
        document.getElementsByClassName("container")[qNumber].style.display = "flex";
    }
}

//function that will end the quiz 
//function will display score and the correct answers
function end(qNumber) {
    //displaying the div that contains score and button that prompts the user to take the quiz again
    document.getElementsByClassName("end")[0].style.display = "flex";
    //checking if the score is less than 5
    if (score<5) {
        //displaying the score and informing the user that they are not a snacks expert
        document.getElementById("score").innerHTML = "You don't know your snacks.<br>Score: "+score+"/5";
    }
    //if the score is not less than 5
    else {
        //displaying the score and informing the user that they are a snacks expert
        document.getElementById("score").innerHTML = "You know your snacks!<br>Score: "+score+"/5";
    }

    //looping through for loop 5 times and styling each question div
    for (let i=0;i<5;i++) {
        document.getElementsByClassName("container")[i].style.display = "flex";
        document.getElementsByClassName("container")[i].style.pointerEvents = "none";
        document.getElementsByClassName("container")[i].style.border = "none";
        document.getElementsByClassName("container")[i].style.borderRadius = "0px";
        document.getElementsByClassName("container")[i].style.position = "static";
    }
}

//function that will restart quiz
//fucntion will reset score and hid all divs except and show the startDiv div that prompts user to take quiz
function restart() {
    //setting score to zero
    score = 0;
    //looping through a for loop 5 times
    for (let i=0;i<5;i++) {
        //hiding all of the question divs
        document.getElementsByClassName("container")[i].style.display = "none";
    }
    //hiding the div that displays the score and prompts user to retake quiz 
    document.getElementsByClassName("end")[0].style.display = "none";
    //displaying the div that propmts user to take quiz
    document.getElementsByClassName("startDiv")[0].style.display = "flex";
}

