// components/Question.js
import AnswerOptions from './AnswerOptions';


const Question = ({ question, onAnswerChange }) => (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 mb-4 w-full">
        <h3 className="text-xl font-bold mb-2">{question.text}</h3>
        <AnswerOptions
            options={question.options}
            onAnswerChange={onAnswerChange}
        />
    </div>
);

export default Question;
