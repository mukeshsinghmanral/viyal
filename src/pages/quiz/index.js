// pages/quiz/index.js
import { useState, useEffect } from 'react';
import Question from '../../components/Question';
import Timer from '../../components/Timer';
import ProgressBar from '../../components/ProgressBar';
import Score from '../../components/Score';
import Result from '../../components/Result';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizComplete, setIsQuizComplete] = useState(false);

    useEffect(() => {
        async function fetchQuestions() {
            const res = await fetch('/api/questions'); // Corrected the endpoint
            const data = await res.json();
            setQuestions(data.questions);
        }
        fetchQuestions();
    }, []);

    const handleAnswerChange = (answer) => {
        if (answer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizComplete(true);
        }
    };

    const handleTimeUp = () => {
        alert('Time is up!');
        handleNextQuestion();
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
            {!isQuizComplete ? (
                <>
                    <h1 className="text-lg font-extrabold text-blue-600 mb-4">
                        Talent Screening Portal
                    </h1>
                    <Score score={score} />
                    <Timer timeLimit={30} onTimeUp={handleTimeUp} />
                    <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
                    {questions.length > 0 && questions[currentQuestionIndex] ? ( // Check if questions are loaded
                        <Question
                            question={questions[currentQuestionIndex]}
                            onAnswerChange={handleAnswerChange}
                        />
                    ) : (
                        <p>Loading question...</p>
                    )}
                    <button
                        onClick={handleNextQuestion}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded shadow-md"
                    >
                        Next Question
                    </button>
                </>
            ) : (
                <Result score={score} total={questions.length} />
            )}
        </div>
    );
};

export default QuizPage;
