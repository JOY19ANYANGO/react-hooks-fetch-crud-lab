import React,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const[questions,SetQuestions]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((r)=>r.json())
    .then((data)=>{
      console.log(data)
      SetQuestions(data)
    })
  },[])
function handleDeletedQuestion(deletedQuestion) {
  const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
  SetQuestions(updatedQuestions);
}
function handleUpdatedQuestion(updatedQuestion) {
  const updatedQuestions = questions.map((question) =>
    question.id === updatedQuestion.id ? updatedQuestion : question
  );
  setQuestions(updatedQuestions);
}
  return (
    <section>
      <h1>Quiz Questions</h1>
       {questions.map((question)=>(
        <QuestionItem 
        key={question.id}
          question={question}
          onDeleteQuestion={handleDeletedQuestion}
          onUpdateQuestion={handleUpdatedQuestion}
        />
       ))}
    </section>
  );
}

export default QuestionList;
