import { Surface, Placement, Rect } from "./types";
import { Player } from "./player";
import {
	getBounds,
	getPosition,
	getRandomBoundedPlacement,
	getBoundedCenter,
} from "./placement";
import { Place } from "./place";
import { generatePlayers } from "./generate";

const gameView = document.querySelector(".game-container") as HTMLElement;

const surface: Surface = {
	bounds: getBounds(gameView),
	origin: getPosition(gameView),
	view: gameView,
};

const player1 = new Player(getRandomBoundedPlacement(surface), surface, {
	size: {
		height: 24,
		width: 24,
	},
});

// player1.meander();

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
	centeredPlace,
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
];

generatePlayers(surface, places);

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
