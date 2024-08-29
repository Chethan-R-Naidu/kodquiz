import React from 'react'
import './quiz.css'
import { useState } from 'react'
import { data } from '../../data';




export default function Quiz() {

  const [index,setIndex] = useState(0);
  const [score,setScore] = useState(0);
  const [question,setQuestion] = useState(data[index]);
  const [islastPage,setIsLastPage] = useState(false);
  let [lock,setLock] = useState(false);

 
  function checkAnswer(e,ans){ //e stands for html element
    if(lock === false){
    if(ans === question.ans){
      e.target.classList.add('correct');
      setScore(score + 1)
    }
    else{
      e.target.classList.add('wrong');
      setLock(true);  
    }
   
  }
  

  }
  function nextQuestion(e){
    setLock(false);
    // Remove 'correct' or 'wrong' class
    const options = document.querySelectorAll('.quiz ul li');
    options.forEach(option => {
        option.classList.remove('correct', 'wrong');
    });

    if(index < data.length-1){
    setIndex(index+1)
    setQuestion(data[index + 1])
  }
  else{
    setIsLastPage(true)
  }
  }
  if(islastPage === true){
    return(
      <h1>Quiz score = {score}</h1>
      
    )
  }
  else{
  return (
    <div className='quiz'>
        <h1>Kod Quiz</h1>
        <h3>result of [{question.Question}]</h3>
        <ul>
            <li onClick={(e) => {checkAnswer(e,1)}}>{question.option1}</li>
            <li onClick={(e) => {checkAnswer(e,2)}}>{question.option2}</li>
            <li onClick={(e) => {checkAnswer(e,3)}}>{question.option3}</li>
            <li onClick={(e) => {checkAnswer(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={nextQuestion}>NEXT</button>
        <div>Question {index+1} of {data.length}</div>
    </div>
  )
}
}
