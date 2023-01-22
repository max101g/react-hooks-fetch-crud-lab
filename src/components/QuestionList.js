import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [quiz, setQuiz]= useState ([])

  useEffect (()=> {
    fetch ("http://localhost:4000/questions")
      .then ((r)=> r.json ())
      .then ((data)=> setQuiz(data))
  },[])

  function onDelete (Deleted) {
    const deletedQuestion = quiz.filter ((query)=> query.id !== Deleted.id)
    setQuiz (deletedQuestion)
  }

  const quizList = quiz.map ((question)=> {
    return <>{<QuestionItem key={question.id} question={question} onDelete = {onDelete}/>}</>
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
