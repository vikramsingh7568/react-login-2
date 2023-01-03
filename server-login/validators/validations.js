


const isValidName = function (name) {
    if (/^[a-z ,.'-]+$/i.test(name)) return true;
    return false;
  };

  const isValidBody = (reqBody) => {
    return Object.keys(reqBody).length == 0;
  };


const isValidEmail = (Email) => {
    console.log(Email)
    return /^([A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6})+$/.test(Email);
  };

  const isValidPwd = (Password) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(
      Password
    );
  };
  
module.exports = {isValidName,isValidBody,isValidEmail,isValidPwd}