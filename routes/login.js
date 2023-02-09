const userModel = require('../modules/mongooseModels');



// login route
const loginRoute = async (req, res) => {
    const { email, password } = req.body;
        await userModel.findOne({ email: email, password: password }, (err, user) => {
            if (err) {
                res.status(500).json({ error: err.message });
            }
            if (user) {
                res.status(200).json({ user });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        }
    )
}

// export

module.exports = loginRoute;