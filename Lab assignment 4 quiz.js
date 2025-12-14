// Quiz data: array of objects with questions and answers.
undefined
const quizQuestions = [{ question:"What is the capital of India?", answer:"Delhi"},
{question: "Which planet is known as the red planet?", answer:"mars"},
                       { question: "What is 5+7?", answer: "12"},
                       { question: "Who is President of Russia?", answer: "Vladmir Putin"},
                       {question: "Which language is used for Web Development?", answer: "Javascript"}];
undefined
// Function to run the quiz.
undefined
function runQuiz() {
    let score = 0; //Initilize score
    for (let i= 0; i < quizQuestions.length; i++) {
        // Take user input 
        const userAnswer = prompt(quizQuestions[i].question);
        //Check answer (case-insensitive and trimmed)
        if (userAnswer && userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()) {alert("Correct!");
                                                                                                             score++;
                                                                                                             } else{alert( 'Wrong! The correct answer is: $(quizQuestions[i].answer}');
                                                                                                                    }
    }
    //Show final score
    alert('Quiz over! Your final score is ${score} out of ${quizQuestions.length}');}
undefined
runQuiz();
