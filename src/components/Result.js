// components/Result.js
const Result = ({ score, total }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
        <p className="text-lg">Your Score: {score} / {total}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md">
            Retry Quiz
        </button>
    </div>
);

export default Result;
