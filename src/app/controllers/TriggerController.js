class TriggerController {
    //GET
    triggerDate = async (req, res) => {
        try {
            const date = new Date();
            res.status(200).json({ message: "OK", date: date });
        } catch (error) {
            res.status(500).json(error);
        }
    };
}

module.exports = new TriggerController();
