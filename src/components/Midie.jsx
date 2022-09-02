import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Midie() {
    const [showResults, setResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const frequencies = ["400", "500", "630", "800", "1000", "1250", "1600", "2000", "2500"];
    const random_frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    const frequency_onGame = new Audio("frequencies/" + random_frequency + ".wav");
    const play_frequency = () => {
        frequency_onGame.play();
    };
    const questions = [
        {
            frequency: "400",
            options: [
                { id: 0, text: "400", isCorrect: true },
                { id: 1, text: "500", isCorrect: false },
                { id: 2, text: "630", isCorrect: false },
                { id: 3, text: "800", isCorrect: false }
            ],
        },

        {
            frequency: "500",
            options: [
                { id: 0, text: "400", isCorrect: false },
                { id: 1, text: "500", isCorrect: true },
                { id: 2, text: "630", isCorrect: false },
                { id: 3, text: "800", isCorrect: false }
            ],
        },

        {
            frequency: "630",
            options: [
                { id: 0, text: "400", isCorrect: false },
                { id: 1, text: "500", isCorrect: false },
                { id: 2, text: "630", isCorrect: true },
                { id: 3, text: "800", isCorrect: false }
            ],
        },

        {
            frequency: "800",
            options: [
                { id: 0, text: "400", isCorrect: false },
                { id: 1, text: "500", isCorrect: false },
                { id: 2, text: "630", isCorrect: false },
                { id: 3, text: "800", isCorrect: true }
            ],
        },

        {
            frequency: "1000",
            options: [
                { id: 0, text: "630", isCorrect: false },
                { id: 1, text: "800", isCorrect: false },
                { id: 2, text: "1000", isCorrect: true },
                { id: 3, text: "1250", isCorrect: false }
            ],
        },

        {
            frequency: "1250",
            options: [
                { id: 0, text: "630", isCorrect: false },
                { id: 1, text: "800", isCorrect: false },
                { id: 2, text: "1000", isCorrect: false },
                { id: 3, text: "1250", isCorrect: true }
            ],
        },

        {
            frequency: "1600",
            options: [
                { id: 0, text: "1250", isCorrect: false },
                { id: 1, text: "1600", isCorrect: true },
                { id: 2, text: "2000", isCorrect: false },
                { id: 3, text: "2500", isCorrect: false }
            ],
        },

        {
            frequency: "2000",
            options: [
                { id: 0, text: "1250", isCorrect: false },
                { id: 1, text: "1600", isCorrect: false },
                { id: 2, text: "2000", isCorrect: true },
                { id: 3, text: "2500", isCorrect: false }
            ],
        },

        {
            frequency: "2500",
            options: [
                { id: 0, text: "1250", isCorrect: false },
                { id: 1, text: "1600", isCorrect: false },
                { id: 2, text: "2000", isCorrect: false },
                { id: 3, text: "2500", isCorrect: true }
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
        <div className="waev-gamemode">
            <div className="waev-gamemode-container nes-container with-title is-dark">
                <span className="waev-gamemode-title title">Midie</span>
                <div className="waev-gamemode-quiz-container">
                    <div className="waev-gamemode-quiz-score">
                        <span className="waev-gamemode-quiz-score-text nes-text">puntaje: </span>
                        <span className="waev-gamemode-quiz-score-text nes-text is-success">{score}</span>
                    </div>
                    {showResults ? (
                        <div>
                            < div className="waev-gamemode-quiz-finalscore">
                                <div className="waev-gamemode-quiz-finalscore-text">
                                    <span className="nes-text">{score} de {questions.length + 1} aciertos</span>
                                    <span className="nes-text">({(score / (questions.length + 1)) * 100}%)</span>
                                </div>
                                <div className="waev-gamemode-quiz-finalscore-btn">
                                    <button onClick={() => restart()} type="button" className="waev-btn nes-btn is-primary">repetir</button>
                                    <Link to='/' className="waev-btn nes-btn">volver</Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        < div className="waev-gamemode-quiz-alternatives">
                            <button onClick={() => play_frequency()} type="button" className="waev-gamemode-quiz-alternatives-frequency waev-btn nes-btn is-success">frecuencia</button>
                            <span className="waev-gamemode-quiz-alternatives-text nes-text">{currentQuestion + 1} de {questions.length + 1}</span>
                            <ul className="waev-gamemode-quiz-alternatives-list nes-list">
                                {questions[questions_index_frequency].options.map((option) => {
                                    return (
                                        <li onClick={() => optionClicked(option.isCorrect)} key={option.id} className="waev-gamemode-quiz-alternatives-list-item">
                                            <a className="nes-badge">
                                                <span className="waev-btn nes-text is-warning">{option.text}</span>
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

export default Midie;