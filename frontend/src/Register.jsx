import axios from 'axios';
import React from 'react'
function Register() {
    const [name, setName] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const submitValue = (event) => {
        axios.post('http://127.0.0.1:4000/register',{name,mobile,email,password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
        event.preventDefault();
    }
    return (
        <>
            <h3>Register</h3>
            <form onSubmit={submitValue}>
                Name : <input type="text" onChange={e => setName(e.target.value)} /> <br/>
                Mobile : <input type="number" onChange={e => setMobile(e.target.value)} /><br/>
                Email : <input type="text" onChange={e => setEmail(e.target.value)} /><br/>
                Password : <input type="password" onChange={e => setPassword(e.target.value)} /><br/>
                <input type="submit" />
            </form>
        </>
    )
}
export default Register;