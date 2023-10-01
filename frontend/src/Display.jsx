import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
function Display(){
    const [mydata,setData] = React.useState([]);
    React.useEffect(() =>{
       getData();
    },[])

    const getData = () =>{
        axios.get("http://localhost:4000/display")
        .then(res => {
            console.log(res.data); 
            setData(res.data.mydata);
        }).catch((error) => {
            alert("Error Ocurred :"+ error);
            console.log(error)
        })
    }
    const deleteData = (id) => {
        axios.delete('http://localhost:4000/delete/'+id)
            .then((res) => {
                console.log('successfully deleted!')
                alert(res.data.msg);
                getData();
            }).catch((error) => {
                alert("Error Ocurred :"+ error);
                console.log(error)
            })
    }
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata &&
                    mydata.length?(mydata.map((values, i) =>
                        <>
                            <tr key={i+1}>
                                <td key={values._id}>{i+1}</td>
                                <td>{values.name}</td>
                                <td>{values.mobile}</td>
                                <td>{values.email}</td>
                                <td><Link to={'/Edit/'+values._id}>Edit</Link> | 
                                <input type='button' onClick={()=>deleteData(values._id)} value='X'/></td>
                            </tr>
                        </>
                    )):"No Record Found"}
                </tbody>
            </table>
        </>
    );

}
export default Display;
