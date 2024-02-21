let theLinke=new URLSearchParams(window.location.search);
let category= theLinke.get('category');
let randomNumber = Math.floor(Math.random() * 5);


fetch('DATA.json')

.then((response) => response.json())
.then(data => {

    let Randomquestion="question"+randomNumber
    let RandomAnswer="answer"+randomNumber
    let answerLettersNumber = data[category][RandomAnswer].length;

    console.log(data[category][Randomquestion])
    console.log(data[category][RandomAnswer])
    console.log(answerLettersNumber)

    
    let Question=document.getElementById('Question')
    Question.textContent=data[category][Randomquestion]

    let ICON=document.getElementById('ICON')
    ICON.style.backgroundImage="url("+category+".png)"

    //  let STROKEICONE=document.getElementById('STROKE-ICONE')
    //  STROKEICONE.style.backgroundImage="url("+category+"-stroke.png)"
    
    function updateTimer() {
        let TIMER = document.getElementById('TIMER');
        TIMER.textContent = parseInt(TIMER.textContent) + 1;
        setTimeout(updateTimer, 1000);
    }
    updateTimer();


for(let i=0;i<answerLettersNumber;i++){
let ANSWERSECTION=document.createElement('div')
ANSWERSECTION.className="ANSWER-SECTION"
let ANSWERLETTER=document.createElement('span')
ANSWERLETTER.id= "LETTER"+i
ANSWERSECTION.appendChild(ANSWERLETTER)

let ANSWERCONTAINER=document.getElementById('ANSWER-CONTAINER')
ANSWERCONTAINER.appendChild(ANSWERSECTION)

}


})

function getId(clickedElement) {
    let elementId = clickedElement.id;

    fetch('DATA.json')
        .then((response) => response.json())
        .then(data => {
            let RandomAnswer = "answer" + randomNumber;
            let answerLettersNumber = data[category][RandomAnswer].length;
            let ANSWER=data[category][RandomAnswer].toUpperCase()
            let AnswerArray = ANSWER.split('');
         
         
            for (let i = 0; i < answerLettersNumber; i++){
                if(AnswerArray[i]===elementId){
                   
                        let LETTER=document.getElementById(elementId)
                        LETTER.style.border = "green solid 3px";
                        let ANSWERLETTER = document.getElementById("LETTER"+i);
                        ANSWERLETTER.textContent = elementId;
                        break;
            }
      
            else{
                let LETTER=document.getElementById(elementId)
                LETTER.style.border = "red solid 3px";
                let ATTEMPT=document.getElementById('ATTEMPTS')
                ATTEMPT.innerHTML=(ATTEMPT.textContent)-1;
            }
   }
   });
}

//    if(ATTEMPTS.textContent==="0"){
//     let FINISH=document.getElementById('STROKE-ICONE')
//     let LOSEICON=document.getElementById('LOSE-ICON')
//     FINISH.style.display= ""
//     LOSEICON.style.backgroundImage="url("+category+"-LOSE.png)"
// }





