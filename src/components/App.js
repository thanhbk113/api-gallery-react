import React from 'react';
import { api } from '../api/api';
import {useState,useEffect } from 'react';

const App = () => {
    const [images,setImages] = useState([])
    const [error,setError] = useState('')
    useEffect(() => {
        api.get('/').then(response => setImages(response.data))
        .catch((err) => {
            setError(err.message)
        })
    },[])
    console.log(error)
    
    return (
        <div>
            <h2>Beautiful Images Gallery For You</h2>
            <hr />
            <div>
            {
                images.map((image) => {
                    return (
                    <img 
                    id={image.id}
                    alt={`Image made by ${image.author}`}
                    src={image.download_url}
                    width="200px"
                    height="200px"
                    />
                    )
                })
            }
            </div>
        </div>
    );
};

export default App;