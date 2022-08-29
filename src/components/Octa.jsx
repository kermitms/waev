import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Octa() {
    const [showResults, setResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const frequencies = ["63", "125", "250", "500", "1000", "2000", "4000", "8000", "16000"];
    const random_frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    const frequency_onGame = new Audio("frequencies/" + random_frequency + ".wav");
    const play_frequency = () => {
        frequency_onGame.play();
    };
    const questions = [
        {
            frequency: "63",
            options: [
                { id: 0, text: "63", isCorrect: true },
                { id: 1, text: "125", isCorrect: false },
                { id: 2, text: "250", isCorrect: false },
                { id: 3, text: "500", isCorrect: false }
            ],
        },

        {
            frequency: "125",
            options: [
                { id: 0, text: "63", isCorrect: false },
                { id: 1, text: "125", isCorrect: true },
                { id: 2, text: "250", isCorrect: false },
                { id: 3, text: "500", isCorrect: false }
            ],
        },

        {
            frequency: "250",
            options: [
                { id: 0, text: "125", isCorrect: false },
                { id: 1, text: "250", isCorrect: true },
                { id: 2, text: "500", isCorrect: false },
                { id: 3, text: "1000", isCorrect: false }
            ],
        },

        {
            frequency: "500",
            options: [
                { id: 0, text: "125", isCorrect: false },
                { id: 1, text: "250", isCorrect: false },
                { id: 2, text: "500", isCorrect: true },
                { id: 3, text: "1000", isCorrect: false }
            ],
        },

        {
            frequency: "1000",
            options: [
                { id: 0, text: "250", isCorrect: false },
                { id: 1, text: "500", isCorrect: false },
                { id: 2, text: "1000", isCorrect: true },
                { id: 3, text: "2000", isCorrect: false }
            ],
        },

        {
            frequency: "2000",
            options: [
                { id: 0, text: "500", isCorrect: false },
                { id: 1, text: "1000", isCorrect: false },
                { id: 2, text: "2000", isCorrect: true },
                { id: 3, text: "4000", isCorrect: false }
            ],
        },

        {
            frequency: "4000",
            options: [
                { id: 0, text: "1000", isCorrect: false },
                { id: 1, text: "2000", isCorrect: false },
                { id: 2, text: "4000", isCorrect: true },
                { id: 3, text: "8000", isCorrect: false }
            ],
        },

        {
            frequency: "8000",
            options: [
                { id: 0, text: "2000", isCorrect: false },
                { id: 1, text: "4000", isCorrect: false },
                { id: 2, text: "8000", isCorrect: true },
                { id: 3, text: "16000", isCorrect: false }
            ],
        },

        {
            frequency: "16000",
            options: [
                { id: 0, text: "2000", isCorrect: false },
                { id: 1, text: "4000", isCorrect: false },
                { id: 2, text: "8000", isCorrect: false },
                { id: 3, text: "16000", isCorrect: true }
            ],
        }
    ];
    const questions_index_frequency = questions.findIndex((element) => element.frequency == random_frequency);
    const optionClicked = (isCorrect) => {
        frequency_onGame.pause();
        if (isCorrect) {
            setScore(score + 1);
        };
        if (currentQuestion + 1 <= questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setResults(true);
        };
    };
    const restart = () => {
        setScore(0);
        setCurrentQuestion(0);
        setResults(false);
    };
    return (
        <div className="App">
            <div className="nes-container with-title is-dark">
                <span className="title">Octa</span>
                <div className="quiz_container">
                    <div className="score_txt">
                        <span className="nes-text">puntaje: </span>
                        <span className="nes-text is-success">{score}</span>
                    </div>
                    {showResults ? (
                        <div>
                            < div className="results_txt">
                                <span className="nes-text">{score} de {questions.length + 1} aciertos</span>
                                <span className="nes-text">({(score / (questions.length + 1)) * 100}%)</span>
                                <button onClick={() => restart()} type="button" className="btn nes-btn is-primary repeat_btn">repetir</button>
                                <Link to="/waev" className="nes-btn btn repeat_btn">volver</Link>
                            </div>
                        </div>
                    ) : (
                        < div className="question_box">
                            <div className="btn freq_btn">
                                <button onClick={() => play_frequency()} type="button" id="freq_btn" className="nes-btn is-success">frecuencia</button>
                            </div>
                            <span className="nes-text">{currentQuestion + 1} de {questions.length + 1}</span>
                            <ul>
                                {questions[questions_index_frequency].options.map((option) => {
                                    return (
                                        <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>
                                            <a href="#" className="nes-badge">
                                                <span className="btn question_option nes-text is-warning">{option.text}</span>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Octa;