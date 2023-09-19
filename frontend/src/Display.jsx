import axios from 'axios';
import React from 'react'
function Display(){
    
    const [mydata,setData] = React.useState([]);

    React.useEffect(() =>{
        axios.get("http://localhost:4000/display")
        .then(res => {
            console.log(res.data); 
            setData(res.data);
        })
    },[])

    
    return (
        <>
            <h3>Display</h3>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                    </tr></thead>
                <tbody>
                    {mydata.map((values, i) =>
                        <>
                            <tr key={i} >
                                
                                <td key={values._id}>{i+1}</td>
                                <td>{values.name}</td>
                                <td>{values.mobile}</td>
                                <td>{values.email}</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </>
    );

}
export default Display;
