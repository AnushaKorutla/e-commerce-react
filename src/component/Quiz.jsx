import React, { useEffect, useState } from "react";
import {quiz} from './Data/quizData.jsx';

export default function Quiz(){
    const[current,setCurrent]=useState(0);
    const[selected, setSelected]=useState('');
    const[score,setScore]=useState(0);
    const[done,setDone]=useState(false);
    const [saved, setSaved]=useState(false);

    const q=quiz.questions[current];

    const handleSelect = (opt) => setSelected(opt);

    const handleNext =()=>{
        if(selected===q.ans) setScore(s=> s+1);
        setSelected('');
        if(current + 1<quiz.questions.length)setCurrent((c) => c+1);
        else setDone(true);
    };

    useEffect(()=>{
        if (done && !saved){
            const userEmail = localStorage.getItem("userEmail")||"Anonymous";
            const scores = JSON.parse(localStorage.getItem("Scores")||"[]");
            scores.push({email:userEmail, score:score});
            localStorage.setItem("scores", JSON.stringify(scores));
            setSaved(true);
        }
    },[done, saved, score]);

    if (done){
        return(
            <div>
                <h2>Quiz completed</h2>
                <h2>Your score:{score}/{quiz.questions.length}</h2>
                {/* <button onClick={()=>{
                    setCurrent(0); setScore(0); setDone(false);
                }}>Restart</button> */}
            </div>
        );
    }

    return(
        <div className="quiz-container">
            <div className="quiz-inner">
            <h3 className="quiz-question">{q.q}</h3>
            <ul className="quiz-option">
                {['a','b','c','d'].map(key =>(
                    <li key={key}>
                        <label>
                            <input
                            type="radio"
                            name="choice"
                            value={q[key]}
                            checked={selected ===q[key]}
                            onChange={()=> handleSelect(q[key])}
                            />
                            {q[key]}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={handleNext} disabled={!selected}>
                {current +1 === quiz.questions.length?'Finish':'Next'}
            </button>
            </div>
        </div>
    )

}

