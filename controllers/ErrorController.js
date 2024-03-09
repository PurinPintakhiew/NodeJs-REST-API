class ErrorController {
    get404(req, res) {
        try {
            return res.status(404).json({ message: 'This request does not exist.' });
        } catch (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new ErrorController();