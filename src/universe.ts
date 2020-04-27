import { Major } from './major';
import { init } from './init';
import { Surface, Size } from './types';
import { getBounds, getPosition, getBoundedCenter } from './placement';
import { Minor } from './player';

export function universe(gameView: HTMLElement) {
	const planetSizes = {
		mercury: { height: 8, width: 8 },
		venus: { height: 16, width: 16 },
		earth: { height: 20, width: 20 },
		mars: { height: 10, width: 10 },
		jupiter: { height: 30, width: 30 },
		saturn: { height: 60, width: 60 },
		uranus: { height: 40, width: 40 },
		neptune: { height: 40, width: 40 },
	};

	const sunSize = { height: 192, width: 192 };

	const orbits = {
		mercury: 0,
		venus: 20,
		earth: 40,
		mars: 60,
		jupiter: 100,
		saturn: 140,
		uranus: 180,
		neptune: 220,
	};

	init();

	const surface: Surface = {
		bounds: getBounds(gameView),
		origin: getPosition(gameView),
		view: gameView,
	};

	surface.view.style.backgroundColor = 'black';

	const sun = new Major(surface, getBoundedCenter(surface, sunSize), {
		size: sunSize,
		color: 'yellow',
	});

	const mercury = new Minor(sun.origin, surface, {
		size: planetSizes.mercury,
		color: 'red',
	});
	mercury.orbit(sun, 'clockwise', orbits.mercury);

	const venus = new Minor(sun.origin, surface, {
		size: planetSizes.venus,
		color: 'LemonChiffon',
	});

	venus.orbit(sun, 'clockwise', orbits.venus);

	const earth = new Minor(sun.origin, surface, {
		size: planetSizes.earth,
		color: 'SlateBlue',
	});
	earth.orbit(sun, 'clockwise', orbits.earth);

	const mars = new Minor(sun.origin, surface, {
		size: planetSizes.mars,
		color: 'Crimson',
	});
	mars.orbit(sun, 'clockwise', orbits.mars);

	const jupiter = new Minor(sun.origin, surface, {
		size: planetSizes.jupiter,
		color: 'LightSalmon',
	});
	jupiter.orbit(sun, 'clockwise', orbits.jupiter);

	const uranus = new Minor(sun.origin, surface, {
		size: planetSizes.uranus,
		color: 'LightSkyBlue',
	});
	uranus.orbit(sun, 'clockwise', orbits.uranus);

	const neptune = new Minor(sun.origin, surface, {
		size: planetSizes.neptune,
		color: 'LightSkyBlue',
	});
	neptune.orbit(sun, 'clockwise', orbits.neptune);
}
