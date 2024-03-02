exports.get404 = (req, res, next) => {
    try {
        return res.status(404).json({ message: 'This request does not exist.' })
    } catch (error) {
        return res.status(500).json({ error: `${err}` })
    }
}