const registermodel =  require('../model/registerModel.js');
const {isValidName,isValidBody,isValidEmail,isValidPwd} = require('../validators/validations.js')
// register user 
const registerUser = async(req,res)=>{
    try{
   // console.log(req.body)
    const {name, email, password}=req.body
    
    if(isValidBody(req.body)) return res.status(409).send({status : false , message : 'please enter valid data '})
    if(!isValidName(name)) return res.status(409).send({status : false , message : 'please enter valid name '})
    if(!isValidEmail(email)) return res.status(409).send({status : false , message : 'please enter valid email'})
     
    if (!isValidPwd(password))
    return res.status(400).send({
      status: false,
      message:
        "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters",
    });

    let findData = await registermodel.findOne({email : email})
     if(findData) return res.send({status : false, message :'this email id is already registered'})
    //console.log("hiihbsdvbfkdknmedbgjndmefj")
    //console.log(name, email, password,reEnterP)

    // let DataSave = await  registermodel.create(req.body)
     //console.log("user is created successfully",DataSave)
}catch(err){
    console.log(err.message)
 res.send(err.message)
}
}


// signup 
const login =async(req,res)=>{
    try{
    const {email, password } = req.body
    if(isValidBody(req.body)) return res.status(409).send({status : false , message : 'please enter valid data '})
    if(!isValidEmail(email)) return res.send({status : false , message : 'please enter valid email'})
    if (!isValidPwd(password))
    return res.status(400).send({
      status: false,
      message:
        "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters",
    });

    let findData = await registermodel.findOne({email : email})
     if(!findData) return res.send({status : false, message : 'no data found please input with correct email '})
    
    if(findData.password == password) return res.send({status : false, message :'log in successfull' , user : findData})
    else return res.send({status : false, message : 'your password is incorrect'})
} catch(error){
    return res.send({status : false, message : error.message})
}
}

module.exports = {registerUser,login};