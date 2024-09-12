import Axios from 'axios'
import React, { useEffect, useState } from 'react'


//ye mujy id 1 return kre gi q k maine isko 1 parameter pass kiya h
const baseURL = "https://jsonplaceholder.typicode.com/posts"

function GetAxios() {
    const [mydata , setData] = useState([]);
    useEffect(()=>{
        //sara data baseurl ka hum is callback function mai response mai save kregy
        Axios.get(baseURL).then((response) => {
        setData(response.data)//Setdata ne sara data mydata k ander store kra hay..empty [] se data ek dafa run hoga
        },[])
    })
  return (
    <>
   {
    mydata.map((item)=>{
     const {id , title , body} = item;
     return(
        <div key={id} style={{backgroundColor:"pink" , borderRadius:"10px", width:"500px"}}>
        <h1>{id}</h1>
        <h2>{title.slice(0,10)}</h2>
        <h3>{body.slice(0,50).toUpperCase()}</h3>
        </div>
     )
    })
   }





    {/* <h1>{mydata.id}</h1>
    <h2>{mydata.title}</h2>
    <h3>{mydata.userId}</h3>
    <h4>{mydata.body}</h4> */}


    </>
  )
}

export default GetAxios
