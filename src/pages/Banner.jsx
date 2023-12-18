import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axiosconfig";
import "../assets/Banner.css";

function Banner() {
	const [movie, setmovie] = useState([]);
	async function fetchData() {
		try {
			const response = await axios.get(requests.fetchNetflixOriginal);

			const request =
				response?.data.results[
					Math.floor(Math.random() * response.data.results.length)
				];
			setmovie(request);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, []);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	// console.log(movie);
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__discription">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner__fadeBotton" />
		</header>
	);
}

export default Banner;
