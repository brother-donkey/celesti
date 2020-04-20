import { getRandomBoundedPlacement } from "./placement";
import { Surface } from "./types";
import { Player } from "./player";
import { Place } from "./place";

export function generatePlayers(surface: Surface, places: Place[]) {
	const players = [];
	let counter = 0;
	let counter2 = 0;

	for (let i = 0; i < 48; i++) {
		const size = i * Math.random() * 5;
		const player = new Player(getRandomBoundedPlacement(surface), surface, {
			size: {
				height: size,
				width: size,
			},
		});
		players.push(player);
		const direction = counter % 2 === 0 ? "clockwise" : "counterclockwise";
		const place = getRandomPlaceByCounter(counter2, places);

		if (i % 2 === 0) {
			player.orbit(place, direction, i * Math.random() * 25);
		} else {
			player.orbit(place, direction, i * Math.random() * 10);
		}

		counter++;
		counter2 = counter2 + 3;
	}
	return players;
}

export function getRandomPlaceByCounter(counter2: number, places: Place[]) {
	// must have at least 5 places
	const index = counter2 % 5;
	return places[index];
}
