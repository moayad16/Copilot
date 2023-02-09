const userModel = require("../modules/mongooseModels")



// delete user

const deleteUser = async (req, res) => {
    const { id } = req.body;
    console.log(req.body);
    try {
        const user = await userModel.findByIdAndDelete(id);
        res.status(201).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

// export

module.exports = deleteUser;

