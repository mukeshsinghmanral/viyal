// components/AnswerOptions.js
const AnswerOptions = ({ options, onAnswerChange }) => (
    <form className="space-y-2">
        {options.map((option, index) => (
            <label className="block text-gray-700" key={index}>
                <input
                    type="radio"
                    name="answer"
                    value={option}
                    onChange={() => onAnswerChange(option)}
                    className="mr-2 leading-tight"
                />
                {option}
            </label>
        ))}
    </form>
);

export default AnswerOptions;
