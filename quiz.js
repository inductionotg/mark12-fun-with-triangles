const quizForm = document.querySelector('.quiz-form');
const submitAns = document.querySelector('#submit-ans');
const output = document.querySelector('.output');

const correctAnswers=['90','right angled','one right angled','14 15 26','Isosceles Triangle'];
function cal(){
    let score = 0;
    let index = 0;

    const formResu = new FormData(quizForm);
    for(let entry of formResu.values()){
        if (entry === correctAnswers[index]){
            score = score +1;
        }
        index = index +1;
        
    }
    output.innerText = 'Your score is:' + score;
    output.style.fontSize = '2rem';
    output.style.textAlign = 'center';
    output.style.color = 'green';
}
submitAns.addEventListener('click',cal);

