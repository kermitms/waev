import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Lowie() {
    const [showResults, setResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const frequencies = ["50", "63", "80", "100", "125", "160", "200", "250", "315"];
    const random_frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    const frequency_onGame = new Audio("frequencies/" + random_frequency + ".wav");
    const play_frequency = () => {
        frequency_onGame.play();
    };
    const questions = [
        {
            frequency: "50",
            options: [
                { id: 0, text: "50", isCorrect: true },
                { id: 1, text: "63", isCorrect: false },
                { id: 2, text: "80", isCorrect: false },
                { id: 3, text: "100", isCorrect: false }
            ],
        },

        {
            frequency: "63",
            options: [
                { id: 0, text: "50", isCorrect: false },
                { id: 1, text: "63", isCorrect: true },
                { id: 2, text: "80", isCorrect: false },
                { id: 3, text: "100", isCorrect: false }
            ],
        },

        {
            frequency: "80",
            options: [
                { id: 0, text: "50", isCorrect: false },
                { id: 1, text: "63", isCorrect: false },
                { id: 2, text: "80", isCorrect: true },
                { id: 3, text: "100", isCorrect: false }
            ],
        },

        {
            frequency: "100",
            options: [
                { id: 0, text: "50", isCorrect: false },
                { id: 1, text: "63", isCorrect: false },
                { id: 2, text: "80", isCorrect: false },
                { id: 3, text: "100", isCorrect: true }
            ],
        },

        {
            frequency: "125",
            options: [
                { id: 0, text: "80", isCorrect: false },
                { id: 1, text: "100", isCorrect: false },
                { id: 2, text: "125", isCorrect: true },
                { id: 3, text: "160", isCorrect: false }
            ],
        },

        {
            frequency: "160",
            options: [
                { id: 0, text: "80", isCorrect: false },
                { id: 1, text: "100", isCorrect: false },
                { id: 2, text: "125", isCorrect: false },
                { id: 3, text: "160", isCorrect: true }
            ],
        },

        {
            frequency: "200",
            options: [
                { id: 0, text: "160", isCorrect: false },
                { id: 1, text: "200", isCorrect: true },
                { id: 2, text: "250", isCorrect: false },
                { id: 3, text: "315", isCorrect: false }
            ],
        },

        {
            frequency: "250",
            options: [
                { id: 0, text: "160", isCorrect: false },
                { id: 1, text: "200", isCorrect: false },
                { id: 2, text: "250", isCorrect: true },
                { id: 3, text: "315", isCorrect: false }
            ],
        },

        {
            frequency: "315",
            options: [
                { id: 0, text: "160", isCorrect: false },
                { id: 1, text: "200", isCorrect: false },
                { id: 2, text: "250", isCorrect: false },
                { id: 3, text: "315", isCorrect: true }
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
                <span className="waev-gamemode-title title">Lowie</span>
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

export default Lowie;