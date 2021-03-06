import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);

    // console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.sunstr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h2 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h2>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <p className='banner_description'>
                    {truncate(movie?.overview)}
                </p>
            </div>
            <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner
