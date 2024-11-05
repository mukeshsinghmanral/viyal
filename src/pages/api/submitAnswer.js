// pages/api/submitAnswer.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { answer } = req.body;
        // Handle answer submission logic here
        res.status(200).json({ success: true });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
