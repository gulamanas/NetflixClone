import axios from './axios';
import React, { useState, useEffect } from 'react';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request.data.results)
            setMovies(request.data.results);
        }
        fetchData();
        // if [], run once when the row loads, and don't run again
    }, [fetchUrl]);
    console.table(movies)

    return (
        <div>
            {/* Title */}
            <h2>{title}</h2>

            {/* Container -> posters */}
            <div className="row_posters">
                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>


        </div>
    )
}

export default Row;
