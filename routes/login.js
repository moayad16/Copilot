const userModel = require("../modules/mongooseModels");
var SHA256 = require("crypto-js/sha256");

// login route
const loginRoute = async (req, res) => {
  const { email } = req.body;
  const password = SHA256(req.body.password).toString();
  
    await userModel.findOne({email: email, password: password})
    .then((result) => {
        if (result) {
            res.status(200).json({ result });
          } else {
            res.status(404).json({ error: "User not found" });
          }
    })
    .catch((err) => {
        res.status(500).json({ error: err.message });
        console.log(err);
    })

};

// export

module.exports = loginRoute;
