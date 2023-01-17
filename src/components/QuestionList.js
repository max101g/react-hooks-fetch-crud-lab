import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [quiz, setQuiz]= useState ([])

  useEffect (()=> {
    fetch ("http://localhost:4000/questions")
      .then ((r)=> r.json ())
      .then ((data)=> setQuiz(data))
  },[])

  const quizList = quiz.map ((question)=> {
    return <li key={question.id}>
              {question.prompt}
           </li>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {quizList}
      </ul>
    </section>
  );
}

export default QuestionList;
