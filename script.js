

const startingTime = 75;
var timeLeft = startingTime;
var highscore = 0;
var highscores = [];
var quizFinished = false;

const Questions = [{
    id: 0,
    q: "This is a coding quiz consisting of 5 multiple choice questions. Time will be deducted for incorrect answers. Press 'continue' when ready!",
    a: [{text: " "}, {text: " "}, {text: " "}, {text: " "}, 

    ]
},
{
    id: 1,
    q: "Which of these is not part of the syntax of a JavaScript array?",
    a: [{ text: "one set of brackets around all elements", isCorrect: false },
        { text: "commas to separate each element", isCorrect: false },
        { text: "one set of parentheses around all elements", isCorrect: true },
        { text: "quotation marks around each element", isCorrect: false }
    ]
},
{
    id: 2,
    q: "What does DOM stand for?",
    a: [{ text: "Designated Object Model", isCorrect: false},
        { text: "Direct Object Model ", isCorrect: false },
        { text: "Document Object Module ", isCorrect: false },
        { text: "Document Object Model ", isCorrect: true }
    ]
},
{
    id: 3,
    q: "How do you create a new folder in terminal?",
    a: [{ text: "cd", isCorrect: false },
        { text: "ls", isCorrect: false },
        { text: "mkdir", isCorrect: true },
        { text: "pwd", isCorrect: false }
    ]
},
{
    id: 4,
    q: "What is the difference between a function declaration and a function expression?",
    a: [{ text: "a function expression is assigned to a variable", isCorrect: true },
        { text: "a function declaration is assigned to a variable", isCorrect: false },
        { text: "there is no difference", isCorrect: false },
        { text: "a function expression has yet to be fully defined", isCorrect: false }
    ]
},
{
    id: 5,
    q: "What term refers to the additional programming work that may be required in the future as a consequence of shortcuts used in the present?",
    a: [{ text: "bugs", isCorrect: false },
        { text: "technical debt", isCorrect: true },
        { text: "spaghetti code", isCorrect: false },
        { text: "code refactoring", isCorrect: false }
    ]
},
{
    id: 6,
    q: "Quiz complete!",
    a: [{text: " "}, {text: " "}, {text: " "}, {text: " "}]
}]

var start = true;


function iterate(id) {



var result = document.getElementsByClassName("result");
result[0].innerText = "";

var score = document.getElementById("score");



const question = document.getElementById("question");



question.innerText = Questions[id].q;


const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');



op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})


op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})


op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})


op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})


const evaluate = document.getElementsByClassName("evaluate");

evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct.";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Wrong!";
        result[0].style.color = "red";
        
    }
})
}

if (start) {
iterate("0");
}


const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 7) {
    id++;
    iterate(id);
    console.log(id);
}

function timerDisplay() {
    var time1 =
    time1 = time1 - 1;
    if (time1 < 75) {
        timeID.innerHTML = time1;
    }

    if (time1 < 1) {
        window.clearInterval(update);
    }
}

update = setInterval("timerDisplay()", 1000);

})