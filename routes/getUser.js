const userModel = require('../modules/mongooseModels');

// get user route

const getUser = async (req, res) => {
    const { id } = req.body;
    try {
        const user = await userModel.findById(id);
        res.status(201).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

// export

module.exports = getUser;
