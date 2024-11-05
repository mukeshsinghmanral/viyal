// pages/api/questions.js
export default async function handler(req, res) {
    const questions = [
        {
            text: 'What is cloud computing?',
            options: [
                'A method of storing data on physical hard drives',
                'Delivering computing services over the internet',
                'A type of hardware',
                'A software installation process'
            ],
            correctAnswer: 'Delivering computing services over the internet',
        },
        // Add more questions
    ];
    res.status(200).json({ questions });
}
