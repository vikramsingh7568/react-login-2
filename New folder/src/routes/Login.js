import React,{useState} from 'react'
import axios from 'axios'
import "./Login.css"
// import {useHistory} from 'react-router-dom'


const Login = () => {

  //  const history = useHistory()

  // creating user object to get values from the form and store them
  const [user,setUser] = useState({
    email: '',
    password:'',
  })

    // using this function we are getting all vlues from teh form 
    const handleChange = e =>{
       const { name , value} = e.target
       setUser({
        ...user,
        [name] : value
       })
    }
    const login=()=>{
      const { email, password} = user
      if(email && password ) {
      axios.post('http://localhost:9000/login',user)
      .then(res => alert(res.data.message) )
  }else{
    alert("alll field mandatory")
  }
}


  return (
  
     <div className='login'>
     {console.log("user",user)}
     <h1> Login page </h1> 
     <input type="text" name='email' value={user.email} placeholder='Enter your name' onChange={handleChange} />
     <input type="password" name='password' value={user.password} placeholder="Enter your password" onChange={handleChange}/>
     <button className='button' onClick={login}> Login</button>
     <div> or</div>
     <button className='button' > Register</button>
     </div>
  )
}

export default Login