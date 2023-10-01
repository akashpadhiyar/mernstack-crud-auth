import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Home() {
    const [name, setName] = React.useState("");
    const navigate = useNavigate();

    React.useEffect(() =>{
        checkData();
     },[])

     const checkData = () =>{
        if(localStorage.getItem('is_login'))
        {
            var a = localStorage.getItem('username');
            setName(a);
        }else{
            alert('Login is required')
            navigate('/Login');
        }
    }

    const logoutData = () =>{
        
        localStorage.clear();
            navigate('/Login');
       
    }

    return ( <>
    <h1>Hi {name}</h1> <input type='button' onClick={logoutData} value='Logout' />
    </> );
}

export default Home;