import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Highie() {
    const [showResults, setResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const frequencies = ["3150", "4000", "5000", "6300", "8000", "10000", "12500", "16000"];
    const random_frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    const frequency_onGame = new Audio("frequencies/" + random_frequency + ".wav");
    const play_frequency = () => {
        frequency_onGame.play();
    };
    const questions = [
        {
            frequency: "3150",
            options: [
                { id: 0, text: "3150", isCorrect: true },
                { id: 1, text: "4000", isCorrect: false },
                { id: 2, text: "5000", isCorrect: false },
                { id: 3, text: "6300", isCorrect: false }
            ],
        },

        {
            frequency: "4000",
            options: [
                { id: 0, text: "3150", isCorrect: false },
                { id: 1, text: "4000", isCorrect: true },
                { id: 2, text: "5000", isCorrect: false },
                { id: 3, text: "6300", isCorrect: false }
            ],
        },

        {
            frequency: "5000",
            options: [
                { id: 0, text: "3150", isCorrect: false },
                { id: 1, text: "4000", isCorrect: false },
                { id: 2, text: "5000", isCorrect: true },
                { id: 3, text: "6300", isCorrect: false }
            ],
        },

        {
            frequency: "6300",
            options: [
                { id: 0, text: "3150", isCorrect: false },
                { id: 1, text: "4000", isCorrect: false },
                { id: 2, text: "5000", isCorrect: false },
                { id: 3, text: "6300", isCorrect: true }
            ],
        },

        {
            frequency: "8000",
            options: [
                { id: 0, text: "5000", isCorrect: false },
                { id: 1, text: "6300", isCorrect: false },
                { id: 2, text: "8000", isCorrect: true },
                { id: 3, text: "10000", isCorrect: false }
            ],
        },

        {
            frequency: "10000",
            options: [
                { id: 0, text: "5000", isCorrect: false },
                { id: 1, text: "6300", isCorrect: false },
                { id: 2, text: "8000", isCorrect: false },
                { id: 3, text: "10000", isCorrect: true }
            ],
        },

        {
            frequency: "12500",
            options: [
                { id: 0, text: "8000", isCorrect: false },
                { id: 1, text: "10000", isCorrect: false },
                { id: 2, text: "12500", isCorrect: true },
                { id: 3, text: "16000", isCorrect: false }
            ],
        },

        {
            frequency: "16000",
            options: [
                { id: 0, text: "8000", isCorrect: false },
                { id: 1, text: "10000", isCorrect: false },
                { id: 2, text: "12500", isCorrect: false },
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
                <span className="title">Highie</span>
                <div className="quiz_container">
                    <div className="score_txt">
                        <span className="nes-text">puntaje: </span>
                        <span className="nes-text is-success">{score}</span>
                    </div>
                    {showResults ? (
                        <div>
                            < div className="results_txt">
                                <span className="nes-text">{score} de {questions.length + 2} aciertos</span>
                                <span className="nes-text">({(score / (questions.length + 2)) * 100}%)</span>
                                <button onClick={() => restart()} type="button" className="btn nes-btn is-primary repeat_btn">repetir</button>
                                <Link to="/waev" className="nes-btn btn repeat_btn">volver</Link>
                            </div>
                        </div>
                    ) : (
                        < div className="question_box">
                            <div className="btn freq_btn">
                                <button onClick={() => play_frequency()} type="button" id="freq_btn" className="nes-btn is-success">frecuencia</button>
                            </div>
                            <span className="nes-text">{currentQuestion + 1} de {questions.length + 2}</span>
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

export default Highie;