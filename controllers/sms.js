const twilio = require("twilio");
const service = require("../services");
const db = require("../config");

const client = new twilio(db.accessTokenSid, db.authTokenSid);

const createSMS = (req, res) => {
  client.calls
    .create({
      body: "Hola soy edgar",
      to: "+573185872560",
      from: "+13023053475",
    })
    .then((msg) => {
      console.log(msg.sid);
      response.status(200).json(msg.sid);
    });
};

module.exports = {
  createSMS,
};
