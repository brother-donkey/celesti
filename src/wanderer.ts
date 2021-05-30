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
import { CelestiCustomOptions } from './custom';

export function wanderer(
	gameView: HTMLElement,
	options: CelestiCustomOptions = {}
) {
	init();

	const surface: Surface = {
		bounds: getBounds(gameView),
		origin: getPosition(gameView),
		view: gameView,
	};

	surface.view.style.backgroundColor =
		options.staticBackground || getRandomNamedColor();

	const player1Size = Math.floor(Math.random() * 32) + 8;

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
		getBoundedCenter(surface, { height: 500, width: 500 }),
		{ size: { height: 1000, width: 1000 } }
	);

	ossilateColor(player1.view, 1000);

	if (!options.staticBackground) {
		ossilateColor(surface.view, 16000);
	}
}
