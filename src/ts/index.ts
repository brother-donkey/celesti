import { Surface, Placement, Rect } from "./types";
import { Player, player1 } from "./player";
import {
	getBounds,
	getPosition,
	getRandomBoundedPlacement,
	getBoundedCenter,
} from "./placement";
import { Place } from "./place";
import { generatePlayers } from "./generate";
import { ossilateColor } from "./changes";
import { surface } from "./surface";

// create player 1
new Player(getRandomBoundedPlacement(surface), surface, {
	size: {
		height: 24,
		width: 24,
	},
});

player1.view.classList.add("player-1");

player1.meander();

// const player2 = new Player(getRandomBoundedPlacement(surface), surface, {
// 	size: {
// 		height: 12,
// 		width: 12,
// 	},
// });
// const player3 = new Player(getRandomBoundedPlacement(surface), surface, {
// 	size: { height: 16, width: 16 },
// });
// const player4 = new Player(getRandomBoundedPlacement(surface), surface, {
// 	size: { height: 36, width: 36 },
// });

// setTimeout(() => {
// 	player.stop(, 2, { height: 24, width: 24});
// }, 8000);

// setTimeout(() => {
// 	player.meander();
// }, 3000);

// const places = [];

// for (let i = 0; i < 16; i++) {
// 	places.push(new Place(surface, getRandomBoundedPlacement(surface), 88, 88));
// }

const centeredPlace = new Place(
	surface,
	getBoundedCenter(surface, { height: 88, width: 88 }),
	{ size: { height: 96, width: 96 } }
);

const places = [
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface), {
		size: { height: 192, width: 192 },
	}),
	centeredPlace,
];

places.forEach((place, i) => ossilateColor(place.view, (i + 1) * 1000));
ossilateColor(player1.view, 8000);
// player1.meander();

const staticPlayers = generatePlayers(surface, places);

// changeRotation();

// function changeRotation() {
// 	let evenOdd = 0;
// 	setInterval(() => {
// 		if (evenOdd % 2 === 0) {
// 			player1.orbit(centeredPlace, "clockwise", 44);
// 		} else {
// 			player1.orbit(randomPlace, "clockwise", 44);
// 		}
// 		evenOdd++;
// 	}, 4000);
// }

// player1.stop();

setTimeout(() => {
	staticPlayers.forEach((player: Player, i) => {
		const direction =
			Math.floor(Math.random() * 2) % 2 === 0
				? "clockwise"
				: "counterclockwise";
		// player.move(player.origin);
		player.orbit(centeredPlace, direction, i * Math.random() * 25);
	});
}, 8000);
