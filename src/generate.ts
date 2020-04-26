import { getRandomBoundedPlacement } from './placement';
import { Surface } from './types';
import { Player } from './player';
import { Place } from './place';

export function generateBodies(
	surface: Surface,
	places: Place[],
	amount: number = 1
) {
	const players: Player[] = [];

	for (let i = 0; i < amount; i++) {
		const size = i * Math.random() * 5;
		const player = new Player(getRandomBoundedPlacement(surface), surface, {
			size: {
				height: size,
				width: size,
			},
		});
		players.push(player);
		const direction = randomRotation();
		const place = getRandomPlaceByCounter(places);

		if (i % 2 === 0) {
			player.orbit(place, direction, i * Math.random() * 25);
		} else {
			player.orbit(place, direction, i * Math.random() * 10);
		}
	}
	return players;
}

export function randomRotation() {
	return Math.floor(Math.random() * 2) % 2 === 0
		? 'clockwise'
		: 'counterclockwise';
}

export function getRandomPlaceByCounter(places: Place[]) {
	const num = Math.floor(Math.random() * places.length);
	return places[num];
}
