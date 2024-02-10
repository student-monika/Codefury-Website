document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.querySelector('.quiz-intro');
    const quizSection = document.querySelector('.quiz-container');
    const quizForm = document.getElementById('wellbeing-quiz');
    const resultElement = document.getElementById('result');
    const submitButton = document.getElementById('submit-button');
    
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();

        
        const q1 = document.getElementById('q1').value;
        const q2 = document.getElementById('q2').value;
        const q3 = document.getElementById('q3').value;

        const score = calculateWellBeingScore(q1, q2, q3);
        const message = assessWellBeing(score);

        resultElement.textContent = `Your well-being score is ${score}. ${message}`;
        
    });
    function calculateWellBeingScore(q1, q2, q3) {
        
        const valueMap = {
            yes: 1,
            no: 0,
            happy: 2,
            neutral: 1,
            unhappy: 0
        };

        return valueMap[q1] + valueMap[q2] + valueMap[q3];
    }

    function assessWellBeing(score) {
        
        if (score <= 2) {
            return "You may want to consider seeking support or practicing self-care.";
        } else {
            return "You are doing well in terms of mental well-being!";
        }
    }
})








