import React from "react";
import "./FinishedQuiz.css"
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className="FinishedQuiz">
            <ul>
                {
                    props.quiz.map((quizItem, index) => {

                        const clss = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times error' : 'fa-check success'
                        ]

                        return (

                            <li
                                key={index}
                            >
                                <strong>{index + 1}</strong>.&nbsp;
                                {quizItem.question}
                                <i className={clss.join(' ')}>{props.results[quizItem.id] === 'error' ? 'x' : 'o'}</i>
                            </li>
                        )
                    })
                }
            </ul>

            <p>Right {successCount} of {props.quiz.length}</p>
            <Button onClick={props.onRetry} type="primary">
                Repeat the quiz
            </Button>
            <Link to="/">
                <Button type="success">
                    Go to quiz list
                </Button>
            </Link>
        </div>
    )
}

export default FinishedQuiz
