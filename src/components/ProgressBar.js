// components/ProgressBar.js
const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;
