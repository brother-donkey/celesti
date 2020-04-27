import { getRandomBoundedPlacement } from './placement';
import { Surface } from './types';
import { Minor } from './player';
import { Major } from './major';

export function generateBodies(
	surface: Surface,
	majors: Major[],
	amount: number = 1
) {
	const minorBodies: Minor[] = [];

	for (let i = 0; i < amount; i++) {
		const size = i * Math.random() * 5;
		const player = new Minor(getRandomBoundedPlacement(surface), surface, {
			size: {
				height: size,
				width: size,
			},
		});
		minorBodies.push(player);
		const direction = randomRotation();
		const place = getRandomPlaceByCounter(majors);

		if (i % 2 === 0) {
			player.orbit(place, direction, i * Math.random() * 25);
		} else {
			player.orbit(place, direction, i * Math.random() * 10);
		}
	}
	return minorBodies;
}

export function randomRotation() {
	return Math.floor(Math.random() * 2) % 2 === 0
		? 'clockwise'
		: 'counterclockwise';
}

export function getRandomPlaceByCounter(places: Major[]) {
	const num = Math.floor(Math.random() * places.length);
	return places[num];
}
