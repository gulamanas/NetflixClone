import axios from './axios';
import React, { useState, useEffect } from 'react';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request)
        }
        fetchData();
        // if [], run once when the row loads, and don't run again
    }, []);

    return (
        <div>
            {/* Title */}
            <h2>{title}</h2>

            {/* Container -> posters */}
        </div>
    )
}

export default Row;
