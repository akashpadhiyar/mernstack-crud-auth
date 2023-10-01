import axios from 'axios';
import React from 'react'

import { useNavigate } from  'react-router-dom';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    const submitValue = (event) => {
        axios.post('http://127.0.0.1:4000/login',{email,password})
        .then(res=>{
            if(res.data.flag===1){
                localStorage.setItem('is_login',true);
                localStorage.setItem('userid',res.data.mydata._id);
                localStorage.setItem('username',res.data.mydata.name);
                
                    navigate('/Home');
            }else{
                alert('Login Failed');
            }
        })
        .catch(err => console.log(err));
        event.preventDefault();
    }

    return (
        <>
        <h3>Login</h3>
        <form onSubmit={submitValue}>
             Email : <input type="text" onChange={e => setEmail(e.target.value)} /><br/>
            Password : <input type="password" onChange={e => setPassword(e.target.value)}/><br/>
            <input type="submit" />
            </form>
        </>
    )
}
export default Login;