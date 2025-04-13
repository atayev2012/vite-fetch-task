import React, {useEffect, useState} from "react";
import "./MainBody.css"

function MainBody() {

    const GENRE_URL = "https://api.jikan.moe/v4/genres/anime"
    const ANIME_URL = "https://api.jikan.moe/v4/anime"

    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState("empty");
    const [animes, setAnimes] = useState([]);

    const fetchGenres = async() => {
        
        const response = await fetch(GENRE_URL);
        const result = await response.json();
        const data = result.data;
        

        setGenres(
            data.map((genre) => (
                <option value={genre.mal_id}>
                    {genre.name}
                </option>
            ))
        );
    };
    
    useEffect(()=> {
        fetchGenres();
    }, []);

    const handleChange = async (event) => {
        const selectedGenre = event.target.value;
        setSelected(selectedGenre);
        console.log(selected);
        const response = await fetch(`${ANIME_URL}?genres=${selectedGenre}&order_by=score&sort=desc&limit=10`);
        const result = await response.json();
        const data = result.data;

        setAnimes(
            data.map((anime) => (
                <li class="top_anime_list_item">
                <div class="top_anime_list_item_image">
                    <img src={anime.images.webp.image_url} alt={anime.title_english + " image"}/>
                </div>
                <div class="top_anime_list_item_details">
                    <div>
                        <h3>{anime.title_english != null ? anime.title_english : anime.title}</h3>
                        <p class="top_anime_list_item_details_genres">Genres:</p>
                        <ul>
                            {anime.genres.map((genre) => (
                                <li><p>{genre.name}</p></li>
                            ))}
                        </ul>
                        {anime.year != null && <p>Year: {anime.year}</p>}
                        <p class="synopsis">{anime.synopsis}</p>
                    </div>
                        <input type="button" value="Watch Trailer" onClick={event =>  window.location.href=anime.trailer.url}></input>
                    </div>
                </li>
            ))
        );
    };
    



    for(let i=0; i < genres.length; i++){
        <option value={genres[i].mal_id}>{genres[i].name}</option>
    }


    return (
        <main class="main">
            <div clas="main_top">
                <section class="search_results"></section>
            </div>
            <div class="main_bottom">
                <section class="top_anime">
                    <div class="top_anime_header">
                        <h2>The top 10 anime in </h2>
                        <select id="genre" value={selected}  onChange={handleChange} class="top_anime_selector">
                        <option disabled selected value="empty">-- Select genre --</option>
                            {genres}
                        </select>
                        <h2>genre</h2>
                    </div>
                    <div class="top_anime_items">
                        <ul class="top_anime_list">
                            {animes}
                        </ul>
                    </div>
                </section>
            </div>
            
            
        </main>
    );
}

export default MainBody