import React, { useState } from 'react';

const Login = () => {
    const [state, setState] = useState("Registrieren");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
}

    const login = async() => {
console.log("Login Function Executed", formData)
let responseData;
await fetch ("http://localhost:8000/login", {
    method: "POST",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json",
          },
          body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)
        if(responseData.success){
          localStorage.setItem("auth-token", responseData.token);
          window.location.replace("/")  
        }else{
            alert(responseData.errors)
        }
    }

    const registrieren = async() => {
        console.log("Signup Function Executed", formData)
        let responseData;
        await fetch ("http://localhost:8000/signup", {
            method: "POST",
                  headers:{
                      Accept:"application/json",
                      "Content-Type":"application/json",
                  },
                  body: JSON.stringify(formData),
                }).then((response)=> response.json()).then((data)=>responseData=data)
                if(responseData.success){
                  localStorage.setItem("auth-token", responseData.token);
                  window.location.replace("/")  
                }else{
                    alert(responseData.errors)
                }
    }
    
    return(
        <div className='login-container'>
            <div>
                <div className='login-titel'>
                <h2>{state}</h2>
                </div>
                <div className='login-input-form'>
                    {state==="Registrieren" ? <input className="login-input" name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Name"/> : <></>}
                    <input className="login-input" name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email"/>
                    <input className="login-input" name="password" value={formData.password} onChange={changeHandler}  type="password" placeholder="Passwort"/>
                </div>
            </div>
<button className="login-btn" onClick={()=>{state==="Anmelden" ? login() : registrieren()}}>{state}</button>
{state==="Registrieren" 
? <p className='login-text'>Haben Sie einen Account? <span className="log-btn" onClick={()=>{setState("Anmelden")}}>Anmelden</span></p>
: <p className='login-text'>Registrieren? <span className="log-btn" onClick={()=>{setState("Registrieren")}}>Hier</span></p>
}


    
        <div className='login-checkbox'>
            <input type="checkbox" name="" id=""/>
            <p className='login-text'>Ich stimme die Datenschutzbestimmungen zu</p>
            </div>
            </div>
    )
}

export default Login;