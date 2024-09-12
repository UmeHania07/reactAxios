import Axios from 'axios';
import React, { useState } from 'react'

function PostAxios() {
    const [mytitle, setTitle] = useState();
    const [mybody, setBody] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: mytitle,//ye state hy
            body: mybody//or ye property hy
        })
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter Title:</label>
                <input type='text' name='title' value={mytitle} onChange={(e) => setTitle(e.target.value)} />
                <br /><br />
                <label>Enter Body:</label>
                <input type='text' name='body' value={mybody} onChange={(e) => setBody(e.target.value)} />
                <br />

                <input type='submit' value='post' />
            </form>


        </>
    )
}

export default PostAxios
