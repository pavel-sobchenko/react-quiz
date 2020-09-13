import React from "react";
import './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className="ActiveQuiz">
        <p className="Question">
            <span>
                <strong>2.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.activeQuestion} of {props.quizLength}</small>
        </p>
        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz;
