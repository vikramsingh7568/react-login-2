
import React, { useState } from "react";
import "./Register.css";
import usePasswordToggle from "../hooks/usePasswordToggle";
import validation from '../hooks/Validation';
import ServerValidation from "../hooks/ServerValidation";
const Register = () => {
  //  creting object to set all user vlaues
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

 // setting empty details error
let [errors , setError] = useState({})
let [error , setServerError] = useState({})

  // here we are getting all values from input field and we are setting values in name field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
 
  // onclick ke liye function
  const Register = () => {
    const { firstName, lastName, email, phone, password } = user;
    setError( validation(user))

    if (firstName && lastName && email && phone && password) {
      // POST request using fetch()
      fetch("http://localhost:9000/register", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          title: user,
        }),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        //.then((json) => alert(json.message));
        .then((json) =>  setServerError( ServerValidation(json)))
     } 
    //else {
    //   alert("alll field mandatory");
    // }
  };
  
const [passwordInputType, ToggleIcon]=usePasswordToggle();

  // eye password visibility code 

  return (
    
    <div className="register">
      <h1> Registration </h1>
      {error.message && <label style={{color:'red',fontSize:"15px"}}> {error.message}</label>}
   
      <div>
      <input
        className="input-type"
        type="text"
        name="firstName"
        value={user.firstName}
        placeholder="Enter your first name"
        onChange={handleChange}
      />

       {errors.firstName && <label style={{color:'red',fontSize:"15px" }}> {errors.firstName}</label>}
       {error.firstName && <label style={{color:"red" , fontSize:'15px'}}>{error.firstName} </label>}
       {error.firstNameSpace && <label style={{color:"red" , fontSize:'15px'}}>{error.firstNameSpace} </label>}
      
     </div>

     <div>  
      <input
        className="input-type"
        type="text"
        name="lastName"
        value={user.lastName}
        placeholder="Enter your last name"
        onChange={handleChange}
      />
       {errors.lastName && <label style={{color:'red',fontSize:"15px"}}> {errors.lastName}</label>}
       {error.lastName && <label style={{color:"red" , fontSize:'15px'}}>{error.lastName} </label>}
       {error.lastNameSpace && <label style={{color:"red" , fontSize:'15px'}}>{error.lastNameSpace} </label>}
       
      </div>
      <div>
      <input
        className="input-type"
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your E-mail"
        onChange={handleChange}
      />
      {errors.email && <label style={{color:'red',fontSize:"15px"}}> {errors.email}</label>}
      {error.email && <label style={{color:"red" , fontSize:'15px'}}>{error.email} </label>}
      {error.emailSpace && <label style={{color:"red" , fontSize:'15px'}}>{error.emailSpace} </label>}
      {error.emailPresent && <label style={{color:"red" , fontSize:'15px'}}>{error.emailPresent} </label>}
      
      </div>
      <div>
      <input
        className="input-type"
        type="text"
        name="phone"
        value={user.phone}
        placeholder="Enter your phone number"
        onChange={handleChange}
      />
      {errors.phone && <label style={{color:'red',fontSize:"15px"}}> {errors.phone}</label>}
      {error.phone && <label style={{color:"red" , fontSize:'15px'}}>{error.phone} </label>}
      {error.phoneSpace && <label style={{color:"red" , fontSize:'15px'}}>{error.phoneSpace} </label>}
      </div>
      <div>
      <input
        className="input-type"
        type={passwordInputType}
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />   
      {errors.password && <label style={{color:'red',fontSize:"15px"}}> {errors.password}</label>} 
      {error.password && <label style={{color:"red" , fontSize:'15px'}}>{error.password} </label>}
      {error.passwordSpace && <label style={{color:"red" , fontSize:'15px'}}>{error.passwordSpace} </label>}        
      <span className="password-toggle-icon"> {ToggleIcon}</span>
      </div>
      <button className="button-design" onClick={Register}>
        Register
      </button>
    </div>
    
  );
};
export default Register;
