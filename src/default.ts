import { ossilateColor, getRandomNamedColor } from './changes';
import { generateBodies, randomRotation } from './generate';
import { Major } from './major';
import {
	getBoundedCenter,
	getRandomBoundedPlacement,
	getBounds,
	getPosition,
} from './placement';
import { Minor } from './player';
import { Surface } from './types';
import { init } from './init';

export function playDefault(gameView: HTMLElement) {
	init();

	const surface: Surface = {
		bounds: getBounds(gameView),
		origin: getPosition(gameView),
		view: gameView,
	};

	surface.view.style.backgroundColor = getRandomNamedColor();

	const player1Size = Math.floor(Math.random() * 126) + 8;

	const player1 = new Minor(getRandomBoundedPlacement(surface), surface, {
		size: {
			height: player1Size,
			width: player1Size,
		},
	});

	player1.view.classList.add('player-1');
	player1.meander();

	const centeredPlace = new Major(
		surface,
		getBoundedCenter(surface, { height: 88, width: 88 }),
		{ size: { height: 96, width: 96 } }
	);

	const places = [
		new Major(surface, getRandomBoundedPlacement(surface)),
		new Major(surface, getRandomBoundedPlacement(surface)),
		new Major(surface, getRandomBoundedPlacement(surface)),
		new Major(surface, getRandomBoundedPlacement(surface)),
		new Major(surface, getRandomBoundedPlacement(surface), {
			size: { height: 192, width: 192 },
		}),
		centeredPlace,
	];

	places.forEach((place, i) => ossilateColor(place.view, (i + 1) * 2000));

	ossilateColor(player1.view, 1000);
	ossilateColor(surface.view, 16000);

	const movingBodies = generateBodies(surface, places, 48);

	fluctuationRotations();
	fluctuateOrbits();

	function fluctuationRotations() {
		let random = Math.floor(Math.random() * 3);

		setInterval(() => {
			player1.move({ x: 0, y: 0 });
			setTimeout(() => {
				if (random % 2 === 0) {
					player1.orbit(centeredPlace, randomRotation(), 44);
				} else if (random % 3 === 0) {
					player1.meander();
				} else {
					player1.orbit(
						places[Math.floor(Math.random() * 5)],
						randomRotation(),
						Math.floor(Math.random() * 88)
					);
				}
				random++;
			}, 1000);
		}, 8000);
	}

	function fluctuateOrbits() {
		setInterval(() => {
			movingBodies.forEach((player: Minor, i) => {
				const direction =
					Math.floor(Math.random() * 2) % 2 === 0
						? 'clockwise'
						: 'counterclockwise';
				// player.move(player.origin);
				player.orbit(centeredPlace, direction, i * Math.random() * 25);
			});
		}, 12000);
	}
}
