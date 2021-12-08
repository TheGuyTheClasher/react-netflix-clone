import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import '../Components/Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // run only on a specific condition
    useEffect(() => {
        //  if [], run only once and then don't
        async function fetchData() {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || "")
            .then(url => {
                // https://www.youtube.com/watch?v=XtMThy8QKqU&t=2662s&ab_channel=CleverProgrammer
                const urlParams =new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));

            }).catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="row_poster">
                {movies.map(i => (
                    <img key={i.id} onClick={() => handleClick(i)} className={`row_posters ${props.isLargeRow &&  "row_postersLarge"}`} src={`${base_url}${props.isLargeRow ? i.poster_path : i.backdrop_path}`} alt={i.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
