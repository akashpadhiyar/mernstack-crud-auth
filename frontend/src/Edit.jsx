import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const [name, setName] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    let {id} = useParams();
    React.useEffect(() =>{
        getData();
    },[])

    const getData = () =>{
        console.log(id);
        axios.get(`http://localhost:4000/edit/${id}`)
        .then(res => {
            console.log(res.data); 
            setName(res.data.mydata.name);
            setMobile(res.data.mydata.mobile);
            setEmail(res.data.mydata.email);
            setPassword(res.data.mydata.password);
        }).catch((error) => {
            alert("Error Ocurred :"+ error);
            console.log(error)
        })
    }

    const submitValue = (event) => {
        axios.put(`http://localhost:4000/update/${id}`,{name,mobile,email,password})
        .then(res => {
            console.log(res)
            if(res.data.flag===1){
                alert('Record Updated Successfully')
                navigate('/Display');
            }else{
                alert('Something went wrong');
            }
        })
        .catch(err => console.log(err));
        event.target.reset();
        
        event.preventDefault();
    }
    return ( <>
     <h3>Edit</h3>
            <form onSubmit={submitValue}>
                Name : <input type="text" value={name} onChange={e => setName(e.target.value)} /> <br/>
                Mobile : <input type="number" value={mobile} onChange={e => setMobile(e.target.value)} /><br/>
                Email : <input type="text"  value={email} onChange={e => setEmail(e.target.value)} /><br/>
                Password : <input type="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
                <input type="submit" />
            </form>
    </> );
}

export default Edit;