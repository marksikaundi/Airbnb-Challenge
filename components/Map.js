import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
	//Transform search results array of objects into the correct format i.e. {latitude: , longitude: }
	const [selectedLocation, setSelectedLocation] = useState({});

	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));

	//The latitude and longitude of the center of locations coordinates
	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle="mapbox://styles/mamba-dev-ke/cksvfr5nx2u0f17t2gcq0yvlp"
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
		>
			{searchResults.map((result) => (
				<div key="result.long">
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetRight={-10}
					>
						<p
							role="img"
							onClick={() => setSelectedLocation(result)}
							className="cursor-pointer text-2xl animate-bounce"
							aria-label="push-pin"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" text-red-400 h-7 w-7"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</p>
					</Marker>

					{/* The popup that display if marker is clicked*/}
					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closedOnClick={true}
							latitude={result.lat}
							longitude={result.long}
						>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</ReactMapGL>
	);
}

export default Map;
