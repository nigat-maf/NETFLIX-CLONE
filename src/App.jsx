import { useState } from "react";

import "./App.css";
import Rows from "./pages/Rows";
import requests from "./requests";
import Banner from "./pages/Banner";
import Nav from "./pages/Nav";

function App() {
	return (
		<>
			<div>
				<Nav/>
				<Banner />
				<Rows
					title="NETFLIX ORIGINALS"
					fetchUrl={requests.fetchNetflixOriginal}
					isLargeRow
				/>
				<Rows title="Trending Now" fetchUrl={requests.fetchTrending} />

				<Rows title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />

				<Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
				<Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
				<Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
				<Rows
					title="Documentaries Movies"
					fetchUrl={requests.fetchDocumentaries}
				/>
			</div>
		</>
	);
}

export default App;
