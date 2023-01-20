const registermodel = require("../model/registerModel.js");
const {
  isValidName,
  isValidBody,
  isValidEmail,
  isValidPwd,
  isValidPhone,
  hasWhiteSpace,
} = require("../validators/validations.js");
// register user
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body.title;
   
    if (isValidBody(req.body))
      return res.send({ message: "please enter valid data " });

    if (!isValidName(firstName)) {
      return res.send({ firstName: "please enter valid firstname only alphabet Allowed" });
    }

    if (hasWhiteSpace(firstName)) {
      return res.send({ firstNameSpace: "space is not allowed in firstname" });
    }

    if (!isValidName(lastName))
      return res
        .status(400)
        .send({ status: false, lastName: "please enter valid lastname only alphabet Allowed" });

        if (hasWhiteSpace(lastName)) {
          return res.send({ lastNameSpace: "space is not allowed in lastname" });
        }

    if (!isValidEmail(email))
      return res
        .status(400)
        .send({
          email: "please enter valid email",
         });

         if (hasWhiteSpace(email)) {
          return res.send({ emailSpace: "space is not allowed in email" });
        }
    

    if (!isValidPhone(phone))
      return res
        .status(400)
        .send({ status: false, phone: "please enter valid phone number" });

        if (hasWhiteSpace(phone)) {
          return res.send({ phoneSpace: "space is not allowed in phoneNumber" });
        }

    if (!isValidPwd(password))
      return res.status(400).send({
        status: false,
        password:
          "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters",
      });

      if (hasWhiteSpace(password)) {
        return res.send({ passwordSpace: "space is not allowed in password" });
      }

    let findData = await registermodel.findOne({ email: email });
    if (findData)
      return res.send({
        status: false,
        emailPresent: "this email id is already registered",
      });

    let DataSave = await registermodel.create(req.body.title);
    return res.send({
      status: false,
      message: "successfully created",
      DataSave,
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = { registerUser };
