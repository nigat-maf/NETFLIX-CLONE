import React, { useEffect, useState } from "react";
import axios from "../axiosconfig";
import "../assets/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Rows({ title, fetchUrl, isLargeRow }) {
	const [movies, setmovies] = useState([]);
	const [trailerUrl, settrailerUrl] = useState("");

	async function fetchData() {
		try {
			const { data } = await axios.get(fetchUrl);
			setmovies(data.results);
		} catch (error) {
			console.error(error);
		}
	}
	function handeleOnClick(single) {
		if (trailerUrl) {
			settrailerUrl("");
		} else {
			movieTrailer(single?.title || single?.name || single.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					const getVideoId = urlParams.get("v");
					settrailerUrl(getVideoId);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
	const opts = {
		height: "390",
		width: "100%",
		playerVars: { autoplay: 1 },
	};
	// console.log(movies);
	useEffect(() => {
		fetchData();
	}, [fetchUrl]);
	return (
		<div className="row">
			<h1 className={`row__title ${isLargeRow && "row__titleLarge"}`}>
				{title}
			</h1>
			<div className="row__posters">
				{movies.map((single, i) => {
					return (
						<img
							onClick={() => {
								handeleOnClick(single);
							}}
							key={i}
							className={`row__poster ${isLargeRow && "row__posterLarge"}`}
							src={`${baseUrl}${
								isLargeRow ? single.poster_path : single.backdrop_path
							}`}
							alt={single.name}
						/>
					);
				})}
			</div>
			<div style={{ padding: "40px" }}>
				{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	);
}

export default Rows;
