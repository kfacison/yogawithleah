const Subscriber = require('../../models/subscriber');

module.exports = {
    create,
    temp
};

async function create(req, res) {
    try {
        const { email } = req.body;
        const existingSubscriber = await Subscriber.findOne({ email });
        console.log("this was hit");
        if (existingSubscriber) {
            return res.status(409).json({ error: 'Your email is already on the list.' });
        }
        const subscriber = await Subscriber.create({ email });
        res.status(201).json(subscriber);
    } catch (error) {
        console.error('Error creating subscriber:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function temp(req, res) {
    try {
        console.log(req.body);
        res.json([])
    } catch (error) {
        console.log(error)
    }
}