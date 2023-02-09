const userModel = require('../modules/mongooseModels');
var SHA256 = require("crypto-js/sha256");




const createUser = async (req, res) => {
    const { name, email } = req.body;
    const password = SHA256(req.body.password)
    try {
        const user = await userModel.create({ name, email, password });
        res.status(201).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

// export

module.exports = createUser;