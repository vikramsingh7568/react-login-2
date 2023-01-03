import React,{useState} from 'react'
import "./Register.css"
import axios from 'axios'
const Register = () => {
//  creting object to set all user vlaues
  const [user,setUser] = useState({
    name : '',
    email: '',
    password:'',
    reEnterP: '',
  })
    // here we are getting all values from input field and we are setting values in name field
    const handleChange = e =>{
       const { name , value} = e.target
       setUser({
        ...user,
        [name] : value
       })
    }

    // onclick ke liye function 
    const Register=()=>{
        const { name, email, password , reEnterP} = user
        if(name && email && (password === reEnterP)) {
        axios.post('http://localhost:9000/register',user)
        .then(res => alert(res.body.message) )
    }else{
      alert("alll field mandatory")
    }
  }


  return (
    <div className='register'>
      {/* {console.log("user", user)} */}
    <h1> Register </h1> 
    <input type="text" name='name'  value={user.name}  placeholder='Enter your name' onChange={handleChange}  />
    <input type="text" name='email' value={user.email} placeholder='Enter your E-mail' onChange={handleChange} />
    <input type="password" name='password' value={user.password} placeholder="Enter your password" onChange={handleChange} />
    <input type="password" name='reEnterP' value={user.reEnterP} placeholder="Re-Enter your password" onChange={handleChange}/>
    <button className='button' onClick={Register}>Register</button>
    <div> or</div>
    <button className='button'>Login</button>
    </div>
  )
}
export default Register
